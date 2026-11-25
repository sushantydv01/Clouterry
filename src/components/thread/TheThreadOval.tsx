"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const STATIONS = [
  {
    num: "01",
    name: "Brand & System",
    color: "#ED83A8",
    note: "Design tokens & editorial hierarchy authored directly for real screen proportions.",
  },
  {
    num: "02",
    name: "Web Engineering",
    color: "#A6D8A1",
    note: "Bespoke Next.js App Router codebase compiled straight from living identity tokens.",
  },
  {
    num: "03",
    name: "Documentary Media",
    color: "#F4CF55",
    note: "Photography, narrative copy, and film directed purposefully for live breakpoints.",
  },
  {
    num: "04",
    name: "Technical Growth",
    color: "#ED83A8",
    note: "Structured search schema and high-intent conversion architecture native in HTML.",
  },
  {
    num: "05",
    name: "Digital Advisory",
    color: "#A6D8A1",
    note: "Complete client repository ownership backed by continuous partner stewardship.",
  },
];

/**
 * TheThreadOval (Phase 3.2 Midnight Atelier Synthesis).
 * Pairs S02 geometric ribbon visual with the interactive Butter Yellow continuous Thread loop (A01).
 */
export default function TheThreadOval() {
  const [selected, setSelected] = useState(0);
  const current = STATIONS[selected];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-12">
      {/* Header Lockup */}
      <div className="max-w-3xl mx-auto text-center space-y-3">
        <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#F4CF55] block">
          The Thread · Connected Architecture
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F8F6EF] leading-[1.08]">
          Five agencies burn momentum. One continuous thread compounds.
        </h2>
        <p className="text-base sm:text-lg text-[#C4C1B8] max-w-2xl mx-auto font-sans">
          Instead of translating strategy across disconnected vendors, one senior studio carries design, software, documentary media, and search across a single path.
        </p>
      </div>

      {/* S02 Architectural Ribbon Panorama Frame */}
      <div className="relative rounded-2xl overflow-hidden border border-[#F8F6EF]/12 bg-[#171717]">
        <div className="hidden sm:block relative aspect-[16/9] max-h-[420px] w-full">
          <Image
            src="/images/studio/s02-geometric-ribbon.webp"
            alt="Abstract geometric paper composition crossed by white drafting lines and one continuous rose pink ribbon"
            fill
            sizes="(max-width: 1280px) 100vw, 1152px"
            className="object-cover"
          />
        </div>
        <div className="block sm:hidden relative aspect-[4/3] w-full">
          <Image
            src="/images/studio/s02-geometric-ribbon-mobile.webp"
            alt="Abstract geometric paper composition crossed by an unbroken rose pink ribbon"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Tactile Butter Yellow Oval Orbital Track with A01 Path Trace */}
      <div className="relative rounded-[32px] sm:rounded-[64px] bg-[#F4CF55] text-[#171717] px-5 py-9 sm:px-12 sm:py-12 border border-[#171717]/15 overflow-hidden">
        {/* Declarative A01 Vector Track Background (Desktop & Tablet) */}
        <svg
          viewBox="0 0 1120 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden md:block absolute inset-0 w-full h-full pointer-events-none opacity-85"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <rect
            x="40"
            y="24"
            width="1040"
            height="212"
            rx="106"
            stroke="#171717"
            strokeOpacity="0.14"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />
          <rect
            x="40"
            y="24"
            width="1040"
            height="212"
            rx="106"
            stroke="#ED83A8"
            strokeWidth="5"
            strokeLinecap="round"
            className="animate-thread-trace"
          />
        </svg>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {STATIONS.map((station, idx) => {
              const active = idx === selected;
              return (
                <button
                  key={station.num}
                  type="button"
                  onClick={() => setSelected(idx)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-display font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                    active
                      ? "bg-[#171717] text-[#F8F6EF] border-[#171717] shadow-md scale-[1.02]"
                      : "bg-[#F8F6EF]/75 text-[#171717] border-[#171717]/15 hover:bg-[#F8F6EF]"
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: station.color }}
                    aria-hidden="true"
                  />
                  <span>
                    {station.num} {station.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="max-w-xl mx-auto space-y-2 pt-1">
            <p className="font-display text-lg sm:text-2xl font-bold text-[#171717] leading-snug">
              {current.note}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Synthesis CTA */}
      <div className="text-center pt-1">
        <Link
          href="/firm"
          className="firm-btn-primary text-sm"
        >
          <span>How the Thread works</span>
          <ArrowUpRight size={15} className="stroke-[2.25]" />
        </Link>
      </div>
    </div>
  );
}
