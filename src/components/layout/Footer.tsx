import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-[#171717] bg-[#171717] px-6 sm:px-10 md:px-14 pt-20 pb-14 text-[#F8F6EF]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12 pb-16 border-b border-[#3A3835]">
          {/* Col 1: Wordmark & Core Purpose */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <Logo theme="dark" withDescriptor={true} />
            <p className="text-base sm:text-lg text-[#D5D2C9] leading-relaxed max-w-lg font-sans">
              FIRM is an independent digital presence and growth firm. We unify brand identity, high-speed Next.js platforms, documentary media, and systematic visibility under one disciplined architectural standard.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 border border-[#171717] bg-[#F4CF55] text-[#171717] px-3.5 py-1.5 text-xs font-mono font-bold shadow-[3px_3px_0_0_#ED83A8]">
                <span className="h-2 w-2 rounded-full bg-[#171717] animate-pulse" />
                <span>Studio Open for Q1/Q2 Engagements</span>
              </div>
              <Link
                href="/connect"
                className="neo-btn-pink text-xs px-5 py-2 shadow-[2px_2px_0_0_#FFFFFF] inline-flex items-center gap-1.5"
              >
                <span>Initiate Briefing</span>
                <ArrowUpRight size={13} className="stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Col 2: Navigation Columns (Consolidated, Not Overcrowded) */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm font-display">
            {/* Practices */}
            <div className="flex flex-col gap-3">
              <p className="font-mono text-xs uppercase tracking-wider text-[#A6D8A1] font-bold pb-2 border-b border-[#3A3835]">
                Practices
              </p>
              <Link href="/capabilities" className="text-[#D5D2C9] hover:text-[#ED83A8] transition-colors">
                Capabilities
              </Link>
              <Link href="/industries" className="text-[#D5D2C9] hover:text-[#ED83A8] transition-colors">
                Industries
              </Link>
              <Link href="/industries/education" className="text-[#D5D2C9] hover:text-[#ED83A8] transition-colors">
                Education
              </Link>
              <Link href="/work" className="text-[#D5D2C9] hover:text-[#ED83A8] transition-colors">
                Work Archive
              </Link>
            </div>

            {/* Perspectives */}
            <div className="flex flex-col gap-3">
              <p className="font-mono text-xs uppercase tracking-wider text-[#F4CF55] font-bold pb-2 border-b border-[#3A3835]">
                Studio
              </p>
              <Link href="/firm" className="text-[#D5D2C9] hover:text-[#ED83A8] transition-colors">
                The Firm
              </Link>
              <Link href="/insights" className="text-[#D5D2C9] hover:text-[#ED83A8] transition-colors">
                Field Insights
              </Link>
              <Link href="/faq" className="text-[#D5D2C9] hover:text-[#ED83A8] transition-colors">
                Operational FAQ
              </Link>
              <a href="/rss.xml" className="text-[#D5D2C9] hover:text-[#ED83A8] transition-colors">
                RSS Feed
              </a>
            </div>

            {/* Direct Contact */}
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-3">
              <p className="font-mono text-xs uppercase tracking-wider text-[#ED83A8] font-bold pb-2 border-b border-[#3A3835]">
                Direct
              </p>
              <Link
                href="/connect"
                className="font-mono text-xs font-bold text-[#F8F6EF] hover:text-[#F4CF55] hover:underline"
              >
                Executive Partner Intake →
              </Link>
              <span className="text-xs text-[#A8A49A]">
                New York Studio &amp; Remote Delivery Worldwide
              </span>
            </div>
          </div>
        </div>

        {/* Sub-footer: Copyright & Standards */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 text-xs font-mono text-[#A8A49A] sm:flex-row sm:items-center">
          <p>© {currentYear} FIRM. All rights reserved. 100% intellectual honesty.</p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#ED83A8] text-[#171717] border border-[#171717] px-2.5 py-0.5 font-bold shadow-[2px_2px_0_0_#171717]">NEXT.JS 16</span>
            <span>•</span>
            <span className="bg-[#A6D8A1] text-[#171717] border border-[#171717] px-2.5 py-0.5 font-bold shadow-[2px_2px_0_0_#171717]">POP GARDEN</span>
            <span>•</span>
            <span className="bg-[#F4CF55] text-[#171717] border border-[#171717] px-2.5 py-0.5 font-bold shadow-[2px_2px_0_0_#171717]">ZERO VENDOR SEAMS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
