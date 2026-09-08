import type { Metadata, Viewport } from "next";
import { Fredoka, Manrope } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#C41E3A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Clouterry — Creator cohorts connected with authentic brands",
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
    title: "Clouterry — Real creators. Real content. Built into cohorts brands can trust.",
    description:
      "Pre-launch creator agency sourcing small creators into curated cohorts and connecting them with forward-thinking brands.",
    url: "https://clouterry.com",
    siteName: "Clouterry",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clouterry — The Creator Cohort Agency",
    description:
      "Curated cohorts for small creators. Authentic content for brands.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-body">
        {children}
      </body>
    </html>
  );
}
