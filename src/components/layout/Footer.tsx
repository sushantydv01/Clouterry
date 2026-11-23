import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#171717] bg-[#171717] px-6 sm:px-8 md:px-12 pt-20 pb-14 text-[#F8F6EF]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 pb-16 border-b border-[#3A3835]">
          {/* Col 1: Wordmark & Purpose Statement */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-start gap-5">
            <Logo theme="dark" withDescriptor={true} />
            <p className="mt-1 text-sm text-[#D5D2C9] leading-relaxed max-w-sm font-sans">
              FIRM is a digital presence and growth consultancy. We engineer cohesive brand identities, modern web infrastructure, and systematic visibility for organizations where reputation matters.
            </p>
            <div className="mt-2 inline-flex items-center gap-2 border border-[#171717] bg-[#F4CF55] text-[#171717] px-3.5 py-1.5 text-xs font-mono font-bold shadow-[3px_3px_0_0_#ED83A8]">
              <span className="h-2 w-2 rounded-full bg-[#171717] animate-pulse" />
              <span>Studio Open for Q1/Q2 Engagements</span>
            </div>
          </div>

          {/* Col 2: The Firm */}
          <div className="lg:col-span-2 flex flex-col gap-3 text-sm font-display">
            <p className="font-mono text-xs uppercase tracking-wider text-[#A6D8A1] font-bold mb-1 pb-1.5 border-b border-[#3A3835]">
              The Firm
            </p>
            <Link href="/firm" className="text-[#D5D2C9] hover:text-[#ED83A8] hover:translate-x-0.5 transition-all">
              Overview
            </Link>
            <Link href="/firm#philosophy" className="text-[#D5D2C9] hover:text-[#ED83A8] hover:translate-x-0.5 transition-all">
              Philosophy
            </Link>
            <Link href="/firm#approach" className="text-[#D5D2C9] hover:text-[#ED83A8] hover:translate-x-0.5 transition-all">
              Our Approach
            </Link>
            <Link href="/firm#team" className="text-[#D5D2C9] hover:text-[#ED83A8] hover:translate-x-0.5 transition-all">
              Leadership &amp; Team
            </Link>
          </div>

          {/* Col 3: Capabilities */}
          <div className="lg:col-span-2 flex flex-col gap-3 text-sm font-display">
            <p className="font-mono text-xs uppercase tracking-wider text-[#A6D8A1] font-bold mb-1 pb-1.5 border-b border-[#3A3835]">
              Capabilities
            </p>
            <Link href="/capabilities#brand" className="text-[#D5D2C9] hover:text-[#ED83A8] hover:translate-x-0.5 transition-all">
              Brand &amp; Identity
            </Link>
            <Link href="/capabilities#web" className="text-[#D5D2C9] hover:text-[#ED83A8] hover:translate-x-0.5 transition-all">
              Web &amp; Technology
            </Link>
            <Link href="/capabilities#social" className="text-[#D5D2C9] hover:text-[#ED83A8] hover:translate-x-0.5 transition-all">
              Social Media &amp; Content
            </Link>
            <Link href="/capabilities#marketing" className="text-[#D5D2C9] hover:text-[#ED83A8] hover:translate-x-0.5 transition-all">
              Marketing &amp; Growth
            </Link>
            <Link href="/capabilities#management" className="text-[#D5D2C9] hover:text-[#ED83A8] hover:translate-x-0.5 transition-all">
              Digital Management
            </Link>
          </div>

          {/* Col 4: Industries */}
          <div className="lg:col-span-2 flex flex-col gap-3 text-sm font-display">
            <p className="font-mono text-xs uppercase tracking-wider text-[#A6D8A1] font-bold mb-1 pb-1.5 border-b border-[#3A3835]">
              Industries
            </p>
            <Link href="/industries#education" className="text-[#D5D2C9] hover:text-[#ED83A8] hover:translate-x-0.5 transition-all">
              Education &amp; Schools
            </Link>
            <Link href="/industries#healthcare" className="text-[#D5D2C9] hover:text-[#ED83A8] hover:translate-x-0.5 transition-all">
              Healthcare &amp; Medical
            </Link>
            <Link href="/industries#professional" className="text-[#D5D2C9] hover:text-[#ED83A8] hover:translate-x-0.5 transition-all">
              Professional Services
            </Link>
            <Link href="/industries#retail" className="text-[#D5D2C9] hover:text-[#ED83A8] hover:translate-x-0.5 transition-all">
              Retail &amp; E-commerce
            </Link>
            <Link href="/industries#startups" className="text-[#D5D2C9] hover:text-[#ED83A8] hover:translate-x-0.5 transition-all">
              Startups &amp; Ventures
            </Link>
          </div>

          {/* Col 5: Connect */}
          <div className="lg:col-span-2 flex flex-col gap-3 text-sm font-display">
            <p className="font-mono text-xs uppercase tracking-wider text-[#A6D8A1] font-bold mb-1 pb-1.5 border-b border-[#3A3835]">
              Connect
            </p>
            <Link href="/connect" className="font-bold text-[#F4CF55] hover:text-[#ED83A8] hover:underline transition-colors">
              Start a Project →
            </Link>
            <Link href="/work" className="text-[#D5D2C9] hover:text-[#ED83A8] hover:translate-x-0.5 transition-all">
              Our Work
            </Link>
            <Link href="/insights" className="text-[#D5D2C9] hover:text-[#ED83A8] hover:translate-x-0.5 transition-all">
              Field Insights
            </Link>
            <Link href="/faq" className="text-[#D5D2C9] hover:text-[#ED83A8] hover:translate-x-0.5 transition-all">
              Operational FAQ
            </Link>
            <a
              href="mailto:inquiries@firm.agency"
              className="mt-2 text-[#F8F6EF] font-mono text-xs font-semibold hover:text-[#F4CF55] hover:underline"
            >
              inquiries@firm.agency
            </a>
          </div>
        </div>

        {/* Sub-footer: Copyright & Standards */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 text-xs font-mono text-[#A8A49A] sm:flex-row sm:items-center">
          <p>© {currentYear} FIRM. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#ED83A8] text-[#171717] border border-[#171717] px-2.5 py-0.5 font-bold shadow-[2px_2px_0_0_#171717]">NEXT.JS 16</span>
            <span>•</span>
            <span className="bg-[#A6D8A1] text-[#171717] border border-[#171717] px-2.5 py-0.5 font-bold shadow-[2px_2px_0_0_#171717]">POP GARDEN</span>
            <span>•</span>
            <span className="bg-[#F4CF55] text-[#171717] border border-[#171717] px-2.5 py-0.5 font-bold shadow-[2px_2px_0_0_#171717]">WCAG 2.1 AA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
