"use client";

import React, { useState } from "react";
import {
  FileText,
  UsersThree,
  Package,
  ShieldCheck,
  Waveform,
  FilmSlate,
  Sparkle,
  ArrowUpRight,
  CheckCircle,
} from "@phosphor-icons/react";
import Link from "next/link";

interface CampaignAngle {
  id: string;
  creatorHandle: string;
  creatorNiche: string;
  angleTitle: string;
  hook: string;
  visualSetup: string;
  audioSpec: string;
  commercialValue: string;
}

const CAMPAIGN_ANGLES: CampaignAngle[] = [
  {
    id: "macro",
    creatorHandle: "@mayaskinritual",
    creatorNiche: "Beauty & Daily Rituals",
    angleTitle: "Tactile Texture & Skin Macro",
    hook: "Unhurried morning application under unfiltered natural window light.",
    visualSetup: "4K 60fps macro lens, raw surface textures, natural morning daylight.",
    audioSpec: "Whisper-quiet room acoustics, glass dropper clicks, zero music bed.",
    commercialValue: "High-retention Spark Ad hook testing formula.",
  },
  {
    id: "honest",
    creatorHandle: "@mateolens",
    creatorNiche: "Visual Cinema & EDC",
    angleTitle: "The Unvarnished 7-Day Wear Test",
    hook: "Testing durability and daily habit integration over a standard work week.",
    visualSetup: "Architectural workspace background, handheld documentary cinema.",
    audioSpec: "Direct condenser mic voiceover, honest reflections, zero script teleprompter.",
    commercialValue: "Organic trust-building mid-funnel asset.",
  },
  {
    id: "travel",
    creatorHandle: "@kaicrafts",
    creatorNiche: "Workspaces & Tech EDC",
    angleTitle: "The Travel Packout & Friction Test",
    hook: "How the design survives a 72-hour carry-on loadout.",
    visualSetup: "Overhead flat-lay grid, tactile packing sequence, machined detail focus.",
    audioSpec: "Machined zips, tactile pouch snaps, subtle lo-fi room tone.",
    commercialValue: "High-intent consideration & conversion driver.",
  },
  {
    id: "form",
    creatorHandle: "@elenamovement",
    creatorNiche: "Mindful Movement & Conditioning",
    angleTitle: "Post-Conditioning Recovery Sequence",
    hook: "Integrated seamlessly into an honest athletic recovery routine.",
    visualSetup: "Architectural studio space, kinetic movement pacing, natural sweat.",
    audioSpec: "Natural breath pacing, gentle studio acoustics, ambient warmth.",
    commercialValue: "Lifestyle affinity & Spark Ad whitelisting.",
  },
];

export default function SampleCampaign() {
  const [activeTab, setActiveTab] = useState<"brief" | "cohort" | "delivery">("cohort");
  const [selectedAngle, setSelectedAngle] = useState<string>("macro");

  const currentAngle = CAMPAIGN_ANGLES.find((a) => a.id === selectedAngle) || CAMPAIGN_ANGLES[0];

  return (
    <section
      id="sample-campaign"
      className="relative bg-cream-dim/60 text-ink border-t border-ink/15 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-ink/15 pb-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red mb-3">
              <Sparkle size={14} weight="fill" />
              <span>Honest Proof // Demonstration Campaign</span>
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-[-0.035em] text-ink sm:text-4xl md:text-5xl">
              What working with Clouterry
              <br />
              actually looks like.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-ink/75 font-body">
            We don&apos;t invent fake brand logos or fabricated ROI numbers. Here is the exact
            operating architecture of a standard 14-day Clouterry cohort sprint.
          </p>
        </div>

        {/* Phase Navigation Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-3 border-b border-ink/10 pb-6">
          <button
            type="button"
            onClick={() => setActiveTab("brief")}
            className={`btn-press flex items-center gap-2 rounded-md px-5 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors duration-200 ${
              activeTab === "brief"
                ? "bg-red text-cream"
                : "bg-cream text-ink/70 hover:bg-cream-sand hover:text-ink border border-ink/10"
            }`}
          >
            <FileText size={16} weight="bold" />
            <span>01. The Brand Brief</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("cohort")}
            className={`btn-press flex items-center gap-2 rounded-md px-5 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors duration-200 ${
              activeTab === "cohort"
                ? "bg-red text-cream"
                : "bg-cream text-ink/70 hover:bg-cream-sand hover:text-ink border border-ink/10"
            }`}
          >
            <UsersThree size={16} weight="bold" />
            <span>02. The Cohort Matching</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("delivery")}
            className={`btn-press flex items-center gap-2 rounded-md px-5 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors duration-200 ${
              activeTab === "delivery"
                ? "bg-red text-cream"
                : "bg-cream text-ink/70 hover:bg-cream-sand hover:text-ink border border-ink/10"
            }`}
          >
            <Package size={16} weight="bold" />
            <span>03. The 14-Day Delivery Kit</span>
          </button>
        </div>

        {/* Content Panels */}
        <div className="mt-10">
          {/* TAB 1: THE BRAND BRIEF */}
          {activeTab === "brief" && (
            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7 rounded-md border border-ink/15 bg-cream p-8 sm:p-10">
                <div className="flex items-baseline justify-between border-b border-ink/10 pb-4">
                  <span className="font-display text-xs font-bold uppercase tracking-widest text-red">
                    Example Master Brief // Single Contract
                  </span>
                  <span className="text-xs text-ink/50 font-mono">Turnaround: 14 Days Guaranteed</span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold text-ink sm:text-3xl">
                  Campaign Architecture: Modern Rituals
                </h3>

                <div className="mt-6 space-y-5 text-sm leading-relaxed text-ink/80 font-body">
                  <div className="rounded-sm border-l-2 border-red bg-cream-dim p-4">
                    <span className="block text-xs font-bold uppercase tracking-wider text-red mb-1">
                      Objective
                    </span>
                    Launch a high-performing short-form creative library for an artisan morning wellness line.
                    Drive both top-of-funnel TikTok/Reels engagement and whitelisted Spark Ads conversion.
                  </div>

                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-ink/60 mb-1">
                      Aesthetic Directives
                    </span>
                    Strict anti-teleprompter rule. Creators film in their natural environment with personal
                    routines. Zero corporate script reading. Natural morning window light and high-fidelity room acoustics.
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-ink/10 pt-4 text-xs">
                    <div>
                      <span className="block text-ink/50 font-medium">Deliverables Required</span>
                      <span className="mt-0.5 block font-bold text-ink text-sm">4 to 6 Unique Video Assets</span>
                    </div>
                    <div>
                      <span className="block text-ink/50 font-medium">Rights Clearance</span>
                      <span className="mt-0.5 block font-bold text-ink text-sm">90-Day Spark Ads & Organic</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-md border border-ink/15 bg-cream p-8 flex flex-col justify-between">
                <div>
                  <h4 className="font-display text-lg font-bold text-ink border-b border-ink/10 pb-3">
                    Why the Single Brief Model Wins
                  </h4>
                  <ul className="mt-4 space-y-3.5 text-sm text-ink/80 font-body">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={16} weight="bold" className="text-red shrink-0 mt-0.5" />
                      <span>One unified agreement covers the entire creator cohort.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={16} weight="bold" className="text-red shrink-0 mt-0.5" />
                      <span>Product shipments dispatched simultaneously through our logistics hub.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={16} weight="bold" className="text-red shrink-0 mt-0.5" />
                      <span>Zero back-and-forth DM negotiations or missing tax forms.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle size={16} weight="bold" className="text-red shrink-0 mt-0.5" />
                      <span>Pre-cleared Spark Ads access codes delivered in one central dashboard.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 border-t border-ink/10 pt-6">
                  <Link
                    href="/brands"
                    className="btn-press inline-flex items-center gap-2 rounded-md bg-red px-6 py-3 text-xs font-bold uppercase tracking-wider text-cream hover:bg-red-deep shadow-xs"
                  >
                    <span>Book a Campaign Briefing</span>
                    <ArrowUpRight size={14} weight="bold" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: THE COHORT MATCHING & ANGLES */}
          {activeTab === "cohort" && (
            <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
              {/* Left Column: Interactive Angle Switcher */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-ink/60 mb-1">
                  Matched Cohort Angles (4 Distinct Soloists)
                </span>

                {CAMPAIGN_ANGLES.map((angle) => {
                  const isSelected = selectedAngle === angle.id;
                  return (
                    <button
                      key={angle.id}
                      type="button"
                      onClick={() => setSelectedAngle(angle.id)}
                      className={`btn-press rounded-md border p-4 text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "border-red bg-cream shadow-sm"
                          : "border-ink/15 bg-cream/60 hover:bg-cream hover:border-ink/30"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display text-sm font-bold text-ink">{angle.angleTitle}</span>
                        <span className="text-[11px] font-mono text-red font-semibold">{angle.creatorHandle}</span>
                      </div>
                      <div className="mt-1 text-xs text-ink/60">{angle.creatorNiche}</div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Deep Angle Specification */}
              <div className="lg:col-span-7 rounded-md border border-ink/15 bg-cream p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between border-b border-ink/10 pb-4">
                    <span className="font-display text-xs font-bold uppercase tracking-widest text-red">
                      Creative Direction Breakdown // {currentAngle.creatorHandle}
                    </span>
                    <span className="text-xs text-ink/50 font-mono">100% Creative Sovereignty</span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-bold text-ink sm:text-3xl">
                    &ldquo;{currentAngle.hook}&rdquo;
                  </h3>

                  <div className="mt-6 space-y-4 text-sm font-body text-ink/80 divide-y divide-ink/10">
                    <div className="pt-2 first:pt-0">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red">
                        <FilmSlate size={14} weight="bold" />
                        <span>Visual Camera Setup</span>
                      </div>
                      <p className="mt-1 text-sm text-ink/85 font-medium">{currentAngle.visualSetup}</p>
                    </div>

                    <div className="pt-4">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red">
                        <Waveform size={14} weight="bold" />
                        <span>Acoustic Profile</span>
                      </div>
                      <p className="mt-1 text-sm text-ink/85 font-medium">{currentAngle.audioSpec}</p>
                    </div>

                    <div className="pt-4">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red">
                        <ShieldCheck size={14} weight="bold" />
                        <span>Strategic Commercial Role</span>
                      </div>
                      <p className="mt-1 text-sm text-ink/85 font-medium">{currentAngle.commercialValue}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-ink/10 pt-6 flex items-center justify-between text-xs text-ink/60">
                  <span>Filmed independently without on-set agency interference.</span>
                  <span className="font-mono text-red font-semibold">Turnaround: 14 Days</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: THE 14-DAY DELIVERY KIT */}
          {activeTab === "delivery" && (
            <div className="rounded-md border border-ink/15 bg-cream p-8 sm:p-10">
              <div className="flex flex-col justify-between gap-4 border-b border-ink/10 pb-6 sm:flex-row sm:items-baseline">
                <div>
                  <span className="font-display text-xs font-bold uppercase tracking-widest text-red">
                    The Complete Asset Package
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
                    What arrives in the brand folder on Day 14.
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-red bg-cream-dim px-3 py-1.5 rounded-sm border border-ink/10">
                  <ShieldCheck size={16} weight="bold" />
                  <span>Guaranteed Delivery SLA or Full Refund</span>
                </div>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-md border border-ink/10 bg-cream-dim/40 p-5">
                  <span className="font-display text-2xl font-extrabold text-red tabular-nums">01</span>
                  <h4 className="mt-2 font-display text-base font-bold text-ink">4K ProRes Masters</h4>
                  <p className="mt-2 text-xs leading-relaxed text-ink/75 font-body">
                    Color-graded vertical 9:16 files with master audio mixes, ready for organic publication.
                  </p>
                </div>

                <div className="rounded-md border border-ink/10 bg-cream-dim/40 p-5">
                  <span className="font-display text-2xl font-extrabold text-red tabular-nums">02</span>
                  <h4 className="mt-2 font-display text-base font-bold text-ink">Spark Ads Codes</h4>
                  <p className="mt-2 text-xs leading-relaxed text-ink/75 font-body">
                    Pre-authorized 90-day advertising codes directly linked to the creator&apos;s verified handle.
                  </p>
                </div>

                <div className="rounded-md border border-ink/10 bg-cream-dim/40 p-5">
                  <span className="font-display text-2xl font-extrabold text-red tabular-nums">03</span>
                  <h4 className="mt-2 font-display text-base font-bold text-ink">Raw B-Roll & Stems</h4>
                  <p className="mt-2 text-xs leading-relaxed text-ink/75 font-body">
                    Unedited alternate cuts, product closeups, and clean isolated audio stems for internal paid-growth remixing.
                  </p>
                </div>

                <div className="rounded-md border border-ink/10 bg-cream-dim/40 p-5">
                  <span className="font-display text-2xl font-extrabold text-red tabular-nums">04</span>
                  <h4 className="mt-2 font-display text-base font-bold text-ink">Commercial Clearance</h4>
                  <p className="mt-2 text-xs leading-relaxed text-ink/75 font-body">
                    One universal rights agreement clearing cross-platform commercial usage with zero residual surprises.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-ink/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-xs text-ink/60 font-body">
                  1 review round included with every sprint. All creators compensated within 14 days of signoff.
                </div>

                <Link
                  href="/brands"
                  className="btn-press inline-flex items-center gap-2 rounded-md bg-red px-6 py-3 text-xs font-bold uppercase tracking-wider text-cream hover:bg-red-deep shadow-xs"
                >
                  <span>Book Your Cohort Sprint</span>
                  <ArrowUpRight size={14} weight="bold" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
