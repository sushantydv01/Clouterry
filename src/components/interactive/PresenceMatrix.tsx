"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { ArrowUpRight, Layers, Globe, Share2, TrendingUp, ShieldCheck, Check } from "lucide-react";

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

  const getNodeColor = (slug: string) => {
    switch (slug) {
      case "brand-identity":
        return "#FF5C40";
      case "web-technology":
        return "#3875FF";
      case "social-content":
        return "#FFB800";
      case "marketing-growth":
        return "#10B981";
      case "digital-management":
        return "#FF5C9D";
      default:
        return "#FF90E8";
    }
  };

  return (
    <div className="w-full gumroad-card p-6 sm:p-10 text-left bg-[#18181B] border border-white/10 shadow-2xl">
      {/* Matrix Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-white/10 gap-4">
        <div>
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            The Interactive Presence Matrix
          </h3>
          <p className="mt-1 text-sm text-white/60">
            Explore how FIRM&apos;s five disciplines interconnect to eliminate digital fragmentation.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto px-3 py-1 rounded-full bg-[#141416] border border-white/10 text-xs font-medium text-white/60">
          <span>5 Disciplines Connected</span>
        </div>
      </div>

      {/* Division Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-6 pb-6 border-b border-white/10">
        {SERVICES.map((s) => {
          const isActive = s.slug === activeSlug;
          const nodeColor = getNodeColor(s.slug);

          return (
            <button
              key={s.slug}
              type="button"
              onClick={() => setActiveSlug(s.slug)}
              className={`flex flex-col items-start p-4 rounded-xl text-left transition-all cursor-pointer border ${isActive
                ? "bg-[#222226] border-white/40 shadow-lg -translate-y-0.5"
                : "bg-[#141416] border-white/10 hover:border-white/20 text-white/70 hover:text-white"
                }`}
            >
              <div
                className="h-8 w-8 rounded-lg flex items-center justify-center mb-3 shadow-sm transition-colors text-black font-bold"
                style={{ backgroundColor: nodeColor }}
              >
                {getIcon(s.slug)}
              </div>
              <span className="text-[10px] uppercase font-semibold text-white/50 tracking-wider">
                {s.code}
              </span>
              <span className="font-display text-xs sm:text-sm font-bold text-white mt-1 leading-snug">
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
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white text-xs font-semibold">
                {activeService.code}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#141416] border border-white/10 text-xs text-white/60">
                Sprint: {activeService.timeframe}
              </span>
            </div>
            <h4 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {activeService.title}
            </h4>
            <p className="mt-2 text-sm sm:text-base text-white/70 leading-relaxed font-sans">
              {activeService.subtitle}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#141416] border border-white/10">
            <span className="text-xs text-white/50 font-semibold block mb-3 pb-1 border-b border-white/10">
              Problems this division eliminates
            </span>
            <ul className="space-y-3 text-xs sm:text-sm text-white/80">
              {activeService.problems.map((prob) => (
                <li key={prob.title} className="flex items-start gap-2.5">
                  <span className="text-[#FF90E8] font-bold mt-0.5">■</span>
                  <div>
                    <strong className="font-semibold text-white">{prob.title}:</strong>{" "}
                    <span className="text-white/70">{prob.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <Link
              href={`/capabilities/${activeService.slug}`}
              className="gumroad-btn-pink text-xs sm:text-sm font-bold !py-2.5 !px-5"
            >
              <span>Explore {activeService.title} specifications</span>
              <ArrowUpRight size={14} className="stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* Right Col: Deliverables & Connected Capabilities */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-xl bg-[#141416] border border-white/10">
            <span className="text-xs text-white/50 font-semibold block mb-3 pb-1 border-b border-white/10">
              Tangible handover deliverables
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              {activeService.deliverables[0]?.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#10B981] text-black flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">
                    <Check size={11} className="stroke-[3]" />
                  </div>
                  <span className="font-medium text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-[#141416] border border-white/10">
            <span className="text-xs text-white/50 font-semibold block mb-3 pb-1 border-b border-white/10">
              Continuous thread connection
            </span>
            <div className="space-y-3 text-xs text-white/70">
              {activeService.crossConnections.slice(0, 2).map((conn) => (
                <div key={conn.division} className="pb-3 border-b border-white/10 last:border-none last:pb-0">
                  <Link
                    href={`/capabilities/${conn.slug}`}
                    className="font-bold text-white hover:text-[#FF90E8] inline-flex items-center gap-1 font-display transition-colors"
                  >
                    <span>{conn.division}</span>
                    <ArrowUpRight size={12} />
                  </Link>
                  <p className="mt-1 text-xs text-white/60 leading-relaxed font-sans">
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
