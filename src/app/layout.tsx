import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { getSiteUrl, siteConfig } from "@/lib/siteConfig";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
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
  themeColor: "#171717",
  width: "device-width",
  initialScale: 1,
};

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: `${siteConfig.workingName} | ${siteConfig.workingTagline}`,
  description: siteConfig.workingDescription,
  keywords: siteConfig.keywords,
  authors: [{ name: `${siteConfig.workingName} Studio` }],
  creator: siteConfig.workingName,
  publisher: siteConfig.workingName,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: `${siteConfig.workingName} | ${siteConfig.workingTagline}`,
    description: siteConfig.workingDescription,
    url: siteUrl,
    siteName: siteConfig.workingName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.workingName} | ${siteConfig.workingTagline}`,
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
    logo: `${siteUrl}/images/studio/s04-brand-specimen.webp`,
    description: siteConfig.workingDescription,
    sameAs: [siteConfig.repositoryUrl],
  };

  return (
    <html
      lang="en"
      style={{ colorScheme: "dark" }}
      className={`${bricolageGrotesque.variable} ${hankenGrotesk.variable} ${newsreader.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#171717] text-[#F8F6EF] font-sans antialiased selection:bg-[#ED83A8] selection:text-[#171717]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:rounded-full focus:bg-[#F4CF55] focus:text-[#171717] focus:font-display focus:font-medium"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
