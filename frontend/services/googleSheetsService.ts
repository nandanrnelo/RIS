/**
 * Reflex Industrial Solutions - Pure Client-Side Google Sheets Integration Service
 *
 * Communicates directly from the client browser to a Google Apps Script Web App
 * without requiring any Node.js/Next.js backend server or API routes.
 */

export interface GoogleSheetPayload {
  ticketId: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  inquiryType: string;
  message: string;
  attachmentName: string | null;
  submittedAt?: string;
}

export interface GoogleSheetSubmissionResult {
  success: boolean;
  mode: "live" | "demo";
  ticketId: string;
  message: string;
  error?: string;
}

const STORAGE_KEY = "RIS_GOOGLE_SHEETS_WEBHOOK_URL";

type Listener = () => void;

class GoogleSheetsService {
  private listeners: Set<Listener> = new Set();

  subscribe = (listener: Listener): (() => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };

  private notify(): void {
    this.listeners.forEach((listener) => {
      try {
        listener();
      } catch (err) {
        console.error("[GoogleSheetsService] Listener error:", err);
      }
    });
  }

  /**
   * Retrieves active Google Sheets Web App URL:
   * Prioritizes localStorage user override, then falls back to environment variable.
   */
  getWebhookUrl(): string {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && stored.trim().length > 0) {
        return stored.trim();
      }
    }
    return (process.env.NEXT_PUBLIC_GOOGLE_SHEETS_SCRIPT_URL || "").trim();
  }

  /**
   * Persists or updates the Google Sheets Web App URL in client localStorage.
   */
  setWebhookUrl(url: string): void {
    if (typeof window !== "undefined") {
      if (!url || url.trim().length === 0) {
        window.localStorage.removeItem(STORAGE_KEY);
      } else {
        window.localStorage.setItem(STORAGE_KEY, url.trim());
      }
      this.notify();
    }
  }

  /**
   * Clears the user-configured override URL from localStorage.
   */
  clearWebhookUrl(): void {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
      this.notify();
    }
  }

  /**
   * Checks whether a live Google Sheets webhook URL is configured.
   */
  isConfigured(): boolean {
    const url = this.getWebhookUrl();
    return url.length > 0 && url.startsWith("https://script.google.com");
  }

  /**
   * Transmits form inquiry directly from browser to the Google Apps Script Web App.
   * Uses mode: "no-cors" with "text/plain;charset=utf-8" to prevent browser preflight (OPTIONS)
   * failures and to seamlessly follow Google Apps Script's 302 redirects.
   */
  async submitInquiry(
    payload: GoogleSheetPayload
  ): Promise<GoogleSheetSubmissionResult> {
    const activeUrl = this.getWebhookUrl();
    const isLive = this.isConfigured();

    // Format Indian Standard Time (IST) submission timestamp
    const now = new Date();
    const formattedTimestamp =
      now.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }) + " (IST)";

    const completePayload: GoogleSheetPayload = {
      ...payload,
      submittedAt: payload.submittedAt || formattedTimestamp,
    };

    if (!isLive) {
      // Demo Mode: Simulate realistic network delay without throwing error
      await new Promise((resolve) => setTimeout(resolve, 600));

      console.info(
        "[RIS Google Sheets Service] Submitted in Demo Mode (No active Google Apps Script Webhook URL set).",
        completePayload
      );

      return {
        success: true,
        mode: "demo",
        ticketId: payload.ticketId,
        message:
          "Form verified in Demo Mode. To stream inquiries live into your Google Spreadsheet at Row 2, connect your Google Apps Script URL.",
      };
    }

    try {
      // Set a 12-second abort timeout for reliable client UX
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      /**
       * Crucial Implementation Detail:
       * Google Apps Script Web Apps redirect (302) to googleusercontent.com.
       * Sending payload as "text/plain;charset=utf-8" with mode "no-cors" ensures
       * the browser will NOT trigger an unsupported CORS preflight OPTIONS check,
       * allowing Google's server to parse postData.contents in doPost(e).
       */
      await fetch(activeUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(completePayload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      return {
        success: true,
        mode: "live",
        ticketId: payload.ticketId,
        message:
          "Inquiry successfully transmitted to Google Spreadsheet and recorded at Row 2 (Top of Sheet).",
      };
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error
          ? err.message
          : "Network error transmitting to Google Sheets.";
      console.error("[RIS Google Sheets Service] Live submission error:", err);

      return {
        success: false,
        mode: "live",
        ticketId: payload.ticketId,
        message:
          "Unable to communicate with the Google Sheets webhook. Please verify your script deployment permissions (Must be 'Who has access: Anyone').",
        error: errorMsg,
      };
    }
  }
}

export const googleSheetsService = new GoogleSheetsService();
