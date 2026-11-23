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
        return "bg-[#ED83A8]";
      case "web-technology":
        return "bg-[#A6D8A1]";
      case "social-content":
        return "bg-[#F4CF55]";
      case "marketing-growth":
        return "bg-[#ED83A8]";
      case "digital-management":
        return "bg-[#A6D8A1]";
      default:
        return "bg-[#F4CF55]";
    }
  };

  return (
    <div className="w-full border border-[#171717] bg-white p-6 sm:p-10 shadow-[6px_6px_0_0_#171717] text-left">
      {/* Matrix Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-[#171717] gap-4">
        <div>
          <span className="inline-block border border-[#171717] bg-[#ED83A8] px-3 py-1 font-mono text-xs font-bold text-[#171717] shadow-[2px_2px_0_0_#171717]">
            SIGNATURE SYSTEM // 01
          </span>
          <h3 className="mt-2.5 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171717]">
            The Interactive Presence Matrix
          </h3>
          <p className="mt-1 text-sm text-[#3A3835]">
            Explore how FIRM’s five divisions connect to engineer an enduring digital presence.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto border border-[#171717] bg-[#F4CF55] px-3.5 py-1.5 font-mono text-xs font-bold text-[#171717] shadow-[2px_2px_0_0_#171717]">
          <span className="h-2 w-2 rounded-full bg-[#171717]" />
          <span>5 Connected Capabilities</span>
        </div>
      </div>

      {/* Division Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-6 pb-6 border-b border-[#171717]">
        {SERVICES.map((s) => {
          const isActive = s.slug === activeSlug;
          return (
            <button
              key={s.slug}
              type="button"
              onClick={() => setActiveSlug(s.slug)}
              className={`flex flex-col items-start p-4 border border-[#171717] text-left transition-all duration-140 cursor-pointer ${
                isActive
                  ? `${getAccentColor(s.slug)} text-[#171717] shadow-[3px_3px_0_0_#171717] -translate-x-0.5 -translate-y-0.5 font-bold`
                  : "bg-[#F8F6EF] text-[#171717] hover:bg-white hover:shadow-[2px_2px_0_0_#171717]"
              }`}
            >
              <div className="h-9 w-9 border border-[#171717] bg-white text-[#171717] flex items-center justify-center mb-3 shadow-[1px_1px_0_0_#171717]">
                {getIcon(s.slug)}
              </div>
              <span className="font-mono text-[10px] uppercase font-bold text-[#6E6A63]">
                {s.code.split("//")[0].trim()}
              </span>
              <span className="font-display text-xs sm:text-sm font-bold text-[#171717] mt-1 leading-snug">
                {s.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Service Showcase */}
      <div className="pt-8 grid gap-8 lg:grid-cols-12 lg:items-start text-left">
        {/* Left Col: Service Thesis & Scope */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="border border-[#171717] bg-[#171717] text-[#F8F6EF] px-2.5 py-0.5 font-mono text-xs font-bold">
                {activeService.code}
              </span>
              <span className="border border-[#171717] bg-[#F8F6EF] px-2.5 py-0.5 font-mono text-xs text-[#171717] font-medium">
                Cadence: {activeService.timeframe}
              </span>
            </div>
            <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#171717]">
              {activeService.title}
            </h4>
            <p className="mt-2 text-sm sm:text-base text-[#3A3835] leading-relaxed font-sans">
              {activeService.subtitle}
            </p>
          </div>

          <div className="p-6 border border-[#171717] bg-[#F8F6EF] shadow-[3px_3px_0_0_#171717]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#171717] font-bold block mb-3 pb-1 border-b border-[#171717]">
              Problems This Division Solves
            </span>
            <ul className="space-y-3 text-xs sm:text-sm text-[#3A3835]">
              {activeService.problems.map((prob) => (
                <li key={prob.title} className="flex items-start gap-2.5">
                  <span className="font-bold text-[#ED83A8] mt-0.5">■</span>
                  <div>
                    <strong className="font-bold text-[#171717]">{prob.title}:</strong>{" "}
                    {prob.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <Link
              href={`/capabilities/${activeService.slug}`}
              className="neo-btn-pink text-xs px-5 py-2.5"
            >
              <span>Explore {activeService.title} specifications &amp; deliverables</span>
              <ArrowUpRight size={13} className="stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* Right Col: Deliverables & Connected Capabilities */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 border border-[#171717] bg-white shadow-[3px_3px_0_0_#171717]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#171717] font-bold block mb-3 pb-1 border-b border-[#171717]">
              Tangible Handover Deliverables
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#3A3835]">
              {activeService.deliverables[0]?.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="h-4 w-4 shrink-0 bg-[#A6D8A1] border border-[#171717] flex items-center justify-center text-[#171717] font-bold text-[10px] mt-0.5 shadow-[1px_1px_0_0_#171717]">
                    ✓
                  </span>
                  <span className="font-semibold text-[#171717]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 border border-[#171717] bg-[#F8F6EF]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#171717] font-bold block mb-3 pb-1 border-b border-[#171717]">
              How It Connects with Other Divisions
            </span>
            <div className="space-y-3.5 text-xs text-[#3A3835]">
              {activeService.crossConnections.slice(0, 2).map((conn) => (
                <div key={conn.division} className="pb-3 border-b border-[#171717] last:border-none last:pb-0">
                  <Link
                    href={`/capabilities/${conn.slug}`}
                    className="font-bold text-[#171717] hover:text-[#ED83A8] hover:underline inline-flex items-center gap-1 font-display"
                  >
                    <span>{conn.division}</span>
                    <ArrowUpRight size={12} />
                  </Link>
                  <p className="mt-1 text-xs text-[#3A3835] leading-relaxed font-sans">
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
