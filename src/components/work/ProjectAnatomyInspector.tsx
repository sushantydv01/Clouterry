"use client";

import React, { useState } from "react";
import { ProjectCaseStudy } from "@/data/projects";
import { Check } from "lucide-react";

interface ProjectAnatomyInspectorProps {
  project: ProjectCaseStudy;
}

/**
 * Interactive 8-Layer Project Anatomy Inspector (`# 12.5`):
 * Lets prospective clients inspect Strategy, Identity, Design, Engineering, Content,
 * Search, Documentation, and Handover using strictly truthful concept-study data.
 */
export default function ProjectAnatomyInspector({ project }: ProjectAnatomyInspectorProps) {
  const layers = [
    {
      num: "01",
      key: "Strategy",
      heading: "Institutional problem framing & funnel separation",
      body: project.challenge,
      artifact: `${project.classification} · ${project.timeframe}`,
    },
    {
      num: "02",
      key: "Identity",
      heading: "Tone, stature & visual boundary setting",
      body: project.strategicApproach,
      artifact: project.deliverables[1]?.title || "Visual & Typographic Guidelines",
    },
    {
      num: "03",
      key: "Design",
      heading: "Composable component architecture across viewports",
      body: project.executionDetails[0]?.description || project.summary,
      artifact: project.deliverables[0]?.title || "Primary Flagship Architecture",
    },
    {
      num: "04",
      key: "Engineering",
      heading: "Semantic Next.js Server Components & accessibility verification",
      body: project.technicalDecisions[0] || "Next.js App Router compiled cleanly with WCAG 2.1 AA verification.",
      artifact: project.technicalDecisions[1] || "Clean responsive semantic markup",
    },
    {
      num: "05",
      key: "Content",
      heading: "Editorial storytelling & institutional voice calibration",
      body: project.executionDetails[1]?.description || project.summary,
      artifact: project.deliverables[3]?.title || "Editorial & Media System",
    },
    {
      num: "06",
      key: "Search",
      heading: "Discoverability & structured metadata foundations",
      body: project.technicalDecisions[2] || "Clean canonical hierarchy, Schema.org structure, and direct intake workflows.",
      artifact: `${project.industry} Structured Taxonomy`,
    },
    {
      num: "07",
      key: "Documentation",
      heading: "Maintainable engineering specifications & editorial guides",
      body: project.executionDetails[2]?.description || "Structured team workflows documented clearly for long-term staff autonomy.",
      artifact: project.deliverables[2]?.title || "Workflow & Operations Playbook",
    },
    {
      num: "08",
      key: "Handover",
      heading: "Complete repository custody without CMS lock-in",
      body: project.classificationNotice,
      artifact: `Engaged practices: ${project.divisions.join(", ")}`,
    },
  ];

  const [activeLayer, setActiveLayer] = useState(0);
  const current = layers[activeLayer];

  return (
    <div className="space-y-6 pt-6 border-t border-[#F8F6EF]/12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#F8F6EF]">
            Project anatomy explorer
          </h2>
          <p className="text-sm text-[#D5D2C7] font-sans mt-1">
            Inspect how all eight layers of this blueprint fit together from discovery through final custody.
          </p>
        </div>
        <span className="font-mono text-xs text-[#ACA89E] shrink-0">
          01–08 Anatomy Layers
        </span>
      </div>

      {/* Interactive Layer Tabs */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project Anatomy Layers">
        {layers.map((layer, idx) => {
          const active = idx === activeLayer;
          return (
            <button
              key={layer.key}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setActiveLayer(idx)}
              className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-display font-medium transition-colors cursor-pointer border whitespace-nowrap ${
                active
                  ? "bg-[#ED83A8] text-[#171717] border-[#ED83A8]"
                  : "bg-[#121214] text-[#D5D2C7] border-[#F8F6EF]/14 hover:text-[#F8F6EF] hover:border-[#F8F6EF]/35"
              }`}
            >
              <span className="font-mono text-xs mr-1.5 opacity-80">{layer.num}</span>
              <span>{layer.key}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Layer Inspection Readout */}
      <div
        key={current.key}
        className="animate-paper-enter p-6 sm:p-8 rounded-2xl bg-[#121214] border border-[#F8F6EF]/12 space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#F4CF55]">
          <span>Layer {current.num} · {current.key}</span>
          <span className="text-[#A6D8A1] inline-flex items-center gap-1.5 font-sans">
            <Check size={12} />
            <span>Concept Specification</span>
          </span>
        </div>

        <h3 className="font-display text-xl sm:text-2xl font-medium text-[#F8F6EF]">
          {current.heading}
        </h3>

        <p className="text-sm sm:text-base text-[#D5D2C7] leading-relaxed font-sans max-w-[66ch]">
          {current.body}
        </p>

        <div className="pt-3 border-t border-[#F8F6EF]/10 text-xs text-[#ACA89E] font-mono">
          Primary blueprint focus: <span className="text-[#F8F6EF]">{current.artifact}</span>
        </div>
      </div>
    </div>
  );
}
