"use client";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import FooterThreadSignature from "@/components/illustrations/FooterThreadSignature";
import { DoodleBadgeStamp, DoodleHandStar } from "@/components/illustrations/ThreadDoodles";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#000000] px-4 sm:px-8 lg:px-12 pt-20 pb-12 text-white relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC700]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl space-y-16 relative z-10">
        {/* Top Section: Studio Identity & Direct Invitation + Directory Links */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Studio Stature + Direct Conversation Invitation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <Logo theme="dark" variant="full" />
              <DoodleBadgeStamp text="SENIOR STUDIO" color="#FFC700" />
            </div>

            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white max-w-md leading-snug">
              A unified digital presence studio for organizations that compound.
            </h3>

            <p className="text-sm text-white/65 max-w-md leading-relaxed font-sans">
              Five capabilities—brand identity, web engineering, documentary media, organic growth, and digital stewardship—orchestrated under one senior standard.
            </p>

            {/* Direct Project Briefing Box (No fake newsletter) */}
            <div className="p-5 rounded-2xl bg-[#141416] border border-white/10 max-w-md space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-white/50">
                <span>NEW CLIENT ENGAGEMENTS</span>
                <span className="text-[#10B981] font-bold">Q1 &bull; Open</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Direct partner review of your digital presence architecture, timeline, and requirements.
              </p>
              <div className="pt-1">
                <Link
                  href="/connect"
                  className="gumroad-btn-pink !py-2.5 !px-5 text-xs font-bold inline-flex items-center gap-1.5"
                >
                  <span>Start a project briefing</span>
                  <ArrowUpRight size={14} className="stroke-[2.5]" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Directory Link Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            {/* Disciplines */}
            <div className="space-y-3">
              <p className="text-xs font-mono font-bold text-[#FFC700] uppercase tracking-wider">
                01 &bull; Disciplines
              </p>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/capabilities/brand-identity" className="text-white/70 hover:text-white transition-colors">
                    Brand &amp; Identity
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/web-technology" className="text-white/70 hover:text-white transition-colors">
                    Web &amp; Technology
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/social-content" className="text-white/70 hover:text-white transition-colors">
                    Social &amp; Content
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/marketing-growth" className="text-white/70 hover:text-white transition-colors">
                    Marketing &amp; Growth
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/digital-management" className="text-white/70 hover:text-white transition-colors">
                    Digital Advisory
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sectors & Work */}
            <div className="space-y-3">
              <p className="text-xs font-mono font-bold text-[#3875FF] uppercase tracking-wider">
                02 &bull; Practice Areas
              </p>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/industries/education" className="text-white/70 hover:text-white transition-colors">
                    Education &amp; Schools
                  </Link>
                </li>
                <li>
                  <Link href="/industries/healthcare" className="text-white/70 hover:text-white transition-colors">
                    Healthcare Clinics
                  </Link>
                </li>
                <li>
                  <Link href="/industries/professional" className="text-white/70 hover:text-white transition-colors">
                    Professional Services
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-white/70 hover:text-white transition-colors">
                    Concept Studies
                  </Link>
                </li>
                <li>
                  <Link href="/firm" className="text-white/70 hover:text-white transition-colors">
                    Studio Tenets
                  </Link>
                </li>
              </ul>
            </div>

            {/* Direct & Governance */}
            <div className="col-span-2 sm:col-span-1 space-y-3">
              <p className="text-xs font-mono font-bold text-[#FF5C9D] uppercase tracking-wider">
                03 &bull; Resources
              </p>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/connect" className="text-[#FF90E8] font-bold hover:underline inline-flex items-center gap-1">
                    <span>Client Intake &rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-white/70 hover:text-white transition-colors">
                    Operational FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/insights" className="text-white/70 hover:text-white transition-colors">
                    Field Monographs
                  </Link>
                </li>
                <li>
                  <a href="/rss.xml" className="text-white/70 hover:text-white transition-colors">
                    Perspectives RSS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Signature Row: Hand-Drawn Thread Signature Motif */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <FooterThreadSignature />
          <div className="flex items-center gap-2">
            <DoodleHandStar color="#FFC700" size={18} />
            <span className="text-xs font-mono text-white/50">
              NEXT.JS 16 &bull; ZERO CLIENT TRACKING &bull; ZERO VENDOR LEAKS
            </span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Navigation */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-white/40 font-sans">
          <span>&copy; {currentYear} FIRM. All rights reserved. Built to endure a decade.</span>

          <div className="flex items-center gap-4 text-white/50">
            <Link href="/capabilities" className="hover:text-white transition-colors">
              5 Disciplines
            </Link>
            <span>&bull;</span>
            <Link href="/work" className="hover:text-white transition-colors">
              Architecture Blueprints
            </Link>
            <span>&bull;</span>
            <Link href="/connect" className="hover:text-[#FF90E8] transition-colors">
              Direct Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
