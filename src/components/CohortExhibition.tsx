"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkle, FilmSlate, Waveform, ShieldCheck } from "@phosphor-icons/react";

interface Cohort {
  id: string;
  num: string;
  name: string;
  tagline: string;
  description: string;
  creatorsCount: string;
  audioSpec: string;
  visualSpec: string;
  deliveryCadence: string;
  commercialRights: string;
  aesthetic: string[];
}

const COHORTS: Cohort[] = [
  {
    id: "beauty",
    num: "01",
    name: "Beauty & Daily Rituals",
    tagline: "Natural luminescence, unhurried morning routines, and tactile skincare.",
    description:
      "Creators who treat beauty as a mindful personal ritual rather than a 10-step billboard. Texture-first filming, honest daylight skin evaluations, and zero canned teleprompter reads.",
    creatorsCount: "18 creators active",
    audioSpec: "Whisper-quiet morning acoustics & tactile ASMR",
    visualSpec: "Golden-hour daylight, macro texture focus, 4K ProRes",
    deliveryCadence: "14-day turnaround guaranteed",
    commercialRights: "Pre-cleared 90-day Spark Ads & organic rights",
    aesthetic: ["Tactile texture", "Natural daylight", "Morning ASMR", "Zero filter hype"],
  },
  {
    id: "food",
    num: "02",
    name: "Artisanal Culinary & Regional Culture",
    tagline: "Farm-to-table technique, heritage recipes, and immersive kitchen audio.",
    description:
      "Culinary storytellers who cook with real passion. Sizzling cast iron, local market sourcing, fermentation rituals, and honest dining recommendations that move hungry audiences.",
    creatorsCount: "14 creators active",
    audioSpec: "Crisp cast iron sizzle, knife-work rhythm, room ambience",
    visualSpec: "Overhead prep, steam-catching backlight, macro plating",
    deliveryCadence: "14-day turnaround guaranteed",
    commercialRights: "Pre-cleared 90-day Spark Ads & organic rights",
    aesthetic: ["Kitchen ASMR", "Regional terroir", "Bistro technique", "Honest taste"],
  },
  {
    id: "tech",
    num: "03",
    name: "Workspaces & Hardware EDC",
    tagline: "Tactile industrial design, mechanical acoustics, and ergonomic discipline.",
    description:
      "Designers, engineers, and creators obsessive about their tools. High-fidelity macro videography, genuine everyday carry loadouts, and zero canned corporate tech-reviewer buzzwords.",
    creatorsCount: "16 creators active",
    audioSpec: "Mechanical switch clatter, machined metal snaps, subtle loft tone",
    visualSpec: "Matte surface contrast, macro gear tours, cinematic grading",
    deliveryCadence: "14-day turnaround guaranteed",
    commercialRights: "Pre-cleared 90-day Spark Ads & organic rights",
    aesthetic: ["Industrial finish", "Desk tours", "EDC macro", "ProRes vertical"],
  },
  {
    id: "fitness",
    num: "04",
    name: "Mindful Movement & Conditioning",
    tagline: "Athletic longevity, architectural form, and intentional human recovery.",
    description:
      "Movement specialists prioritizing sustainable athletic longevity and body awareness over toxic quick fixes. Clean spatial aesthetics, architectural gym interiors, and real conditioning.",
    creatorsCount: "16 creators active",
    audioSpec: "Cadenced breathing, breath-pacing audio, minimal ambient synth",
    visualSpec: "Architectural negative space, form biomechanics, honest sweat",
    deliveryCadence: "14-day turnaround guaranteed",
    commercialRights: "Pre-cleared 90-day Spark Ads & organic rights",
    aesthetic: ["Kinetic form", "Architectural spaces", "Recovery rituals", "Zero hype"],
  },
];

export default function CohortExhibition() {
  const [activeId, setActiveId] = useState<string>("beauty");
  const activeCohort = COHORTS.find((c) => c.id === activeId) || COHORTS[0];

  return (
    <section
      id="cohorts"
      className="relative bg-cream text-ink border-t border-ink/15 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-ink/15 pb-8 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-[-0.035em] text-ink sm:text-4xl md:text-5xl">
              Selected cohorts.
              <br />
              High-retention short-form.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-ink/75 font-body">
            Curated by genuine cultural vertical. No unvetted databases or fake handles.
            Turnaround guaranteed in 14 business days.
          </p>
        </div>

        {/* Cohort Selector Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-ink/10 pb-6">
          {COHORTS.map((cohort) => {
            const isActive = activeId === cohort.id;
            return (
              <button
                key={cohort.id}
                type="button"
                onClick={() => setActiveId(cohort.id)}
                className={`btn-press rounded-md px-4 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors duration-200 ${
                  isActive
                    ? "bg-red text-cream"
                    : "bg-cream-dim text-ink/70 hover:bg-cream-sand hover:text-ink border border-ink/10"
                }`}
              >
                <span className="opacity-50 mr-1.5">{cohort.num}</span>
                <span>{cohort.name.split("&")[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Cohort Architectural Dossier */}
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column: Editorial storytelling & aesthetic profile */}
          <div className="lg:col-span-7 flex flex-col justify-between border border-ink/15 bg-cream-dim/60 p-8 sm:p-10 rounded-md">
            <div>
              <div className="flex items-center justify-between border-b border-ink/10 pb-4">
                <span className="font-display text-xs font-bold uppercase tracking-widest text-red">
                  Cohort {activeCohort.num} &bull; {activeCohort.creatorsCount}
                </span>
                <span className="text-xs text-ink/50 font-mono uppercase">Status: Active Roster</span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl">
                {activeCohort.name}
              </h3>

              <p className="mt-3 text-lg font-medium text-ink/90 font-display">
                {activeCohort.tagline}
              </p>

              <p className="mt-5 text-sm leading-relaxed text-ink/75 font-body sm:text-base">
                {activeCohort.description}
              </p>

              {/* Aesthetic Pillars */}
              <div className="mt-8 border-t border-ink/10 pt-6">
                <div className="text-xs font-bold uppercase tracking-wider text-ink/60 mb-3">
                  Aesthetic Signatures
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeCohort.aesthetic.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-sm bg-cream px-3 py-1.5 text-xs font-medium text-ink border border-ink/10"
                    >
                      <Sparkle size={12} weight="fill" className="text-red" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs for this cohort */}
            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-ink/10 pt-6">
              <Link
                href="/brands"
                className="btn-press inline-flex items-center gap-2 rounded-md bg-red px-6 py-3 text-xs font-bold uppercase tracking-wider text-cream hover:bg-red-deep shadow-xs"
              >
                <span>Book This Cohort</span>
                <ArrowUpRight size={14} weight="bold" />
              </Link>

              <Link
                href="/creators"
                className="btn-press inline-flex items-center gap-1.5 rounded-md border border-ink/30 px-5 py-3 text-xs font-bold uppercase tracking-wider text-ink hover:border-ink hover:bg-ink hover:text-cream transition-colors"
              >
                <span>Apply for this vertical</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Technical Spec Sheet & Commercial Guarantees */}
          <div className="lg:col-span-5 flex flex-col justify-between border border-ink/15 bg-cream-dim/30 p-8 sm:p-10 rounded-md">
            <div>
              <div className="border-b border-ink/10 pb-4">
                <span className="font-display text-xs font-bold uppercase tracking-widest text-ink/60">
                  Production & Rights Specifications
                </span>
              </div>

              <div className="mt-6 space-y-6 divide-y divide-ink/10">
                <div className="pt-2 first:pt-0">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red">
                    <Waveform size={14} weight="bold" />
                    <span>Acoustic Profile</span>
                  </div>
                  <div className="mt-1 text-sm text-ink/85 font-medium">
                    {activeCohort.audioSpec}
                  </div>
                </div>

                <div className="pt-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red">
                    <FilmSlate size={14} weight="bold" />
                    <span>Videography Standard</span>
                  </div>
                  <div className="mt-1 text-sm text-ink/85 font-medium">
                    {activeCohort.visualSpec}
                  </div>
                </div>

                <div className="pt-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red">
                    <ShieldCheck size={14} weight="bold" />
                    <span>Commercial Clearance</span>
                  </div>
                  <div className="mt-1 text-sm text-ink/85 font-medium">
                    {activeCohort.commercialRights}
                  </div>
                </div>

                <div className="pt-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red">
                    <Sparkle size={14} weight="bold" />
                    <span>Delivery SLA</span>
                  </div>
                  <div className="mt-1 text-sm text-ink/85 font-medium">
                    {activeCohort.deliveryCadence}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-ink/10 pt-6">
              <p className="text-xs text-ink/60 leading-relaxed font-body">
                All cohort deliverables include high-bitrate vertical ProRes masters, clean audio stems,
                and raw cutdowns ready for immediate deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
