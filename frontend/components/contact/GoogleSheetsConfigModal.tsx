"use client";

import React, { useState } from "react";
import {
  X,
  FileSpreadsheet,
  Check,
  Copy,
  Info,
  ArrowDown,
  RotateCcw,
} from "lucide-react";
import { COLOUR_PALETTE } from "@/constants/colour";
import { googleSheetsService } from "@/services/googleSheetsService";

interface GoogleSheetsConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfigChanged?: () => void;
}

export function GoogleSheetsConfigModal({
  isOpen,
  onClose,
  onConfigChanged,
}: GoogleSheetsConfigModalProps) {
  const [url, setUrl] = useState(() => googleSheetsService.getWebhookUrl());
  const [isCopied, setIsCopied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setUrl(googleSheetsService.getWebhookUrl());
      setIsSaved(false);
    }
  }

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    googleSheetsService.setWebhookUrl(url);
    setIsSaved(true);
    onConfigChanged?.();
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  const handleClear = () => {
    googleSheetsService.clearWebhookUrl();
    setUrl("");
    setIsSaved(false);
    onConfigChanged?.();
  };

  const copyScriptInstructions = () => {
    const scriptHint = `// Reflex Industrial Solutions - Google Apps Script
// Full code is located in: frontend/scripts/google-apps-script.js
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  var newRow = [data.submittedAt, data.ticketId, data.fullName, data.email, data.phone, data.company, data.industry, data.inquiryType, data.message, data.attachmentName || "None"];
  sheet.insertRowBefore(2); // Inset at Row 2 (Top of sheet)
  sheet.getRange(2, 1, 1, newRow.length).setValues([newRow]);
  return ContentService.createTextOutput(JSON.stringify({ result: "success", row: 2 })).setMimeType(ContentService.MimeType.JSON);
}`;
    navigator.clipboard.writeText(scriptHint);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-2xl transition-all">
        {/* Header Bar */}
        <div
          className="flex items-center justify-between border-b border-stone-200/80 px-6 py-4"
          style={{ backgroundColor: COLOUR_PALETTE.cream }}
        >
          <div className="flex items-center gap-2.5">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-sm"
              style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
            >
              <FileSpreadsheet className="h-5 w-5" />
            </div>
            <div>
              <h3
                className="text-base font-bold text-stone-900"
                style={{ color: COLOUR_PALETTE.primaryDark }}
              >
                Google Spreadsheet Direct Sync
              </h3>
              <p className="text-[11px] text-stone-600">
                Pure Frontend Integration • No Backend Required
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 text-stone-400 hover:bg-stone-200 hover:text-stone-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[75vh] space-y-5 overflow-y-auto p-6 text-xs sm:text-sm">
          {/* Top of Sheet Notice */}
          <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 text-emerald-950">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
              <ArrowDown className="h-4 w-4" />
            </div>
            <div className="space-y-1">
              <span className="font-bold">Reverse Chronological Placement</span>
              <p className="text-xs text-emerald-800">
                Every incoming submission executes{" "}
                <code className="rounded bg-emerald-200/60 px-1 py-0.5 font-mono text-[11px]">
                  sheet.insertRowBefore(2)
                </code>
                . New inquiries appear directly at{" "}
                <strong>Row 2 (top of sheet)</strong>, automatically pushing
                older inquiries downward.
              </p>
            </div>
          </div>

          {/* Configuration Form */}
          <form onSubmit={handleSave} className="space-y-3">
            <label className="block font-bold text-stone-800">
              Google Apps Script Web App URL
            </label>
            <div className="space-y-1.5">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://script.google.com/macros/s/.../exec"
                className="w-full rounded-xl border border-stone-300 bg-stone-50 px-3.5 py-2.5 font-mono text-xs text-stone-900 placeholder-stone-400 transition outline-none focus:border-stone-500 focus:bg-white focus:ring-2 focus:ring-stone-200"
              />
              <p className="text-[11px] text-stone-500">
                You can also configure this in{" "}
                <code className="rounded bg-stone-100 px-1 py-0.5 font-mono text-[11px]">
                  .env.local
                </code>{" "}
                as{" "}
                <code className="rounded bg-stone-100 px-1 py-0.5 font-mono text-[11px]">
                  NEXT_PUBLIC_GOOGLE_SHEETS_SCRIPT_URL
                </code>
                .
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
              <button
                type="button"
                onClick={handleClear}
                className="inline-flex items-center gap-1.5 rounded-xl border border-stone-200 px-3 py-2 text-xs font-semibold text-stone-600 transition hover:bg-stone-100"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset to Default</span>
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded-xl px-5 py-2.5 text-xs font-bold text-white shadow-md transition hover:brightness-105 active:scale-[0.98]"
                style={{ backgroundColor: COLOUR_PALETTE.primaryDark }}
              >
                {isSaved ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span>Connected & Saved!</span>
                  </>
                ) : (
                  <span>Save & Connect Webhook</span>
                )}
              </button>
            </div>
          </form>

          {/* Quick Setup Instructions */}
          <div className="space-y-3 rounded-2xl border border-stone-200 bg-stone-50 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 font-bold text-stone-800">
                <Info className="h-4 w-4 text-stone-500" />
                <span>Quick 3-Step Setup Instructions</span>
              </div>

              <button
                type="button"
                onClick={copyScriptInstructions}
                className="inline-flex items-center gap-1 rounded-lg border border-stone-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-stone-700 shadow-2xs hover:bg-stone-50"
              >
                {isCopied ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3 text-stone-500" />
                    <span>Copy Handler Snippet</span>
                  </>
                )}
              </button>
            </div>

            <ol className="list-decimal space-y-1.5 pl-4 text-xs text-stone-600">
              <li>
                Open your Google Spreadsheet and click{" "}
                <strong>Extensions &rarr; Apps Script</strong>.
              </li>
              <li>
                Replace all code with the handler from{" "}
                <code className="rounded bg-stone-200/70 px-1 py-0.5 font-mono text-[11px]">
                  frontend/scripts/google-apps-script.js
                </code>
                .
              </li>
              <li>
                Click <strong>Deploy &rarr; New deployment</strong>, select type{" "}
                <strong>Web app</strong>, configure{" "}
                <strong>Who has access: Anyone</strong>, click Deploy, and paste
                the Web app URL above!
              </li>
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-stone-200 bg-stone-50 px-6 py-3.5 text-right">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-stone-300 bg-white px-4 py-2 text-xs font-bold text-stone-700 shadow-2xs transition hover:bg-stone-100"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
