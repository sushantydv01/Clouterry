"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroCohortTerminal from "@/components/HeroCohortTerminal";
import BrandLogoCloud from "@/components/BrandLogoCloud";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import WorkflowSection from "@/components/WorkflowSection";
import CreatorSection from "@/components/CreatorSection";
import BrandSection from "@/components/BrandSection";
import CreatorShowcase from "@/components/CreatorShowcase";
import StoriesSection from "@/components/StoriesSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import AnimatedCounter from "@/components/AnimatedCounter";
import RevealOnScroll from "@/components/RevealOnScroll";

const COHORTS = [
  {
    name: "Beauty & Daily Rituals",
    cadence: "Daily rituals, texture checks, aesthetic morning routines",
    creatorsCount: "18 creators",
    deliverables: "GRWM formats, authentic reviews, raw 4K vertical UGC",
    metrics: "5.4% Avg ER",
  },
  {
    name: "Food & Regional Culture",
    cadence: "Artisanal culinary, regional tasting notes, kitchen ASMR",
    creatorsCount: "14 creators",
    deliverables: "Recipe walkthroughs, pantry integrations, venue visits",
    metrics: "6.8% Avg ER",
  },
  {
    name: "Movement & Conditioning",
    cadence: "Form breakdowns, athletic recovery, intentional wellness",
    creatorsCount: "16 creators",
    deliverables: "Workout integrations, morning routines, gear tests",
    metrics: "5.1% Avg ER",
  },
  {
    name: "Workspaces & Tech EDC",
    cadence: "Ergonomic setups, desk tours, workflow gear breakdowns",
    creatorsCount: "16 creators",
    deliverables: "Hardware reviews, software integrations, workspace tours",
    metrics: "5.9% Avg ER",
  },
];

const METRICS = [
  { value: "64+", label: "Curated cohort creators", sub: "Hand-vetted for aesthetic" },
  { value: "5.2%", label: "Average organic engagement", sub: "Verified retention rate" },
  { value: "14", valueSuffix: " Days", label: "Guaranteed asset delivery", sub: "From brief to 4K delivery" },
  { value: "100%", label: "Rights & Spark Ads cleared", sub: "Pre-cleared 90-day usage" },
];

/* ── Staggered entrance variants ── */
const heroStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const heroChild = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
} as const;

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent text-silver antialiased selection:bg-vermillion selection:text-star-white relative z-10">
      <Navigation />

      <main className="flex-1">
        {/* ━━━━━━━━━━━ HERO SECTION ━━━━━━━━━━━ */}
        <section
          className="relative min-h-[92dvh] flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-36 pb-20 overflow-hidden"
          aria-label="Clouterry Creative Agency"
        >
          <div className="mx-auto max-w-7xl w-full relative z-10">
            {/* Staggered entrance animation */}
            <motion.div
              variants={heroStagger}
              initial="hidden"
              animate="visible"
            >
              {/* Live ecosystem pulse banner */}
              <motion.div
                variants={heroChild}
                className="inline-flex items-center gap-2.5 rounded-md bg-star-white/[0.04] border border-star-white/[0.08] px-4 py-1.5 text-xs text-silver/70 mb-8 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-vermillion opacity-75 animate-ping" style={{ animationDuration: "2s" }} />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-vermillion" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-star-white font-semibold">
                  Q3 Brand Briefings Open
                </span>
                <span className="text-silver/30">•</span>
                <span className="text-silver/60 text-[11px] hidden sm:inline">
                  4 Active Verticals • 64+ Creators
                </span>
              </motion.div>

              {/* Wide 12-Column Grid */}
              <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                {/* Left Column: 7 Cols */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">
                  {/* Clouterry Emblem */}
                  <motion.div variants={heroChild} className="relative h-11 w-16 mb-6">
                    <Image
                      src="/clouterry-mark-white.png"
                      alt="Clouterry emblem"
                      fill
                      sizes="64px"
                      className="object-contain drop-shadow-[0_0_24px_rgba(255,61,46,0.2)]"
                      priority
                    />
                  </motion.div>

                  {/* Enormous Headline */}
                  <motion.h1
                    variants={heroChild}
                    className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-extrabold tracking-[-0.04em] text-star-white leading-[0.96]"
                  >
                    Real creators.
                    <br />
                    Real voice.
                    <br />
                    <span className="relative inline-block">
                      Cohorts brands can trust.
                      {/* Vermillion accent dot */}
                      <span
                        aria-hidden="true"
                        className="inline-block align-baseline ml-2 sm:ml-3 h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-vermillion shadow-[0_0_16px_4px_rgba(255,61,46,0.5)]"
                      />
                    </span>
                  </motion.h1>

                  {/* Supporting narrative */}
                  <motion.p
                    variants={heroChild}
                    className="mt-8 text-base sm:text-lg md:text-xl text-silver/75 leading-relaxed max-w-xl"
                  >
                    Clouterry organizes high-retention micro-creators into curated vertical cohorts, connecting them directly with forward-thinking brands without agency drag, inflated retainers, or spreadsheet friction.
                  </motion.p>

                  {/* Dual CTAs with Magnetic wrappers */}
                  <motion.div
                    variants={heroChild}
                    className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
                  >
                    <MagneticButton strength={0.25}>
                      <Link
                        href="/creators"
                        data-cursor="cta"
                        className="block rounded-md bg-vermillion px-8 py-3.5 text-xs sm:text-sm font-bold text-star-white transition-all duration-300 text-center shadow-[0_0_20px_rgba(255,61,46,0.25)] hover:shadow-[0_0_32px_rgba(255,61,46,0.4)] hover:bg-vermillion-deep focus-visible:outline-2 focus-visible:outline-vermillion"
                      >
                        For Creators: Join a Cohort
                      </Link>
                    </MagneticButton>

                    <MagneticButton strength={0.25}>
                      <Link
                        href="/brands"
                        data-cursor="cta"
                        className="block rounded-md liquid-glass-interactive px-8 py-3.5 text-xs sm:text-sm font-semibold text-star-white text-center border-b-2 border-b-vermillion/60 hover:border-b-vermillion focus-visible:outline-2 focus-visible:outline-vermillion"
                      >
                        For Brands: Explore Cohorts
                      </Link>
                    </MagneticButton>
                  </motion.div>
                </div>

                {/* Right Column: 5 Cols - Live Cohort Terminal */}
                <motion.div
                  variants={heroChild}
                  className="lg:col-span-5 w-full"
                >
                  <HeroCohortTerminal />
                </motion.div>
              </div>
            </motion.div>

            {/* Proof Metrics Bar with Animated Counters */}
            <RevealOnScroll direction="up" delay={0.1}>
              <div className="mt-20 pt-10 border-t border-star-white/8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-left">
                {METRICS.map((m, i) => (
                  <div key={m.label} className="flex flex-col group">
                    <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-star-white tabular-nums">
                      <AnimatedCounter
                        value={m.value}
                        duration={2.5}
                      />
                      {m.valueSuffix && (
                        <span className="text-silver/60 text-2xl sm:text-3xl lg:text-4xl font-semibold">
                          {m.valueSuffix}
                        </span>
                      )}
                    </div>
                    <div className="mt-1.5 text-xs sm:text-sm font-semibold text-star-white/80">
                      {m.label}
                    </div>
                    <div className="mt-0.5 text-[11px] text-silver/50">
                      {m.sub}
                    </div>
                    {/* Subtle vermillion underline on hover */}
                    <div className="mt-3 h-[1px] w-0 bg-vermillion/40 group-hover:w-full transition-all duration-500" />
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ━━━━━━━━━━━ TRUSTED BRANDS CLOUD ━━━━━━━━━━━ */}
        <section className="relative border-y border-star-white/8 bg-void/40 backdrop-blur-xs py-6" aria-label="Brands & Cohort Partners">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 mb-2 text-left text-xs text-silver/40">
            Trusted by creators and brands who value genuine aesthetic discipline
          </div>
          <BrandLogoCloud />
        </section>

        {/* ━━━━━━━━━━━ WHAT WE DO ━━━━━━━━━━━ */}
        <WhatWeDoSection />

        {/* ━━━━━━━━━━━ ACTIVE COHORTS SHOWCASE ━━━━━━━━━━━ */}
        <section className="bg-void/30 backdrop-blur-xs px-6 sm:px-10 lg:px-16 py-24 sm:py-32 text-left border-b border-star-white/8">
          <div className="mx-auto max-w-7xl">
            <RevealOnScroll>
              <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-star-white/8 pb-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-vermillion font-semibold mb-2">
                    Active Verticals
                  </div>
                  <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-star-white">
                    Active Creator Cohorts
                  </h2>
                  <p className="text-xs sm:text-sm text-silver/60 mt-2 max-w-xl">
                    Each cohort is capped at 18 members to preserve aesthetic parity, high retention benchmarks, and dedicated delivery coordination.
                  </p>
                </div>
                <Link
                  href="/brands"
                  className="text-xs font-bold text-silver/70 hover:text-star-white transition-colors duration-300 group"
                >
                  <span className="relative">
                    View full cohort deliverables & pricing
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-vermillion group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              </div>
            </RevealOnScroll>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {COHORTS.map((cohort, i) => (
                <RevealOnScroll key={cohort.name} delay={i * 0.08}>
                  <div className="rounded-xl liquid-glass p-6 flex flex-col justify-between border border-star-white/8 hover:border-vermillion/25 transition-all duration-400 group">
                    <div>
                      <div className="flex items-center justify-between text-xs text-silver/50 mb-3 font-mono">
                        <span>{cohort.creatorsCount}</span>
                        <span className="text-vermillion font-bold tabular-nums">{cohort.metrics}</span>
                      </div>

                      <h3 className="font-display text-xl font-bold text-star-white group-hover:text-vermillion transition-colors duration-300">
                        {cohort.name}
                      </h3>

                      <p className="mt-3 text-xs sm:text-sm text-silver/70 leading-relaxed">
                        {cohort.cadence}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-star-white/8 text-xs text-silver/60">
                      <span className="font-semibold text-star-white">Format:</span> {cohort.deliverables}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━ WORKFLOW PIPELINE ━━━━━━━━━━━ */}
        <WorkflowSection />

        {/* ━━━━━━━━━━━ FOR CREATORS ━━━━━━━━━━━ */}
        <CreatorSection />

        {/* ━━━━━━━━━━━ FOR BRANDS ━━━━━━━━━━━ */}
        <BrandSection />

        {/* ━━━━━━━━━━━ CREATOR ROSTER ━━━━━━━━━━━ */}
        <CreatorShowcase />

        {/* ━━━━━━━━━━━ STORIES & CASE STUDIES ━━━━━━━━━━━ */}
        <StoriesSection />

        {/* ━━━━━━━━━━━ ABOUT / THE STORY ━━━━━━━━━━━ */}
        <section className="border-t border-star-white/8 bg-void/50 backdrop-blur-xs px-6 sm:px-10 lg:px-16 py-24 sm:py-32 text-left">
          <RevealOnScroll>
            <div className="mx-auto max-w-2xl">
              <div className="text-xs uppercase tracking-widest text-vermillion font-semibold mb-3">
                Founding Conviction
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-star-white leading-tight">
                The content economy has
                <br />
                a matching problem.
              </h2>

              <div className="mt-8 space-y-6 text-base text-silver/80 leading-relaxed border-t border-star-white/8 pt-8">
                <p>
                  Every week, millions of talented micro-creators produce magnetic short-form video. Yet most spend 70% of their creative energy cold-pitching brands through overflowing DMs, getting ghosted or pressured into lowball trade deals with zero creative sovereignty.
                </p>
                <p>
                  On the brand side, growth leaders are exhausted by SaaS directories that sell spreadsheets of 50,000 unvetted handles. Marketing teams end up acting as full-time logistics coordinators, wrangling dozens of one-off contracts, endless revision loops, and delayed payouts.
                </p>
                <p className="font-bold text-star-white">
                  Clouterry fixes this through cohort-based talent infrastructure.
                </p>
                <p>
                  We organize creators by genuine cultural category, giving independent voices collective bargaining power while providing brands with an operational roster they can trust on a guaranteed 14-day delivery cycle.
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-star-white/8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-md liquid-glass p-1.5 border border-star-white/10">
                    <Image
                      src="/clouterry-mark-white.png"
                      alt="Clouterry emblem"
                      fill
                      sizes="44px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <div className="font-display text-xs font-bold text-star-white">
                      The Founding Team
                    </div>
                    <div className="text-[11px] text-silver/50">
                      Clouterry Agency, building the future of creator cohorts
                    </div>
                  </div>
                </div>

                <Link
                  href="/about"
                  className="text-xs font-bold text-silver/70 hover:text-star-white transition-colors duration-300 group"
                >
                  <span className="relative">
                    Read full story
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-vermillion group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* ━━━━━━━━━━━ FAQ ━━━━━━━━━━━ */}
        <FaqSection />
      </main>

      <Footer />
    </div>
  );
}
