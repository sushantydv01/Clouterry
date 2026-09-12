"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkle,
  SlidersHorizontal,
  Waveform,
  VideoCamera,
  SpeakerHigh,
  Clock,
  ArrowUpRight,
} from "@phosphor-icons/react";
import Link from "next/link";

interface CohortPreview {
  id: string;
  number: string;
  name: string;
  subniche: string;
  hookRate: string;
  camera: string;
  audioSignature: string;
  lighting: string;
  sampleAngle: string;
  status: string;
  frequencies: number[];
}

const COHORT_PREVIEWS: CohortPreview[] = [
  {
    id: "beauty",
    number: "01",
    name: "Beauty & Daily Rituals",
    subniche: "Natural luminescence & daylight skincare",
    hookRate: "48.6%",
    camera: "4K 60fps ProRes Log // Daylight macro 35mm",
    audioSignature: "Tactile bottle clicks, unhurried ASMR, room resonance",
    lighting: "North-facing indirect daylight // Zero ring lights",
    sampleAngle: "Honest 7-day unhurried skin check without teleprompter reads",
    status: "Active Sprint",
    frequencies: [32, 64, 45, 88, 70, 95, 60, 42, 85, 92, 50, 68, 78, 40, 80],
  },
  {
    id: "culinary",
    number: "02",
    name: "Artisanal Culinary",
    subniche: "Regional terroir & farm-to-table technique",
    hookRate: "52.4%",
    camera: "4K 120fps Macro // Natural kitchen window",
    audioSignature: "Cast-iron sear, knife board rhythm, boiling simmer",
    lighting: "Warm tungsten ambient with cold daylight rim",
    sampleAngle: "The 3-ingredient sourdough fermentation crumb check",
    status: "Active Sprint",
    frequencies: [55, 80, 92, 75, 40, 60, 88, 98, 70, 85, 65, 90, 45, 82, 94],
  },
  {
    id: "workspaces",
    number: "03",
    name: "Workspaces & Tech EDC",
    subniche: "Tactile hardware, mechanical acoustics, desk setup",
    hookRate: "47.8%",
    camera: "Sony FX3 / 50mm Prime // Shallow depth of field",
    audioSignature: "Mechanical switch clatter, cable click, aluminum friction",
    lighting: "Controlled moody side-softbox // Matte dark surfaces",
    sampleAngle: "Cableless aluminum travel setup stress-tested over 72 hours",
    status: "Accepting Talent",
    frequencies: [40, 70, 85, 60, 95, 80, 50, 72, 88, 65, 90, 78, 84, 60, 70],
  },
  {
    id: "movement",
    number: "04",
    name: "Movement & Conditioning",
    subniche: "Kinetic form, architectural spaces, recovery science",
    hookRate: "44.9%",
    camera: "Wide 24mm Stabilized // Outdoor concrete geometry",
    audioSignature: "Grip cadence, breathing tempo, clean ambient wind",
    lighting: "High-contrast golden hour / dawn shadows",
    sampleAngle: "Uncut 3-minute mobility routine prior to heavy pull session",
    status: "Active Sprint",
    frequencies: [70, 45, 60, 85, 78, 92, 65, 80, 50, 75, 88, 96, 62, 72, 84],
  },
];

export default function HeroCulturalMatrix() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCohort = COHORT_PREVIEWS[activeTab];

  return (
    <div className="w-full max-w-4xl mx-auto my-6 sm:my-8 text-left relative">
      {/* Subtle atmospheric backlight pool behind console */}
      <div
        className="absolute -inset-2 rounded-3xl bg-gradient-to-b from-cream-dim/60 via-cream/40 to-transparent blur-xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Outer Architectural Liquid Glass Console */}
      <div className="glass-cream-primary rounded-2xl overflow-hidden transition-all duration-300 relative">
        {/* Ambient fine grid underlay */}
        <div className="absolute inset-0 bg-ambient-grid-dense opacity-60 pointer-events-none" aria-hidden="true" />

        {/* Top Studio Control Bar */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 bg-cream/70 backdrop-blur-md px-4 py-2.5 sm:px-6 sm:py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red" />
            </span>
            <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-ink/90">
              Live Cohort Radar // Sprint Cycle 03
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs font-mono text-ink/70">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-ink/60">
              <span className="inline-block h-1 w-1 rounded-full bg-ink/40" />
              14-Day Delivery Standard
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-red bg-red/10 border border-red/20">
              <Sparkle size={11} weight="fill" className="text-gold" />
              <span>4 Active Verticals</span>
            </span>
          </div>
        </div>

        {/* Vertical Tabs: Tactile segmented liquid glass selector */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 border-b border-ink/10 bg-cream/40 backdrop-blur-sm">
          {COHORT_PREVIEWS.map((cohort, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={cohort.id}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`group relative flex flex-col p-3 sm:p-4 text-left transition-all duration-200 cursor-pointer border-r last:border-r-0 border-ink/10 ${
                  isActive
                    ? "bg-cream/90 text-ink font-semibold"
                    : "text-ink/65 hover:bg-cream/50 hover:text-ink"
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                  <span className={isActive ? "text-red font-bold" : "text-ink/45"}>
                    {cohort.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-ink/50 hidden md:inline">
                    {cohort.status}
                  </span>
                </div>
                <span className="font-display text-xs sm:text-sm font-bold tracking-tight line-clamp-1">
                  {cohort.name}
                </span>

                {/* Active Indicator Bar with Liquid Pill Feel */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-red shadow-[0_0_8px_rgba(196,30,58,0.5)]"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Live Cohort Specification Console */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCohort.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 p-5 sm:p-7 space-y-6"
          >
            {/* Top row: Niche Title + Acoustic Frequency Visualizer */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-ink/10 pb-5">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-ink/50 block mb-1">
                  Aesthetic Discipline // Spec Roster
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">
                  {activeCohort.name}
                </h3>
                <p className="text-xs sm:text-sm text-ink/75 font-body mt-0.5">
                  {activeCohort.subniche}
                </p>
              </div>

              {/* Acoustic Frequency Waveform (Illuminated Graphic Bars) */}
              <div className="flex flex-col items-start sm:items-end gap-1.5 p-2 rounded-lg bg-cream/50 border border-ink/8">
                <div className="flex items-center gap-1.5 text-[10.5px] font-mono text-ink/65">
                  <Waveform size={13} className="text-red" />
                  <span>Room Acoustic Resonance</span>
                </div>
                <div className="flex items-end gap-1 h-6 px-1">
                  {activeCohort.frequencies.map((height, i) => (
                    <span
                      key={i}
                      style={{ height: `${height}%` }}
                      className="w-1 rounded-xs bg-ink/75 transition-all duration-300 group-hover:bg-red shadow-[0_0_2px_rgba(26,20,16,0.2)]"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Middle Grid: Tangible Production Parameters with Glass Cards */}
            <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4 text-xs font-body">
              <div className="glass-cream-secondary rounded-xl p-3.5 glass-interactive">
                <div className="flex items-center gap-1.5 text-ink/50 font-mono text-[10.5px] mb-1.5">
                  <VideoCamera size={13} className="text-red" />
                  <span className="uppercase tracking-wider">Camera Standard</span>
                </div>
                <div className="font-semibold text-ink leading-snug">{activeCohort.camera}</div>
              </div>

              <div className="glass-cream-secondary rounded-xl p-3.5 glass-interactive">
                <div className="flex items-center gap-1.5 text-ink/50 font-mono text-[10.5px] mb-1.5">
                  <SpeakerHigh size={13} className="text-red" />
                  <span className="uppercase tracking-wider">Acoustic Profile</span>
                </div>
                <div className="font-semibold text-ink leading-snug">{activeCohort.audioSignature}</div>
              </div>

              <div className="glass-cream-secondary rounded-xl p-3.5 glass-interactive">
                <div className="flex items-center gap-1.5 text-ink/50 font-mono text-[10.5px] mb-1.5">
                  <SlidersHorizontal size={13} className="text-red" />
                  <span className="uppercase tracking-wider">Lighting Rig</span>
                </div>
                <div className="font-semibold text-ink leading-snug">{activeCohort.lighting}</div>
              </div>

              <div className="glass-cream-secondary rounded-xl p-3.5 glass-interactive flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-ink/50 font-mono text-[10.5px] mb-1">
                    <Clock size={13} className="text-red" />
                    <span className="uppercase tracking-wider">Avg Hook Retention</span>
                  </div>
                  <div className="font-display text-lg font-extrabold text-red leading-none mt-1">
                    {activeCohort.hookRate}
                  </div>
                </div>
                {/* Mini retention progress track */}
                <div className="mt-2 h-1 w-full bg-ink/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red rounded-full transition-all duration-500"
                    style={{ width: activeCohort.hookRate }}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Row: Sample Angle & Translucent Action Pill */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-ink/10 text-xs">
              <div className="flex items-start sm:items-center gap-2">
                <span className="font-mono text-[10.5px] text-red font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red/10 border border-red/20 shrink-0">
                  Angle Blueprint
                </span>
                <span className="text-ink/80 italic font-body">{activeCohort.sampleAngle}</span>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/cohorts"
                  className="glass-cream-subtle hover:bg-cream/90 text-ink font-mono font-bold text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 transition-all shadow-xs active:scale-95"
                >
                  <span>Explore All Cohorts</span>
                  <ArrowUpRight size={12} weight="bold" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
