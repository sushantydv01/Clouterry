"use client";

import { useState } from "react";
import { Check, Clock } from "@phosphor-icons/react";

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
    <section className="relative border-t border-star-white/10 bg-void/35 backdrop-blur-xs px-6 sm:px-10 lg:px-16 py-28 sm:py-36 text-silver">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-ember font-semibold mb-3">
            Execution Velocity
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-star-white leading-[1.05]">
            From brief to live assets in 14 days.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-silver/85 leading-relaxed">
            A battle-tested production pipeline designed to eliminate agency bloat and deliver authentic creator content at velocity.
          </p>
        </div>

        {/* Stage Selector */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 border-b border-star-white/10 pb-6">
          {STEPS.map((step, idx) => (
            <button
              key={step.stage}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`rounded-lg border p-4 text-left transition-colors ${
                activeStep === idx
                  ? "liquid-glass border-b-2 border-b-ember text-star-white font-bold"
                  : "border-star-white/10 text-silver/60 hover:border-star-white/25 hover:text-star-white"
              }`}
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono uppercase text-[11px] text-ember">
                  {step.stage}
                </span>
                <span className={activeStep === idx ? "text-star-white" : "text-silver/50"}>
                  {step.timeline}
                </span>
              </div>
              <h3 className="mt-2 font-display text-xs sm:text-sm font-bold truncate">
                {step.title.split("&")[0]}
              </h3>
            </button>
          ))}
        </div>

        {/* Active Stage Details in Liquid Glass */}
        <div className="mt-8 liquid-glass rounded-2xl p-8 sm:p-12 border border-star-white/15 shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="text-xs font-semibold uppercase tracking-wider text-ember">
                {STEPS[activeStep].timeline} • {STEPS[activeStep].stage}
              </div>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-star-white tracking-tight">
                {STEPS[activeStep].title}
              </h3>

              <p className="mt-5 text-sm sm:text-base text-silver/85 leading-relaxed">
                {STEPS[activeStep].desc}
              </p>

              <div className="mt-6 border-l-2 border-ember pl-4 py-1 text-xs sm:text-sm font-medium text-star-white">
                {STEPS[activeStep].highlight}
              </div>
            </div>

            {/* Right Column: Deliverables Box */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-star-white/10 pt-6 lg:pt-0 lg:pl-8">
              <div className="flex items-center justify-between pb-3 border-b border-star-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-star-white/80">
                  Guaranteed Deliverables
                </span>
                <div className="flex items-center gap-1.5 text-xs text-silver/60">
                  <Clock size={14} className="text-ember" />
                  <span>{STEPS[activeStep].duration}</span>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {STEPS[activeStep].deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-silver/90 leading-relaxed"
                  >
                    <Check size={14} weight="bold" className="text-ember shrink-0 mt-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
