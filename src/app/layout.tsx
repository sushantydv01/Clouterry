import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Starfield from "@/components/Starfield";
import GrainOverlay from "@/components/GrainOverlay";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
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
    title: "Clouterry - Real creators. Real voice. Built into cohorts brands can trust.",
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
      className={`${sora.variable} ${inter.variable} h-full antialiased bg-void text-silver`}
    >
      <body className="min-h-full flex flex-col bg-void text-silver font-body selection:bg-vermillion selection:text-star-white relative overflow-x-hidden">
        <Starfield />
        <div className="ambient-mesh" aria-hidden="true" />
        <GrainOverlay />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
