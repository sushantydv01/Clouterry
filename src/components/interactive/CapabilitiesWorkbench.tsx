"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CAPABILITY_NODES } from "@/lib/threadTheme";
import StickerMark from "@/components/illustrations/StickerMark";
import { ArrowUpRight, Check } from "lucide-react";

/**
 * Interactive Capabilities Exhibition designed for the Warm Cream (#F8F6EF) Paper spread.
 * Uses restrained 500-weight display typography and crisp hairline separation.
 */
export default function CapabilitiesWorkbench() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = CAPABILITY_NODES[activeIndex];

  return (
    <div className="w-full space-y-11">
      {/* Unboxed Asymmetric Editorial Opener on Warm Cream */}
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end pb-8 border-b border-[#171717]/15">
        <div className="lg:col-span-8 space-y-2.5">
          <div className="inline-flex items-center gap-2.5 text-sm font-sans font-medium text-[#3F3D38]">
            <span>Five Disciplines, One Studio</span>
            <StickerMark name="s09-04-squiggly-arrow" size={22} />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-medium tracking-[-0.025em] text-[#171717] leading-[1.06]">
            Every capability compiled inside a single practice.
          </h2>
        </div>
        <div className="lg:col-span-4 flex flex-col lg:items-end justify-end gap-4">
          <p className="text-base text-[#3F3D38] leading-relaxed font-sans lg:text-right max-w-sm">
            Brand tokens, software architecture, media craft, search schema, and governance evolve from one shared source.
          </p>
          <Link
            href="/capabilities"
            className="firm-btn-outline-dark text-sm self-start lg:self-end"
          >
            <span>All five practices</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      {/* Mobile Scrollable Tab Rail (< lg) */}
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
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-display font-medium shrink-0 whitespace-nowrap transition-colors border cursor-pointer ${
                isActive
                  ? "bg-[#171717] text-[#F8F6EF] border-[#171717]"
                  : "bg-[#FFFFFF] text-[#171717] border-[#171717]/18 hover:border-[#171717]/40"
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

      {/* Desktop Asymmetric 5/7 Studio Spread */}
      <div className="grid gap-10 lg:gap-14 lg:grid-cols-12 items-start">
        {/* Left Open Editorial Rail (Zero container boxes, crisp hairlines) */}
        <div className="hidden lg:flex lg:col-span-5 flex-col divide-y divide-[#171717]/14 border-y border-[#171717]/14">
          {CAPABILITY_NODES.map((node, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={node.slug}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`group w-full text-left py-5 px-3 transition-colors flex items-center justify-between gap-4 cursor-pointer ${
                  isActive ? "bg-[#EFECE3]/90" : "hover:bg-[#EFECE3]/45"
                }`}
              >
                <div className="flex items-baseline gap-4 min-w-0">
                  <span
                    className={`font-mono text-xs tabular-nums transition-colors ${
                      isActive ? "text-[#171717] font-medium" : "text-[#3F3D38]/70"
                    }`}
                  >
                    {node.num}
                  </span>
                  <div className="space-y-0.5 min-w-0">
                    <h3
                      className={`font-display text-2xl font-medium tracking-tight transition-colors ${
                        isActive ? "text-[#171717]" : "text-[#3F3D38] group-hover:text-[#171717]"
                      }`}
                    >
                      {node.name}
                    </h3>
                    <p className="text-sm text-[#3F3D38] line-clamp-1 font-sans">
                      {node.tag}
                    </p>
                  </div>
                </div>

                <span
                  aria-hidden="true"
                  className={`h-7 px-3 rounded-full inline-flex items-center justify-center text-xs font-display font-medium shrink-0 transition-colors ${
                    isActive
                      ? "bg-[#ED83A8] text-[#171717]"
                      : "bg-transparent text-[#3F3D38]/75 group-hover:text-[#171717]"
                  }`}
                >
                  {isActive ? "Active" : "Inspect"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Specimen Plate + Open Editorial Readout */}
        <div className="lg:col-span-7 space-y-7">
          <div key={current.slug} className="animate-paper-enter space-y-7">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#171717] border border-[#171717]/15 shadow-[0_24px_48px_rgba(23,23,23,0.12)]">
              <Image
                src={current.image}
                alt={`${current.name} editorial paper-cut specimen`}
                fill
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-cover"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-12 items-start">
              <div className="sm:col-span-7 space-y-3">
                <div className="flex items-center gap-2.5 text-xs font-sans font-medium text-[#3F3D38]">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0 border border-[#171717]/20"
                    style={{ backgroundColor: current.color }}
                    aria-hidden="true"
                  />
                  <span className="font-mono">{current.num}</span>
                  <span>·</span>
                  <span>{current.tag}</span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-medium text-[#171717] tracking-tight">
                  {current.name}
                </h3>
                <p className="text-base text-[#3F3D38] leading-relaxed font-sans max-w-xl">
                  {current.description}
                </p>
              </div>

              <div className="sm:col-span-5 space-y-4 sm:border-l sm:border-[#171717]/15 sm:pl-6">
                <span className="text-xs font-sans font-semibold text-[#171717] block">
                  Shipped deliverables
                </span>
                <ul className="space-y-2.5 text-sm text-[#171717]">
                  {current.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 leading-snug">
                      <span className="mt-0.5 h-4 w-4 rounded-full bg-[#A6D8A1] text-[#171717] inline-flex items-center justify-center shrink-0">
                        <Check size={11} className="stroke-[2.5]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <Link
                    href={`/capabilities/${current.slug}`}
                    className="firm-btn-dark text-sm w-full sm:w-auto"
                  >
                    <span>Explore {current.shortName}</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
