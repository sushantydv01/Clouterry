"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  DoodleBadgeStamp,
  DoodleHandStar,
  DoodleHandSparkle,
  DoodleWavyLine,
} from "@/components/illustrations/ThreadDoodles";

const DISCIPLINES = [
  { num: "01", name: "Brand & System", color: "#FF5C40", detail: "Design Tokens" },
  { num: "02", name: "Web Engineering", color: "#3875FF", detail: "Next.js App Router" },
  { num: "03", name: "Documentary Media", color: "#FFB800", detail: "Film & Prose" },
  { num: "04", name: "Technical Growth", color: "#10B981", detail: "Inbound Discovery" },
  { num: "05", name: "Digital Advisory", color: "#FF5C9D", detail: "Full Ownership" },
];

export default function TheThreadOval() {
  return (
    <div className="w-full max-w-5xl mx-auto text-center space-y-12">
      <div className="space-y-3">
        <DoodleBadgeStamp text="THE THREAD" color="#FFC700" />
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-white font-medium tracking-tight">
          Coordinating five separate agencies burns time, budget, and focus.
        </h3>
        <p className="text-sm sm:text-base text-white/60 font-sans max-w-xl mx-auto">
          We replace multi-vendor chaos with one continuous standard from strategy to deployment.
        </p>
      </div>

      {/* Large Tactile Yellow Graphic Field */}
      <div className="relative w-full rounded-[40px] sm:rounded-[80px] md:rounded-[100px] bg-[#FFC700] text-black px-6 py-12 sm:px-14 sm:py-16 shadow-2xl overflow-hidden border-2 border-black">
        {/* Architectural graph pattern */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#000000_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

        {/* Decorative corner hand-drawn accents */}
        <div className="absolute top-6 left-8 hidden sm:block">
          <DoodleHandStar color="#FF90E8" size={32} />
        </div>
        <div className="absolute bottom-6 right-8 hidden sm:block">
          <DoodleHandSparkle color="#121214" size={30} />
        </div>

        {/* Central Graphic Composition */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-[#FFC700] text-xs font-bold font-mono tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>ONE CONTINUOUS SPINE &bull; ZERO VENDOR SEAMS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.06]">
            Five disciplines. One connected team.
          </h2>

          <p className="text-base sm:text-xl text-black/85 font-sans max-w-xl mx-auto leading-relaxed">
            Strategy, design tokens, React code, documentary photography, and search optimization built inside a single shared codebase.
          </p>

          {/* Continuous Flow SVG Ribbon behind stations */}
          <div className="pt-2 pb-2 relative">
            {/* The 5 Connected Stations */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 relative z-10">
              {DISCIPLINES.map((d) => (
                <div
                  key={d.num}
                  className="p-4 rounded-2xl bg-black text-white flex flex-col items-center justify-between text-center transition-all hover:-translate-y-1.5 duration-180 shadow-lg border border-white/10 group"
                >
                  <div className="w-full flex items-center justify-between pb-2 border-b border-white/15 text-[11px] text-white/60 font-mono">
                    <span className="font-bold text-white">{d.num}</span>
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: d.color }}
                    />
                  </div>
                  <div className="py-2">
                    <span className="font-display text-xs sm:text-sm font-bold text-white group-hover:text-[#FFC700] transition-colors block leading-tight">
                      {d.name}
                    </span>
                    <span className="text-[10px] text-white/50 block mt-1">
                      {d.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Narrative Editorial Accent below */}
      <div className="max-w-2xl mx-auto space-y-4 pt-2">
        <h4 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
          We connect brand, code, and growth so leadership can focus on operations.
        </h4>
        <div className="flex justify-center">
          <DoodleWavyLine color="#FF90E8" width={220} />
        </div>
        <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans pt-2">
          One senior studio authors your identity, engineers your web application, shoots your photography, and architects your search visibility.
        </p>

        <div className="pt-4">
          <Link
            href="/connect"
            className="gumroad-btn-pink font-bold text-sm sm:text-base px-8 py-3.5"
          >
            <span>Start a project</span>
            <ArrowUpRight size={17} className="stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
