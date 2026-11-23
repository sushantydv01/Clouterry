import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black bg-white px-4 sm:px-6 md:px-8 pt-16 pb-12 text-black">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 pb-12 border-b border-black">
          {/* Col 1: Wordmark & Purpose Statement */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-start gap-4">
            <Logo withDescriptor={true} />
            <p className="mt-2 text-xs text-[#2D2A26] leading-relaxed max-w-sm">
              FIRM is a digital presence and growth consultancy. We engineer cohesive brand identities, modern web infrastructure, and systematic visibility for organizations where reputation matters.
            </p>
            <div className="mt-2 inline-flex items-center gap-2 border border-black bg-[#F1F333] px-3 py-1 text-[11px] font-mono text-black shadow-[2px_2px_0_0_#000]">
              <span className="h-2 w-2 rounded-full bg-black" />
              <span className="font-semibold">Studio Open for Q1/Q2 Engagements</span>
            </div>
          </div>

          {/* Col 2: The Firm */}
          <div className="lg:col-span-2 flex flex-col gap-2.5 text-xs font-display">
            <p className="font-mono text-[11px] uppercase tracking-wider text-black font-bold mb-1 pb-1 border-b border-black">
              The Firm
            </p>
            <Link href="/firm" className="text-[#2D2A26] hover:text-black hover:underline transition-colors">
              Overview
            </Link>
            <Link href="/firm#philosophy" className="text-[#2D2A26] hover:text-black hover:underline transition-colors">
              Philosophy
            </Link>
            <Link href="/firm#approach" className="text-[#2D2A26] hover:text-black hover:underline transition-colors">
              Our Approach
            </Link>
            <Link href="/firm#team" className="text-[#2D2A26] hover:text-black hover:underline transition-colors">
              Leadership &amp; Team
            </Link>
          </div>

          {/* Col 3: Capabilities */}
          <div className="lg:col-span-2 flex flex-col gap-2.5 text-xs font-display">
            <p className="font-mono text-[11px] uppercase tracking-wider text-black font-bold mb-1 pb-1 border-b border-black">
              Capabilities
            </p>
            <Link href="/capabilities#brand" className="text-[#2D2A26] hover:text-black hover:underline transition-colors">
              Brand &amp; Identity
            </Link>
            <Link href="/capabilities#web" className="text-[#2D2A26] hover:text-black hover:underline transition-colors">
              Web &amp; Technology
            </Link>
            <Link href="/capabilities#social" className="text-[#2D2A26] hover:text-black hover:underline transition-colors">
              Social Media &amp; Content
            </Link>
            <Link href="/capabilities#marketing" className="text-[#2D2A26] hover:text-black hover:underline transition-colors">
              Marketing &amp; Growth
            </Link>
            <Link href="/capabilities#management" className="text-[#2D2A26] hover:text-black hover:underline transition-colors">
              Digital Management
            </Link>
          </div>

          {/* Col 4: Industries */}
          <div className="lg:col-span-2 flex flex-col gap-2.5 text-xs font-display">
            <p className="font-mono text-[11px] uppercase tracking-wider text-black font-bold mb-1 pb-1 border-b border-black">
              Industries
            </p>
            <Link href="/industries#education" className="text-[#2D2A26] hover:text-black hover:underline transition-colors">
              Education &amp; Schools
            </Link>
            <Link href="/industries#healthcare" className="text-[#2D2A26] hover:text-black hover:underline transition-colors">
              Healthcare &amp; Medical
            </Link>
            <Link href="/industries#professional" className="text-[#2D2A26] hover:text-black hover:underline transition-colors">
              Professional Services
            </Link>
            <Link href="/industries#retail" className="text-[#2D2A26] hover:text-black hover:underline transition-colors">
              Retail &amp; E-commerce
            </Link>
            <Link href="/industries#startups" className="text-[#2D2A26] hover:text-black hover:underline transition-colors">
              Startups &amp; Ventures
            </Link>
          </div>

          {/* Col 5: Connect */}
          <div className="lg:col-span-2 flex flex-col gap-2.5 text-xs font-display">
            <p className="font-mono text-[11px] uppercase tracking-wider text-black font-bold mb-1 pb-1 border-b border-black">
              Connect
            </p>
            <Link href="/connect" className="font-bold text-black hover:text-[#DC341E] hover:underline">
              Start a Project →
            </Link>
            <Link href="/work" className="text-[#2D2A26] hover:text-black hover:underline transition-colors">
              Our Work
            </Link>
            <Link href="/insights" className="text-[#2D2A26] hover:text-black hover:underline transition-colors">
              Field Insights
            </Link>
            <Link href="/faq" className="text-[#2D2A26] hover:text-black hover:underline transition-colors">
              Operational FAQ
            </Link>
            <a
              href="mailto:inquiries@firm.agency"
              className="mt-2 text-black font-mono text-[11px] font-semibold hover:underline"
            >
              inquiries@firm.agency
            </a>
          </div>
        </div>

        {/* Sub-footer: Copyright & Standards */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-[11px] font-mono text-[#605C56] sm:flex-row sm:items-center">
          <p>© {currentYear} FIRM. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="bg-[#FF90E8] text-black border border-black px-2 py-0.5 font-bold">NEXT.JS 16</span>
            <span>•</span>
            <span className="bg-[#55D6BE] text-black border border-black px-2 py-0.5 font-bold">NEO-BRUTALISM</span>
            <span>•</span>
            <span className="text-black font-medium">WCAG 2.1 AA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
