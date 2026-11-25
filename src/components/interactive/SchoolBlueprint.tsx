"use client";

import React, { useState } from "react";
import Link from "next/link";
import { INDUSTRIES } from "@/data/industries";
import { ArrowUpRight, Compass, Shield, Users, Award, Check } from "lucide-react";

export default function SchoolBlueprint() {
  const educationSector = INDUSTRIES.find((i) => i.slug === "education");
  const layers = educationSector?.blueprintLayers || [];

  const [activeLayerIndex, setActiveLayerIndex] = useState(0);
  const activeLayer = layers[activeLayerIndex] || layers[0];

  const getLayerIcon = (layerNum: string) => {
    switch (layerNum) {
      case "01":
        return <Compass size={18} />;
      case "02":
        return <Award size={18} />;
      case "03":
        return <Users size={18} />;
      case "04":
        return <Shield size={18} />;
      default:
        return <Compass size={18} />;
    }
  };

  return (
    <div className="w-full gumroad-card p-6 sm:p-10 bg-[#18181B] border border-white/10 shadow-2xl text-left">
      {/* Blueprint Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-white/10 gap-4">
        <div>
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            The School Digital Blueprint
          </h3>
          <p className="mt-1 text-sm text-white/60">
            An architectural system of four connected layers designed specifically for educational institutions.
          </p>
        </div>

        <Link
          href="/industries/education"
          className="gumroad-btn-pink text-xs sm:text-sm font-bold !py-2.5 !px-5 self-start sm:self-auto"
        >
          <span>Education Practice</span>
          <ArrowUpRight size={14} className="stroke-[2.5]" />
        </Link>
      </div>

      {/* Layer Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 pb-6 border-b border-white/10">
        {layers.map((l, idx) => {
          const isActive = idx === activeLayerIndex;
          return (
            <button
              key={l.layer}
              type="button"
              onClick={() => setActiveLayerIndex(idx)}
              className={`p-4 rounded-xl text-left transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#222226] border-white/40 shadow-lg -translate-y-0.5"
                  : "bg-[#141416] border-white/10 hover:border-white/20 text-white/70 hover:text-white"
              }`}
            >
              <div className="h-8 w-8 rounded-lg bg-white/10 text-white flex items-center justify-center mb-3">
                {getLayerIcon(l.layer)}
              </div>
              <span className="text-xs text-white/50 font-semibold block">
                Layer {l.layer}
              </span>
              <p className="font-display text-xs sm:text-sm font-bold text-white mt-0.5 leading-snug">
                {l.name}
              </p>
              <p className="text-[11px] text-white/50 mt-1 truncate">
                {l.tagline}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Layer Breakdown */}
      <div className="pt-8 grid gap-8 lg:grid-cols-12 lg:items-start">
        {/* Left: Purpose & Features */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white text-xs font-semibold">
                Layer {activeLayer.layer} Specification
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#141416] border border-white/10 text-xs text-white/60 font-medium">
                {activeLayer.tagline}
              </span>
            </div>
            <h4 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {activeLayer.name}
            </h4>
            <p className="mt-2 text-sm sm:text-base text-white/70 leading-relaxed font-sans">
              {activeLayer.purpose}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#141416] border border-white/10 space-y-3">
            <span className="text-xs text-white/50 font-semibold block pb-1 border-b border-white/10">
              Core architectural capabilities
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              {activeLayer.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#10B981] text-black flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">
                    <Check size={11} className="stroke-[3]" />
                  </div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-[#141416] border border-white/10 space-y-2">
            <span className="text-xs text-white/50 font-semibold block pb-1 border-b border-white/10">
              Institutional problems addressed
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              {activeLayer.problemsAddressed.map((prob) => (
                <li key={prob} className="flex items-start gap-2">
                  <span className="text-[#FF90E8] font-bold mt-0.5">&bull;</span>
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Deliverables */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-xl bg-[#141416] border border-white/10 space-y-3">
            <span className="text-xs text-white/50 font-semibold block pb-1 border-b border-white/10">
              Tangible handover assets
            </span>
            <div className="space-y-2.5 text-xs text-white/80">
              {activeLayer.exampleDeliverables.map((deliv) => (
                <div key={deliv} className="p-3 rounded-lg bg-[#18181B] border border-white/5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FF90E8]" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
