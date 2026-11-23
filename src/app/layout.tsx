import type { Metadata, Viewport } from "next";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

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
  themeColor: "#F7F4EE",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "FIRM — Digital Presence & Growth Firm",
  description:
    "We engineer enduring digital presence for ambitious organizations. Unifying brand identity, bespoke web platforms, editorial content, and systematic visibility.",
  keywords: [
    "digital presence firm",
    "web development consultancy",
    "brand identity",
    "school digital strategy",
    "growth marketing",
    "next.js engineering",
    "digital presence architecture",
  ],
  authors: [{ name: "FIRM Studio" }],
  creator: "FIRM",
  publisher: "FIRM",
  metadataBase: new URL("https://firm.agency"),
  openGraph: {
    title: "FIRM — Digital Presence & Growth Firm",
    description:
      "We engineer enduring digital presence for ambitious organizations. Brand, web, content, and visibility under one disciplined standard.",
    url: "https://firm.agency",
    siteName: "FIRM",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FIRM — Digital Presence & Growth Firm",
    description:
      "Digital presence and growth consultancy for brands, schools, and organizations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FIRM",
    url: "https://firm.agency",
    logo: "https://firm.agency/images/brand/brand-identity-specimen.webp",
    description:
      "Digital Presence & Growth Firm unifying brand identity, bespoke web platforms, editorial content, and systematic visibility.",
    email: "inquiries@firm.agency",
    sameAs: ["https://github.com/sushantydv01/Clouterry"],
  };

  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg-page)] text-[var(--text-primary)] font-body antialiased selection:bg-[var(--accent)] selection:text-white">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
