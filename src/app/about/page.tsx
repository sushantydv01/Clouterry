"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import AgencyTicker from "@/components/AgencyTicker";
import { ArrowUpRight } from "@phosphor-icons/react";

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
    <div className="flex min-h-screen flex-col bg-cream text-ink selection:bg-gold selection:text-ink">
      <main className="flex-1 pb-24 text-left">
        {/* Header Section: Narrow measure, letter from founders */}
        <section className="border-b border-ink/10 px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-28 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-red mb-4">
              Studio Letter
            </div>

            <h1 className="font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.035em] text-ink sm:text-6xl md:text-7xl">
              The content economy has
              <br />
              a matching problem.
            </h1>

            <div className="mt-10 space-y-6 border-t border-ink/10 pt-8 text-base leading-relaxed text-ink/80 font-body sm:text-lg">
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
              <div className="border-l-2 border-red bg-cream-dim/70 py-5 pl-6 pr-6 my-6 rounded-r-md">
                <p className="font-display text-xl font-bold text-ink sm:text-2xl">
                  Clouterry fixes this through cohort-based talent infrastructure.
                </p>
                <p className="mt-2 text-sm text-ink/70 font-body">
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
            <div className="mt-12 border-t border-ink/10 pt-8">
              <div className="font-display text-base font-bold text-ink">The Founding Team</div>
              <div className="text-xs text-ink/60 font-body">
                Clouterry Studio & Talent Infrastructure
              </div>
            </div>
          </div>
        </section>

        {/* Ticker */}
        <AgencyTicker tone="cream" />

        {/* Core Values / What We Stand For */}
        <section className="bg-cream-dim/40 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 border-t border-ink/10 text-ink">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              What we stand for.
            </h2>

            <div className="mt-10 divide-y divide-ink/10 border-t border-ink/10">
              {VALUES.map((val) => (
                <div key={val.title} className="py-8">
                  <div className="grid gap-4 sm:grid-cols-12 sm:items-baseline">
                    <span className="font-display text-2xl font-extrabold text-red tabular-nums sm:col-span-2">
                      {val.num}
                    </span>
                    <div className="sm:col-span-10">
                      <h3 className="font-display text-2xl font-bold text-ink">{val.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/80 font-body sm:text-base">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 flex flex-col gap-4 border-t border-ink/10 pt-10 sm:flex-row sm:items-center">
              <Link
                href="/creators"
                className="btn-press inline-flex items-center justify-center gap-2 rounded-md bg-red px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-cream transition-all duration-200 hover:bg-red-deep shadow-xs"
              >
                <span>Join as a creator</span>
                <ArrowUpRight size={14} weight="bold" />
              </Link>
              <Link
                href="/brands"
                className="btn-press inline-flex items-center justify-center rounded-md border border-ink/40 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-ink transition-all duration-200 hover:border-ink hover:bg-ink hover:text-cream"
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
