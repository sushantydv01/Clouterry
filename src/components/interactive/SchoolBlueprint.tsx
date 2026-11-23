"use client";

import React, { useState } from "react";
import Link from "next/link";
import { INDUSTRIES } from "@/data/industries";
import { ArrowUpRight, Compass, Shield, Users, Award } from "lucide-react";

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
    const colors = ["bg-[#ED83A8]", "bg-[#F4CF55]", "bg-[#A6D8A1]", "bg-[#ED83A8]"];
    return colors[idx % colors.length];
  };

  return (
    <div className="w-full border border-[#171717] bg-white p-6 sm:p-10 shadow-[6px_6px_0_0_#171717] text-left">
      {/* Blueprint Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-[#171717] gap-4">
        <div>
          <span className="inline-block border border-[#171717] bg-[#A6D8A1] px-3 py-1 font-mono text-xs font-bold text-[#171717] shadow-[2px_2px_0_0_#171717]">
            SIGNATURE SYSTEM // 02
          </span>
          <h3 className="mt-2.5 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171717]">
            The School Digital Blueprint
          </h3>
          <p className="mt-1 text-sm text-[#3A3835]">
            An architectural system of four connected layers designed specifically for educational institutions.
          </p>
        </div>

        <Link
          href="/industries/education"
          className="neo-btn text-xs px-5 py-2.5 self-start sm:self-auto"
        >
          <span>Dedicated Practice Overview</span>
          <ArrowUpRight size={13} />
        </Link>
      </div>

      {/* Layer Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 pb-6 border-b border-[#171717]">
        {layers.map((l, idx) => {
          const isActive = idx === activeLayerIndex;
          return (
            <button
              key={l.layer}
              type="button"
              onClick={() => setActiveLayerIndex(idx)}
              className={`p-4 border border-[#171717] text-left transition-all duration-140 cursor-pointer ${
                isActive
                  ? `${getLayerColor(idx)} text-[#171717] shadow-[3px_3px_0_0_#171717] -translate-x-0.5 -translate-y-0.5 font-bold`
                  : "bg-[#F8F6EF] text-[#171717] hover:bg-white hover:shadow-[2px_2px_0_0_#171717]"
              }`}
            >
              <div className="h-9 w-9 border border-[#171717] bg-white text-[#171717] flex items-center justify-center mb-3 shadow-[1px_1px_0_0_#171717]">
                {getLayerIcon(l.layer)}
              </div>
              <span className="font-mono text-[10px] text-[#171717] font-bold block uppercase">
                Layer {l.layer}
              </span>
              <p className="font-display text-xs sm:text-sm font-bold text-[#171717] mt-0.5 leading-snug">
                {l.name}
              </p>
              <p className="text-[11px] text-[#6E6A63] mt-1 truncate">
                {l.tagline}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Layer Deep Dive */}
      <div className="pt-8 grid gap-8 lg:grid-cols-12 lg:items-start">
        {/* Left: Purpose & Features */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="border border-[#171717] bg-[#171717] text-[#F8F6EF] px-2.5 py-0.5 font-mono text-xs font-bold">
                LAYER {activeLayer.layer} SPECIFICATION
              </span>
              <span className="border border-[#171717] bg-[#F8F6EF] px-2.5 py-0.5 font-mono text-xs text-[#171717] font-medium">
                {activeLayer.tagline}
              </span>
            </div>
            <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#171717]">
              {activeLayer.name}
            </h4>
            <p className="mt-2 text-sm sm:text-base text-[#3A3835] leading-relaxed font-sans">
              {activeLayer.purpose}
            </p>
          </div>

          <div className="p-6 border border-[#171717] bg-[#F8F6EF] shadow-[3px_3px_0_0_#171717]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#171717] font-bold block mb-3 pb-1 border-b border-[#171717]">
              Core Architectural Capabilities
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#3A3835]">
              {activeLayer.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5">
                  <span className="h-4 w-4 shrink-0 bg-[#ED83A8] border border-[#171717] flex items-center justify-center text-[#171717] font-bold text-[10px] mt-0.5 shadow-[1px_1px_0_0_#171717]">
                    ✓
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 border border-[#171717] bg-white">
            <span className="font-mono text-xs uppercase tracking-wider text-[#171717] font-bold block mb-2 pb-1 border-b border-[#171717]">
              Institutional Problems Addressed
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#3A3835]">
              {activeLayer.problemsAddressed.map((prob) => (
                <li key={prob} className="flex items-start gap-2">
                  <span className="font-bold text-[#171717] mt-0.5">—</span>
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Deliverables & Connected Capabilities */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 border border-[#171717] bg-[#F8F6EF] shadow-[3px_3px_0_0_#171717]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#171717] font-bold block mb-3 pb-1 border-b border-[#171717]">
              Tangible Handover Assets
            </span>
            <div className="space-y-2.5 text-xs">
              {activeLayer.exampleDeliverables.map((deliv) => (
                <div
                  key={deliv}
                  className="bg-white border border-[#171717] p-3.5 text-[#171717] font-semibold flex items-center justify-between shadow-[2px_2px_0_0_#171717]"
                >
                  <span>{deliv}</span>
                  <span className="border border-[#171717] bg-[#F4CF55] px-2 py-0.5 font-mono text-[10px] text-[#171717] font-bold">
                    INCLUDED
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 border border-[#171717] bg-white">
            <span className="font-mono text-xs uppercase tracking-wider text-[#171717] font-bold block mb-2 pb-1 border-b border-[#171717]">
              Connected FIRM Divisions
            </span>
            <div className="flex flex-wrap gap-2 mt-3">
              {activeLayer.connectedCapabilities.map((cap) => (
                <span
                  key={cap}
                  className="inline-flex items-center border border-[#171717] bg-[#F8F6EF] px-3 py-1 text-xs font-mono font-bold text-[#171717] shadow-[1px_1px_0_0_#171717]"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/connect"
              className="neo-btn-pink text-xs px-5 py-2.5 w-full justify-center"
            >
              <span>Discuss an institutional school briefing</span>
              <ArrowUpRight size={13} className="stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
