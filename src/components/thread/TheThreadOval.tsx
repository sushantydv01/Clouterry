"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const STATIONS = [
  {
    num: "01",
    name: "Brand & System",
    short: "Brand",
    slug: "brand-identity",
    color: "#ED83A8",
    note: "Design tokens and editorial hierarchy authored directly for live viewport proportions.",
    upstream: "Institutional position & real buyer scrutiny",
    downstream: "Feeds typography, palette, and component tokens directly into React software",
  },
  {
    num: "02",
    name: "Web Engineering",
    short: "Web",
    slug: "web-technology",
    color: "#A6D8A1",
    note: "Bespoke Next.js App Router software compiled straight from living identity tokens.",
    upstream: "Verified design tokens & sitemap structure",
    downstream: "Delivers sub-second WCAG 2.1 AA pages ready for campaign links & editorial media",
  },
  {
    num: "03",
    name: "Documentary Media",
    short: "Content",
    slug: "social-content",
    color: "#F4CF55",
    note: "Photography, narrative copy, and film directed natively for responsive screen geometry.",
    upstream: "Brand narrative tone & exact container ratios",
    downstream: "Supplies unboxed photography & long-form authority that converts organic search visitors",
  },
  {
    num: "04",
    name: "Technical Growth",
    short: "Growth",
    slug: "marketing-growth",
    color: "#ED83A8",
    note: "Programmatic JSON-LD schema and high-intent conversion pipelines built into clean HTML.",
    upstream: "Semantic App Router routes & institutional copy",
    downstream: "Captures qualified organic demand directly into fast, friction-free intake pathways",
  },
  {
    num: "05",
    name: "Digital Advisory",
    short: "Advisory",
    slug: "digital-management",
    color: "#A6D8A1",
    note: "Complete client repository ownership reinforced through continuous senior governance.",
    upstream: "Launched codebase, analytics telemetry & security posture",
    downstream: "Protects speed, visual token consistency, and framework health over the next decade",
  },
];

/**
 * Interactive Architectural Thread Circuit (`# 11` & `# 12.1`):
 * Replaces isolated giant rounded box with an interconnected SVG Thread circuit
 * visualizing how upstream decisions feed downstream software and visibility.
 */
export default function TheThreadOval() {
  const [selected, setSelected] = useState(0);
  const current = STATIONS[selected];

  const activeSegmentPercent = (selected / (STATIONS.length - 1)) * 100;

  return (
    <div className="w-full space-y-14">
      {/* Top 12-Col Asymmetric Spread: Unboxed S02 Visual Left + Statement Thesis Right */}
      <div className="grid gap-10 lg:gap-14 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#F8F6EF]/14 bg-[#121214]">
            <Image
              src="/images/studio/s02-geometric-ribbon.webp"
              alt="Abstract geometric paper composition crossed by white drafting lines and one continuous rose pink ribbon"
              fill
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-5 space-y-5 text-left">
          <span className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#F4CF55]">
            <span className="h-2 w-2 rounded-full bg-[#ED83A8]" aria-hidden="true" />
            <span>The Thread</span>
          </span>

          <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-[-0.025em] text-[#F8F6EF] leading-[1.06]">
            Five agencies burn momentum.{" "}
            <span className="firm-serif-italic font-normal text-[#F4CF55]">
              One continuous thread
            </span>{" "}
            compounds.
          </h2>

          <p className="text-base sm:text-lg text-[#D5D2C7] leading-relaxed font-sans max-w-lg">
            Instead of re-explaining strategy across disconnected contractors, one senior team carries brand craft, software engineering, documentary media, and organic growth inside a single path.
          </p>

          <div className="pt-2">
            <Link href="/firm" className="firm-btn-primary text-sm">
              <span>How the Thread works</span>
              <ArrowUpRight size={15} className="stroke-[2]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bespoke Interconnected Five-Node SVG Thread Circuit */}
      <div className="pt-8 border-t border-[#F8F6EF]/12 space-y-8">
        <div className="relative">
          {/* Desktop Continuous SVG Circuit Trace Behind Nodes */}
          <div className="hidden lg:block absolute left-[10%] right-[10%] top-[22px] h-[24px] pointer-events-none" aria-hidden="true">
            <svg viewBox="0 0 1000 24" preserveAspectRatio="none" className="w-full h-full overflow-visible">
              <path
                d="M0 12 Q 125 2, 250 12 T 500 12 T 750 12 T 1000 12"
                fill="none"
                stroke="#F8F6EF"
                strokeOpacity="0.14"
                strokeWidth="2"
                strokeDasharray="4 6"
              />
              <path
                d="M0 12 Q 125 2, 250 12 T 500 12 T 750 12 T 1000 12"
                fill="none"
                stroke="#ED83A8"
                strokeWidth="3"
                strokeLinecap="round"
                pathLength="100"
                strokeDasharray={`${Math.max(8, activeSegmentPercent)} 100`}
                style={{ transition: "stroke-dasharray 320ms cubic-bezier(0.23, 1, 0.32, 1)" }}
              />
            </svg>
          </div>

          {/* Interactive Station Triggers (Responsive: compact scrollable/wrapped row on mobile, 5-station circuit on desktop) */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-6 relative z-10"
            role="tablist"
            aria-label="Thread connection nodes"
          >
            {STATIONS.map((station, idx) => {
              const active = idx === selected;
              const visited = idx <= selected;
              return (
                <button
                  key={station.num}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelected(idx)}
                  className={`group text-left p-4 rounded-xl border transition-colors cursor-pointer flex flex-col gap-3 ${
                    active
                      ? "bg-[#1D1D20] border-[#ED83A8]"
                      : "bg-[#121214] border-[#F8F6EF]/12 hover:border-[#F8F6EF]/32"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`h-3.5 w-3.5 rounded-full border-2 transition-colors ${
                        active
                          ? "border-[#171717] scale-110"
                          : visited
                          ? "border-[#ED83A8]"
                          : "border-[#F8F6EF]/25"
                      }`}
                      style={{ backgroundColor: active || visited ? station.color : "#171717" }}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-xs text-[#ACA89E] tabular-nums">
                      {station.num}
                    </span>
                  </div>
                  <span
                    className={`font-display text-sm sm:text-base font-medium leading-snug ${
                      active ? "text-[#F8F6EF]" : "text-[#D5D2C7] group-hover:text-[#F8F6EF]"
                    }`}
                  >
                    {station.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Synchronized Station Upstream -> Active -> Downstream Architecture Panel */}
        <div
          key={current.num}
          className="animate-paper-enter grid gap-8 lg:grid-cols-12 items-start p-6 sm:p-8 rounded-2xl bg-[#121214] border border-[#F8F6EF]/12 text-left"
        >
          <div className="lg:col-span-6 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#ACA89E]">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: current.color }}
                aria-hidden="true"
              />
              <span>Node {current.num} · Connected Role</span>
            </div>
            <p className="firm-serif-prose text-xl sm:text-2xl text-[#F8F6EF] leading-relaxed">
              {current.note}
            </p>
            <div className="pt-1">
              <Link
                href={`/capabilities/${current.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-display font-medium text-[#ED83A8] hover:underline"
              >
                <span>Open {current.short} specification</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid gap-6 sm:grid-cols-2 lg:border-l lg:border-[#F8F6EF]/12 lg:pl-8">
            <div className="space-y-1.5">
              <span className="text-xs font-sans font-medium text-[#F4CF55] block">
                Receives from upstream
              </span>
              <p className="text-sm text-[#D5D2C7] leading-relaxed font-sans">
                {current.upstream}
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-sans font-medium text-[#A6D8A1] block">
                Compiles downstream
              </span>
              <p className="text-sm text-[#F8F6EF] leading-relaxed font-sans">
                {current.downstream}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
