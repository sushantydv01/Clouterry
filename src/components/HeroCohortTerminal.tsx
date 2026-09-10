"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Check, ArrowRight, Lightning } from "@phosphor-icons/react";
import Link from "next/link";
import AnimatedCounter from "./AnimatedCounter";

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

/* ── Typewriter Hook ── */
function useTypewriter(text: string, speed: number = 40, startDelay: number = 0, enabled: boolean = true) {
  const [displayText, setDisplayText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setDisplayText(text);
      setIsDone(true);
      return;
    }

    setDisplayText("");
    setIsDone(false);

    const startTimeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          setIsDone(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, startDelay, enabled]);

  return { displayText, isDone };
}

/* ── Individual Creator Row with stagger ── */
function CreatorRow({
  creator,
  index,
  isVisible,
}: {
  creator: { handle: string; niche: string; stat: string };
  index: number;
  isVisible: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
      animate={
        isVisible
          ? { opacity: 1, x: 0, filter: "blur(0px)" }
          : { opacity: 0, x: -20, filter: "blur(4px)" }
      }
      transition={{
        duration: 0.5,
        delay: 0.3 + index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex items-center justify-between rounded-lg bg-void/50 border border-star-white/8 px-3 py-2.5 text-xs group hover:border-vermillion/30 hover:bg-void/70 transition-colors duration-300"
    >
      <div className="flex items-center gap-2.5">
        {/* Animated status dot */}
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-vermillion/60 animate-ping" style={{ animationDuration: "2.5s" }} />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-vermillion" />
        </span>
        <span className="font-semibold text-star-white group-hover:text-vermillion transition-colors duration-300">
          {creator.handle}
        </span>
        <span className="text-silver/40 hidden sm:inline">•</span>
        <span className="text-silver/60 hidden sm:inline text-[11px]">
          {creator.niche}
        </span>
      </div>
      <span className="font-mono text-[11px] text-silver/60 tabular-nums">
        {creator.stat.split("/")[1]?.trim()}
      </span>
    </motion.div>
  );
}

export default function HeroCohortTerminal() {
  const [activeTab, setActiveTab] = useState<string>("beauty");
  const cohort = COHORT_DATA.find((c) => c.id === activeTab) || COHORT_DATA[0];
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-40px" });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const { displayText: headerText, isDone: headerDone } = useTypewriter(
    "Live Cohort Terminal",
    35,
    200,
    hasAnimated && !reducedMotion
  );

  return (
    <div
      ref={containerRef}
      className="w-full rounded-2xl liquid-glass p-6 sm:p-7 text-star-white shadow-2xl relative border border-star-white/10 overflow-hidden terminal-scanline"
    >
      {/* Vermillion ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[radial-gradient(circle,_rgba(255,61,46,0.12),_transparent_70%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-[radial-gradient(circle,_rgba(255,61,46,0.06),_transparent_70%)] blur-2xl"
      />

      {/* Header bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-4 border-b border-star-white/8 pb-5"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {/* Live pulse indicator */}
            <span className="flex h-2 w-2 relative vermillion-pulse">
              <span className="absolute inline-flex h-full w-full rounded-full bg-vermillion opacity-75 animate-ping" style={{ animationDuration: "2s" }} />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-vermillion" />
            </span>
            <span className={`text-[11px] uppercase tracking-widest font-mono font-bold text-star-white ${!headerDone && hasAnimated ? "typewriter-cursor" : ""}`}>
              {hasAnimated ? headerText : "Live Cohort Terminal"}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-silver/60 font-mono">
            <Lightning size={12} className="text-vermillion" weight="fill" />
            <span>14-Day Delivery</span>
          </div>
        </div>

        {/* Tab selector with layout animation */}
        <div className="grid grid-cols-4 gap-1.5 bg-void/60 p-1 rounded-lg border border-star-white/8">
          {COHORT_DATA.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`relative py-1.5 text-center text-[11px] font-semibold rounded-md transition-colors duration-300 ${
                activeTab === item.id
                  ? "text-void"
                  : "text-silver/60 hover:text-star-white"
              }`}
            >
              {activeTab === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-star-white rounded-md"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name.split(" ")[0]}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Cohort details with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={cohort.id}
          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 space-y-5"
        >
          {/* Title & Engagement */}
          <div>
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-lg sm:text-xl font-bold text-star-white">
                {cohort.name}
              </h3>
              <span className="text-xs font-mono font-bold text-vermillion tabular-nums">
                <AnimatedCounter value={cohort.engagement.split(" ")[0]} className="inline" />
                <span className="text-silver/50 ml-1 font-normal">Avg ER</span>
              </span>
            </div>
            <p className="mt-1 text-xs text-silver/70 leading-relaxed">
              {cohort.cadence}
            </p>
          </div>

          {/* Creator Roster with staggered entry */}
          <div className="space-y-2 pt-1">
            <div className="text-[10px] font-mono uppercase tracking-wider text-silver/40">
              Sample Cohort Creators
            </div>

            <div className="space-y-1.5">
              {cohort.featuredCreators.map((creator, i) => (
                <CreatorRow
                  key={creator.handle}
                  creator={creator}
                  index={i}
                  isVisible={true}
                />
              ))}
            </div>
          </div>

          {/* Deliverables & CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="pt-3 border-t border-star-white/8 flex flex-wrap items-center justify-between gap-3"
          >
            <div className="flex flex-wrap items-center gap-1.5">
              {cohort.deliverables.map((del) => (
                <span
                  key={del}
                  className="inline-flex items-center gap-1 rounded-md bg-star-white/4 border border-star-white/8 px-2 py-0.5 text-[10px] font-medium text-silver/80 hover:border-vermillion/30 transition-colors duration-300"
                >
                  <Check size={10} weight="bold" className="text-vermillion" />
                  <span>{del}</span>
                </span>
              ))}
            </div>

            <Link
              href="/brands"
              data-cursor="cta"
              className="inline-flex items-center gap-1 text-xs font-bold text-star-white hover:text-vermillion transition-colors duration-300 group"
            >
              <span className="relative">
                Book Cohort
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-vermillion group-hover:w-full transition-all duration-300" />
              </span>
              <ArrowRight size={12} weight="bold" className="group-hover:translate-x-0.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
