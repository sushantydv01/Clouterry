import { SanitizedInquiry } from "./types";

/**
 * Generates an accessible, clean, responsive HTML email notification
 * for prospective client briefings once commercial sending credentials exist.
 */
export function generateInquiryEmailHtml(inquiry: SanitizedInquiry): string {
  const sanitizeHtml = (str: string) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const safeName = sanitizeHtml(inquiry.name);
  const safeEmail = sanitizeHtml(inquiry.email);
  const safeOrg = sanitizeHtml(inquiry.organization || "Not Specified");
  const safeDivision = sanitizeHtml(inquiry.division || "General Inquiries");
  const safeMessage = sanitizeHtml(inquiry.message || "No specific briefing notes entered.");
  const safeDate = sanitizeHtml(inquiry.submittedAt);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Client Project Briefing</title>
</head>
<body style="margin:0;padding:24px;background-color:#F8F6EF;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#171717;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#FFFFFF;border:2px solid #171717;box-shadow:6px 6px 0 0 #171717;">
    <tr>
      <td style="padding:24px;background:#ED83A8;border-bottom:2px solid #171717;">
        <span style="font-family:monospace;font-size:11px;font-weight:bold;letter-spacing:0.1em;text-transform:uppercase;color:#171717;background:#FFFFFF;padding:3px 8px;border:1px solid #171717;">
          CLIENT BRIEFING INTAKE
        </span>
        <h1 style="margin:12px 0 0 0;font-size:22px;font-weight:800;color:#171717;line-height:1.2;">
          New Project Inquiry Received
        </h1>
      </td>
    </tr>
    <tr>
      <td style="padding:24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;line-height:1.6;">
          <tr>
            <td style="padding:8px 0;width:140px;font-weight:bold;color:#171717;border-bottom:1px solid #E5E5E5;">Contact Name:</td>
            <td style="padding:8px 0;color:#171717;border-bottom:1px solid #E5E5E5;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-weight:bold;color:#171717;border-bottom:1px solid #E5E5E5;">Email Address:</td>
            <td style="padding:8px 0;color:#171717;border-bottom:1px solid #E5E5E5;">
              <a href="mailto:${safeEmail}" style="color:#171717;font-weight:600;text-decoration:underline;">${safeEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-weight:bold;color:#171717;border-bottom:1px solid #E5E5E5;">Organization:</td>
            <td style="padding:8px 0;color:#171717;border-bottom:1px solid #E5E5E5;">${safeOrg}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-weight:bold;color:#171717;border-bottom:1px solid #E5E5E5;">Target Division:</td>
            <td style="padding:8px 0;color:#171717;border-bottom:1px solid #E5E5E5;">${safeDivision}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-weight:bold;color:#171717;border-bottom:1px solid #E5E5E5;">Timestamp:</td>
            <td style="padding:8px 0;font-family:monospace;font-size:12px;color:#666666;border-bottom:1px solid #E5E5E5;">${safeDate}</td>
          </tr>
        </table>

        <div style="margin-top:20px;padding:16px;background:#F8F6EF;border:1px solid #171717;">
          <span style="display:block;font-family:monospace;font-size:10px;font-weight:bold;text-transform:uppercase;color:#171717;margin-bottom:8px;">
            Briefing Notes:
          </span>
          <p style="margin:0;font-size:14px;line-height:1.6;color:#171717;white-space:pre-wrap;">${safeMessage}</p>
        </div>

        <div style="margin-top:24px;padding-top:16px;border-top:1px solid #E5E5E5;font-size:11px;color:#737373;line-height:1.4;">
          This dispatch was originated through the digital presence intake gateway.
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Plain-text fallback email representation.
 */
export function generateInquiryEmailText(inquiry: SanitizedInquiry): string {
  return [
    `=== NEW CLIENT PROJECT BRIEFING ===`,
    ``,
    `Name:         ${inquiry.name}`,
    `Email:        ${inquiry.email}`,
    `Organization: ${inquiry.organization || "Not Specified"}`,
    `Division:     ${inquiry.division || "General Inquiries"}`,
    `Submitted At: ${inquiry.submittedAt}`,
    ``,
    `--- Briefing Notes ---`,
    inquiry.message || "No specific briefing notes entered.",
    ``,
    `====================================`,
  ].join("\n");
}
