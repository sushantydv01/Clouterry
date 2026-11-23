"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { ArrowUpRight, Check, Layers, Globe, Share2, TrendingUp, ShieldCheck } from "lucide-react";

export default function PresenceMatrix() {
  const [activeSlug, setActiveSlug] = useState("web-technology");

  const activeService = SERVICES.find((s) => s.slug === activeSlug) || SERVICES[0];

  const getIcon = (slug: string) => {
    switch (slug) {
      case "brand-identity":
        return <Layers size={16} />;
      case "web-technology":
        return <Globe size={16} />;
      case "social-content":
        return <Share2 size={16} />;
      case "marketing-growth":
        return <TrendingUp size={16} />;
      case "digital-management":
        return <ShieldCheck size={16} />;
      default:
        return <Globe size={16} />;
    }
  };

  return (
    <div className="w-full rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-xs">
      {/* Matrix Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-[var(--border-hairline)] gap-3">
        <div>
          <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-tight">
            SIGNATURE EXPERIENCE // 01
          </span>
          <h3 className="mt-1 font-display text-2xl font-medium text-[var(--text-primary)]">
            The Interactive Presence Matrix
          </h3>
          <p className="mt-1 text-xs text-[var(--text-secondary)]">
            Explore how FIRM’s five divisions connect to engineer an enduring digital presence.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-[11px] text-[var(--text-muted)]">
          <span className="h-2 w-2 rounded-full bg-[var(--positive)]" />
          <span>5 Connected Capabilities</span>
        </div>
      </div>

      {/* Division Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-6 pb-6 border-b border-[var(--border-hairline)]">
        {SERVICES.map((s) => {
          const isActive = s.slug === activeSlug;
          return (
            <button
              key={s.slug}
              type="button"
              onClick={() => setActiveSlug(s.slug)}
              className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
                isActive
                  ? "border-[var(--accent)] bg-[var(--accent-subtle)] text-[var(--text-primary)] shadow-2xs"
                  : "border-[var(--border-hairline)] bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-subtle)] hover:text-[var(--text-primary)]"
              }`}
            >
              <div
                className={`h-7 w-7 rounded-md flex items-center justify-center mb-2 ${
                  isActive ? "bg-[var(--accent)] text-white" : "bg-[var(--bg-raised)] text-[var(--text-secondary)]"
                }`}
              >
                {getIcon(s.slug)}
              </div>
              <span className="font-mono text-[10px] text-[var(--text-muted)]">
                {s.code.split("//")[0].trim()}
              </span>
              <span className="text-xs font-medium text-[var(--text-primary)] mt-0.5 leading-tight">
                {s.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Service Showcase */}
      <div className="pt-6 grid gap-8 lg:grid-cols-12 lg:items-start text-left">
        {/* Left Col: Service Thesis & Scope */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-[var(--accent)]">
                {activeService.code}
              </span>
              <span className="text-xs text-[var(--text-muted)]">•</span>
              <span className="font-mono text-xs text-[var(--text-secondary)]">
                Cadence: {activeService.timeframe}
              </span>
            </div>
            <h4 className="mt-1 font-display text-2xl font-medium text-[var(--text-primary)]">
              {activeService.title}
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {activeService.subtitle}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-medium block mb-2">
              Problems This Division Solves
            </span>
            <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
              {activeService.problems.map((prob) => (
                <li key={prob.title} className="flex items-start gap-2">
                  <span className="text-[var(--accent)] font-mono text-[11px] mt-0.5">—</span>
                  <div>
                    <strong className="font-medium text-[var(--text-primary)]">{prob.title}:</strong>{" "}
                    {prob.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <Link
              href={`/capabilities/${activeService.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] hover:underline"
            >
              <span>Read complete {activeService.title} specifications & deliverables</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        {/* Right Col: Deliverables & Connected Capabilities */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-medium block mb-2">
              Tangible Handover Deliverables
            </span>
            <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
              {activeService.deliverables[0]?.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check size={13} className="text-[var(--positive)] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)] font-medium block mb-2">
              How It Connects with Other Divisions
            </span>
            <div className="space-y-2.5 text-xs text-[var(--text-secondary)]">
              {activeService.crossConnections.slice(0, 2).map((conn) => (
                <div key={conn.division} className="pb-2 border-b border-[var(--border-hairline)] last:border-none last:pb-0">
                  <Link
                    href={`/capabilities/${conn.slug}`}
                    className="font-medium text-[var(--text-primary)] hover:text-[var(--accent)] inline-flex items-center gap-1"
                  >
                    <span>{conn.division}</span>
                    <ArrowUpRight size={10} />
                  </Link>
                  <p className="mt-0.5 text-[11px] text-[var(--text-muted)] leading-relaxed">
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
