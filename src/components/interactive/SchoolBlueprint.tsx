"use client";

import React, { useState } from "react";
import Link from "next/link";
import { INDUSTRIES } from "@/data/industries";
import { ArrowUpRight, Check } from "lucide-react";

const LAYER_COLORS = ["#F4CF55", "#A6D8A1", "#ED83A8", "#171717"];

/**
 * Un-Nested 4-Layer School Digital Blueprint on Warm Cream (#F8F6EF).
 * Restrains display weight to medium (500) and cleanly eliminates stacked bordered badges.
 */
export default function SchoolBlueprint({ showPracticeLink = true }: { showPracticeLink?: boolean }) {
  const educationSector = INDUSTRIES.find((i) => i.slug === "education");
  const layers = educationSector?.blueprintLayers || [];

  const [activeLayerIndex, setActiveLayerIndex] = useState(0);
  const activeLayer = layers[activeLayerIndex] || layers[0];

  return (
    <div className="w-full space-y-10 text-left">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#171717]/15">
        <div className="space-y-2 max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.025em] text-[#171717] leading-[1.08]">
            The School Digital Blueprint
          </h2>
          <p className="text-base text-[#3F3D38] leading-relaxed font-sans">
            Four architectural layers that separate prospective parent admissions conversion from internal community utilities.
          </p>
        </div>

        {showPracticeLink && (
          <Link
            href="/industries/education"
            className="firm-btn-dark text-sm self-start lg:self-end"
          >
            <span>Explore Education Practice</span>
            <ArrowUpRight size={15} />
          </Link>
        )}
      </div>

      {/* Clean Single-Row Layer Switcher Tabs */}
      <div
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        role="tablist"
        aria-label="School Blueprint Architecture Layers"
      >
        {layers.map((layer, idx) => {
          const isActive = idx === activeLayerIndex;
          const accent = LAYER_COLORS[idx % LAYER_COLORS.length];

          return (
            <button
              key={layer.layer}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveLayerIndex(idx)}
              className={`p-4 sm:p-5 rounded-xl text-left transition-colors cursor-pointer border flex flex-col justify-between gap-2 ${
                isActive
                  ? "bg-[#171717] text-[#F8F6EF] border-[#171717]"
                  : "bg-[#FFFFFF] text-[#171717] border-[#171717]/16 hover:border-[#171717]/40"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`font-mono text-xs ${
                    isActive ? "text-[#F4CF55]" : "text-[#3F3D38]"
                  }`}
                >
                  Layer {layer.layer}
                </span>
                <span
                  className="h-2.5 w-2.5 rounded-full shrink-0"
                  style={{
                    backgroundColor: accent === "#171717" && isActive ? "#F8F6EF" : accent,
                  }}
                  aria-hidden="true"
                />
              </div>
              <span className="font-display text-base font-medium leading-snug">
                {layer.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Unboxed 12-Col Layer Details */}
      <div
        key={activeLayer.layer}
        className="animate-paper-enter grid gap-10 lg:gap-12 lg:grid-cols-12 items-start pt-2"
      >
        {/* Left: Purpose & Handover List (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2.5">
            <span className="font-sans text-xs font-semibold text-[#3F3D38] block">
              Layer {activeLayer.layer} · {activeLayer.tagline}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#171717] tracking-tight leading-snug">
              {activeLayer.name}
            </h3>
            <p className="text-base text-[#3F3D38] leading-relaxed font-sans">
              {activeLayer.purpose}
            </p>
          </div>

          <div className="space-y-2.5 pt-4 border-t border-[#171717]/15">
            <span className="text-xs font-sans font-semibold text-[#171717] block">
              Included layer modules
            </span>
            <p className="text-sm text-[#3F3D38] leading-relaxed font-sans">
              {activeLayer.exampleDeliverables.join(" · ")}
            </p>
          </div>
        </div>

        {/* Right: Capabilities vs Problems Solved (7 cols, Open Typography) */}
        <div className="lg:col-span-7 grid gap-8 sm:grid-cols-2 border-t border-[#171717]/15 pt-6 lg:border-t-0 lg:pt-0 lg:border-l lg:border-[#171717]/15 lg:pl-10">
          <div className="space-y-4">
            <h4 className="text-xs font-sans font-semibold text-[#171717] pb-2 border-b border-[#171717]/15">
              Core capabilities
            </h4>
            <ul className="space-y-3 text-sm text-[#171717]">
              {activeLayer.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="mt-1 h-4 w-4 rounded-full bg-[#A6D8A1] text-[#171717] inline-flex items-center justify-center shrink-0">
                    <Check size={11} className="stroke-[2.5]" />
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-sans font-semibold text-[#171717] pb-2 border-b border-[#171717]/15">
              Institutional friction resolved
            </h4>
            <ul className="space-y-3 text-sm text-[#3F3D38]">
              {activeLayer.problemsAddressed.map((prob) => (
                <li key={prob} className="flex items-start gap-2.5 leading-relaxed">
                  <span
                    className="mt-2 h-2 w-2 rounded-full bg-[#ED83A8] shrink-0"
                    aria-hidden="true"
                  />
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
