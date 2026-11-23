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
    const colors = ["bg-[#FF90E8]", "bg-[#F1F333]", "bg-[#55D6BE]", "bg-[#FF90E8]"];
    return colors[idx % colors.length];
  };

  return (
    <div className="w-full border border-black bg-white p-6 sm:p-8 shadow-[6px_6px_0_0_#000] text-left">
      {/* Blueprint Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-black gap-3">
        <div>
          <span className="inline-block border border-black bg-[#55D6BE] px-2.5 py-0.5 font-mono text-xs font-bold text-black shadow-[2px_2px_0_0_#000]">
            SIGNATURE SYSTEM // 02
          </span>
          <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-black">
            The School Digital Blueprint
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-[#2D2A26]">
            An architectural system of four connected layers designed specifically for educational institutions.
          </p>
        </div>

        <Link
          href="/industries/education"
          className="neo-btn text-xs px-4 py-2 self-start sm:self-auto"
        >
          <span>Dedicated Practice Overview</span>
          <ArrowUpRight size={13} />
        </Link>
      </div>

      {/* Layer Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-6 pb-6 border-b border-black">
        {layers.map((l, idx) => {
          const isActive = idx === activeLayerIndex;
          return (
            <button
              key={l.layer}
              type="button"
              onClick={() => setActiveLayerIndex(idx)}
              className={`p-3.5 border border-black text-left transition-all duration-150 cursor-pointer ${
                isActive
                  ? `${getLayerColor(idx)} text-black shadow-[3px_3px_0_0_#000] -translate-x-0.5 -translate-y-0.5`
                  : "bg-[#F4F4F0] text-black hover:bg-white hover:shadow-[2px_2px_0_0_#000]"
              }`}
            >
              <div className="h-8 w-8 border border-black bg-white text-black flex items-center justify-center mb-2.5 shadow-[1px_1px_0_0_#000]">
                {getLayerIcon(l.layer)}
              </div>
              <span className="font-mono text-[10px] text-black font-bold block uppercase">
                Layer {l.layer}
              </span>
              <p className="font-display text-xs font-bold text-black mt-0.5 leading-snug">
                {l.name}
              </p>
              <p className="text-[11px] text-[#605C56] mt-1 truncate">
                {l.tagline}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Layer Deep Dive */}
      <div className="pt-6 grid gap-8 lg:grid-cols-12 lg:items-start">
        {/* Left: Purpose & Features */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="border border-black bg-black text-white px-2 py-0.5 font-mono text-xs font-bold">
                LAYER {activeLayer.layer} SPECIFICATION
              </span>
              <span className="border border-black bg-[#F4F4F0] px-2 py-0.5 font-mono text-xs text-black font-medium">
                {activeLayer.tagline}
              </span>
            </div>
            <h4 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-black">
              {activeLayer.name}
            </h4>
            <p className="mt-2 text-sm text-[#2D2A26] leading-relaxed">
              {activeLayer.purpose}
            </p>
          </div>

          <div className="p-5 border border-black bg-[#F4F4F0] shadow-[3px_3px_0_0_#000]">
            <span className="font-mono text-xs uppercase tracking-wider text-black font-bold block mb-3 pb-1 border-b border-black">
              Core Architectural Capabilities
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#2D2A26]">
              {activeLayer.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5">
                  <span className="h-4 w-4 shrink-0 bg-[#FF90E8] border border-black flex items-center justify-center text-black font-bold text-[10px] mt-0.5">
                    ✓
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 border border-black bg-white">
            <span className="font-mono text-xs uppercase tracking-wider text-black font-bold block mb-2 pb-1 border-b border-black">
              Institutional Problems Addressed
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#2D2A26]">
              {activeLayer.problemsAddressed.map((prob) => (
                <li key={prob} className="flex items-start gap-2">
                  <span className="font-bold text-black mt-0.5">—</span>
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Deliverables & Connected Capabilities */}
        <div className="lg:col-span-5 space-y-5">
          <div className="p-5 border border-black bg-[#FAFAF7] shadow-[3px_3px_0_0_#000]">
            <span className="font-mono text-xs uppercase tracking-wider text-black font-bold block mb-3 pb-1 border-b border-black">
              Tangible Handover Assets
            </span>
            <div className="space-y-2 text-xs">
              {activeLayer.exampleDeliverables.map((deliv) => (
                <div
                  key={deliv}
                  className="bg-white border border-black p-3 text-black font-semibold flex items-center justify-between shadow-[2px_2px_0_0_#000]"
                >
                  <span>{deliv}</span>
                  <span className="border border-black bg-[#F1F333] px-2 py-0.5 font-mono text-[10px] text-black font-bold">
                    INCLUDED
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 border border-black bg-white">
            <span className="font-mono text-xs uppercase tracking-wider text-black font-bold block mb-2 pb-1 border-b border-black">
              Connected FIRM Divisions
            </span>
            <div className="flex flex-wrap gap-2 mt-3">
              {activeLayer.connectedCapabilities.map((cap) => (
                <span
                  key={cap}
                  className="inline-flex items-center border border-black bg-[#F4F4F0] px-3 py-1 text-xs font-mono font-bold text-black shadow-[1px_1px_0_0_#000]"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/connect"
              className="neo-btn-pink text-xs px-4 py-2 w-full justify-center"
            >
              <span>Discuss an institutional school briefing</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
