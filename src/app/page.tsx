"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroCulturalMatrix from "@/components/HeroCulturalMatrix";
import AgencyTicker from "@/components/AgencyTicker";
import CohortExhibition from "@/components/CohortExhibition";
import SampleCampaign from "@/components/SampleCampaign";
import AgencyProtocol from "@/components/AgencyProtocol";
import CreatorSection from "@/components/CreatorSection";
import BrandSection from "@/components/BrandSection";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "@phosphor-icons/react";
import { heroStagger, heroChild, heroHeadline } from "@/lib/motion";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-cream text-ink selection:bg-gold selection:text-ink">
      <Navigation tone="cream" />

      <main className="flex-1">
        {/* ── 01. Hero Section: Confident editorial lockup with interactive cultural matrix ── */}
        <section
          className="relative flex min-h-[calc(100dvh-4rem)] flex-col items-center justify-center px-6 pt-14 pb-16 sm:px-10 sm:pt-20 sm:pb-24 lg:px-16 overflow-hidden border-b border-ink/10"
          aria-label="Clouterry Hero"
        >
          <div className="mx-auto w-full max-w-5xl flex flex-col items-center text-center">
            <motion.div
              variants={heroStagger}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center w-full"
            >
              {/* Clear Initial Positioning Badge */}
              <motion.div
                variants={heroChild}
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream-dim/80 px-3.5 py-1 text-xs font-semibold text-ink mb-5 sm:mb-6"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-red animate-pulse" />
                <span>Cohort-Based Talent Infrastructure // 14-Day Delivery Cadence</span>
              </motion.div>

              {/* Massive Hand-Set Headline */}
              <motion.h1
                variants={heroHeadline}
                className="font-display text-5xl font-extrabold leading-[0.96] tracking-[-0.045em] text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem]"
              >
                Real creators.
                <br />
                Real voice.
                <br />
                Cohorts brands can trust.
              </motion.h1>

              {/* Unhurried Agency Thesis Statement */}
              <motion.p
                variants={heroChild}
                className="mt-6 max-w-xl text-base leading-relaxed text-ink/80 sm:mt-7 sm:text-lg font-body"
              >
                Clouterry organizes high-retention micro-creators into curated vertical cohorts, connecting
                them directly with forward-thinking brands on a guaranteed 14-day turnaround.
              </motion.p>

              {/* Dual Crisp CTAs */}
              <motion.div
                variants={heroChild}
                className="mt-8 flex flex-col items-stretch gap-3.5 sm:mt-9 sm:flex-row sm:items-center w-full sm:w-auto"
              >
                <Link
                  href="/creators"
                  className="btn-press group inline-flex items-center justify-center gap-2 rounded-md bg-red px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-cream hover:bg-red-deep focus-visible:outline-2 focus-visible:outline-gold shadow-xs"
                >
                  <span>For Creators: Join a Cohort</span>
                  <ArrowUpRight
                    size={14}
                    weight="bold"
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  href="/brands"
                  className="btn-press inline-flex items-center justify-center rounded-md border border-ink/40 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-ink hover:border-ink hover:bg-ink hover:text-cream focus-visible:outline-2 focus-visible:outline-gold transition-colors"
                >
                  For Brands: Explore Cohorts
                </Link>
              </motion.div>

              {/* Interactive Cultural Matrix Centerpiece */}
              <motion.div variants={heroChild} className="w-full mt-10 sm:mt-12">
                <HeroCulturalMatrix />
              </motion.div>

              {/* Supporting credibility line */}
              <motion.p
                variants={heroChild}
                className="mt-6 border-t border-ink/10 pt-5 text-sm text-ink/60 font-body w-full max-w-md"
              >
                14-day delivery cadence. Full creative sovereignty. No exclusive locks.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── 02. Single Kinetic Agency Ticker: Warm cream transition ── */}
        <AgencyTicker tone="cream" />

        {/* ── 03. Selected Cohorts Exhibition: High-craft typographic and technical dossier ── */}
        <CohortExhibition />

        {/* ── 04. Demonstration Campaign: Tangible proof of briefs, matching & delivery kit ── */}
        <SampleCampaign />

        {/* ── 05. Operating Model & Pipeline: Architectural 6-stage production timeline ── */}
        <AgencyProtocol />

        {/* ── 06. For Creators: The explosive full-bleed red register with bare underlined inputs ── */}
        <CreatorSection />

        {/* ── 07. For Brands: The quiet, restrained luxury cream register with active dossier & booking modal ── */}
        <BrandSection />

        {/* ── 08. The Manifesto / Editorial Letter: Narrow measure, rich letter craft ── */}
        <section
          className="border-t border-ink/15 bg-cream-dim/50 px-6 py-24 text-left sm:px-10 sm:py-32 lg:px-16 text-ink"
        >
          <div className="mx-auto max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-red mb-4">
              Studio Manifesto
            </div>

            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
              The content economy has
              <br />
              a matching problem.
            </h2>

            <div className="mt-8 space-y-6 border-t border-ink/10 pt-8 text-base leading-relaxed text-ink/80 font-body sm:text-lg">
              <p>
                Every week, millions of talented micro-creators produce magnetic short-form video. Yet most
                spend 70% of their creative energy cold-pitching brands through overflowing DMs, getting ghosted
                or pressured into lowball trade deals with zero creative sovereignty.
              </p>
              <p>
                On the brand side, growth leaders are exhausted by directories that sell spreadsheets of
                unvetted handles. Marketing teams end up acting as full-time logistics coordinators, wrangling
                dozens of one-off contracts, shipping errors, and delayed payouts.
              </p>
              <p className="font-semibold text-ink font-display text-xl sm:text-2xl pt-2">
                Clouterry fixes this through cohort-based talent infrastructure.
              </p>
              <p>
                We organize creators by genuine cultural category, giving independent voices collective
                bargaining power while providing brands with an operational roster they can trust on a
                guaranteed 14-day delivery cycle.
              </p>
            </div>

            <div className="mt-12 flex flex-col justify-between gap-4 border-t border-ink/10 pt-6 sm:flex-row sm:items-center">
              <div>
                <div className="font-display text-sm font-bold text-ink">The Founding Team</div>
                <div className="text-xs text-ink/60 font-body">
                  Clouterry Talent Infrastructure
                </div>
              </div>

              <Link
                href="/about"
                className="btn-press group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red hover:text-red-deep transition-colors"
              >
                <span>Read Full Studio Story</span>
                <ArrowUpRight
                  size={14}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── 09. Minimal Footer: Direct email, Instagram, copyright ── */}
      <Footer />
    </div>
  );
}
