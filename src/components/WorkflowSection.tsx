"use client";

import { useState } from "react";
import { Check, Clock } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

interface Step {
  stage: string;
  title: string;
  timeline: string;
  duration: string;
  desc: string;
  deliverables: string[];
  highlight: string;
}

const STEPS: Step[] = [
  {
    stage: "Stage 1",
    title: "Aesthetic Discovery & Vertical Matching",
    timeline: "Days 1–3",
    duration: "48 Hours",
    desc: "We analyze your brand tone, competitor hooks, and core conversion metrics. We determine the exact lifestyle vertical (Beauty, Food, Movement, Tech) that aligns with your audience.",
    deliverables: [
      "Custom Creative Strategy Brief",
      "Audience Persona & Hook Matrix",
      "Cohort Candidate Shortlist (15 vetted profiles)",
    ],
    highlight: "Zero multi-week onboarding delay. We hit the ground running.",
  },
  {
    stage: "Stage 2",
    title: "Cohort Assembly & Collaborative Briefing",
    timeline: "Days 4–7",
    duration: "72 Hours",
    desc: "We pair your campaign with a dedicated creator cohort. Rather than rigid copy, creators receive creative guardrails and angle prompts that leave their natural storytelling intact.",
    deliverables: [
      "Product seeding coordination & tracking",
      "Tailored creator angle pitches & concepts",
      "Fully executed standard non-exclusive contracts",
    ],
    highlight: "Creators pitch authentic angles before shooting a single frame.",
  },
  {
    stage: "Stage 3",
    title: "Native Production & Quality Review",
    timeline: "Days 8–14",
    duration: "7 Days",
    desc: "Cohort members produce short-form video in their authentic environment. Clouterry's team reviews each asset for hook pacing, lighting, audio clarity, and FTC compliance.",
    deliverables: [
      "Batch raw 4K 9:16 vertical video assets",
      "Edited cuts with captions & music rights cleared",
      "Consolidated feedback loop in one single review link",
    ],
    highlight: "One review dashboard. No hunting through 40 email attachments.",
  },
  {
    stage: "Stage 4",
    title: "Distribution, Whitelisting & Spark Scaling",
    timeline: "Days 15+",
    duration: "Immediate",
    desc: "Assets go live across creator feeds. High-performing organic videos are immediately amplified via TikTok Spark Ads and Meta Partnership Ads for maximum paid ROAS.",
    deliverables: [
      "Creator ad authorization & Spark codes",
      "Full 90-day organic and paid usage rights",
      "Consolidated performance engagement report",
    ],
    highlight: "Paid ads running directly from creator handles for 3x higher click-through.",
  },
];

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative border-t border-star-white/8 bg-void/35 backdrop-blur-xs px-6 sm:px-10 lg:px-16 py-28 sm:py-36 text-silver">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <RevealOnScroll>
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-vermillion font-semibold mb-3">
              Execution Velocity
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-star-white leading-[1.05]">
              From brief to live assets in 14 days.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-silver/75 leading-relaxed">
              A battle-tested production pipeline designed to eliminate agency bloat and deliver authentic creator content at velocity.
            </p>
          </div>
        </RevealOnScroll>

        {/* Stage Selector with progress indicator */}
        <RevealOnScroll delay={0.1}>
          <div className="mt-14">
            {/* Progress bar */}
            <div className="h-[2px] bg-star-white/8 rounded-full mb-6 overflow-hidden">
              <motion.div
                className="h-full bg-vermillion rounded-full"
                animate={{ width: `${((activeStep + 1) / STEPS.length) * 100}%` }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 pb-6">
              {STEPS.map((step, idx) => (
                <button
                  key={step.stage}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`rounded-lg border p-4 text-left transition-all duration-400 ${
                    activeStep === idx
                      ? "liquid-glass border-vermillion/30 text-star-white font-bold shadow-[0_0_20px_rgba(255,61,46,0.08)]"
                      : "border-star-white/8 text-silver/50 hover:border-star-white/20 hover:text-star-white"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono uppercase text-[11px] text-vermillion">
                      {step.stage}
                    </span>
                    <span className={activeStep === idx ? "text-star-white" : "text-silver/40"}>
                      {step.timeline}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-xs sm:text-sm font-bold truncate">
                    {step.title.split("&")[0]}
                  </h3>
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Active Stage Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="liquid-glass rounded-2xl p-8 sm:p-12 border border-star-white/10 shadow-2xl"
          >
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Column */}
              <div className="lg:col-span-7">
                <div className="text-xs font-semibold uppercase tracking-wider text-vermillion">
                  {STEPS[activeStep].timeline} • {STEPS[activeStep].stage}
                </div>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-star-white tracking-tight">
                  {STEPS[activeStep].title}
                </h3>

                <p className="mt-5 text-sm sm:text-base text-silver/75 leading-relaxed">
                  {STEPS[activeStep].desc}
                </p>

                <div className="mt-6 border-l-2 border-vermillion pl-4 py-1 text-xs sm:text-sm font-medium text-star-white">
                  {STEPS[activeStep].highlight}
                </div>
              </div>

              {/* Right Column: Deliverables */}
              <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-star-white/8 pt-6 lg:pt-0 lg:pl-8">
                <div className="flex items-center justify-between pb-3 border-b border-star-white/8">
                  <span className="text-xs font-bold uppercase tracking-wider text-star-white/70">
                    Guaranteed Deliverables
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-silver/50">
                    <Clock size={14} className="text-vermillion" />
                    <span>{STEPS[activeStep].duration}</span>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {STEPS[activeStep].deliverables.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.3 }}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-silver/80 leading-relaxed"
                    >
                      <Check size={14} weight="bold" className="text-vermillion shrink-0 mt-1" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
