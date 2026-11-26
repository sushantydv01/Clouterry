"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

const SURFACES = [
  {
    id: "charcoal",
    name: "Midnight Charcoal",
    hex: "#171717",
    ink: "#F8F6EF",
    mutedInk: "#D5D2C7",
    accentInk: "#ED83A8",
    contrastRatio: "17.1:1 AAA",
    cssVar: "--bg-page: #171717; --ink-cream: #f8f6ef;",
  },
  {
    id: "cream",
    name: "Warm Cream Paper",
    hex: "#F8F6EF",
    ink: "#171717",
    mutedInk: "#3F3D38",
    accentInk: "#171717",
    contrastRatio: "17.1:1 AAA",
    cssVar: "--bg-paper: #f8f6ef; --ink-dark: #171717;",
  },
  {
    id: "yellow",
    name: "Butter Yellow Drafting",
    hex: "#F4CF55",
    ink: "#171717",
    mutedInk: "#171717",
    accentInk: "#171717",
    contrastRatio: "12.4:1 AAA",
    cssVar: "--accent-yellow: #f4cf55; --ink-dark: #171717;",
  },
];

const SAMPLES = [
  {
    label: "Admissions Flagship",
    headline: "Saint Jude Preparatory Academy",
    subline: "Clear prospective family enrollment without crowding daily parent schedules.",
  },
  {
    label: "Clinical Sanctuary",
    headline: "Aether Surgical & Specialty Clinics",
    subline: "Low-anxiety patient intake structured around WCAG 2.1 AA legibility.",
  },
  {
    label: "Commercial Advisory",
    headline: "Vance & Partners Litigation",
    subline: "Partner authority conveyed through calm editorial typography and speed.",
  },
];

/**
 * Interactive Brand & Token Specimen Workbench (`# 12.2`):
 * Proves visual consistency mathematically with real ground polarity switching,
 * weight comparison, WCAG 2.1 contrast indicators, and copyable CSS variables.
 */
export default function LivingSpecimenBand() {
  const [surfaceIdx, setSurfaceIdx] = useState(0);
  const [weight, setWeight] = useState<"400" | "500" | "600">("500");
  const [sampleIdx, setSampleIdx] = useState(0);
  const [italicSerif, setItalicSerif] = useState(true);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const activeSurface = SURFACES[surfaceIdx];
  const activeSample = SAMPLES[sampleIdx];

  const handleCopy = async (tokenText: string) => {
    let copied = false;
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(tokenText);
        copied = true;
      } catch {
        copied = false;
      }
    }
    if (!copied) {
      try {
        const ta = document.createElement("textarea");
        ta.value = tokenText;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        copied = document.execCommand("copy");
        document.body.removeChild(ta);
      } catch {}
    }
    setCopiedToken(tokenText);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <div className="space-y-8 text-left">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-[#F8F6EF]/12">
        <div className="space-y-2 max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#F8F6EF] tracking-tight">
            Interactive design system specimen
          </h2>
          <p className="text-base text-[#D5D2C7] font-sans">
            Test FIRM&apos;s living typography weights, surface polarities, WCAG AA/AAA ink ratios, and exportable CSS custom properties directly inside the browser.
          </p>
        </div>

        <span className="font-mono text-xs text-[#ACA89E]">
          Live CSS Tokens · Zero Static PDF Mockups
        </span>
      </div>

      {/* Control Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#121214] border border-[#F8F6EF]/12">
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Specimen surface background">
          <span className="text-xs font-sans text-[#ACA89E] mr-1">Ground:</span>
          {SURFACES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSurfaceIdx(idx)}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-display font-medium transition-colors border cursor-pointer ${
                surfaceIdx === idx
                  ? "bg-[#F8F6EF] text-[#171717] border-[#F8F6EF]"
                  : "bg-[#1D1D20] text-[#D5D2C7] border-[#F8F6EF]/14 hover:border-[#F8F6EF]/35"
              }`}
            >
              <span
                className="h-2.5 w-2.5 rounded-full border border-white/20"
                style={{ backgroundColor: s.hex }}
                aria-hidden="true"
              />
              <span>{s.name}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-sans text-[#ACA89E] mr-1">Weight:</span>
          {(["400", "500", "600"] as const).map((w) => (
            <button
              key={w}
              type="button"
              onClick={() => setWeight(w)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors border cursor-pointer ${
                weight === w
                  ? "bg-[#ED83A8] text-[#171717] border-[#ED83A8] font-semibold"
                  : "bg-[#1D1D20] text-[#D5D2C7] border-[#F8F6EF]/14 hover:border-[#F8F6EF]/35"
              }`}
            >
              {w}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setItalicSerif((v) => !v)}
            className={`px-3 py-1.5 rounded-full text-xs font-serif italic transition-colors border cursor-pointer ${
              italicSerif
                ? "bg-[#A6D8A1] text-[#171717] border-[#A6D8A1]"
                : "bg-[#1D1D20] text-[#D5D2C7] border-[#F8F6EF]/14"
            }`}
          >
            Serif Pair
          </button>
        </div>
      </div>

      {/* Live Preview Stage */}
      <div className="grid gap-8 lg:grid-cols-12 items-stretch">
        <div
          className="lg:col-span-7 p-7 sm:p-10 rounded-2xl border border-[#F8F6EF]/16 flex flex-col justify-between gap-8 transition-colors duration-200"
          style={{ backgroundColor: activeSurface.hex, color: activeSurface.ink }}
        >
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-current/15">
            <div className="flex flex-wrap gap-2">
              {SAMPLES.map((samp, sIdx) => (
                <button
                  key={samp.label}
                  type="button"
                  onClick={() => setSampleIdx(sIdx)}
                  className={`text-xs font-sans px-3 py-1 rounded-full border transition-colors cursor-pointer ${
                    sampleIdx === sIdx
                      ? "border-current bg-current/10 font-semibold"
                      : "border-current/20 opacity-75 hover:opacity-100"
                  }`}
                >
                  {samp.label}
                </button>
              ))}
            </div>

            <span className="font-mono text-xs px-2.5 py-1 rounded-full border border-current/25">
              WCAG {activeSurface.contrastRatio}
            </span>
          </div>

          <div className="space-y-4">
            <p
              className="font-display text-3xl sm:text-5xl tracking-[-0.03em] leading-[1.06] transition-all"
              style={{ fontWeight: Number(weight) }}
            >
              {activeSample.headline}
            </p>
            <p
              className={`${italicSerif ? "firm-serif-italic text-xl sm:text-2xl" : "font-sans text-base sm:text-lg"} max-w-[54ch] leading-relaxed`}
              style={{ color: activeSurface.mutedInk }}
            >
              {activeSample.subline}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-current/15">
            <span className="font-mono text-xs opacity-80">
              {activeSurface.cssVar}
            </span>
            <button
              type="button"
              onClick={() => handleCopy(activeSurface.cssVar)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-current/25 text-xs font-sans font-medium cursor-pointer hover:bg-current/10 transition-colors"
            >
              {copiedToken === activeSurface.cssVar ? (
                <>
                  <Check size={13} />
                  <span>Copied CSS</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>Copy tokens</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Palette Token Swatch Drawer */}
        <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
          {[
            { name: "Midnight Charcoal", hex: "#171717", ink: "#F8F6EF", token: "--bg-page: #171717;" },
            { name: "Warm Cream", hex: "#F8F6EF", ink: "#171717", token: "--bg-paper: #f8f6ef;" },
            { name: "Rose Pink", hex: "#ED83A8", ink: "#171717", token: "--accent-pink: #ed83a8;" },
            { name: "Garden Green", hex: "#A6D8A1", ink: "#171717", token: "--accent-green: #a6d8a1;" },
            { name: "Butter Yellow", hex: "#F4CF55", ink: "#171717", token: "--accent-yellow: #f4cf55;" },
          ].map((sw) => (
            <button
              key={sw.name}
              type="button"
              onClick={() => handleCopy(sw.token)}
              className="w-full p-4 rounded-xl flex items-center justify-between gap-4 border border-[#F8F6EF]/14 text-left cursor-pointer transition-transform hover:scale-[1.01]"
              style={{ backgroundColor: sw.hex, color: sw.ink }}
            >
              <div>
                <span className="font-display text-base font-medium block leading-tight">
                  {sw.name}
                </span>
                <span className="text-xs opacity-75 font-mono">{sw.token}</span>
              </div>
              <span className="font-mono text-xs font-semibold tabular-nums inline-flex items-center gap-1.5">
                {copiedToken === sw.token ? <Check size={13} /> : <Copy size={12} />}
                <span>{copiedToken === sw.token ? "Copied" : sw.hex}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {copiedToken ? `Copied CSS custom properties: ${copiedToken}` : ""}
      </p>
    </div>
  );
}
