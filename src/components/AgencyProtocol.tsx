"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Sparkle, Clock, ShieldCheck } from "@phosphor-icons/react";

interface PipelineStage {
  stage: string;
  days: string;
  title: string;
  subtitle: string;
  details: string;
  deliverable: string;
}

const STAGES: PipelineStage[] = [
  {
    stage: "01",
    days: "Days 01–02",
    title: "Master Brief & Kickoff",
    subtitle: "One unified agreement. Zero repetitive paperwork.",
    details:
      "We align on aesthetic guardrails, product shipment logistics, and campaign objectives. One master contract replaces thirty separate agency negotiations.",
    deliverable: "Approved Master Brief & Logistics Plan",
  },
  {
    stage: "02",
    days: "Days 03–04",
    title: "Cohort Curation & Matching",
    subtitle: "A high-retention vertical squad, not an unvetted spreadsheet.",
    details:
      "We hand-select 4 to 8 creators who dominate the vertical with natural authority. Every creator accepts the brief voluntarily; zero forced placements.",
    deliverable: "Confirmed Cohort Roster & Angle Breakdown",
  },
  {
    stage: "03",
    days: "Days 05–09",
    title: "Autonomous Production",
    subtitle: "Real voice in real environments. Anti-teleprompter rule.",
    details:
      "Creators receive products directly and film in their habitual daylight environments. We preserve their native pacing, natural room acoustics, and honest perspective.",
    deliverable: "Raw Creator Short-Form Footage",
  },
  {
    stage: "04",
    days: "Days 10–11",
    title: "Centralized Agency Review",
    subtitle: "Quality check without diluting creator voice.",
    details:
      "Clouterry conducts master audio mastering, vertical 9:16 export checks, and compliance reviews. 1 round of brand feedback integrated seamlessly.",
    deliverable: "Color-Graded 4K ProRes Cuts",
  },
  {
    stage: "05",
    days: "Days 12–13",
    title: "Commercial Rights Clearance",
    subtitle: "Pre-cleared 90-day Spark Ads and organic rights.",
    details:
      "We secure TikTok Spark Ads authorization codes and Meta partnership access directly from the creators. Zero residual legal surprises or hidden fees.",
    deliverable: "Spark Ads Access Codes & Commercial License",
  },
  {
    stage: "06",
    days: "Day 14",
    title: "Final Asset Handover",
    subtitle: "Guaranteed turnaround SLA or 100% refund.",
    details:
      "High-bitrate ProRes masters, clean audio stems, and raw B-roll cuts land in your team's drive. Immediate creator wire payouts triggered upon signoff.",
    deliverable: "Complete 14-Day Delivery Kit",
  },
];

export default function AgencyProtocol() {
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section className="bg-cream text-ink border-t border-ink/15 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-ink/15 pb-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red mb-3">
              <Clock size={14} weight="bold" />
              <span>Operating Architecture // The 14-Day Pipeline</span>
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-[-0.035em] text-ink sm:text-4xl md:text-5xl">
              From approved brief to
              <br />
              delivered video in 14 days.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-ink/75 font-body">
            Designed for brands tired of endless influencer revision loops and creators tired of
            delayed compensation. A predictable, productized talent infrastructure.
          </p>
        </div>

        {/* The 6-Stage Pipeline Timeline */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {STAGES.map((s, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={s.stage}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`btn-press flex flex-col justify-between rounded-md border p-5 text-left cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "border-red bg-cream-dim shadow-sm"
                    : "border-ink/10 bg-cream hover:border-ink/25 hover:bg-cream-dim/50"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-red">
                      Stage {s.stage}
                    </span>
                    <span className="text-[11px] font-mono font-medium text-ink/50">{s.days}</span>
                  </div>
                  <h3 className="mt-3 font-display text-sm font-bold text-ink leading-snug">{s.title}</h3>
                </div>

                <div className="mt-6 border-t border-ink/10 pt-3 text-[11px] text-ink/60 font-body">
                  {s.deliverable}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Stage Focus Card */}
        <div className="mt-8 rounded-md border border-ink/15 bg-cream-dim/50 p-8 sm:p-10">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="font-display text-xs font-bold uppercase tracking-widest text-red">
                  Detailed Protocol // {STAGES[activeStage].days}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-ink/60 font-mono">
                  <Sparkle size={12} weight="fill" className="text-red" />
                  <span>Verified Cadence</span>
                </span>
              </div>

              <h4 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
                {STAGES[activeStage].title}
              </h4>
              <p className="mt-1 text-sm font-semibold text-red font-body">
                {STAGES[activeStage].subtitle}
              </p>

              <p className="mt-4 text-base leading-relaxed text-ink/80 font-body max-w-2xl">
                {STAGES[activeStage].details}
              </p>
            </div>

            <div className="lg:col-span-4 border-t border-ink/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <span className="text-xs font-bold uppercase tracking-wider text-ink/60 block mb-2">
                Guaranteed Milestone Output
              </span>
              <div className="flex items-start gap-2 text-sm font-semibold text-ink font-body">
                <Check size={16} weight="bold" className="text-red shrink-0 mt-0.5" />
                <span>{STAGES[activeStage].deliverable}</span>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-ink/60 font-body">
                <ShieldCheck size={16} className="text-red" weight="bold" />
                <span>14-day delivery SLA guaranteed or 100% refund.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Manifesto Pullquote */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-center border-t border-ink/10 pt-12">
          <div className="lg:col-span-8">
            <blockquote className="font-display text-2xl font-bold leading-tight sm:text-3xl text-ink">
              &ldquo;Traditional agencies manage creators like line items on an invoice. We organize them like an
              orchestra: independent soloists performing with collective power.&rdquo;
            </blockquote>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-ink/50 font-body">
              A Clouterry Foundational Principle
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
            <Link
              href="/about"
              className="btn-press group inline-flex items-center gap-2 rounded-md bg-red px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-cream hover:bg-red-deep shadow-xs"
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
      </div>
    </section>
  );
}
