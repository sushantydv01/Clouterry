"use client";

import React from "react";
import {
  DoodleBrandSpecimen,
  DoodleWebPlatform,
  DoodleEditorialCamera,
  DoodleOrganicGrowth,
  DoodleAdvisoryHelm,
  DoodleBadgeStamp,
  DoodleHandStar,
  DoodleHandSparkle,
} from "./ThreadDoodles";

/**
 * HeroThreadComposition — The signature visual centerpiece of the FIRM hero.
 * Replaces empty darkness and floating 3D coins with an authentic,
 * expressive, hand-drawn studio scene celebrating the five connected disciplines.
 */

export default function HeroThreadComposition({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full max-w-5xl mx-auto pt-6 pb-2 select-none ${className}`}>
      {/* Central Visual Stage */}
      <div className="relative rounded-3xl sm:rounded-[36px] bg-[#141416] border border-white/10 p-6 sm:p-10 md:p-12 overflow-hidden shadow-2xl">
        {/* Subtle graph grid background texture */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(#FFFFFF_1.5px,transparent_1.5px)] [background-size:20px_20px]" />

        {/* Tactile Stamp in top left */}
        <div className="absolute top-5 left-5 z-20 hidden sm:block">
          <DoodleBadgeStamp text="CONNECTED STUDIO" color="#FFC700" />
        </div>

        {/* Sparkle top right */}
        <div className="absolute top-6 right-6 z-20 hidden sm:block">
          <DoodleHandSparkle color="#FF90E8" size={32} />
        </div>

        {/* ── The Hand-Drawn Continuous Thread SVG Ribbon ── */}
        <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
          <svg
            viewBox="0 0 960 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full opacity-90"
            preserveAspectRatio="none"
          >
            {/* Thread Shadow / Outline */}
            <path
              d="M 40 220 C 140 120, 200 300, 310 180 C 420 60, 520 320, 640 190 C 760 60, 840 260, 920 180"
              stroke="#000000"
              strokeWidth="9"
              strokeLinecap="round"
              fill="none"
            />
            {/* Core Yellow Thread */}
            <path
              d="M 40 220 C 140 120, 200 300, 310 180 C 420 60, 520 320, 640 190 C 760 60, 840 260, 920 180"
              stroke="#FFC700"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            {/* Thread Dash Accent (Simulating electrical/tactile flow) */}
            <path
              d="M 40 220 C 140 120, 200 300, 310 180 C 420 60, 520 320, 640 190 C 760 60, 840 260, 920 180"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeDasharray="10 18"
              strokeLinecap="round"
              fill="none"
              opacity="0.7"
            />
          </svg>
        </div>

        {/* ── Five Visual Stations: One for Each Discipline ── */}
        <div className="relative z-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-center justify-items-center">
          {/* Station 01: Brand Identity */}
          <div className="flex flex-col items-center text-center space-y-2 group transition-transform hover:-translate-y-1.5 duration-200">
            <div className="relative p-3 rounded-2xl bg-[#1C1C20] border border-white/10 shadow-lg group-hover:border-[#FF5C40] transition-colors">
              <DoodleBrandSpecimen size={105} />
              <span className="absolute -top-2.5 -right-2 px-2 py-0.5 rounded-full bg-[#FF5C40] text-black text-[10px] font-bold font-mono">
                01
              </span>
            </div>
            <div>
              <span className="font-display text-xs sm:text-sm font-bold text-white block">Brand &amp; System</span>
              <span className="text-[11px] text-white/50">Tokens &amp; Type</span>
            </div>
          </div>

          {/* Station 02: Web Engineering */}
          <div className="flex flex-col items-center text-center space-y-2 group transition-transform hover:-translate-y-1.5 duration-200">
            <div className="relative p-3 rounded-2xl bg-[#1C1C20] border border-white/10 shadow-lg group-hover:border-[#3875FF] transition-colors">
              <DoodleWebPlatform size={105} />
              <span className="absolute -top-2.5 -right-2 px-2 py-0.5 rounded-full bg-[#3875FF] text-black text-[10px] font-bold font-mono">
                02
              </span>
            </div>
            <div>
              <span className="font-display text-xs sm:text-sm font-bold text-white block">Web Engineering</span>
              <span className="text-[11px] text-white/50">Next.js &amp; Edge</span>
            </div>
          </div>

          {/* Station 03: Documentary Media */}
          <div className="flex flex-col items-center text-center space-y-2 group transition-transform hover:-translate-y-1.5 duration-200">
            <div className="relative p-3 rounded-2xl bg-[#1C1C20] border border-white/10 shadow-lg group-hover:border-[#FFB800] transition-colors">
              <DoodleEditorialCamera size={105} />
              <span className="absolute -top-2.5 -right-2 px-2 py-0.5 rounded-full bg-[#FFB800] text-black text-[10px] font-bold font-mono">
                03
              </span>
            </div>
            <div>
              <span className="font-display text-xs sm:text-sm font-bold text-white block">Documentary Media</span>
              <span className="text-[11px] text-white/50">Film &amp; Prose</span>
            </div>
          </div>

          {/* Station 04: Technical Growth */}
          <div className="flex flex-col items-center text-center space-y-2 group transition-transform hover:-translate-y-1.5 duration-200">
            <div className="relative p-3 rounded-2xl bg-[#1C1C20] border border-white/10 shadow-lg group-hover:border-[#10B981] transition-colors">
              <DoodleOrganicGrowth size={105} />
              <span className="absolute -top-2.5 -right-2 px-2 py-0.5 rounded-full bg-[#10B981] text-black text-[10px] font-bold font-mono">
                04
              </span>
            </div>
            <div>
              <span className="font-display text-xs sm:text-sm font-bold text-white block">Technical Growth</span>
              <span className="text-[11px] text-white/50">Inbound Search</span>
            </div>
          </div>

          {/* Station 05: Digital Advisory */}
          <div className="col-span-2 sm:col-span-1 flex flex-col items-center text-center space-y-2 group transition-transform hover:-translate-y-1.5 duration-200">
            <div className="relative p-3 rounded-2xl bg-[#1C1C20] border border-white/10 shadow-lg group-hover:border-[#FF5C9D] transition-colors">
              <DoodleAdvisoryHelm size={105} />
              <span className="absolute -top-2.5 -right-2 px-2 py-0.5 rounded-full bg-[#FF5C9D] text-black text-[10px] font-bold font-mono">
                05
              </span>
            </div>
            <div>
              <span className="font-display text-xs sm:text-sm font-bold text-white block">Digital Advisory</span>
              <span className="text-[11px] text-white/50">Full Client Ownership</span>
            </div>
          </div>
        </div>

        {/* Bottom Banner inside Stage */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <DoodleHandStar color="#FFC700" size={16} />
            <span>Built together in one synchronized codebase.</span>
          </div>
          <span className="font-mono text-[11px] text-[#FF90E8]">
            ZERO VENDOR HANDOFF SEAMS
          </span>
        </div>
      </div>
    </div>
  );
}
