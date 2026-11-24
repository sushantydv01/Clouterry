export interface RawInquiryPayload {
  name?: unknown;
  email?: unknown;
  organization?: unknown;
  division?: unknown;
  message?: unknown;
}

export interface SanitizedInquiry {
  name: string;
  email: string;
  organization: string;
  division: string;
  message: string;
  submittedAt: string;
  clientIp?: string;
}

export type LeadCaptureStatus =
  | "DELIVERED"
  | "UNCONFIGURED"
  | "VALIDATION_ERROR"
  | "RATE_LIMITED"
  | "PAYLOAD_TOO_LARGE"
  | "PROVIDER_ERROR";

export interface LeadCaptureResponse {
  success: boolean;
  status: LeadCaptureStatus;
  message: string;
  referenceId?: string;
  fieldErrors?: Record<string, string>;
}
