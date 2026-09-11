"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkle } from "@phosphor-icons/react";

const HERO_COHORTS = [
  {
    id: "beauty",
    number: "01",
    tag: "Beauty & Rituals",
    shortLabel: "Beauty",
    creator: "Maya Lin",
    handle: "@mayaskinritual",
    followers: "48k Community",
    metric: "8.4% Save Rate",
    tagline: "Natural morning light, tactile textures, zero scripted reads.",
    image: "/creators/maya.jpg",
  },
  {
    id: "culinary",
    number: "02",
    tag: "Artisanal Culinary",
    shortLabel: "Culinary",
    creator: "Mateo Silva",
    handle: "@mateotables",
    followers: "62k Community",
    metric: "12.1% Engagement",
    tagline: "Cast-iron acoustics, farm-to-table technique, terroir discovery.",
    image: "/creators/mateo.jpg",
  },
  {
    id: "movement",
    number: "03",
    tag: "Movement & Form",
    shortLabel: "Movement",
    creator: "Elena Rostova",
    handle: "@elenamovement",
    followers: "34k Community",
    metric: "11.6% Retention",
    tagline: "Kinetic form breakdowns, architectural studios, honest recovery.",
    image: "/creators/elena.jpg",
  },
  {
    id: "tech",
    number: "04",
    tag: "Workspaces & EDC",
    shortLabel: "EDC / Tech",
    creator: "Kai Tanaka",
    handle: "@kaicrafts",
    followers: "72k Community",
    metric: "9.2% Save Rate",
    tagline: "Tactile gear loadouts, mechanical audio, cinematic desk craft.",
    image: "/creators/kai.jpg",
  },
];

export default function HeroVisualDeck() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = HERO_COHORTS[activeIdx];

  return (
    <div className="relative w-full max-w-lg lg:max-w-none">
      {/* Background ambient decorative card border glow */}
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-yellow/20 via-transparent to-red-deep/40 blur-sm pointer-events-none" />

      {/* Main Container Card */}
      <div className="relative rounded-lg border border-cream/20 bg-red-deep/80 p-5 sm:p-6 backdrop-blur-sm shadow-md text-cream">
        {/* Top Telemetry Header */}
        <div className="flex items-center justify-between border-b border-cream/15 pb-3.5">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow" />
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-cream">
              Live Cohort Radar
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-cream/55">
            <span>INTAKE 2026</span>
            <span>·</span>
            <span>14-DAY CADENCE</span>
          </div>
        </div>

        {/* Visual Showcase Window with AnimatePresence */}
        <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden rounded-md border border-cream/20 bg-red-deep">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.015 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full w-full will-change-transform"
            >
              <Image
                src={current.image}
                alt={current.creator}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
              />

              {/* Gradient Scrim for effortless readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent pointer-events-none" />

              {/* Top Pill Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-sm bg-red px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-cream shadow-xs border border-cream/25">
                  <Sparkle size={10} weight="fill" />
                  <span>{current.tag}</span>
                </span>

                {/* Subtle Voice Waveform Visualizer */}
                <div
                  className="flex items-end gap-0.5 rounded-sm bg-ink/75 px-2 py-1 backdrop-blur-sm"
                  title="Authentic creator voice verified"
                >
                  <span className="h-2 w-0.5 rounded-full bg-cream animate-pulse [animation-duration:1.2s]" />
                  <span className="h-3.5 w-0.5 rounded-full bg-cream animate-pulse [animation-duration:0.9s] [animation-delay:120ms]" />
                  <span className="h-2.5 w-0.5 rounded-full bg-cream animate-pulse [animation-duration:1.4s] [animation-delay:260ms]" />
                  <span className="h-1.5 w-0.5 rounded-full bg-cream animate-pulse [animation-duration:1.1s] [animation-delay:380ms]" />
                  <span className="ml-1 font-mono text-[9px] uppercase tracking-wider text-cream/75">
                    Live Audio
                  </span>
                </div>
              </div>

              {/* Bottom Creator Meta Overlay */}
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <div className="font-display text-lg font-bold text-cream sm:text-xl leading-tight">
                    {current.creator}
                  </div>
                  <div className="font-mono text-xs text-cream/70 mt-0.5">
                    {current.handle} · {current.followers}
                  </div>
                </div>

                <div className="rounded-sm bg-cream/15 px-2 py-1 backdrop-blur-sm border border-cream/20 text-right">
                  <div className="font-mono text-[11px] font-bold text-yellow leading-none">
                    {current.metric}
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-cream/60 mt-0.5">
                    Verified
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dynamic Tagline Quote */}
        <div className="mt-3.5 flex items-start gap-2 text-xs font-body text-cream/85 leading-relaxed min-h-[2.5rem]">
          <span className="font-mono text-yellow font-bold text-sm leading-none shrink-0 mt-0.5">
            ↳
          </span>
          <span>{current.tagline}</span>
        </div>

        {/* Interactive Cohort Switcher Buttons */}
        <div className="mt-4 grid grid-cols-4 gap-2 border-t border-cream/15 pt-3.5">
          {HERO_COHORTS.map((cohort, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={cohort.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`btn-press group rounded-md px-2.5 py-2 text-left cursor-pointer ${
                  isSelected
                    ? "bg-cream text-red shadow-xs font-bold"
                    : "bg-cream/10 text-cream/80 hover:bg-cream/20 hover:text-cream border border-cream/15"
                }`}
              >
                <div
                  className={`font-mono text-[10px] ${
                    isSelected ? "text-red-deep font-bold" : "text-yellow/75 group-hover:text-yellow"
                  }`}
                >
                  0{idx + 1}
                </div>
                <div className="truncate font-display text-xs font-bold leading-tight mt-0.5">
                  {cohort.shortLabel}
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Proof Strip & Rotating Studio Seal */}
        <div className="mt-4 flex items-center justify-between border-t border-cream/15 pt-3.5">
          <div className="space-y-0.5">
            <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-cream">
              100% Commercial Usage Rights
            </div>
            <div className="font-body text-xs text-cream/70">
              Guaranteed delivery within 14 business days.
            </div>
          </div>

          {/* Rotating Graphic Studio Seal */}
          <div className="relative h-12 w-12 shrink-0 select-none">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full animate-[spin_26s_linear_infinite]"
            >
              <path
                id="heroSealCircle"
                d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                fill="none"
              />
              <text className="text-[10px] font-mono uppercase tracking-[0.24em] fill-cream/70">
                <textPath href="#heroSealCircle" startOffset="0%">
                  CLOUTERRY TALENT · COHORTS · 2026 ·
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Image
                src="/clouterry-mark-white.png"
                alt="Clouterry Mark"
                width={18}
                height={18}
                className="object-contain opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
