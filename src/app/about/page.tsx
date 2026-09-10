"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const VALUES = [
  {
    title: "Aesthetic Alignment First",
    desc: "We never place a creator into a campaign that clashes with their natural style. If the visual fit is not organic, the campaign fails.",
  },
  {
    title: "Collective Leverage",
    desc: "Independent micro-creators are often taken advantage of by corporate procurement. Cohorts give independent voices collective bargaining power.",
  },
  {
    title: "Zero Operational Drag",
    desc: "Growth marketers want converting short-form video without managing 40 individual invoices, contracts, and revision loops.",
  },
  {
    title: "Cultural Authenticity",
    desc: "Audiences smell artificial influencer marketing from miles away. We curate creators who understand the short-form medium natively.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent text-silver antialiased selection:bg-star-white selection:text-void relative z-10">
      <Navigation />

      <main className="flex-1 pt-32 pb-24 sm:pt-40 sm:pb-28">
        {/* Letter Container: Denser, tighter, reads like a real letter rather than a marketing block */}
        <section className="px-6 sm:px-8">
          <div className="mx-auto max-w-2xl">
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-star-white leading-tight">
              The content economy has
              <br />
              a matching problem.
            </h1>

            {/* Letter Body */}
            <div className="mt-10 space-y-6 text-base sm:text-lg text-silver/90 leading-relaxed border-t border-star-white/10 pt-8">
              <p>
                Every week, millions of talented micro and mid-tier creators produce magnetic, high-converting short-form video. Yet most spend 70% of their creative energy cold-pitching brands through overflowing DMs, getting ghosted or pressured into lowball trade deals with zero creative freedom.
              </p>
              <p>
                On the brand side, growth leaders are exhausted by SaaS directories that sell spreadsheets of 50,000 unvetted handles. Marketing teams end up acting as full-time logistics coordinators, wrangling dozens of one-off contracts, endless revision loops, and delayed payout disputes.
              </p>
              <p className="font-bold text-star-white">
                Clouterry fixes this through cohort-based talent infrastructure.
              </p>
              <p>
                We organize creators by genuine cultural category (Beauty, Food, Movement, Tech), allowing creators to maintain their distinct aesthetic while accessing collective agency benefits. For brands, cohorts offer a single, reliable point of contact for high-volume authentic content that actually lands.
              </p>
            </div>

            {/* Sign-off with Logo Mark */}
            <div className="mt-12 pt-8 border-t border-star-white/10 flex items-center gap-4">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md liquid-glass p-2 border border-star-white/15">
                <Image
                  src="/clouterry-mark-white.png"
                  alt="Clouterry emblem"
                  fill
                  sizes="48px"
                  className="object-contain p-1.5"
                />
              </div>
              <div>
                <div className="font-display text-sm font-bold text-star-white">
                  The Founding Team
                </div>
                <div className="text-xs text-silver/60">
                  Clouterry Agency, building the future of creator cohorts
                </div>
              </div>
            </div>

            {/* Core Values: Clean, tight list */}
            <div className="mt-16 border-t border-star-white/10 pt-12 space-y-8">
              <h2 className="font-display text-xl font-bold text-star-white">
                What We Stand For
              </h2>

              <div className="grid gap-6 sm:grid-cols-2">
                {VALUES.map((val) => (
                  <div key={val.title} className="space-y-1">
                    <h3 className="font-display text-sm font-bold text-star-white">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-silver/75 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-14 pt-8 border-t border-star-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/creators"
                className="rounded-md bg-star-white px-7 py-3 text-xs sm:text-sm font-bold text-void hover:bg-star-white/90 transition-colors"
              >
                Join as a Creator
              </Link>
              <Link
                href="/brands"
                className="rounded-md liquid-glass-interactive px-7 py-3 text-xs sm:text-sm font-bold text-star-white border-b-2 border-b-ember/80"
              >
                Partner as a Brand
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
