"use client";

import React, { useState } from "react";
import Link from "next/link";
import { INDUSTRIES } from "@/data/industries";
import { ArrowUpRight, Check, Compass, Shield, Users, Award } from "lucide-react";

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
    <div className="w-full rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-xs text-left">
      {/* Blueprint Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-[var(--border-hairline)] gap-3">
        <div>
          <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-tight">
            SIGNATURE EXPERIENCE // 02
          </span>
          <h3 className="mt-1 font-display text-2xl font-medium text-[var(--text-primary)] sm:text-3xl">
            The School Digital Blueprint
          </h3>
          <p className="mt-1 text-xs text-[var(--text-secondary)]">
            An architectural system of four connected layers designed specifically for educational institutions.
          </p>
        </div>

        <Link
          href="/industries/education"
          className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3.5 py-1.5 text-xs font-medium text-[var(--text-primary)] hover:border-[var(--border-strong)] self-start sm:self-auto"
        >
          <span>Dedicated Practice Overview</span>
          <ArrowUpRight size={13} />
        </Link>
      </div>

      {/* Layer Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-6 pb-6 border-b border-[var(--border-hairline)]">
        {layers.map((l, idx) => {
          const isActive = idx === activeLayerIndex;
          return (
            <button
              key={l.layer}
              type="button"
              onClick={() => setActiveLayerIndex(idx)}
              className={`p-4 rounded-xl border text-left transition-all ${
                isActive
                  ? "border-[var(--accent)] bg-[var(--accent-subtle)] text-[var(--text-primary)] shadow-2xs"
                  : "border-[var(--border-hairline)] bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-subtle)] hover:text-[var(--text-primary)]"
              }`}
            >
              <div
                className={`h-8 w-8 rounded-lg flex items-center justify-center mb-3 ${
                  isActive ? "bg-[var(--accent)] text-white" : "bg-[var(--bg-raised)] text-[var(--text-secondary)]"
                }`}
              >
                {getLayerIcon(l.layer)}
              </div>
              <span className="font-mono text-[10px] text-[var(--accent)] font-semibold block uppercase">
                Layer {l.layer}
              </span>
              <p className="text-xs font-medium text-[var(--text-primary)] mt-0.5 leading-snug">
                {l.name}
              </p>
              <p className="text-[11px] text-[var(--text-muted)] mt-1 truncate">
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
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-[var(--accent)]">
                LAYER {activeLayer.layer} SPECIFICATION
              </span>
              <span className="text-xs text-[var(--text-muted)]">•</span>
              <span className="text-xs text-[var(--text-secondary)]">{activeLayer.tagline}</span>
            </div>
            <h4 className="mt-1 font-display text-2xl font-medium text-[var(--text-primary)]">
              {activeLayer.name}
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {activeLayer.purpose}
            </p>
          </div>

          <div className="p-5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-medium block mb-3">
              Core Architectural Capabilities
            </span>
            <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
              {activeLayer.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5">
                  <Check size={14} className="text-[var(--positive)] mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)] font-medium block mb-2">
              Institutional Problems Addressed
            </span>
            <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
              {activeLayer.problemsAddressed.map((prob) => (
                <li key={prob} className="flex items-start gap-2">
                  <span className="text-[var(--text-muted)] font-mono text-[11px]">—</span>
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Deliverables & Connected Capabilities */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-medium block mb-3">
              Tangible Handover Assets
            </span>
            <div className="space-y-2 text-xs">
              {activeLayer.exampleDeliverables.map((deliv) => (
                <div
                  key={deliv}
                  className="rounded-lg bg-[var(--bg-surface)] border border-[var(--border-hairline)] p-2.5 text-[var(--text-primary)] font-medium flex items-center justify-between"
                >
                  <span>{deliv}</span>
                  <span className="font-mono text-[10px] text-[var(--accent)]">Included</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-medium block mb-2">
              Connected FIRM Divisions
            </span>
            <div className="flex flex-wrap gap-2 mt-2">
              {activeLayer.connectedCapabilities.map((cap) => (
                <span
                  key={cap}
                  className="inline-flex items-center rounded-md bg-[var(--bg-raised)] px-2.5 py-1 text-xs font-mono text-[var(--text-primary)]"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2 text-right">
            <Link
              href="/connect"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] hover:underline"
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
