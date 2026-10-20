export interface FormState {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  inquiryType: string;
  message: string;
  file: File | null;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  industry?: string;
  inquiryType?: string;
  message?: string;
  file?: string;
  general?: string;
}

export interface SubmissionSuccessData {
  ticketId: string;
  fullName: string;
  email: string;
  company: string;
  industry: string;
  inquiryType: string;
  hasAttachment: boolean;
  attachmentName: string | null;
  submittedAt: string;
}
