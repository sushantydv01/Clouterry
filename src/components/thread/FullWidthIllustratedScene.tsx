"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DoodleBadgeStamp, DoodleHandStar } from "@/components/illustrations/ThreadDoodles";

const STAGES = [
  {
    step: "01",
    title: "Brand Systems",
    discipline: "Design Tokens",
    color: "#FF5C40",
    description: "Typography scales, color tokens, and spatial rules defined as mathematical variables in code.",
    artifact: "firm-tokens.ts",
  },
  {
    step: "02",
    title: "Web Engineering",
    discipline: "Next.js App Router",
    color: "#3875FF",
    description: "Server Component architecture, edge caching, and semantic HTML with zero runtime JavaScript bloat.",
    artifact: "page.tsx (SSG)",
  },
  {
    step: "03",
    title: "Documentary Media",
    discipline: "Prose & Visuals",
    color: "#FFB800",
    description: "Original photography and concise editorial copy authored specifically for the live responsive viewport.",
    artifact: "art-direction.film",
  },
  {
    step: "04",
    title: "Technical Growth",
    discipline: "Inbound Discovery",
    color: "#10B981",
    description: "JSON-LD schema, dynamic Open Graph assets, and sub-second Core Web Vitals for search indexation.",
    artifact: "schema.org/org",
  },
  {
    step: "05",
    title: "Digital Advisory",
    discipline: "Full Ownership",
    color: "#FF5C9D",
    description: "Clean repository handoff, documentation, and operational autonomy for internal teams.",
    artifact: "github.com/repo",
  },
];

export default function FullWidthIllustratedScene() {
  return (
    <section className="w-full bg-[#000000] border-t border-b border-white/10 py-20 sm:py-28 relative overflow-hidden" aria-label="Studio Architecture">
      {/* Background Continuous Flowing Ribbon SVG */}
      <div className="absolute inset-0 pointer-events-none opacity-20 hidden lg:block">
        <svg
          viewBox="0 0 1200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M 60 260 C 240 180, 360 340, 600 240 C 840 140, 960 300, 1140 220"
            stroke="#FFC700"
            strokeWidth="4"
            strokeDasharray="8 12"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <DoodleBadgeStamp text="THE 5-STAGE ENGINE" color="#FFC700" />
              <DoodleHandStar color="#FF90E8" size={20} />
            </div>
            <h3 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              One connected standard from tokens to deployment.
            </h3>
            <p className="text-base sm:text-lg text-white/65 leading-relaxed font-sans">
              Five capabilities engineered to eliminate vendor handoff friction and compound digital value.
            </p>
          </div>
          <Link
            href="/capabilities"
            className="gumroad-btn-secondary text-xs sm:text-sm !py-2.5 !px-5 shrink-0"
          >
            <span>Explore full syllabus</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* 5-Stage Architectural Flow Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 relative">
          {STAGES.map((s) => (
            <div
              key={s.step}
              className="p-5 sm:p-6 rounded-2xl bg-[#141416] border border-white/10 flex flex-col justify-between space-y-5 hover:border-white/25 hover:-translate-y-1 transition-all group shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-white/50 pb-3 border-b border-white/10 font-mono">
                  <span className="font-bold text-white">{s.step}</span>
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: s.color }}
                  />
                </div>

                <div>
                  <h4 className="font-display text-lg font-bold text-white group-hover:text-[#FFC700] transition-colors leading-snug">
                    {s.title}
                  </h4>
                  <p className="text-xs font-medium text-white/50 mt-1">
                    {s.discipline}
                  </p>
                </div>

                <p className="text-xs text-white/65 leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/40">
                <span>{s.artifact}</span>
                <span className="text-[#10B981] font-bold">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
