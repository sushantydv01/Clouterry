import { NextResponse } from "next/server";
import { RawInquiryPayload, SanitizedInquiry } from "@/lib/leadCapture/types";
import { checkRateLimit } from "@/lib/leadCapture/rateLimiter";
import { dispatchInquiry } from "@/lib/leadCapture/adapter";

const MAX_PAYLOAD_BYTES = 16 * 1024; // 16 KB
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

function sanitizeString(val: unknown, maxLength: number): string {
  if (typeof val !== "string") return "";
  // Strip control characters while preserving standard whitespace and newlines
  const cleaned = val.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "").trim();
  return cleaned.slice(0, maxLength);
}

export async function POST(request: Request) {
  // 1. Enforce payload size limit
  const contentLength = request.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_BYTES) {
    return NextResponse.json(
      {
        success: false,
        status: "PAYLOAD_TOO_LARGE",
        message: "Briefing payload exceeds maximum allowed size (16KB).",
      },
      { status: 413 }
    );
  }

  // 2. Client IP resolution and rate limit check
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

  const rateLimit = checkRateLimit(clientIp);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        success: false,
        status: "RATE_LIMITED",
        message: `Too many submissions. Please wait ${rateLimit.retryAfterSeconds} seconds before submitting again.`,
      },
      {
        status: 429,
        headers: {
          "Retry-After": rateLimit.retryAfterSeconds.toString(),
        },
      }
    );
  }

  // 3. Parse JSON body
  let body: RawInquiryPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        success: false,
        status: "VALIDATION_ERROR",
        message: "Invalid JSON request body format.",
      },
      { status: 400 }
    );
  }

  // 4. Validate and sanitize fields
  const fieldErrors: Record<string, string> = {};

  const name = sanitizeString(body.name, 100);
  if (!name) {
    fieldErrors.name = "Please provide your full name.";
  }

  const rawEmail = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const email = sanitizeString(rawEmail, 100);
  if (!email) {
    fieldErrors.email = "Please provide your official email address.";
  } else if (!EMAIL_REGEX.test(email)) {
    fieldErrors.email = "Please provide a valid, well-formed email address.";
  }

  const organization = sanitizeString(body.organization, 120);
  const division = sanitizeString(body.division, 100) || "General Inquiries";
  const message = sanitizeString(body.message, 2000);

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      {
        success: false,
        status: "VALIDATION_ERROR",
        message: "Validation failed. Please correct the highlighted fields.",
        fieldErrors,
      },
      { status: 400 }
    );
  }

  const sanitizedInquiry: SanitizedInquiry = {
    name,
    email,
    organization,
    division,
    message,
    submittedAt: new Date().toISOString(),
    clientIp,
  };

  // 5. Dispatch via lead capture adapter
  const result = await dispatchInquiry(sanitizedInquiry);

  if (result.status === "UNCONFIGURED") {
    return NextResponse.json(result, { status: 503 });
  }

  if (result.status === "DELIVERED") {
    return NextResponse.json(result, { status: 200 });
  }

  return NextResponse.json(result, { status: 502 });
}
