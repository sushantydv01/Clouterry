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
import { Sparkle, ShieldCheck, Lightning, Users } from "@phosphor-icons/react";

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
  { value: "14 Days", label: "Guaranteed asset delivery", sub: "From brief to 4K delivery" },
  { value: "100%", label: "Rights & Spark Ads cleared", sub: "Pre-cleared 90-day usage" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent text-silver antialiased selection:bg-star-white selection:text-void relative z-10">
      <Navigation />

      <main className="flex-1">
        {/* HERO SECTION: Wide 12-Column Asymmetric Layout filling the screen with depth & soul */}
        <section
          className="relative min-h-[92dvh] flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-36 pb-20 overflow-hidden"
          aria-label="Clouterry Creative Agency"
        >
          {/* Subtle cosmic ember glow backdrop */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/4 w-[700px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(212,169,74,0.09),_rgba(244,243,247,0.02)_50%,_transparent_72%)] blur-3xl z-0"
          />

          <div className="mx-auto max-w-7xl w-full relative z-10">
            {/* Live ecosystem pulse banner */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-star-white/5 border border-star-white/10 px-3.5 py-1 text-xs text-silver/80 mb-8"
            >
              <span className="h-2 w-2 rounded-full bg-ember animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-star-white">
                Q3 Brand Briefings Open
              </span>
              <span className="text-silver/40">•</span>
              <span className="text-silver/70 text-[11px] hidden sm:inline">
                4 Active Verticals • 64+ Creators
              </span>
            </motion.div>

            {/* Wide 12-Column Grid */}
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* Left Column: 7 Cols - Brand Mark, Enormous Typography, Narrative & Dual CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 flex flex-col items-start text-left"
              >
                {/* Authentic Clouterry Planetary Emblem */}
                <div className="relative h-11 w-16 mb-6">
                  <Image
                    src="/clouterry-mark-white.png"
                    alt="Clouterry emblem"
                    fill
                    sizes="64px"
                    className="object-contain drop-shadow-[0_0_20px_rgba(244,243,247,0.35)]"
                    priority
                  />
                </div>

                {/* Enormous Headline with hand-set line breaks */}
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-extrabold tracking-[-0.035em] text-star-white leading-[0.98]">
                  Real creators.
                  <br />
                  Real voice.
                  <br />
                  Cohorts brands can trust.
                  {/* Subtle glowing ember starlight accent */}
                  <span
                    aria-hidden="true"
                    className="inline-block align-baseline ml-3 sm:ml-4 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-ember shadow-[0_0_12px_3px_rgba(212,169,74,0.85)] animate-pulse"
                  />
                </h1>

                {/* Calm, unhurried supporting narrative */}
                <p className="mt-8 text-base sm:text-lg md:text-xl text-silver/85 leading-relaxed max-w-xl">
                  Clouterry organizes high-retention micro-creators into curated vertical cohorts, connecting them directly with forward-thinking brands without agency drag, inflated retainers, or spreadsheet friction.
                </p>

                {/* Dual CTAs with Clear Visual Hierarchy */}
                <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                  <Link
                    href="/creators"
                    className="rounded-md bg-star-white px-8 py-3.5 text-xs sm:text-sm font-bold text-void transition-all hover:bg-star-white/90 text-center shadow-md focus-visible:outline-2 focus-visible:outline-star-white"
                  >
                    For Creators: Join a Cohort
                  </Link>

                  <Link
                    href="/brands"
                    className="rounded-md liquid-glass-interactive px-8 py-3.5 text-xs sm:text-sm font-semibold text-star-white text-center border-b-2 border-b-ember/80 hover:border-b-ember focus-visible:outline-2 focus-visible:outline-ember"
                  >
                    For Brands: Explore Cohorts
                  </Link>
                </div>
              </motion.div>

              {/* Right Column: 5 Cols - Live Cohort Terminal (Filling the empty space with authentic soul) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 w-full"
              >
                <HeroCohortTerminal />
              </motion.div>
            </div>

            {/* Proof Metrics Bar: Spans across the full width */}
            <div className="mt-20 pt-10 border-t border-star-white/10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-left">
              {METRICS.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-star-white">
                    {m.value}
                  </div>
                  <div className="mt-1.5 text-xs sm:text-sm font-semibold text-star-white/90">
                    {m.label}
                  </div>
                  <div className="mt-0.5 text-[11px] text-silver/60">
                    {m.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUSTED BRANDS CLOUD: Hairline rule boundary receiving subtle ambient bleed */}
        <section className="relative border-y border-star-white/10 bg-void/40 backdrop-blur-xs py-6" aria-label="Brands & Cohort Partners">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 mb-2 text-left text-xs text-silver/50">
            Trusted by creators and brands who value genuine aesthetic discipline
          </div>
          <BrandLogoCloud />
        </section>

        {/* WHAT WE DO SECTION: The 4 Core Pillars of the Cohort Model */}
        <WhatWeDoSection />

        {/* ACTIVE COHORTS SHOWCASE: Wide 4-column editorial grid */}
        <section className="bg-void/30 backdrop-blur-xs px-6 sm:px-10 lg:px-16 py-24 sm:py-32 text-left border-b border-star-white/10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-star-white/10 pb-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-ember font-semibold mb-2">
                  Active Verticals
                </div>
                <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-star-white">
                  Active Creator Cohorts
                </h2>
                <p className="text-xs sm:text-sm text-silver/70 mt-2 max-w-xl">
                  Each cohort is capped at 18 members to preserve aesthetic parity, high retention benchmarks, and dedicated delivery coordination.
                </p>
              </div>
              <Link
                href="/brands"
                className="text-xs font-bold text-silver underline underline-offset-4 hover:text-star-white transition-colors"
              >
                View full cohort deliverables & pricing
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {COHORTS.map((cohort) => (
                <div
                  key={cohort.name}
                  className="rounded-xl liquid-glass p-6 flex flex-col justify-between border border-star-white/10 hover:border-star-white/25 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-silver/60 mb-3 font-mono">
                      <span>{cohort.creatorsCount}</span>
                      <span className="text-ember font-bold">{cohort.metrics}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-star-white">
                      {cohort.name}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-silver/80 leading-relaxed">
                      {cohort.cadence}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-star-white/10 text-xs text-silver/70">
                    <span className="font-semibold text-star-white">Format:</span> {cohort.deliverables}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORKFLOW PIPELINE: The 14-Day Delivery Engine */}
        <WorkflowSection />

        {/* FOR CREATORS SECTION: Space-Deep depth with warmer ember backlight & liquid glass form */}
        <CreatorSection />

        {/* FOR BRANDS SECTION: Restrained void, quiet lighting, 1 paragraph, quiet list & booking modal */}
        <BrandSection />

        {/* CREATOR ROSTER SHOWCASE: Pure typography, verified handles, zero stock photos */}
        <CreatorShowcase />

        {/* STORIES & CASE STUDIES: Tangible campaign metrics & ROAS outcomes */}
        <StoriesSection />

        {/* ABOUT / THE STORY: Reads like a human-written letter, narrow measure */}
        <section className="border-t border-star-white/10 bg-void/50 backdrop-blur-xs px-6 sm:px-10 lg:px-16 py-24 sm:py-32 text-left">
          <div className="mx-auto max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-ember font-semibold mb-3">
              Founding Conviction
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-star-white leading-tight">
              The content economy has
              <br />
              a matching problem.
            </h2>

            <div className="mt-8 space-y-6 text-base text-silver/90 leading-relaxed border-t border-star-white/10 pt-8">
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

            <div className="mt-10 pt-6 border-t border-star-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-md liquid-glass p-1.5 border border-star-white/15">
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
                  <div className="text-[11px] text-silver/60">
                    Clouterry Agency, building the future of creator cohorts
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="text-xs font-bold text-silver underline hover:text-star-white transition-colors"
              >
                Read full story
              </Link>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <FaqSection />
      </main>

      <Footer />
    </div>
  );
}
