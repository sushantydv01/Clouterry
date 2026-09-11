"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AgencyTicker from "@/components/AgencyTicker";
import { ArrowUpRight, Sparkle } from "@phosphor-icons/react";

const VALUES = [
  {
    num: "01",
    title: "Aesthetic alignment first",
    desc: "We never place a creator into a campaign that clashes with their natural style. If the visual fit is not organic, the campaign fails before it begins.",
  },
  {
    num: "02",
    title: "Collective leverage for soloists",
    desc: "Independent micro-creators are routinely exploited by corporate procurement teams. Cohorts grant independent voices collective bargaining power and guaranteed 14-day terms.",
  },
  {
    num: "03",
    title: "Zero operational drag for brands",
    desc: "Growth marketers want magnetic short-form assets without managing dozens of individual invoices, missing NDAs, and unending revision loops.",
  },
  {
    num: "04",
    title: "Cultural authenticity over canned hype",
    desc: "Audiences can sniff out artificial influencer marketing from miles away. We curate creators who understand the short-form medium natively and speak directly to their peers.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-red text-cream selection:bg-yellow selection:text-ink">
      <Navigation />

      <main className="flex-1 pb-24 text-left">
        {/* Header Section */}
        <section className="border-b border-cream/15 px-6 pt-16 pb-20 sm:px-10 sm:pt-24 sm:pb-28 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-cream/80">
              <Sparkle size={12} weight="fill" className="text-yellow" />
              <span>Studio Manifesto & Founding Letter · 2026</span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.035em] text-cream sm:text-6xl md:text-7xl">
              The content economy has
              <br />
              <span className="font-serif italic font-normal text-yellow">a matching problem.</span>
            </h1>

            <div className="mt-10 space-y-6 border-t border-cream/15 pt-8 text-base leading-relaxed text-cream/85 font-body sm:text-lg">
              <p>
                Every week, millions of talented micro and mid-tier creators produce magnetic, high-converting
                short-form video. Yet most spend 70% of their creative energy cold-pitching brands through
                overflowing DMs, getting ghosted or pressured into lowball trade deals with zero creative
                freedom.
              </p>
              <p>
                On the brand side, growth leaders are exhausted by directories that sell spreadsheets of
                unvetted handles. Marketing teams end up acting as full-time logistics coordinators, wrangling
                dozens of one-off contracts, endless revision loops, and delayed payout disputes.
              </p>
              <div className="rounded-md border-l-4 border-yellow bg-red-deep/70 p-6 my-6 border border-cream/15">
                <p className="font-display text-xl font-bold text-cream sm:text-2xl">
                  Clouterry fixes this through cohort-based talent infrastructure.
                </p>
                <p className="mt-2 text-sm text-cream/70">
                  One collective structure. Guaranteed 14-day turnaround. 100% creative sovereignty.
                </p>
              </div>
              <p>
                We organize creators by genuine cultural category, allowing them to maintain their distinct
                aesthetic while accessing collective agency benefits. For brands, cohorts offer a single,
                reliable point of contact for high-volume authentic content that actually lands.
              </p>
            </div>

            {/* Founder Signoff Block */}
            <div className="mt-12 flex flex-col justify-between gap-4 border-t border-cream/15 pt-8 sm:flex-row sm:items-center">
              <div>
                <div className="font-display text-base font-bold text-cream">The Founding Team</div>
                <div className="text-xs font-mono uppercase tracking-wider text-cream/60">
                  Clouterry Studio & Talent Infrastructure
                </div>
              </div>

              <div className="rounded-md border border-cream/20 bg-cream/10 px-4 py-2 font-mono text-xs text-cream/80">
                PROVENANCE: NYC · LON · TYO
              </div>
            </div>
          </div>
        </section>

        {/* Ticker */}
        <AgencyTicker tone="dark" />

        {/* Core Values / What We Stand For */}
        <section className="bg-red-deep/40 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 border-t border-cream/15 text-cream">
          <div className="mx-auto max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-yellow">Foundational Pillars</span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
              What we stand for.
            </h2>

            <div className="mt-10 divide-y divide-cream/10 border-t border-cream/15">
              {VALUES.map((val) => (
                <div key={val.title} className="py-8">
                  <div className="grid gap-4 sm:grid-cols-12 sm:items-baseline">
                    <span className="font-mono text-xl font-bold text-yellow sm:col-span-2">{val.num}</span>
                    <div className="sm:col-span-10">
                      <h3 className="font-display text-2xl font-bold text-cream">{val.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream/80 font-body sm:text-base">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 flex flex-col gap-4 border-t border-cream/15 pt-10 sm:flex-row sm:items-center">
              <Link
                href="/creators"
                className="btn-press inline-flex items-center justify-center gap-2 rounded-md bg-cream px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-red transition-all duration-200 hover:bg-yellow hover:text-ink shadow-sm"
              >
                <span>Join as a creator</span>
                <ArrowUpRight size={14} weight="bold" />
              </Link>
              <Link
                href="/brands"
                className="btn-press inline-flex items-center justify-center rounded-md border border-cream/80 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-cream transition-all duration-200 hover:bg-cream hover:text-red"
              >
                Partner as a brand
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
