"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CAPABILITY_NODES } from "@/lib/threadTheme";
import { ArrowUpRight, Check } from "lucide-react";

/**
 * Interactive Studio Capabilities Workbench (A02 motion).
 * Replaces repetitive bento card grids and bottom stage strips with one cohesive focal split.
 */
export default function CapabilitiesWorkbench() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = CAPABILITY_NODES[activeIndex];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-10">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#F8F6EF]/12">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#ED83A8] block">
            01 · Five Integrated Capabilities
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F8F6EF] leading-[1.08]">
            One studio workbench. Zero vendor handoffs.
          </h2>
          <p className="text-base sm:text-lg text-[#C4C1B8] leading-relaxed font-sans">
            Inspect how identity tokens, frontend code, documentary media, organic discovery, and platform governance operate as a single continuous system.
          </p>
        </div>
        <Link
          href="/capabilities"
          className="firm-btn-secondary text-xs sm:text-sm !py-2.5 !px-5 shrink-0 self-start md:self-auto"
        >
          <span>View all disciplines</span>
          <ArrowUpRight size={14} />
        </Link>
      </div>

      {/* Mobile Horizontal Pill Switcher (< lg) */}
      <div
        className="flex lg:hidden items-center gap-2 overflow-x-auto pb-2 -mx-1 px-1"
        role="tablist"
        aria-label="Capabilities selector"
      >
        {CAPABILITY_NODES.map((node, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={node.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveIndex(idx)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-display font-semibold shrink-0 whitespace-nowrap transition-colors border ${
                isActive
                  ? "bg-[#F8F6EF] text-[#171717] border-[#F8F6EF]"
                  : "bg-[#1E1E20] text-[#C4C1B8] border-[#F8F6EF]/12 hover:text-[#F8F6EF]"
              }`}
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: node.color }}
                aria-hidden="true"
              />
              <span>
                {node.num} {node.shortName}
              </span>
            </button>
          );
        })}
      </div>

      {/* Desktop Asymmetric Workbench Split */}
      <div className="grid gap-8 lg:grid-cols-12 items-start">
        {/* Left Navigation Spine (Desktop >= lg) */}
        <div className="hidden lg:flex lg:col-span-5 flex-col divide-y divide-[#F8F6EF]/10 border-y border-[#F8F6EF]/10">
          {CAPABILITY_NODES.map((node, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={node.slug}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`w-full text-left py-5 px-4 transition-colors flex items-start justify-between gap-4 cursor-pointer ${
                  isActive
                    ? "bg-[#1E1E20]"
                    : "hover:bg-[#1E1E20]/50"
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: node.color }}
                      aria-hidden="true"
                    />
                    <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#9C9990]">
                      {node.num} · {node.tag}
                    </span>
                  </div>
                  <h3
                    className={`font-display text-xl font-bold tracking-tight transition-colors ${
                      isActive ? "text-[#F8F6EF]" : "text-[#C4C1B8]"
                    }`}
                  >
                    {node.name}
                  </h3>
                </div>
                <span
                  className={`text-xs font-mono pt-1 transition-colors ${
                    isActive ? "text-[#ED83A8]" : "text-[#9C9990]"
                  }`}
                >
                  {isActive ? "Active" : "Inspect"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Bespoke Plate + Deliverable Readout (Desktop 7 cols / Mobile full) */}
        <div className="lg:col-span-7 rounded-2xl bg-[#1E1E20] border border-[#F8F6EF]/12 overflow-hidden">
          <div
            key={current.slug}
            className="animate-paper-enter"
          >
            <div className="relative aspect-[16/9] w-full bg-[#171717] overflow-hidden border-b border-[#F8F6EF]/10">
              <Image
                src={current.image}
                alt={`${current.name} editorial paper-cut specimen`}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: current.color }}
                    aria-hidden="true"
                  />
                  <span className="text-xs font-mono uppercase tracking-[0.12em] text-[#9C9990]">
                    {current.num} · {current.tag}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8F6EF] tracking-tight">
                  {current.name}
                </h3>
                <p className="text-sm sm:text-base text-[#C4C1B8] leading-relaxed font-sans">
                  {current.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-[#F8F6EF]/10">
                {current.deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F8F6EF]/90 py-1"
                  >
                    <Check size={14} className="text-[#A6D8A1] shrink-0 stroke-[2.5]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#F8F6EF]/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono text-[#9C9990]">
                  {current.deliverableSummary}
                </span>
                <Link
                  href={`/capabilities/${current.slug}`}
                  className="firm-btn-primary text-xs sm:text-sm !py-2.5 !px-5"
                >
                  <span>Explore division</span>
                  <ArrowUpRight size={14} className="stroke-[2.25]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
