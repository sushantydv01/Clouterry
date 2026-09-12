import type { Metadata, Viewport } from "next";
import { Syne, Manrope } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F5F1E6",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Clouterry - Creator cohorts connected with authentic brands",
  description:
    "Clouterry sources small creators into curated cohorts and connects them with brands who want authentic content that actually lands.",
  keywords: [
    "creator cohorts",
    "creator agency",
    "micro-creators",
    "brand sponsorships",
    "authentic content",
    "reels",
    "TikTok creators",
  ],
  openGraph: {
    title: "Clouterry - Real creators. Real voice. Cohorts brands can trust.",
    description:
      "Pre-launch creator agency sourcing small creators into curated cohorts and connecting them with forward-thinking brands.",
    url: "https://clouterry.com",
    siteName: "Clouterry",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clouterry - The Creator Cohort Agency",
    description:
      "Curated cohorts for small creators. Authentic content for brands.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://clouterry.com/#organization",
        name: "Clouterry",
        url: "https://clouterry.com",
        logo: "https://clouterry.com/icon.svg",
        description:
          "Cohort-based talent infrastructure connecting high-retention micro-creators with authentic brands on a guaranteed 14-day turnaround.",
        sameAs: ["https://instagram.com/clouterry"],
        contactPoint: {
          "@type": "ContactPoint",
          email: "team@clouterry.com",
          contactType: "customer service",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://clouterry.com/#website",
        url: "https://clouterry.com",
        name: "Clouterry",
        publisher: {
          "@id": "https://clouterry.com/#organization",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${manrope.variable} h-full antialiased bg-cream text-ink`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-cream text-ink font-body selection:bg-gold selection:text-ink relative overflow-x-hidden"
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
