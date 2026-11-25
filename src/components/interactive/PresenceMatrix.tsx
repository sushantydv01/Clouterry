"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { ArrowUpRight, Layers, Globe, Share2, TrendingUp, ShieldCheck, Check } from "lucide-react";

export default function PresenceMatrix() {
  const [activeSlug, setActiveSlug] = useState("brand-identity");

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
        return "#ED83A8";
      case "web-technology":
        return "#A6D8A1";
      case "social-content":
        return "#F4CF55";
      case "marketing-growth":
        return "#ED83A8";
      case "digital-management":
        return "#A6D8A1";
      default:
        return "#F8F6EF";
    }
  };

  return (
    <div className="w-full p-6 sm:p-10 rounded-2xl bg-[#1E1E20] border border-[#F8F6EF]/12 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-[#F8F6EF]/12 gap-4">
        <div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8F6EF] tracking-tight">
            The Interactive Presence Matrix
          </h3>
          <p className="mt-1 text-sm text-[#C4C1B8]">
            Inspect how FIRM&apos;s five disciplines reinforce one continuous client architecture.
          </p>
        </div>

        <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-[#171717] border border-[#F8F6EF]/12 text-xs font-mono text-[#9C9990]">
          5 Disciplines Connected
        </span>
      </div>

      {/* Responsive Scrollable Tab Row */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-6 pb-6 border-b border-[#F8F6EF]/12">
        {SERVICES.map((s) => {
          const isActive = s.slug === activeSlug;
          const nodeColor = getNodeColor(s.slug);

          return (
            <button
              key={s.slug}
              type="button"
              onClick={() => setActiveSlug(s.slug)}
              className={`flex flex-col items-start p-4 rounded-xl text-left transition-all cursor-pointer border ${
                isActive
                  ? "bg-[#262629] border-[#F8F6EF]/40"
                  : "bg-[#171717] border-[#F8F6EF]/10 hover:border-[#F8F6EF]/24"
              }`}
            >
              <div
                className="h-8 w-8 rounded-lg flex items-center justify-center mb-3 text-[#171717]"
                style={{ backgroundColor: nodeColor }}
              >
                {getIcon(s.slug)}
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#9C9990]">
                {s.code}
              </span>
              <span className="font-display text-xs sm:text-sm font-bold text-[#F8F6EF] mt-1 leading-snug">
                {s.title}
              </span>
            </button>
          );
        })}
      </div>

      <div className="pt-8 grid gap-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2 text-xs font-mono">
              <span className="text-[#ED83A8]">{activeService.code}</span>
              <span className="text-[#F8F6EF]/25">&bull;</span>
              <span className="text-[#9C9990]">Sprint: {activeService.timeframe}</span>
            </div>
            <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#F8F6EF] tracking-tight">
              {activeService.title}
            </h4>
            <p className="mt-2 text-sm sm:text-base text-[#C4C1B8] leading-relaxed font-sans">
              {activeService.subtitle}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#171717] border border-[#F8F6EF]/10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#9C9990] block mb-3 pb-2 border-b border-[#F8F6EF]/10">
              Problems Eliminated
            </span>
            <ul className="space-y-3 text-xs sm:text-sm text-[#C4C1B8]">
              {activeService.problems.map((prob) => (
                <li key={prob.title} className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#ED83A8] shrink-0 mt-1.5" />
                  <div>
                    <strong className="font-semibold text-[#F8F6EF]">{prob.title}:</strong>{" "}
                    <span>{prob.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-1">
            <Link
              href={`/capabilities/${activeService.slug}`}
              className="firm-btn-primary text-xs sm:text-sm !py-2.5 !px-5"
            >
              <span>Explore specifications</span>
              <ArrowUpRight size={14} className="stroke-[2.25]" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-xl bg-[#171717] border border-[#F8F6EF]/10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#9C9990] block mb-3 pb-2 border-b border-[#F8F6EF]/10">
              Handover Deliverables
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#C4C1B8]">
              {activeService.deliverables[0]?.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-[#A6D8A1] shrink-0 mt-0.5 stroke-[2.5]" />
                  <span className="text-[#F8F6EF]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-[#171717] border border-[#F8F6EF]/10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#9C9990] block mb-3 pb-2 border-b border-[#F8F6EF]/10">
              Continuous Thread Connections
            </span>
            <div className="space-y-3 text-xs text-[#C4C1B8]">
              {activeService.crossConnections.slice(0, 2).map((conn) => (
                <div key={conn.division} className="pb-3 border-b border-[#F8F6EF]/10 last:border-none last:pb-0">
                  <Link
                    href={`/capabilities/${conn.slug}`}
                    className="font-bold text-[#F8F6EF] hover:text-[#ED83A8] inline-flex items-center gap-1 font-display transition-colors"
                  >
                    <span>{conn.division}</span>
                    <ArrowUpRight size={12} />
                  </Link>
                  <p className="mt-1 text-xs text-[#9C9990] leading-relaxed font-sans">
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
