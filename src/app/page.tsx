"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroVisualDeck from "@/components/HeroVisualDeck";
import AgencyTicker from "@/components/AgencyTicker";
import CohortExhibition from "@/components/CohortExhibition";
import TalentRoster from "@/components/TalentRoster";
import AgencyProtocol from "@/components/AgencyProtocol";
import CreatorSection from "@/components/CreatorSection";
import BrandSection from "@/components/BrandSection";
import Footer from "@/components/Footer";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react";
import { heroStagger, heroChild, motionEase } from "@/lib/motion";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Bounded, organic depth movement (15-38px across full hero exit)
  const textY = useTransform(scrollYProgress, [0, 1], [0, 22]);
  const deckY = useTransform(scrollYProgress, [0, 1], [0, 36]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.3]);

  return (
    <div className="flex min-h-screen flex-col bg-red text-cream selection:bg-yellow selection:text-ink">
      <Navigation />

      <main className="flex-1">
        {/* ── 01. Hero Section: Left-aligned bold editorial layout with live cohort deck on right ── */}
        <section
          ref={heroRef}
          className="relative flex min-h-[calc(100dvh-4.5rem)] flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:px-16 overflow-hidden border-b border-cream/15"
          aria-label="Clouterry Hero"
        >
          {/* Subtle editorial corner coordinates */}
          <div className="hidden lg:flex absolute top-6 left-10 items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-cream/40">
            <span>CLOUTERRY INC.</span>
            <span>/</span>
            <span>40.7128° N, 74.0060° W</span>
          </div>

          <div className="hidden lg:flex absolute top-6 right-10 items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-cream/50">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-yellow animate-pulse-subtle" />
            <span>ACCEPTING COHORT APPLICANTS</span>
          </div>

          <motion.div style={{ opacity: heroOpacity }} className="mx-auto w-full max-w-7xl">
            <motion.div
              variants={heroStagger}
              initial="hidden"
              animate="visible"
              className="grid gap-12 lg:grid-cols-12 lg:gap-14 items-center"
            >
              {/* ── Left Column: Left-aligned massive display headlines & agency thesis with subtle depth ── */}
              <motion.div style={{ y: textY }} className="lg:col-span-7 flex flex-col items-start text-left">
                {/* Micro Eyebrow */}
                <motion.div
                  variants={heroChild}
                  className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-3.5 py-1 text-xs font-mono tracking-wider text-cream/80"
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-yellow animate-pulse-subtle" />
                  <span>CURATED CREATOR COHORT AGENCY · 2026</span>
                </motion.div>

                {/* Main Headline: Hand-set line breaks, massive editorial scale */}
                <motion.h1
                  variants={heroChild}
                  className="mt-5 font-display text-4xl font-extrabold leading-[0.93] tracking-[-0.04em] text-cream sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[5.9rem]"
                >
                  Real creators.
                  <br />
                  Real voice.
                  <br />
                  <motion.span
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.28, ease: motionEase }}
                    className="inline-block font-serif italic font-normal text-yellow"
                  >
                    Cohorts
                  </motion.span>{" "}
                  brands can trust.
                </motion.h1>

                {/* Unhurried Agency Thesis Statement */}
                <motion.p
                  variants={heroChild}
                  className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:mt-7 sm:text-lg font-body"
                >
                  Clouterry organizes high-retention micro-creators into curated vertical cohorts, connecting
                  them directly with forward-thinking brands on a guaranteed 14-day turnaround.
                </motion.p>

                {/* CTAs: Crisp rectangular shape language with tactile response */}
                <motion.div
                  variants={heroChild}
                  className="mt-8 flex flex-col items-stretch gap-3.5 sm:mt-9 sm:flex-row sm:items-center w-full sm:w-auto"
                >
                  <Link
                    href="/creators"
                    className="btn-press group inline-flex items-center justify-center gap-2 rounded-md bg-cream px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-red hover:bg-yellow hover:text-ink focus-visible:outline-2 focus-visible:outline-yellow shadow-sm"
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
                    className="btn-press inline-flex items-center justify-center rounded-md border border-cream/80 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-cream hover:bg-cream hover:text-red focus-visible:outline-2 focus-visible:outline-yellow"
                  >
                    For Brands: Explore Cohorts
                  </Link>
                </motion.div>

                {/* Key Agency Telemetry Strip */}
                <motion.div
                  variants={heroChild}
                  className="mt-10 grid grid-cols-3 gap-6 border-t border-cream/15 pt-6 w-full max-w-lg"
                >
                  <div>
                    <div className="font-display text-2xl font-extrabold text-cream">14-Day</div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-cream/60 mt-0.5">
                      Delivery Cadence
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-extrabold text-cream">100%</div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-cream/60 mt-0.5">
                      Creator Voice
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-extrabold text-cream">0%</div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-cream/60 mt-0.5">
                      Exclusive Locks
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* ── Right Column: Interactive Live Cohort Deck with subtle scroll depth ── */}
              <motion.div
                style={{ y: deckY }}
                variants={heroChild}
                className="lg:col-span-5 flex flex-col items-center lg:items-end w-full"
              >
                <HeroVisualDeck />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator Micro Cue */}
          <div className="mt-12 hidden lg:flex items-center gap-2 text-cream/40 pl-2">
            <span className="font-mono text-[11px] uppercase tracking-widest">Scroll to Exhibition</span>
            <ArrowDown size={12} weight="bold" className="animate-bounce" />
          </div>
        </section>

        {/* ── 02. Kinetic Agency Ticker: Crimson register ── */}
        <AgencyTicker tone="red" />

        {/* ── 03. Selected Cohorts Exhibition: Asymmetric art-directed gallery spread ── */}
        <CohortExhibition />

        {/* ── 04. Kinetic Agency Ticker: Dark transition into the talent roster ── */}
        <AgencyTicker
          tone="dark"
          items={[
            "FEATURED TALENT ROSTER",
            "VERIFIED RETENTION METRICS",
            "BEAUTY · CULINARY · TECH · MOVEMENT",
            "GUARANTEED 14-DAY CADENCE",
            "DIRECT COMMERCIAL RIGHTS",
          ]}
        />

        {/* ── 05. The Talent Roster: Fashion-editorial creator contact sheet ── */}
        <TalentRoster />

        {/* ── 06. Operating Model & Capabilities: Architectural 4-step framework ── */}
        <AgencyProtocol />

        {/* ── 07. For Creators: Full-bleed explosive red register with bare underlined inputs ── */}
        <CreatorSection />

        {/* ── 08. For Brands: Restrained luxury register with active dossier & booking modal ── */}
        <BrandSection />

        {/* ── 09. The Manifesto / Editorial Letter: Narrow measure, high craft ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: motionEase }}
          className="border-t border-cream/15 bg-red-deep/60 px-6 py-24 text-left sm:px-10 sm:py-32 lg:px-16 text-cream"
        >
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full bg-yellow" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-cream/60">
                Studio Thesis · 2026
              </span>
            </div>

            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-cream sm:text-4xl md:text-5xl">
              The content economy has
              <br />
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.15, ease: motionEase }}
                className="inline-block font-serif italic font-normal text-yellow"
              >
                a matching problem.
              </motion.span>
            </h2>

            <div className="mt-8 space-y-6 border-t border-cream/15 pt-8 text-base leading-relaxed text-cream/85 font-body sm:text-lg">
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
              <p className="font-semibold text-cream font-display text-xl sm:text-2xl pt-2">
                Clouterry fixes this through cohort-based talent infrastructure.
              </p>
              <p>
                We organize creators by genuine cultural category, giving independent voices collective
                bargaining power while providing brands with an operational roster they can trust on a
                guaranteed 14-day delivery cycle.
              </p>
            </div>

            <div className="mt-12 flex flex-col justify-between gap-4 border-t border-cream/15 pt-6 sm:flex-row sm:items-center">
              <div>
                <div className="font-display text-sm font-bold text-cream">The Founding Team</div>
                <div className="text-xs text-cream/60 font-mono uppercase tracking-wider">
                  Clouterry Talent Infrastructure Inc.
                </div>
              </div>

              <Link
                href="/about"
                className="btn-press group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cream/80 hover:text-yellow transition-colors"
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
        </motion.section>
      </main>

      {/* ── 10. Footer: Enormous typographic statement, live timezones & direct contact ── */}
      <Footer />
    </div>
  );
}
