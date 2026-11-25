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

  const getLayerColor = (idx: number) => {
    const palette = ["#F4CF55", "#A6D8A1", "#ED83A8", "#F8F6EF"];
    return palette[idx % palette.length];
  };

  return (
    <div className="w-full p-6 sm:p-10 rounded-2xl bg-[#1E1E20] border border-[#F8F6EF]/12 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-[#F8F6EF]/12 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#F4CF55] block mb-1.5">
            Primary Specialization Architecture
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8F6EF] tracking-tight">
            The School Digital Blueprint
          </h3>
          <p className="mt-1 text-sm text-[#C4C1B8]">
            Four integrated platform layers separating public admissions conversion from parent portal utilities.
          </p>
        </div>

        <Link
          href="/industries/education"
          className="firm-btn-primary text-xs sm:text-sm !py-2.5 !px-5 self-start sm:self-auto"
        >
          <span>Education Practice</span>
          <ArrowUpRight size={14} className="stroke-[2.25]" />
        </Link>
      </div>

      {/* Layer Navigation Tabs (Scrollable pills on mobile, 4-col grid on sm+) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 pb-6 border-b border-[#F8F6EF]/12">
        {layers.map((l, idx) => {
          const isActive = idx === activeLayerIndex;
          const color = getLayerColor(idx);
          return (
            <button
              key={l.layer}
              type="button"
              onClick={() => setActiveLayerIndex(idx)}
              className={`p-4 rounded-xl text-left transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#262629] border-[#F8F6EF]/40"
                  : "bg-[#171717] border-[#F8F6EF]/10 hover:border-[#F8F6EF]/24"
              }`}
            >
              <div
                className="h-8 w-8 rounded-lg flex items-center justify-center mb-3 text-[#171717]"
                style={{ backgroundColor: color }}
              >
                {getLayerIcon(l.layer)}
              </div>
              <span className="text-[11px] font-mono text-[#9C9990] block">
                Layer {l.layer}
              </span>
              <p className="font-display text-xs sm:text-sm font-bold text-[#F8F6EF] mt-0.5 leading-snug">
                {l.name}
              </p>
              <p className="text-[11px] text-[#9C9990] mt-1 truncate">
                {l.tagline}
              </p>
            </button>
          );
        })}
      </div>

      <div className="pt-8 grid gap-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2 text-xs font-mono">
              <span className="text-[#F4CF55]">Layer {activeLayer.layer} Specification</span>
              <span className="text-[#F8F6EF]/25">&bull;</span>
              <span className="text-[#9C9990]">{activeLayer.tagline}</span>
            </div>
            <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#F8F6EF] tracking-tight">
              {activeLayer.name}
            </h4>
            <p className="mt-2 text-sm sm:text-base text-[#C4C1B8] leading-relaxed font-sans">
              {activeLayer.purpose}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#171717] border border-[#F8F6EF]/10 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#9C9990] block pb-2 border-b border-[#F8F6EF]/10">
              Core architectural capabilities
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#C4C1B8]">
              {activeLayer.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5">
                  <Check size={14} className="text-[#A6D8A1] shrink-0 mt-0.5 stroke-[2.5]" />
                  <span className="text-[#F8F6EF]">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-[#171717] border border-[#F8F6EF]/10 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#9C9990] block pb-2 border-b border-[#F8F6EF]/10">
              Institutional problems addressed
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#C4C1B8]">
              {activeLayer.problemsAddressed.map((prob) => (
                <li key={prob} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ED83A8] shrink-0 mt-1.5" />
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-xl bg-[#171717] border border-[#F8F6EF]/10 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#9C9990] block pb-2 border-b border-[#F8F6EF]/10">
              Tangible handover assets
            </span>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#F8F6EF]">
              {activeLayer.exampleDeliverables.map((deliv) => (
                <div
                  key={deliv}
                  className="p-3 rounded-lg bg-[#1E1E20] border border-[#F8F6EF]/10 flex items-center gap-2.5"
                >
                  <span className="w-2 h-2 rounded-full bg-[#ED83A8] shrink-0" />
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
