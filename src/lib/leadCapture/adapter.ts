import { SanitizedInquiry, LeadCaptureResponse } from "./types";
import { generateInquiryEmailHtml, generateInquiryEmailText } from "./emailTemplate";

/**
 * Lead Capture Adapter
 *
 * Implements an honest, extensible notification dispatch workflow:
 * - If no live email provider credentials exist (RESEND_API_KEY is unset),
 *   it explicitly reports UNCONFIGURED status rather than fabricating success.
 * - When credentials are provided via server environment variables,
 *   it dispatches the briefing via Resend API and returns verified status.
 */
export async function dispatchInquiry(
  inquiry: SanitizedInquiry
): Promise<LeadCaptureResponse> {
  const apiKey = process.env.RESEND_API_KEY?.trim();

  // If no email delivery provider is configured, return honest UNCONFIGURED status.
  if (!apiKey) {
    return {
      success: false,
      status: "UNCONFIGURED",
      message:
        "The online project briefing service is currently undergoing infrastructure configuration. Direct online transmission is not yet active. Please connect directly or check back shortly once commercial credentials are configured.",
    };
  }

  const recipientEmail =
    process.env.NOTIFICATION_RECIPIENT_EMAIL?.trim() || "inquiries@configured-domain.internal";
  const fromEmail =
    process.env.NOTIFICATION_FROM_EMAIL?.trim() || "Briefing Portal <onboarding@resend.dev>";

  try {
    const subjectPrefix = inquiry.organization ? `[Briefing: ${inquiry.organization}]` : "[Project Briefing]";
    const subject = `${subjectPrefix} ${inquiry.name} (${inquiry.division})`;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [recipientEmail],
        reply_to: inquiry.email,
        subject,
        html: generateInquiryEmailHtml(inquiry),
        text: generateInquiryEmailText(inquiry),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Unknown error");
      console.error("[LEAD_DISPATCH_PROVIDER_ERROR]", {
        status: response.status,
        message: errorText.slice(0, 150),
      });

      return {
        success: false,
        status: "PROVIDER_ERROR",
        message:
          "The notification service was unable to process the briefing delivery at this time. Please try again shortly.",
      };
    }

    const data = await response.json().catch(() => ({}));
    return {
      success: true,
      status: "DELIVERED",
      referenceId: data.id || "RESEND_DISPATCHED",
      message:
        "Your project briefing has been successfully transmitted and logged. A senior partner will review your requirements and follow up within 24 business hours.",
    };
  } catch (err) {
    console.error("[LEAD_DISPATCH_NETWORK_ERROR]", err instanceof Error ? err.message : "Network failure");
    return {
      success: false,
      status: "PROVIDER_ERROR",
      message:
        "A network connectivity issue prevented briefing transmission. Please try again or reach out directly.",
    };
  }
}
