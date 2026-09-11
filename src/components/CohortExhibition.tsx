"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { scrollReveal, viewportOnce, motionEase } from "@/lib/motion";

interface Cohort {
  id: string;
  num: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  creatorsCount: string;
  cadence: string;
  aesthetic: string[];
  toneColor: string;
  badgeBg: string;
  badgeText: string;
}

const COHORTS: Cohort[] = [
  {
    id: "beauty",
    num: "01",
    name: "Beauty & Daily Rituals",
    tagline: "Natural luminescence, unhurried morning routines & tactile skincare.",
    description:
      "Creators who treat beauty as a mindful personal ritual rather than a 10-step billboard. Texture-first filming, honest daylight evaluations, and genuine skin compatibility tests.",
    image: "/cohorts/beauty.jpg",
    creatorsCount: "18 Creators Active",
    cadence: "14-Day Delivery",
    aesthetic: ["Tactile Texture", "Golden Hour Daylight", "Morning ASMR", "Spark Ad Ready"],
    toneColor: "hover:border-yellow",
    badgeBg: "bg-cream",
    badgeText: "text-red font-bold",
  },
  {
    id: "food",
    num: "02",
    name: "Artisanal Culinary & Regional Culture",
    tagline: "Farm-to-table technique, heritage recipes & immersive kitchen audio.",
    description:
      "Culinary storytellers who cook with real passion. Sizzling cast iron, local market sourcing, fermentation rituals, and honest dining recommendations that move hungry audiences.",
    image: "/cohorts/food.jpg",
    creatorsCount: "14 Creators Active",
    cadence: "14-Day Delivery",
    aesthetic: ["Kitchen ASMR", "Regional Terroir", "Bistro Technique", "Macro Plating"],
    toneColor: "hover:border-yellow",
    badgeBg: "bg-yellow",
    badgeText: "text-ink font-bold",
  },
  {
    id: "tech",
    num: "03",
    name: "Workspaces & Hardware EDC",
    tagline: "Tactile industrial design, mechanical acoustics & ergonomic discipline.",
    description:
      "Designers, engineers, and creators obsessive about their tools. High-fidelity macro videography, genuine everyday carry loadouts, and zero canned corporate tech-reviewer buzzwords.",
    image: "/cohorts/tech.jpg",
    creatorsCount: "16 Creators Active",
    cadence: "14-Day Delivery",
    aesthetic: ["Industrial Finish", "Desk Setup Tours", "EDC Macro", "ProRes Vertical"],
    toneColor: "hover:border-yellow",
    badgeBg: "bg-ink border border-cream/20",
    badgeText: "text-cream",
  },
  {
    id: "fitness",
    num: "04",
    name: "Mindful Movement & Conditioning",
    tagline: "Athletic longevity, architectural form & intentional human recovery.",
    description:
      "Movement specialists prioritizing sustainable athletic longevity and body awareness over toxic quick fixes. Clean spatial aesthetics, architectural gym interiors, and real conditioning.",
    image: "/cohorts/fitness.jpg",
    creatorsCount: "16 Creators Active",
    cadence: "14-Day Delivery",
    aesthetic: ["Kinetic Form", "Architectural Spaces", "Recovery Rituals", "Zero Hype"],
    toneColor: "hover:border-yellow",
    badgeBg: "bg-cream",
    badgeText: "text-red font-bold",
  },
];

export default function CohortExhibition() {
  const [activeCohort, setActiveCohort] = useState<string>("beauty");

  return (
    <section
      id="exhibition"
      className="relative bg-red text-cream border-t border-cream/15 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Exhibition Header */}
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col justify-between gap-6 border-b border-cream/15 pb-8 md:flex-row md:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full bg-yellow animate-pulse-subtle" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-cream/60">
                Exhibition 01 · Curated Verticals
              </span>
            </div>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-[-0.035em] text-cream sm:text-5xl md:text-6xl">
              Selected Cohorts.
              <br />
              <span className="font-serif italic font-normal text-yellow">High-retention</span> short-form.
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 text-sm text-cream/80">
            <span className="font-mono text-xs uppercase tracking-wider text-cream/50">Turnaround Guarantee</span>
            <span className="font-semibold text-cream">14 Days · Direct Rights Cleared · Organic + Spark</span>
          </div>
        </motion.div>

        {/* Cohort Selector Tabs: Crisp, tactile, editorial tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-cream/15 pb-6">
          {COHORTS.map((cohort) => {
            const isActive = activeCohort === cohort.id;
            return (
              <button
                key={cohort.id}
                type="button"
                onClick={() => setActiveCohort(cohort.id)}
                className={`btn-press group flex items-center gap-2.5 rounded-md px-4 py-2.5 text-xs font-semibold uppercase tracking-wider cursor-pointer ${
                  isActive
                    ? "bg-cream text-red shadow-sm font-bold"
                    : "bg-red-deep/60 text-cream/75 hover:bg-red-deep hover:text-cream border border-cream/15"
                }`}
              >
                <span className={`font-mono text-[11px] ${isActive ? "text-red-deep font-bold" : "text-yellow/75"}`}>
                  {cohort.num}
                </span>
                <span>{cohort.name.split("&")[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Asymmetric Exhibition Showcase: Varied Layout */}
        <div className="mt-12 space-y-16 lg:space-y-24">
          {COHORTS.map((cohort, index) => {
            const isEven = index % 2 === 0;
            const isHighlighted = activeCohort === cohort.id;

            return (
              <motion.article
                key={cohort.id}
                id={`cohort-${cohort.id}`}
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className={`group relative transition-opacity duration-300 ${
                  activeCohort && !isHighlighted ? "lg:opacity-85" : "opacity-100"
                }`}
                onMouseEnter={() => setActiveCohort(cohort.id)}
              >
                <div
                  className={`grid gap-8 lg:grid-cols-12 lg:items-center ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* Image Presentation Column: Asymmetric, dramatic, unrounded */}
                  <div
                    className={`relative overflow-hidden border border-cream/20 bg-red-deep shadow-md lg:col-span-7 ${
                      isEven ? "lg:order-1" : "lg:col-start-6 lg:order-2"
                    }`}
                  >
                    <div className="relative aspect-[16/10] w-full sm:aspect-[16/9] lg:aspect-[4/3] overflow-hidden">
                      <Image
                        src={cohort.image}
                        alt={`${cohort.name} cohort showcase`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-70 pointer-events-none" />

                      {/* Floating Micro-Badge */}
                      <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-sm px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider ${cohort.badgeBg} ${cohort.badgeText}`}
                        >
                          {cohort.creatorsCount}
                        </span>
                        <span className="rounded-sm bg-ink/80 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-cream backdrop-blur-sm border border-cream/15">
                          {cohort.cadence}
                        </span>
                      </div>

                      {/* Corner Number */}
                      <span className="absolute top-4 right-4 select-none font-mono text-3xl font-extrabold text-cream/90 drop-shadow-md">
                        {cohort.num}
                      </span>
                    </div>
                  </div>

                  {/* Editorial Dossier Column: Crisp typography, aesthetic tags */}
                  <div
                    className={`flex flex-col justify-between lg:col-span-5 ${
                      isEven ? "lg:order-2 lg:pl-6" : "lg:col-start-1 lg:order-1 lg:pr-6"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-yellow">
                          VERTICAL / {cohort.num}
                        </span>
                        <span className="h-[1px] w-8 bg-cream/20" />
                        <span className="font-mono text-xs uppercase tracking-wider text-cream/60">
                          Curated Roster
                        </span>
                      </div>

                      <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-cream sm:text-3xl md:text-4xl">
                        {cohort.name}
                      </h3>

                      <p className="mt-2 font-serif text-lg italic text-cream/90">
                        {cohort.tagline}
                      </p>

                      <p className="mt-4 text-sm leading-relaxed text-cream/80 sm:text-base">
                        {cohort.description}
                      </p>

                      {/* Aesthetic Pill Matrix */}
                      <div className="mt-6 flex flex-wrap items-center gap-1.5">
                        {cohort.aesthetic.map((item) => (
                          <span
                            key={item}
                            className="rounded-sm border border-cream/20 bg-red-deep/70 px-2.5 py-1 font-mono text-[11px] font-medium text-cream/90"
                          >
                            #{item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex items-center gap-4 border-t border-cream/15 pt-6">
                      <Link
                        href="/brands"
                        className="btn-press inline-flex items-center gap-2 rounded-md bg-cream px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-red transition-all duration-200 hover:bg-yellow hover:text-ink"
                      >
                        <span>Explore Cohort Roster</span>
                        <ArrowUpRight size={14} weight="bold" />
                      </Link>

                      <Link
                        href="/creators"
                        className="btn-press inline-flex items-center text-xs font-semibold uppercase tracking-wider text-cream/80 hover:text-yellow hover:underline hover:underline-offset-4"
                      >
                        Apply For This Cohort
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
