"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { CAPABILITY_NODES } from "@/lib/threadTheme";
import { ArrowUpRight, Check } from "lucide-react";

/**
 * Unboxed Warm Cream Interactive Capabilities Architecture for `/capabilities`.
 * Restrains display weight to medium (500) and drops all-caps template kickers.
 */
export default function PresenceMatrix() {
  const [activeSlug, setActiveSlug] = useState("brand-identity");

  const activeIndex = Math.max(
    0,
    SERVICES.findIndex((s) => s.slug === activeSlug)
  );
  const activeService = SERVICES[activeIndex] || SERVICES[0];
  const activeNode = CAPABILITY_NODES[activeIndex] || CAPABILITY_NODES[0];

  return (
    <div className="w-full space-y-10 text-left">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#171717]/15">
        <div className="space-y-2 max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.025em] text-[#171717] leading-[1.08]">
            Inspect how the five practices interconnect.
          </h2>
          <p className="text-base text-[#3F3D38] leading-relaxed font-sans">
            Select a discipline to examine what friction it eliminates, what concrete assets ship, and how it reinforces adjacent teams.
          </p>
        </div>

        <span className="font-mono text-xs text-[#3F3D38] shrink-0">
          Interactive Practice Atlas · 01–05
        </span>
      </div>

      {/* Single-Row Clean Tab Rail */}
      <div
        className="flex flex-wrap items-center gap-2.5"
        role="tablist"
        aria-label="Capabilities selection"
      >
        {SERVICES.map((s, idx) => {
          const isActive = s.slug === activeSlug;
          const node = CAPABILITY_NODES[idx] || CAPABILITY_NODES[0];

          return (
            <button
              key={s.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveSlug(s.slug)}
              className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm font-display font-medium transition-colors cursor-pointer border whitespace-nowrap ${
                isActive
                  ? "bg-[#171717] text-[#F8F6EF] border-[#171717]"
                  : "bg-[#FFFFFF] text-[#171717] border-[#171717]/18 hover:border-[#171717]/45"
              }`}
            >
              <span
                className="h-2.5 w-2.5 rounded-full shrink-0"
                style={{ backgroundColor: node.color }}
                aria-hidden="true"
              />
              <span>
                {node.num} {s.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Open 12-Column Exhibition Canvas */}
      <div
        key={activeService.slug}
        className="animate-paper-enter grid gap-10 lg:gap-12 lg:grid-cols-12 items-start pt-4"
      >
        {/* Left: Art Plate & Action (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#171717] border border-[#171717]/15 shadow-[0_20px_40px_rgba(23,23,23,0.12)]">
            <Image
              src={activeNode.image}
              alt={`${activeService.title} paper-cut visual specimen`}
              fill
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#3F3D38]">
              <span className="font-semibold text-[#171717]">{activeService.code}</span>
              <span>·</span>
              <span>{activeService.timeframe}</span>
            </div>
            <h3 className="font-display text-3xl font-medium text-[#171717] tracking-tight">
              {activeService.title}
            </h3>
            <p className="text-base text-[#3F3D38] leading-relaxed font-sans">
              {activeService.subtitle}
            </p>
            <div className="pt-2">
              <Link
                href={`/capabilities/${activeService.slug}`}
                className="firm-btn-dark text-sm"
              >
                <span>Open full specification</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Open Editorial Columns — Friction Removed, Deliverables, Connections (7 cols) */}
        <div className="lg:col-span-7 grid gap-8 sm:grid-cols-2 border-t border-[#171717]/15 pt-6 lg:border-t-0 lg:pt-0 lg:border-l lg:border-[#171717]/15 lg:pl-10">
          {/* Column A: Friction Eliminated */}
          <div className="space-y-4">
            <h4 className="text-xs font-sans font-semibold text-[#171717] pb-2 border-b border-[#171717]/15">
              Fragmentation eliminated
            </h4>
            <ul className="space-y-4 text-sm text-[#3F3D38] leading-relaxed">
              {activeService.problems.map((prob) => (
                <li key={prob.title} className="space-y-1">
                  <strong className="font-display font-medium text-[#171717] block">
                    {prob.title}
                  </strong>
                  <span>{prob.description}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column B: Deliverables + Cross Connections */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-xs font-sans font-semibold text-[#171717] pb-2 border-b border-[#171717]/15">
                Core deliverables
              </h4>
              <ul className="space-y-2.5 text-sm text-[#171717]">
                {activeService.deliverables[0]?.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1 h-4 w-4 rounded-full bg-[#A6D8A1] text-[#171717] inline-flex items-center justify-center shrink-0">
                      <Check size={11} className="stroke-[2.5]" />
                    </span>
                    <span className="font-normal leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-sans font-semibold text-[#171717] pb-2 border-b border-[#171717]/15">
                Feeds along The Thread
              </h4>
              <div className="space-y-3.5">
                {activeService.crossConnections.slice(0, 2).map((conn) => (
                  <div key={conn.slug} className="space-y-1 text-sm">
                    <Link
                      href={`/capabilities/${conn.slug}`}
                      className="font-display font-medium text-[#171717] hover:underline inline-flex items-center gap-1"
                    >
                      <span>{conn.division}</span>
                      <ArrowUpRight size={13} />
                    </Link>
                    <p className="text-xs text-[#3F3D38] leading-relaxed font-sans">
                      {conn.relationship}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
