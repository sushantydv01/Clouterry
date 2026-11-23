import type { Metadata, Viewport } from "next";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f7f4ee",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Clouterry — Curated Creator Cohorts for Forward-Thinking Brands",
  description:
    "Clouterry organizes vetted micro-creators into themed cohorts of six to eight. Brands get synchronized drops, authentic content, and a single invoice.",
  keywords: [
    "creator cohorts",
    "creator collective",
    "micro-creators",
    "authentic content",
    "brand partnerships",
    "lifestyle creators",
  ],
  openGraph: {
    title: "Clouterry — Curated Creator Cohorts",
    description:
      "Vetted micro-creators organized into themed cohorts. Synchronized drops, transparent terms, and single-contract management for brands.",
    url: "https://clouterry.com",
    siteName: "Clouterry",
    locale: "en_US",
    type: "website",
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
      className={`${newsreader.variable} ${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg-page)] text-[var(--text-primary)] font-body antialiased selection:bg-[var(--accent)] selection:text-white">
        {children}
      </body>
    </html>
  );
}
