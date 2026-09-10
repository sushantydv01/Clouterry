"use client";

import { Check } from "@phosphor-icons/react";
import RevealOnScroll from "./RevealOnScroll";
import TiltCard from "./TiltCard";

const PILLARS = [
  {
    title: "Curated Cohort Assembly",
    tagline: "Quality over spreadsheet volume",
    desc: "We do not sell access to 50,000 unvetted handles. We scout, vet, and organize creators into tight 8–18 person cohorts focused on genuine lifestyle verticals.",
    features: [
      "Rigorous aesthetic & engagement vetting",
      "Proven >4.5% organic engagement benchmark",
      "Shared cohort community and transparent rate parity",
    ],
  },
  {
    title: "Native Short-Form Creative",
    tagline: "Content that looks like content, not an ad",
    desc: "Audiences skip stiff corporate copy. We collaborate with cohort creators to translate brand goals into organic hooks, GRWM formats, and honest reviews.",
    features: [
      "Zero mechanical script reads or forced talking points",
      "Native TikTok & IG Reels vertical 9:16 formatting",
      "High retention first 3-second visual hooks",
    ],
  },
  {
    title: "Full Rights & Spark Ad Codes",
    tagline: "Institutional contract protection",
    desc: "Eliminate legal friction. Every cohort engagement includes clean, standardized usage agreements, Spark Ads access, and direct creator whitelisting.",
    features: [
      "Standard 90-day paid & organic commercial usage",
      "Direct TikTok Spark / Meta Partnership Ad codes",
      "Creator protection against predatory terms & lock-ins",
    ],
  },
  {
    title: "Turnkey Execution",
    tagline: "One partner instead of 30 separate threads",
    desc: "Growth marketers should not spend 20 hours a week chasing creative revisions and paying 40 separate invoices. Clouterry unifies the entire execution.",
    features: [
      "Single consolidated monthly invoice & clean terms",
      "Dedicated creative delivery coordinator on your team",
      "Guaranteed 14-day production turnaround from brief",
    ],
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="relative border-t border-star-white/8 bg-void/40 backdrop-blur-xs px-6 sm:px-10 lg:px-16 py-28 sm:py-36 text-silver">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <RevealOnScroll>
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-vermillion font-semibold mb-3">
              The Cohort Model
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-star-white leading-[1.05]">
              Bridging creator voice and brand scale.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-silver/75 leading-relaxed max-w-2xl">
              Traditional influencer agencies lock talent into predatory 30% contracts, while software directories dump unvetted spreadsheets. Clouterry introduces the cohort model: collective leverage for creators, high-converting assets for brands.
            </p>
          </div>
        </RevealOnScroll>

        {/* Wide 4-Pillar Grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 border-t border-star-white/8 pt-12">
          {PILLARS.map((pillar, i) => (
            <RevealOnScroll key={pillar.title} delay={i * 0.08}>
              <TiltCard maxTilt={5} glareOpacity={0.06}>
                <div className="border-b border-star-white/8 pb-10 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-star-white">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-vermillion mt-1.5">
                      {pillar.tagline}
                    </p>

                    <p className="mt-4 text-xs sm:text-sm text-silver/70 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-star-white/8 space-y-2.5">
                    {pillar.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-silver/80">
                        <Check size={14} weight="bold" className="text-vermillion shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
