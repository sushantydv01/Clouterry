"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkle, ArrowRight, Users, ShieldCheck, Lightning } from "@phosphor-icons/react";
import Link from "next/link";

interface CohortPreview {
  id: string;
  name: string;
  cadence: string;
  creatorsCount: string;
  engagement: string;
  turnaround: string;
  featuredCreators: { handle: string; niche: string; stat: string }[];
  deliverables: string[];
}

const COHORT_DATA: CohortPreview[] = [
  {
    id: "beauty",
    name: "Beauty & Daily Rituals",
    cadence: "Aesthetic skincare, morning routines, texture checks",
    creatorsCount: "18 Creators",
    engagement: "5.4% Avg ER",
    turnaround: "14 Days",
    featuredCreators: [
      { handle: "@sophia.glows", niche: "Glass Skin Rituals", stat: "84K / 5.4% ER" },
      { handle: "@chloe.textures", niche: "Clinical Skincare", stat: "48K / 6.1% ER" },
      { handle: "@noor.rituals", niche: "Morning Routine ASMR", stat: "62K / 5.8% ER" },
    ],
    deliverables: ["Raw 4K Vertical UGC", "Spark Ad Authorization", "FTC Cleared"],
  },
  {
    id: "food",
    name: "Food & Regional Culture",
    cadence: "Artisanal culinary, regional tasting notes, kitchen ASMR",
    creatorsCount: "14 Creators",
    engagement: "6.8% Avg ER",
    turnaround: "14 Days",
    featuredCreators: [
      { handle: "@mateocooks", niche: "Heritage Fermentation", stat: "42K / 6.8% ER" },
      { handle: "@marcus.craft", niche: "Specialty Pour-Over", stat: "38K / 7.2% ER" },
      { handle: "@sora.kitchen", niche: "Izakaya ASMR", stat: "56K / 6.4% ER" },
    ],
    deliverables: ["Recipe Integrations", "Pantry Placement", "Spark Whitelisting"],
  },
  {
    id: "movement",
    name: "Movement & Conditioning",
    cadence: "Form breakdown, athletic recovery, intentional wellness",
    creatorsCount: "16 Creators",
    engagement: "5.1% Avg ER",
    turnaround: "14 Days",
    featuredCreators: [
      { handle: "@elena.movement", niche: "Mobility & Strength", stat: "65K / 5.1% ER" },
      { handle: "@julian.tracks", niche: "Hybrid Conditioning", stat: "51K / 5.6% ER" },
      { handle: "@maya.conditioning", niche: "Pilates Form", stat: "74K / 4.9% ER" },
    ],
    deliverables: ["Active Wear Tests", "Morning Routine Spots", "Full Usage Rights"],
  },
  {
    id: "tech",
    name: "Workspaces & Tech EDC",
    cadence: "Ergonomic setups, desk tours, workflow gear breakdowns",
    creatorsCount: "16 Creators",
    engagement: "5.9% Avg ER",
    turnaround: "14 Days",
    featuredCreators: [
      { handle: "@kai.techdesk", niche: "Minimal Desk Setups", stat: "92K / 5.9% ER" },
      { handle: "@alex.edc", niche: "Mechanical Hardware", stat: "44K / 6.2% ER" },
      { handle: "@leona.workflow", niche: "Creative Tech Stacks", stat: "37K / 5.7% ER" },
    ],
    deliverables: ["Desk Tour Integrations", "Workflow Walkthroughs", "90-Day Paid Spark"],
  },
];

export default function HeroCohortTerminal() {
  const [activeTab, setActiveTab] = useState<string>("beauty");
  const cohort = COHORT_DATA.find((c) => c.id === activeTab) || COHORT_DATA[0];

  return (
    <div className="w-full rounded-2xl liquid-glass p-6 sm:p-7 text-star-white shadow-2xl relative border border-star-white/15 overflow-hidden">
      {/* Subtle ambient ember backlight inside the card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[radial-gradient(circle,_rgba(212,169,74,0.15),_transparent_70%)] blur-2xl"
      />

      {/* Header bar with live status and vertical tabs */}
      <div className="flex flex-col gap-4 border-b border-star-white/10 pb-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ember"></span>
            </span>
            <span className="text-[11px] uppercase tracking-widest font-mono font-bold text-star-white">
              Live Cohort Terminal
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-silver/70 font-mono">
            <Lightning size={12} className="text-ember" weight="fill" />
            <span>14-Day Delivery</span>
          </div>
        </div>

        {/* Vertical selector tabs */}
        <div className="grid grid-cols-4 gap-1.5 bg-void/50 p-1 rounded-lg border border-star-white/10">
          {COHORT_DATA.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`py-1.5 text-center text-[11px] font-semibold rounded-md transition-all ${
                activeTab === item.id
                  ? "bg-star-white text-void shadow-xs"
                  : "text-silver/70 hover:text-star-white"
              }`}
            >
              {item.name.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Cohort details container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={cohort.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="mt-5 space-y-5"
        >
          {/* Main Title & Cadence */}
          <div>
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-lg sm:text-xl font-bold text-star-white">
                {cohort.name}
              </h3>
              <span className="text-xs font-mono font-semibold text-ember">
                {cohort.engagement}
              </span>
            </div>
            <p className="mt-1 text-xs text-silver/80 leading-relaxed">
              {cohort.cadence}
            </p>
          </div>

          {/* Featured Creator Roster Preview */}
          <div className="space-y-2 pt-1">
            <div className="text-[10px] font-mono uppercase tracking-wider text-silver/50">
              Sample Cohort Creators
            </div>

            <div className="space-y-1.5">
              {cohort.featuredCreators.map((creator) => (
                <div
                  key={creator.handle}
                  className="flex items-center justify-between rounded-lg bg-void/40 border border-star-white/10 px-3 py-2 text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-ember/70" />
                    <span className="font-semibold text-star-white">
                      {creator.handle}
                    </span>
                    <span className="text-silver/50 hidden sm:inline">•</span>
                    <span className="text-silver/70 hidden sm:inline text-[11px]">
                      {creator.niche}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-silver/70">
                    {creator.stat.split("/")[1].trim()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables badges & Quick action */}
          <div className="pt-3 border-t border-star-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {cohort.deliverables.map((del) => (
                <span
                  key={del}
                  className="inline-flex items-center gap-1 rounded-md bg-star-white/5 border border-star-white/10 px-2 py-0.5 text-[10px] font-medium text-silver"
                >
                  <Check size={10} weight="bold" className="text-ember" />
                  <span>{del}</span>
                </span>
              ))}
            </div>

            <Link
              href="/brands"
              className="inline-flex items-center gap-1 text-xs font-bold text-star-white underline underline-offset-4 hover:text-ember transition-colors"
            >
              <span>Book Cohort</span>
              <ArrowRight size={12} weight="bold" />
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
