"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { ArrowUpRight, Layers, Globe, Share2, TrendingUp, ShieldCheck } from "lucide-react";

export default function PresenceMatrix() {
  const [activeSlug, setActiveSlug] = useState("web-technology");

  const activeService = SERVICES.find((s) => s.slug === activeSlug) || SERVICES[0];

  const getIcon = (slug: string) => {
    switch (slug) {
      case "brand-identity":
        return <Layers size={18} />;
      case "web-technology":
        return <Globe size={18} />;
      case "social-content":
        return <Share2 size={18} />;
      case "marketing-growth":
        return <TrendingUp size={18} />;
      case "digital-management":
        return <ShieldCheck size={18} />;
      default:
        return <Globe size={18} />;
    }
  };

  const getAccentColor = (slug: string) => {
    switch (slug) {
      case "brand-identity":
        return "bg-[#FF90E8]";
      case "web-technology":
        return "bg-[#55D6BE]";
      case "social-content":
        return "bg-[#F1F333]";
      case "marketing-growth":
        return "bg-[#FF90E8]";
      case "digital-management":
        return "bg-[#55D6BE]";
      default:
        return "bg-[#F1F333]";
    }
  };

  return (
    <div className="w-full border border-black bg-white p-6 sm:p-8 shadow-[6px_6px_0_0_#000] text-left">
      {/* Matrix Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-black gap-3">
        <div>
          <span className="inline-block border border-black bg-[#FF90E8] px-2.5 py-0.5 font-mono text-xs font-bold text-black shadow-[2px_2px_0_0_#000]">
            SIGNATURE SYSTEM // 01
          </span>
          <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-black">
            The Interactive Presence Matrix
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-[#2D2A26]">
            Explore how FIRM’s five divisions connect to engineer an enduring digital presence.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto border border-black bg-[#F1F333] px-3 py-1 font-mono text-[11px] font-bold text-black shadow-[2px_2px_0_0_#000]">
          <span className="h-2 w-2 rounded-full bg-black" />
          <span>5 Connected Capabilities</span>
        </div>
      </div>

      {/* Division Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-6 pb-6 border-b border-black">
        {SERVICES.map((s) => {
          const isActive = s.slug === activeSlug;
          return (
            <button
              key={s.slug}
              type="button"
              onClick={() => setActiveSlug(s.slug)}
              className={`flex flex-col items-start p-3.5 border border-black text-left transition-all duration-150 cursor-pointer ${
                isActive
                  ? `${getAccentColor(s.slug)} text-black shadow-[3px_3px_0_0_#000] -translate-x-0.5 -translate-y-0.5`
                  : "bg-[#F4F4F0] text-black hover:bg-white hover:shadow-[2px_2px_0_0_#000]"
              }`}
            >
              <div className="h-8 w-8 border border-black bg-white text-black flex items-center justify-center mb-2.5 shadow-[1px_1px_0_0_#000]">
                {getIcon(s.slug)}
              </div>
              <span className="font-mono text-[10px] uppercase font-bold text-[#605C56]">
                {s.code.split("//")[0].trim()}
              </span>
              <span className="font-display text-xs font-bold text-black mt-1 leading-snug">
                {s.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Service Showcase */}
      <div className="pt-6 grid gap-8 lg:grid-cols-12 lg:items-start text-left">
        {/* Left Col: Service Thesis & Scope */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="border border-black bg-black text-white px-2 py-0.5 font-mono text-xs font-bold">
                {activeService.code}
              </span>
              <span className="border border-black bg-[#F4F4F0] px-2 py-0.5 font-mono text-xs text-black font-medium">
                Cadence: {activeService.timeframe}
              </span>
            </div>
            <h4 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-black">
              {activeService.title}
            </h4>
            <p className="mt-2 text-sm text-[#2D2A26] leading-relaxed">
              {activeService.subtitle}
            </p>
          </div>

          <div className="p-5 border border-black bg-[#F4F4F0] shadow-[3px_3px_0_0_#000]">
            <span className="font-mono text-xs uppercase tracking-wider text-black font-bold block mb-3 pb-1 border-b border-black">
              Problems This Division Solves
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#2D2A26]">
              {activeService.problems.map((prob) => (
                <li key={prob.title} className="flex items-start gap-2.5">
                  <span className="font-bold text-black mt-0.5">■</span>
                  <div>
                    <strong className="font-bold text-black">{prob.title}:</strong>{" "}
                    {prob.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <Link
              href={`/capabilities/${activeService.slug}`}
              className="neo-btn text-xs px-4 py-2"
            >
              <span>Explore {activeService.title} specifications & deliverables</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        {/* Right Col: Deliverables & Connected Capabilities */}
        <div className="lg:col-span-5 space-y-5">
          <div className="p-5 border border-black bg-white shadow-[3px_3px_0_0_#000]">
            <span className="font-mono text-xs uppercase tracking-wider text-black font-bold block mb-3 pb-1 border-b border-black">
              Tangible Handover Deliverables
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#2D2A26]">
              {activeService.deliverables[0]?.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="h-4 w-4 shrink-0 bg-[#55D6BE] border border-black flex items-center justify-center text-black font-bold text-[10px] mt-0.5">
                    ✓
                  </span>
                  <span className="font-medium text-black">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 border border-black bg-[#FAFAF7]">
            <span className="font-mono text-xs uppercase tracking-wider text-black font-bold block mb-3 pb-1 border-b border-black">
              How It Connects with Other Divisions
            </span>
            <div className="space-y-3 text-xs text-[#2D2A26]">
              {activeService.crossConnections.slice(0, 2).map((conn) => (
                <div key={conn.division} className="pb-2.5 border-b border-black last:border-none last:pb-0">
                  <Link
                    href={`/capabilities/${conn.slug}`}
                    className="font-bold text-black hover:text-[#DC341E] hover:underline inline-flex items-center gap-1 font-display"
                  >
                    <span>{conn.division}</span>
                    <ArrowUpRight size={12} />
                  </Link>
                  <p className="mt-1 text-xs text-[#2D2A26] leading-relaxed">
                    {conn.relationship}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
