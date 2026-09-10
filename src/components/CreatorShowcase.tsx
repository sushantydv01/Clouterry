"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import TiltCard from "./TiltCard";

interface Creator {
  name: string;
  handle: string;
  niche: string;
  cohort: string;
  audience: string;
  engagement: string;
  quote: string;
  sampleBrand: string;
}

const CREATORS: Creator[] = [
  {
    name: "Sophia Vance",
    handle: "@sophia.glows",
    niche: "Clean Skincare & Morning Rituals",
    cohort: "Beauty & Lifestyle",
    audience: "84K",
    engagement: "5.4% ER",
    quote: "Clouterry protected my organic aesthetic. No scripted talking points, just authentic routine integration.",
    sampleBrand: "Clean Skincare Partner",
  },
  {
    name: "Mateo Silva",
    handle: "@mateocooks",
    niche: "Artisanal Fermentation & Regional Food",
    cohort: "Food & Culture",
    audience: "42K",
    engagement: "6.8% ER",
    quote: "Being in a cohort gave me agency leverage. Brands finally value retention instead of just follower count.",
    sampleBrand: "Heritage Food Partner",
  },
  {
    name: "Elena Rostova",
    handle: "@elena.movement",
    niche: "Mindful Movement & Athletic Conditioning",
    cohort: "Fitness & Wellness",
    audience: "65K",
    engagement: "5.1% ER",
    quote: "Zero cold emails, zero lowball contracts. Briefs arrive ready to shoot with fair upfront rates.",
    sampleBrand: "Apparel Partner",
  },
  {
    name: "Kai Takahashi",
    handle: "@kai.techdesk",
    niche: "Minimal Desk Setups & Workflow EDC",
    cohort: "Tech & Design",
    audience: "92K",
    engagement: "5.9% ER",
    quote: "The cohort brief gave me complete creative freedom. The integration felt completely native to my desk aesthetic.",
    sampleBrand: "Ergonomics Partner",
  },
  {
    name: "Marcus Reid",
    handle: "@marcus.craft",
    niche: "Specialty Pour-Over & Cafe Stories",
    cohort: "Food & Culture",
    audience: "38K",
    engagement: "7.2% ER",
    quote: "Clouterry handles the contracts and invoice chasing so I can obsess over lighting and taste profiles.",
    sampleBrand: "Beverage Partner",
  },
  {
    name: "Maya Lin",
    handle: "@maya.curates",
    niche: "Capsule Wardrobes & Editorial Design",
    cohort: "Beauty & Lifestyle",
    audience: "54K",
    engagement: "5.6% ER",
    quote: "Finally an agency that gets Gen-Z tone. It feels like collaborating with peers who genuinely respect your craft.",
    sampleBrand: "Footwear Partner",
  },
];

export default function CreatorShowcase() {
  const [selectedCohort, setSelectedCohort] = useState<string>("All");

  const cohorts = ["All", "Beauty & Lifestyle", "Food & Culture", "Fitness & Wellness", "Tech & Design"];

  const filteredCreators = selectedCohort === "All"
    ? CREATORS
    : CREATORS.filter((c) => c.cohort === selectedCohort);

  return (
    <section className="relative border-t border-star-white/8 bg-void/35 backdrop-blur-xs px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-star-white/8">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-star-white leading-[1.05]">
                Creators who lead culture.
                <br />
                Cohorts built for retention.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-silver/70 leading-relaxed">
                Every creator in Clouterry is hand-vetted for aesthetic discipline, high video completion rates, and genuine community trust. Zero stock personas.
              </p>
            </div>

            <Link
              href="/creators"
              data-cursor="cta"
              className="inline-flex items-center gap-2 text-xs font-bold text-silver/70 hover:text-vermillion transition-colors duration-300 group"
            >
              <span className="relative">
                Apply to Join Roster
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-vermillion group-hover:w-full transition-all duration-300" />
              </span>
              <ArrowUpRight size={14} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </div>
        </RevealOnScroll>

        {/* Category Filter */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold">
          {cohorts.map((cohort) => (
            <button
              key={cohort}
              type="button"
              onClick={() => setSelectedCohort(cohort)}
              className={`relative transition-colors duration-300 py-1 ${
                selectedCohort === cohort
                  ? "text-star-white font-bold"
                  : "text-silver/50 hover:text-silver"
              }`}
            >
              {cohort}
              {selectedCohort === cohort && (
                <motion.span
                  layoutId="creatorFilter"
                  className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-vermillion rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Creator Grid with layout animation */}
        <motion.div
          layout
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredCreators.map((creator, i) => (
              <motion.div
                key={creator.handle}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard maxTilt={4} glareOpacity={0.05}>
                  <div className="border-b border-star-white/8 pb-8 flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex items-baseline justify-between">
                        <h3 className="font-display text-xl font-bold text-star-white group-hover:text-vermillion transition-colors duration-300">
                          {creator.name}
                        </h3>
                        <span className="text-xs font-semibold text-vermillion tabular-nums">
                          {creator.engagement}
                        </span>
                      </div>
                      <div className="text-xs font-medium text-silver/40 mt-0.5">
                        {creator.handle} • {creator.cohort}
                      </div>

                      <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-silver/60">
                        {creator.niche}
                      </div>

                      <p className="mt-3 text-xs sm:text-sm text-silver/75 italic leading-relaxed">
                        &ldquo;{creator.quote}&rdquo;
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-star-white/8 flex items-center justify-between text-xs text-silver/40">
                      <span>Audience: {creator.audience}</span>
                      <span>{creator.sampleBrand}</span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
