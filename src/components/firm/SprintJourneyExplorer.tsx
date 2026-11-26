"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const SPRINT_STAGES = [
  {
    num: "01",
    window: "Days 1 to 7",
    color: "#ED83A8",
    title: "Diagnostic & Architecture Audit",
    description:
      "Forensic review of existing web software, typography hierarchy, search visibility, and institutional buyer pathways.",
    clientExpectation: "One 90-minute partner scoping briefing plus read access to current domain/analytics.",
    outputs: [
      "Complete route & technical debt audit",
      "Accessibility & speed baseline diagnosis",
      "Unified positioning & architecture map",
    ],
  },
  {
    num: "02",
    window: "Days 8 to 18",
    color: "#F4CF55",
    title: "Brand Tokens & Structural Wireframes",
    description:
      "Authoring living CSS typography and color tokens alongside responsive App Router information layouts.",
    clientExpectation: "Review live clickable viewport prototypes directly in the browser—zero static PDF guess-work.",
    outputs: [
      "Living type, palette & spacing CSS tokens",
      "Desktop, tablet & mobile structural layouts",
      "Art direction briefs for custom plates or film",
    ],
  },
  {
    num: "03",
    window: "Days 19 to 40",
    color: "#A6D8A1",
    title: "Engineering, Media & WCAG 2.1 AA Verification",
    description:
      "React Server Component implementation, documentary photography art direction, structured JSON-LD schema, and keyboard/screen-reader QA.",
    clientExpectation: "Weekly preview deploys against production edge infrastructure for content and legal review.",
    outputs: [
      "Full Next.js TypeScript application codebase",
      "Structured Schema.org metadata & sitemap",
      "Verified 360px–1920px keyboard & contrast QA",
    ],
  },
  {
    num: "04",
    window: "Day 45 Onward",
    color: "#ED83A8",
    title: "Deployment & Fractional Custody",
    description:
      "Controlled edge release, indexing verification, complete Git ownership handoff, and optional long-term SLA stewardship.",
    clientExpectation: "Full repository credentials, documentation handbook, and zero lock-in terms.",
    outputs: [
      "100% client Git repository ownership transfer",
      "Zero-downtime DNS & search indexing check",
      "Optional quarterly maintenance & security SLA",
    ],
  },
];

/**
 * Interactive 4-Stage Sprint Explorer (`# 12.4` — Project Journey):
 * Lets prospective partners inspect deliverables, expectations, and cadence stage by stage.
 */
export default function SprintJourneyExplorer() {
  const [activeStage, setActiveStage] = useState(0);
  const current = SPRINT_STAGES[activeStage];

  return (
    <div className="w-full grid gap-12 lg:gap-16 lg:grid-cols-12 items-start text-left">
      {/* Left Thesis + S02 Artwork */}
      <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
        <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-[-0.025em] text-[#F8F6EF] leading-[1.06]">
          How the Thread moves through a sprint.
        </h2>
        <p className="text-base text-[#D5D2C7] leading-relaxed font-sans">
          Rather than open-ended agency retainers without tangible accountability, commissions progress through four inspectable stages led directly by senior partners.
        </p>
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#F8F6EF]/14 bg-[#121214]">
          <Image
            src="/images/studio/s02-geometric-ribbon.webp"
            alt="Continuous rose pink ribbon connecting geometric brand and engineering modules"
            fill
            loading="eager"
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Interactive Stage Selector + Client Expectation Inspector */}
      <div className="lg:col-span-7 space-y-6">
        <div className="divide-y divide-[#F8F6EF]/14 border-y border-[#F8F6EF]/14">
          {SPRINT_STAGES.map((stage, idx) => {
            const isOpen = idx === activeStage;
            return (
              <div key={stage.num}>
                <button
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  aria-expanded={isOpen}
                  className={`w-full py-6 sm:py-7 px-3 text-left grid gap-4 sm:grid-cols-12 items-start transition-colors cursor-pointer ${
                    isOpen ? "bg-[#1D1D20]" : "hover:bg-[#1D1D20]/45"
                  }`}
                >
                  <div className="sm:col-span-3 space-y-1">
                    <span
                      className="font-mono text-xs tabular-nums block font-medium"
                      style={{ color: stage.color }}
                    >
                      Stage {stage.num}
                    </span>
                    <span className="font-mono text-xs text-[#ACA89E] block">
                      {stage.window}
                    </span>
                  </div>

                  <div className="sm:col-span-9 space-y-2">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl sm:text-2xl font-display font-medium text-[#F8F6EF]">
                        {stage.title}
                      </h3>
                      <span
                        className={`text-xs font-sans px-2.5 py-1 rounded-full shrink-0 border ${
                          isOpen
                            ? "bg-[#ED83A8] text-[#171717] border-[#ED83A8] font-medium"
                            : "text-[#ACA89E] border-[#F8F6EF]/16"
                        }`}
                      >
                        {isOpen ? "Active" : "Inspect"}
                      </span>
                    </div>
                    <p className="text-base text-[#D5D2C7] leading-relaxed font-sans">
                      {stage.description}
                    </p>
                  </div>
                </button>

                {isOpen && (
                  <div className="animate-paper-enter px-3 pb-7 pt-2 bg-[#1D1D20] grid gap-6 sm:grid-cols-12">
                    <div className="sm:col-span-3 hidden sm:block" />
                    <div className="sm:col-span-9 space-y-5 pt-4 border-t border-[#F8F6EF]/12">
                      <div className="space-y-1">
                        <span className="text-xs font-sans font-medium text-[#F4CF55] block">
                          What you contribute &amp; review
                        </span>
                        <p className="text-sm text-[#F8F6EF] leading-relaxed">
                          {current.clientExpectation}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <span className="text-xs font-sans font-medium text-[#A6D8A1] block">
                          Concrete outputs shipped
                        </span>
                        <ul className="space-y-2">
                          {current.outputs.map((out) => (
                            <li key={out} className="flex items-start gap-2.5 text-sm text-[#D5D2C7]">
                              <span className="mt-1 h-4 w-4 rounded-full bg-[#A6D8A1] text-[#171717] inline-flex items-center justify-center shrink-0">
                                <Check size={11} className="stroke-[2.5]" />
                              </span>
                              <span>{out}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
