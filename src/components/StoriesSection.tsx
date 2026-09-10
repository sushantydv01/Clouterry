"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  brand: string;
  cohort: string;
  creators: number;
  highlightStat: string;
  highlightLabel: string;
  secondaryStat: string;
  secondaryLabel: string;
  summary: string;
  keyTakeaway: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "skincare-launch",
    category: "Beauty & Daily Rituals",
    title: "1.8M Organic Views & 3.8x ROAS for Clean Skincare Launch",
    brand: "Botanical Skincare Client",
    cohort: "Beauty & Daily Rituals",
    creators: 8,
    highlightStat: "1.8M",
    highlightLabel: "Organic Impressions",
    secondaryStat: "3.8x",
    secondaryLabel: "Blended Spark Ad ROAS",
    summary: "Instead of mass-gifting products to 100 unvetted handles, the brand partnered with our 8-creator cohort for an unfiltered 30-day morning skin ritual campaign.",
    keyTakeaway: "Authentic, unsponsored-looking texture checks outperformed polished studio ads by 240% in conversion rate.",
  },
  {
    id: "artisanal-culinary",
    category: "Food & Regional Culture",
    title: "Batch Sellout in 12 Days via Artisanal Food Creators",
    brand: "Heritage Pantry Client",
    cohort: "Culinary & Culture",
    creators: 6,
    highlightStat: "48K",
    highlightLabel: "Direct Organic Visits",
    secondaryStat: "12 Days",
    secondaryLabel: "Inventory Sellout Speed",
    summary: "Six micro-culinary creators integrated the product into authentic home kitchen recipes and fermentation walkthroughs, generating high viral bookmark rates.",
    keyTakeaway: "Niche culinary audiences trust genuine home kitchen creators far more than celebrity chef endorsements.",
  },
  {
    id: "tech-desk-collective",
    category: "Workspaces & Tech EDC",
    title: "3.5x Creator Rate Parity through Collective Cohort Bargaining",
    brand: "Ergonomics Hardware Client",
    cohort: "Tech & Workspaces",
    creators: 10,
    highlightStat: "3.5x",
    highlightLabel: "Average Fee Uplift",
    secondaryStat: "0",
    secondaryLabel: "Contract Disputes",
    summary: "Individual desk-setup creators previously had to negotiate alone against corporate procurement. Grouping into a Clouterry cohort secured institutional enterprise rates.",
    keyTakeaway: "Cohorts provide micro-creators collective power while giving brands a seamless turnkey sponsorship buy.",
  },
];

export default function StoriesSection() {
  const [activeStory, setActiveStory] = useState(0);
  const story = CASE_STUDIES[activeStory];

  return (
    <section className="relative border-t border-star-white/10 bg-void/40 backdrop-blur-xs px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-star-white leading-[1.05]">
            Stories from the cohort ecosystem.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-silver/85 leading-relaxed">
            Real campaign outcomes demonstrating how genuine creator alignment drives disproportionate conversion.
          </p>
        </div>

        {/* Story Selector */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 border-b border-star-white/10 pb-6">
          {CASE_STUDIES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveStory(idx)}
              className={`flex-1 text-left pb-3 transition-colors ${
                activeStory === idx
                  ? "border-b-2 border-star-white text-star-white font-bold"
                  : "text-silver/60 hover:text-silver"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold">
                  {s.category}
                </span>
                <span className="text-xs font-bold text-ember">
                  {s.highlightStat}
                </span>
              </div>
              <h3 className="mt-1 font-display text-sm font-bold text-star-white line-clamp-1">
                {s.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Narrative & Metric Layout: Zero stock photos */}
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Metrics & Focus */}
          <div className="lg:col-span-4 border-l-2 border-star-white/30 pl-6 space-y-8">
            <div>
              <div className="font-display text-4xl sm:text-6xl font-black text-star-white">
                {story.highlightStat}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-silver/60 mt-1">
                {story.highlightLabel}
              </div>
            </div>

            <div>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-ember">
                {story.secondaryStat}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-silver/60 mt-1">
                {story.secondaryLabel}
              </div>
            </div>

            <div className="pt-4 border-t border-star-white/10 text-xs text-silver/60">
              <span>{story.cohort} Cohort</span> • <span>{story.creators} Vetted Creators</span>
            </div>
          </div>

          {/* Right Column: Case Insight & Strategy */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-star-white leading-snug">
              {story.title}
            </h3>

            <p className="text-base text-silver/85 leading-relaxed">
              {story.summary}
            </p>

            <div className="border-t border-b border-star-white/10 py-5 my-6">
              <div className="text-xs font-bold uppercase tracking-wider text-silver/50">
                The Strategic Insight
              </div>
              <p className="mt-2 text-sm sm:text-base font-medium text-star-white leading-relaxed">
                {story.keyTakeaway}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <span className="text-xs text-silver/60">
                Ready to partner on a similar vertical?
              </span>
              <Link
                href="/brands"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-silver underline underline-offset-4 hover:text-star-white transition-colors"
              >
                <span>Schedule Brand Consultation</span>
                <ArrowUpRight size={14} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
