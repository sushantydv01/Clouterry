"use client";

import React from "react";

interface AgencyTickerProps {
  tone?: "cream" | "red" | "dark" | "cobalt" | "acid";
  speed?: "normal" | "slow";
  className?: string;
  items?: string[];
}

const DEFAULT_ITEMS = [
  "CLOUTERRY CREATIVE ROSTER",
  "CURATED VERTICAL COHORTS",
  "100% AESTHETIC SOVEREIGNTY",
  "14-DAY CADENCE GUARANTEED",
  "ZERO VANITY METRICS",
  "RADICAL BRAND-CREATOR FIT",
  "SHORT-FORM CINEMA & CULTURE",
];

export default function AgencyTicker({
  tone = "cream",
  speed = "normal",
  className = "",
  items = DEFAULT_ITEMS,
}: AgencyTickerProps) {
  const toneClasses = {
    cream: "glass-cream-subtle text-ink border-y border-ink/10 shadow-xs",
    dark: "glass-dark-primary text-cream border-y border-cream/15 shadow-sm",
    red: "glass-red-primary text-cream border-y border-cream/25 shadow-sm",
    cobalt: "glass-red-primary text-cream border-y border-cream/25 shadow-sm",
    acid: "glass-cream-secondary text-ink border-y border-ink/15 font-semibold shadow-xs",
  }[tone];

  return (
    <div
      className={`relative w-full overflow-hidden select-none py-3.5 text-xs tracking-[0.18em] uppercase backdrop-blur-md ${toneClasses} ${className}`}
      aria-hidden="true"
    >
      <div
        className={`flex items-center gap-8 will-change-transform hover:[animation-play-state:paused] ${
          speed === "slow" ? "duration-[48s]" : ""
        } animate-marquee`}
      >
        {/* Track 1 */}
        <div className="flex shrink-0 items-center gap-8">
          {items.map((item, index) => (
            <div key={`t1-${index}`} className="flex items-center gap-8 shrink-0">
              <span className="font-display font-medium tracking-[0.2em]">{item}</span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-current opacity-40" />
            </div>
          ))}
        </div>

        {/* Track 2 (Identical mirror for seamless infinite loop) */}
        <div className="flex shrink-0 items-center gap-8" aria-hidden="true">
          {items.map((item, index) => (
            <div key={`t2-${index}`} className="flex items-center gap-8 shrink-0">
              <span className="font-display font-medium tracking-[0.2em]">{item}</span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-current opacity-40" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
