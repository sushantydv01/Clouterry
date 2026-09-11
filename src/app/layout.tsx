import type { Metadata, Viewport } from "next";
import { Syne, Manrope, Instrument_Serif } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
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

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#C92C48",
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
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${manrope.variable} ${instrumentSerif.variable} h-full antialiased bg-red text-cream`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-red text-cream font-body selection:bg-yellow selection:text-ink relative overflow-x-hidden"
      >
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
