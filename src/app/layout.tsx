import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Starfield from "@/components/Starfield";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
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
      className={`${plusJakarta.variable} ${manrope.variable} h-full antialiased bg-void text-silver`}
    >
      <body className="min-h-full flex flex-col bg-void text-silver font-body selection:bg-star-white selection:text-void relative overflow-x-hidden">
        <Starfield />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
