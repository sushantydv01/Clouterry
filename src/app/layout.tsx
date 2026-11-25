import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { getSiteUrl, siteConfig } from "@/lib/siteConfig";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: `${siteConfig.workingName} — ${siteConfig.workingTagline}`,
  description: siteConfig.workingDescription,
  keywords: siteConfig.keywords,
  authors: [{ name: `${siteConfig.workingName} Studio` }],
  creator: siteConfig.workingName,
  publisher: siteConfig.workingName,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: `${siteConfig.workingName} — ${siteConfig.workingTagline}`,
    description: siteConfig.workingDescription,
    url: siteUrl,
    siteName: siteConfig.workingName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.workingName} — ${siteConfig.workingTagline}`,
    description: siteConfig.workingDescription,
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
    name: siteConfig.workingName,
    url: siteUrl,
    logo: `${siteUrl}/images/brand/brand-identity-specimen.webp`,
    description: siteConfig.workingDescription,
    sameAs: [siteConfig.repositoryUrl],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#000000] text-white font-sans antialiased selection:bg-[#FF90E8] selection:text-black">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
