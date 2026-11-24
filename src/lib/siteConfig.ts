/**
 * Working Site & Brand Configuration
 *
 * Notice:
 * The brand name (FIRM), commercial identity, contact email, and production domain
 * are provisional working titles utilized during development and prototyping.
 *
 * To avoid hardcoding provisional identity decisions across the codebase,
 * all canonical URLs, working names, and metadata base definitions are centralized
 * here and can be adapted via environment variables at any time.
 */

export function getSiteUrl(): string {
  // 1. Explicitly configured public site URL (e.g. for preview or production)
  if (process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.trim() !== "") {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  // 2. Netlify primary deployment URL (injected automatically in Netlify build environments)
  if (process.env.URL && process.env.URL.trim() !== "") {
    return process.env.URL.replace(/\/$/, "");
  }

  // 3. Netlify deploy preview URL (optional fallback for preview contexts)
  if (process.env.DEPLOY_PRIME_URL && process.env.DEPLOY_PRIME_URL.trim() !== "") {
    return process.env.DEPLOY_PRIME_URL.replace(/\/$/, "");
  }

  // 4. Default fallback for local development and build verification
  return "http://localhost:3000";
}

export const siteConfig = {
  // Working project name (provisional, not a finalized legal entity)
  workingName: "FIRM",
  workingTagline: "Digital Presence & Growth Firm",
  workingDescription:
    "We engineer enduring digital presence for ambitious organizations. Unifying brand identity, bespoke web platforms, editorial content, and systematic visibility.",

  // SEO keywords
  keywords: [
    "digital presence firm",
    "web development consultancy",
    "brand identity",
    "school digital strategy",
    "growth marketing",
    "next.js engineering",
    "digital presence architecture",
  ],

  // Working repository URL
  repositoryUrl: "https://github.com/sushantydv01/Clouterry",

  // Notice for provisional contact address
  provisionalNotice:
    "Note: Commercial contact endpoints and official email delivery remain pending business configuration. No live mailbox is active at this stage.",
};
