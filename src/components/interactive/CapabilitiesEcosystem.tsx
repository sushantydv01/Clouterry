"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Palette, Code2, Film, TrendingUp, ShieldCheck } from "lucide-react";
import { DoodleSparkle } from "@/components/illustrations/DoodleAccents";

const CAPABILITIES = [
  {
    num: "01",
    id: "brand",
    name: "Brand & Identity",
    slug: "brand-identity",
    tag: "Visual Authority",
    color: "#ED83A8",
    colorName: "Rose Pink",
    icon: Palette,
    summary: "Visual systems that outlast agency cycles: heraldry, crests, living typography hierarchies, and color tokens.",
    specimen: "SPACE GROTESK + JETBRAINS MONO",
  },
  {
    num: "02",
    id: "web",
    name: "Web & Technology",
    slug: "web-technology",
    tag: "Engineered Speed",
    color: "#A6D8A1",
    colorName: "Fresh Garden Green",
    icon: Code2,
    summary: "Bespoke Next.js 16 platforms with pure HTML server rendering, 100/100 Core Web Vitals, and 0% vendor lock-in.",
    specimen: "<NEXT.JS 16 APP ROUTER // ZERO BLOAT>",
  },
  {
    num: "03",
    id: "content",
    name: "Social Media & Content",
    slug: "social-content",
    tag: "Documentary Rigor",
    color: "#F4CF55",
    colorName: "Butter Yellow",
    icon: Film,
    summary: "Documentary filmmaking, photography art direction, and editorial publishing that treat audiences with intellectual dignity.",
    specimen: "9:16 VERTICAL CINEMA • RAW ART DIRECTION",
  },
  {
    num: "04",
    id: "growth",
    name: "Marketing & Growth",
    slug: "marketing-growth",
    tag: "Organic Inbound",
    color: "#ED83A8",
    colorName: "Rose Pink",
    icon: TrendingUp,
    summary: "High-intent search authority, technical programmatic indexing, and conversion funnels that compound over years.",
    specimen: "ORGANIC INBOUND FUNNELS • TECHNICAL SEO",
  },
  {
    num: "05",
    id: "management",
    name: "Digital Management",
    slug: "digital-management",
    tag: "Continuous Care",
    color: "#A6D8A1",
    colorName: "Fresh Garden Green",
    icon: ShieldCheck,
    summary: "Fractional digital stewardship, proactive code refactoring, SLA security compliance, and strategic quarterly roadmap reviews.",
    specimen: "ANNUAL SLA STEWARDSHIP • GUARANTEED UPTIME",
  },
];

export default function CapabilitiesEcosystem() {
  const [activeCap, setActiveCap] = useState(0);

  return (
    <div className="w-full max-w-6xl mx-auto text-left">
      {/* Section Header with Spacious Editorial Cadence */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 border border-[#171717] bg-[#F4CF55] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            <DoodleSparkle size={14} className="text-[#171717]" />
            <span>01 TO 05 // THE CONNECTED ENGINE</span>
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171717] leading-tight">
            Five capabilities.{" "}
            <span className="inline-block bg-[#A6D8A1] px-3 py-0.5 border border-[#171717] shadow-[3px_3px_0_0_#171717] rotate-[-0.5deg]">
              One connected system.
            </span>
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-[#404040] leading-relaxed font-sans">
          We don&apos;t deliver isolated services that fall apart at the seams. Each capability reinforces the other to create an unbreakable digital flagship.
        </p>
      </div>

      {/* ── Asymmetric Interactive Ecosystem Strip ── */}
      <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
        {/* Left Column: Interactive Selector List */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5">
          {CAPABILITIES.map((cap, idx) => {
            const isActive = idx === activeCap;
            const Icon = cap.icon;

            return (
              <button
                key={cap.id}
                type="button"
                onClick={() => setActiveCap(idx)}
                onMouseEnter={() => setActiveCap(idx)}
                className={`w-full p-4 sm:p-5 text-left border-2 border-[#171717] transition-all flex items-center justify-between ${
                  isActive
                    ? "bg-[#171717] text-[#F8F6EF] shadow-[5px_5px_0_0_#ED83A8] -translate-x-1 -translate-y-0.5"
                    : "bg-[#FFFFFF] text-[#171717] hover:bg-[#F8F6EF] shadow-[3px_3px_0_0_#171717]"
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span
                    className="font-mono text-xs font-black px-2 py-1 border border-[#171717] shrink-0"
                    style={{ backgroundColor: cap.color, color: "#171717" }}
                  >
                    {cap.num}
                  </span>
                  <div className="truncate">
                    <h3 className="font-display text-lg sm:text-xl font-bold truncate">
                      {cap.name}
                    </h3>
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider opacity-75">
                      {cap.tag}
                    </span>
                  </div>
                </div>

                <div
                  className="w-8 h-8 rounded-none border border-[#171717] flex items-center justify-center shrink-0 ml-2"
                  style={{ backgroundColor: isActive ? cap.color : "#F8F6EF", color: "#171717" }}
                >
                  <Icon size={16} className="stroke-[2.5]" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Visual Stage for the Active Capability */}
        <div className="lg:col-span-7 flex flex-col justify-between border-2 border-[#171717] bg-[#FFFFFF] p-6 sm:p-10 shadow-[8px_8px_0_0_#171717]">
          {/* Top metadata */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b-2 border-[#171717]">
              <span
                className="border border-[#171717] px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#171717] shadow-[2px_2px_0_0_#171717]"
                style={{ backgroundColor: CAPABILITIES[activeCap].color }}
              >
                CAPABILITY {CAPABILITIES[activeCap].num} {"//"} {CAPABILITIES[activeCap].tag}
              </span>
              <span className="font-mono text-xs font-bold text-[#666666]">
                FIRM SYSTEM CORE
              </span>
            </div>

            {/* Title & Short Statement */}
            <h3 className="mt-6 font-display text-3xl sm:text-4xl font-bold text-[#171717] leading-tight">
              {CAPABILITIES[activeCap].name}
            </h3>
            <p className="mt-4 text-base sm:text-lg text-[#3A3835] leading-relaxed font-sans max-w-xl">
              {CAPABILITIES[activeCap].summary}
            </p>

            {/* Visual Specimen Banner */}
            <div className="mt-8 p-4 border border-[#171717] bg-[#F8F6EF] font-mono text-xs text-[#171717] font-bold flex items-center justify-between shadow-[3px_3px_0_0_#171717]">
              <span className="truncate">{CAPABILITIES[activeCap].specimen}</span>
              <span className="h-2.5 w-2.5 rounded-full shrink-0 ml-2" style={{ backgroundColor: CAPABILITIES[activeCap].color }} />
            </div>
          </div>

          {/* Bottom Action: Direct Link to Deep Dive */}
          <div className="mt-10 pt-6 border-t-2 border-[#171717] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <span className="font-mono text-xs text-[#666666]">
              Detailed methodology, SLAs &amp; deliverables:
            </span>
            <Link
              href={`/capabilities/${CAPABILITIES[activeCap].slug}`}
              className="neo-btn text-xs px-6 py-3 self-start sm:self-auto inline-flex items-center gap-2"
            >
              <span>Explore {CAPABILITIES[activeCap].name}</span>
              <ArrowUpRight size={14} className="stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
