"use client";

import React from "react";
import { DoodleBadgeStamp, DoodleHandStar, DoodleHandSparkle } from "./ThreadDoodles";

/**
 * FragmentationStory — Visual Storytelling of Vendor Handoff Friction vs Unified Delivery.
 * Replaces dry text columns and fake invoice tables with an expressive, hand-drawn vector artwork.
 */

export default function FragmentationStory({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full max-w-5xl mx-auto ${className}`}>
      <div className="grid gap-8 lg:grid-cols-12 items-stretch">
        {/* ── Left Column: Multi-Vendor Fragmentation (5 cols) ── */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#141416] border border-white/10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <DoodleBadgeStamp text="THE STATUS QUO" color="#26262B" textColor="#D4D4D8" />
              <span className="text-[11px] font-mono text-white/40">5 Disconnected Silos</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              Why separate agency handoffs leak momentum.
            </h3>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
              When brand design, frontend code, media production, and SEO are contracted across separate firms, coordination overhead falls entirely on your internal team.
            </p>
          </div>

          {/* Hand-Drawn Fragmentation SVG Diagram */}
          <div className="py-4 my-2 border-t border-b border-white/10">
            <svg
              viewBox="0 0 380 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              aria-label="Illustration showing fragmented communication and broken handoff seams between five isolated agencies"
            >
              {/* Tangled, frayed dashed wires */}
              <path
                d="M 40 40 C 90 10, 110 80, 160 30"
                stroke="#FF5C40"
                strokeWidth="2.5"
                strokeDasharray="5 5"
                fill="none"
              />
              <path
                d="M 160 30 C 210 5, 230 75, 280 40"
                stroke="#3875FF"
                strokeWidth="2.5"
                strokeDasharray="5 5"
                fill="none"
              />
              <path
                d="M 60 140 C 110 90, 140 160, 200 110"
                stroke="#FFB800"
                strokeWidth="2.5"
                strokeDasharray="5 5"
                fill="none"
              />
              <path
                d="M 200 110 C 250 80, 270 150, 330 120"
                stroke="#10B981"
                strokeWidth="2.5"
                strokeDasharray="5 5"
                fill="none"
              />

              {/* Frayed Scissor Cut Point */}
              <g transform="translate(180, 65)">
                <circle cx="10" cy="10" r="14" fill="#222226" stroke="#FF5C40" strokeWidth="2" />
                <path d="M 4 4 L 16 16 M 16 4 L 4 16" stroke="#FF5C40" strokeWidth="2.5" strokeLinecap="round" />
              </g>

              {/* Agency Box 1: Brand Studio */}
              <g transform="translate(20, 20)">
                <rect x="0" y="0" width="90" height="36" rx="6" fill="#1C1C20" stroke="#333338" strokeWidth="1.5" />
                <text x="8" y="16" fill="#FFFFFF" fontSize="9" fontWeight="bold">Brand Studio</text>
                <text x="8" y="28" fill="#FF5C40" fontSize="8" fontFamily="monospace">Static artboards</text>
              </g>

              {/* Agency Box 2: Dev Shop */}
              <g transform="translate(260, 20)">
                <rect x="0" y="0" width="100" height="36" rx="6" fill="#1C1C20" stroke="#333338" strokeWidth="1.5" />
                <text x="8" y="16" fill="#FFFFFF" fontSize="9" fontWeight="bold">Dev Contractor</text>
                <text x="8" y="28" fill="#3875FF" fontSize="8" fontFamily="monospace">Rebuilds tokens</text>
              </g>

              {/* Agency Box 3: Photo / Video */}
              <g transform="translate(20, 120)">
                <rect x="0" y="0" width="95" height="36" rx="6" fill="#1C1C20" stroke="#333338" strokeWidth="1.5" />
                <text x="8" y="16" fill="#FFFFFF" fontSize="9" fontWeight="bold">Photo Crew</text>
                <text x="8" y="28" fill="#FFB800" fontSize="8" fontFamily="monospace">Blind to layout</text>
              </g>

              {/* Agency Box 4: SEO Agency */}
              <g transform="translate(260, 120)">
                <rect x="0" y="0" width="100" height="36" rx="6" fill="#1C1C20" stroke="#333338" strokeWidth="1.5" />
                <text x="8" y="16" fill="#FFFFFF" fontSize="9" fontWeight="bold">SEO Consultant</text>
                <text x="8" y="28" fill="#10B981" fontSize="8" fontFamily="monospace">Afterthought fix</text>
              </g>
            </svg>
          </div>

          <div className="space-y-2 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C40]" />
              <span>Design variables lose fidelity before reaching code.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3875FF]" />
              <span>Third-party plugins degrade Core Web Vitals.</span>
            </div>
          </div>
        </div>

        {/* ── Right Column: Connected Studio Standard (7 cols) ── */}
        <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-[#F8F6F0] text-[#121214] border border-black/10 flex flex-col justify-between space-y-6 shadow-xl">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <DoodleBadgeStamp text="THE CONNECTED STANDARD" color="#FFC700" />
              <DoodleHandStar color="#FF90E8" size={24} />
            </div>

            <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#121214] leading-tight">
              One unbroken thread from strategy to deployment.
            </h3>

            <p className="text-sm sm:text-base text-black/75 leading-relaxed font-sans">
              We design and code inside the same production environment. Design tokens compile directly into Next.js components, while photography and search schema are tailored for the live viewport.
            </p>
          </div>

          {/* Unified Flow Graphic: The Continuous Golden Thread */}
          <div className="p-4 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-black/10 shadow-sm space-y-4">
            <div className="flex items-center justify-between text-xs font-bold text-black pb-2 border-b border-black/10">
              <span className="font-mono">firm-pipeline.engine</span>
              <span className="text-[#10B981] flex items-center gap-1 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                Synchronized
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-[#F8F6F0] border border-black/5 space-y-1">
                <span className="text-[10px] font-bold text-[#FF5C40] block font-mono">01 TOKENS</span>
                <span className="text-xs font-bold text-black block">Direct to CSS</span>
                <p className="text-[11px] text-black/60">Zero fidelity loss</p>
              </div>

              <div className="p-3 rounded-xl bg-[#F8F6F0] border border-black/5 space-y-1">
                <span className="text-[10px] font-bold text-[#3875FF] block font-mono">02 NEXT.JS</span>
                <span className="text-xs font-bold text-black block">100/100 Vitals</span>
                <p className="text-[11px] text-black/60">Edge delivery</p>
              </div>

              <div className="p-3 rounded-xl bg-[#F8F6F0] border border-black/5 space-y-1">
                <span className="text-[10px] font-bold text-[#FFB800] block font-mono">03 MEDIA</span>
                <span className="text-xs font-bold text-black block">Viewport Shot</span>
                <p className="text-[11px] text-black/60">Tailored art direction</p>
              </div>

              <div className="p-3 rounded-xl bg-[#F8F6F0] border border-black/5 space-y-1">
                <span className="text-[10px] font-bold text-[#10B981] block font-mono">04 SEARCH</span>
                <span className="text-xs font-bold text-black block">Native Schema</span>
                <p className="text-[11px] text-black/60">Built into App Router</p>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-black/70 font-medium">
              Single senior accountability. Zero handoff friction.
            </span>
            <div className="flex items-center gap-2">
              <DoodleHandSparkle color="#FF90E8" size={18} />
              <span className="font-mono text-xs font-bold text-black">ONE PARTNER &bull; ONE CODEBASE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
