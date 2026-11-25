import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import StickerMark from "@/components/illustrations/StickerMark";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#F8F6EF]/12 bg-[#171717] px-4 sm:px-8 lg:px-12 pt-16 pb-12 text-[#F8F6EF] relative overflow-hidden">
      <div className="mx-auto max-w-7xl space-y-14 relative z-10">
        {/* Top Spread: Confident Studio Narrative + Balanced 3-Column Directory */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <Logo theme="dark" variant="full" />

            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F8F6EF] max-w-md leading-snug">
              A unified digital presence studio for organizations that compound.
            </h3>

            <p className="text-sm text-[#C4C1B8] max-w-md leading-relaxed font-sans">
              Brand identity, web engineering, documentary media, organic growth, and continuous digital stewardship under one senior standard.
            </p>

            <div className="pt-2 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A6D8A1]">
                <span className="h-2 w-2 rounded-full bg-[#A6D8A1]" aria-hidden="true" />
                <span>Accepting Q1 partner briefings</span>
              </div>
              <div>
                <Link
                  href="/connect"
                  className="firm-btn-primary text-xs sm:text-sm !py-2.5 !px-5"
                >
                  <span>Start a project briefing</span>
                  <ArrowUpRight size={14} className="stroke-[2.25]" />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-[0.14em] text-[#F4CF55]">
                Disciplines
              </p>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/capabilities/brand-identity" className="text-[#C4C1B8] hover:text-[#F8F6EF] transition-colors">
                    Brand &amp; Identity
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/web-technology" className="text-[#C4C1B8] hover:text-[#F8F6EF] transition-colors">
                    Web &amp; Technology
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/social-content" className="text-[#C4C1B8] hover:text-[#F8F6EF] transition-colors">
                    Social &amp; Content
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/marketing-growth" className="text-[#C4C1B8] hover:text-[#F8F6EF] transition-colors">
                    Marketing &amp; Growth
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities/digital-management" className="text-[#C4C1B8] hover:text-[#F8F6EF] transition-colors">
                    Digital Advisory
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-[0.14em] text-[#A6D8A1]">
                Practice Areas
              </p>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/industries/education" className="text-[#C4C1B8] hover:text-[#F8F6EF] transition-colors">
                    Education &amp; Schools
                  </Link>
                </li>
                <li>
                  <Link href="/industries/healthcare" className="text-[#C4C1B8] hover:text-[#F8F6EF] transition-colors">
                    Healthcare Clinics
                  </Link>
                </li>
                <li>
                  <Link href="/industries/professional" className="text-[#C4C1B8] hover:text-[#F8F6EF] transition-colors">
                    Professional Services
                  </Link>
                </li>
                <li>
                  <Link href="/industries/retail" className="text-[#C4C1B8] hover:text-[#F8F6EF] transition-colors">
                    Boutique Retail
                  </Link>
                </li>
                <li>
                  <Link href="/industries/startups" className="text-[#C4C1B8] hover:text-[#F8F6EF] transition-colors">
                    Startups &amp; Ventures
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1 space-y-3">
              <p className="text-xs font-mono uppercase tracking-[0.14em] text-[#ED83A8]">
                Studio &amp; Index
              </p>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/work" className="text-[#C4C1B8] hover:text-[#F8F6EF] transition-colors">
                    Concept Studies
                  </Link>
                </li>
                <li>
                  <Link href="/firm" className="text-[#C4C1B8] hover:text-[#F8F6EF] transition-colors">
                    Studio Tenets
                  </Link>
                </li>
                <li>
                  <Link href="/insights" className="text-[#C4C1B8] hover:text-[#F8F6EF] transition-colors">
                    Field Monographs
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-[#C4C1B8] hover:text-[#F8F6EF] transition-colors">
                    Operational FAQ
                  </Link>
                </li>
                <li>
                  <a href="/rss.xml" className="text-[#C4C1B8] hover:text-[#F8F6EF] transition-colors">
                    Perspectives RSS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Attribution & Wrapped Utility Links */}
        <div className="pt-8 border-t border-[#F8F6EF]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-5 text-xs text-[#9C9990]">
          <div className="flex items-center gap-3">
            <StickerMark name="s09-06-loop-ribbon" size={28} />
            <span>&copy; {currentYear} FIRM. One Studio. Five Disciplines. Built to endure.</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[#C4C1B8]">
            <Link href="/capabilities" className="hover:text-[#F8F6EF] transition-colors whitespace-nowrap">
              Disciplines
            </Link>
            <Link href="/work" className="hover:text-[#F8F6EF] transition-colors whitespace-nowrap">
              Concept Studies
            </Link>
            <Link href="/connect" className="text-[#ED83A8] font-medium hover:underline whitespace-nowrap">
              Direct Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
