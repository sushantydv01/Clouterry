"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, X } from "lucide-react";

const COMPARISONS = [
  {
    discipline: "Design Systems",
    fragmented: "Static PDF brand books translate inconsistently across contractor CSS files.",
    unified: "Living CSS custom properties compile directly inside shared React components.",
  },
  {
    discipline: "Web Engineering",
    fragmented: "Layered page builders and plugin dependencies introduce weight and fragility.",
    unified: "Sub-second App Router builds checked against WCAG 2.1 AA keyboard navigation.",
  },
  {
    discipline: "Editorial Media",
    fragmented: "Generic stock frames clash with headlines and crop poorly across mobile viewports.",
    unified: "Original paper-cut art direction and photography proportioned per breakpoint.",
  },
  {
    discipline: "Organic Growth",
    fragmented: "Campaign links drive prospective buyers into unoptimized, off-brand landing pages.",
    unified: "Structured Schema.org markup and focused conversion pathways built straight into HTML.",
  },
];

/**
 * Interactive Architectural Comparison (S03 Cohesion Contrast, `# 12.3`):
 * Lets decision-makers switch cleanly between Disconnected Contractors and FIRM Connected Thread.
 */
export default function FragmentationStory() {
  const [mode, setMode] = useState<"fragmented" | "unified">("unified");
  const isUnified = mode === "unified";

  return (
    <div className="w-full space-y-12">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#F8F6EF]/12 pb-8">
        <div className="space-y-2.5 max-w-2xl">
          <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-[-0.025em] text-[#F8F6EF] leading-[1.06]">
            Why disconnected agencies stall digital equity.
          </h2>
          <p className="text-base text-[#D5D2C7] font-sans leading-relaxed">
            Compare how coordination degrades across four independent vendor retainers versus one shared codebase.
          </p>
        </div>

        {/* Tactile Mode Switcher */}
        <div
          className="inline-flex items-center p-1 rounded-full bg-[#171717] border border-[#F8F6EF]/16 self-start lg:self-end shrink-0"
          role="tablist"
          aria-label="Architecture model comparison"
        >
          <button
            type="button"
            role="tab"
            aria-selected={!isUnified}
            onClick={() => setMode("fragmented")}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-display font-medium transition-colors cursor-pointer whitespace-nowrap ${
              !isUnified
                ? "bg-[#ED83A8] text-[#171717]"
                : "text-[#D5D2C7] hover:text-[#F8F6EF]"
            }`}
          >
            4 Isolated Vendors
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={isUnified}
            onClick={() => setMode("unified")}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-display font-medium transition-colors cursor-pointer whitespace-nowrap ${
              isUnified
                ? "bg-[#A6D8A1] text-[#171717]"
                : "text-[#D5D2C7] hover:text-[#F8F6EF]"
            }`}
          >
            FIRM Repository
          </button>
        </div>
      </div>

      {/* Open 12-Col Architectural Comparison */}
      <div className="grid gap-10 lg:gap-12 lg:grid-cols-12 items-start">
        {/* Left: Live Comparison Rows */}
        <div key={mode} className="lg:col-span-5 space-y-6 animate-paper-enter">
          <div className="space-y-2">
            <span
              className={`text-xs font-sans font-semibold inline-flex items-center gap-2 ${
                isUnified ? "text-[#A6D8A1]" : "text-[#ED83A8]"
              }`}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: isUnified ? "#A6D8A1" : "#ED83A8" }}
                aria-hidden="true"
              />
              <span>
                {isUnified ? "Unified Standard" : "Conventional Agency Friction"}
              </span>
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#F8F6EF] tracking-tight">
              {isUnified
                ? "One senior repository compiles design straight into speed."
                : "Four separate vendor invoices leak velocity at every handoff."}
            </h3>
          </div>

          <ul className="divide-y divide-[#F8F6EF]/12 border-y border-[#F8F6EF]/12">
            {COMPARISONS.map((row) => (
              <li key={row.discipline} className="py-4 flex items-start gap-3">
                <span
                  className={`mt-1 h-4 w-4 rounded-full inline-flex items-center justify-center shrink-0 ${
                    isUnified
                      ? "bg-[#A6D8A1] text-[#171717]"
                      : "bg-[#ED83A8]/20 text-[#ED83A8]"
                  }`}
                >
                  {isUnified ? <Check size={11} className="stroke-[2.5]" /> : <X size={11} className="stroke-[2.5]" />}
                </span>
                <div className="space-y-1">
                  <span className="font-display text-base font-medium text-[#F8F6EF] block">
                    {row.discipline}
                  </span>
                  <p className="text-sm text-[#D5D2C7] leading-relaxed font-sans">
                    {isUnified ? row.unified : row.fragmented}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="pt-1 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-[#ACA89E]">
              {isUnified ? "Zero vendor translation loss" : "Click pill above to compare unified model"}
            </span>
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-1.5 text-sm font-display font-medium text-[#ED83A8] hover:underline"
            >
              <span>Inspect capabilities</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        {/* Right: S03 Visual Contrast Plate */}
        <div className="lg:col-span-7 space-y-5">
          <div className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden border border-[#F8F6EF]/14 bg-[#171717]">
            <Image
              src="/images/studio/s03-cohesion-contrast.webp"
              alt="Split architectural paper collage contrasting disconnected scraps on the left with a cohesive structured gateway unified by a rose pink thread on the right"
              fill
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-[#ACA89E]">
            <span>Left: Isolated contractor outputs</span>
            <span>Right: Full codebase &amp; design custody handed directly to your team</span>
          </div>
        </div>
      </div>
    </div>
  );
}
