import React from "react";
import type { Metadata } from "next";
import CapabilityDetailTemplate from "@/components/capabilities/CapabilityDetailTemplate";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Web & Technology | Next.js App Router Engineering | FIRM",
  description:
    "We engineer ultra-fast, accessible, bespoke web platforms using Next.js 16, React 19, and Tailwind CSS. Built for institutions and brands where performance matters.",
};

const STACK_LAYERS = [
  {
    layer: "01 · Compilation",
    title: "React Server Components & Static Rendering",
    note: "Zero heavyweight runtime plugin overhead; edge-ready semantic HTML compiled upfront.",
  },
  {
    layer: "02 · Design Tokens",
    title: "Tailwind CSS v4 & Living Type Scales",
    note: "Exact brand color tokens, optical typography rhythm, and motion curves defined once in CSS.",
  },
  {
    layer: "03 · Accessibility",
    title: "WCAG 2.1 AA Compliance Verification",
    note: "Keyboard navigation, focus-visible contrast, skip landmarks, and screen-reader hierarchy.",
  },
  {
    layer: "04 · Security",
    title: "Hardened CSP Headers & Clean APIs",
    note: "Strict Content Security Policies, input sanitization, rate-limiting, and zero third-party script clutter.",
  },
];

export default function WebTechnologyPage() {
  const service = SERVICES.find((s) => s.slug === "web-technology") || SERVICES[1];

  const webArchitectureBand = (
    <div className="space-y-8 text-left">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#F8F6EF]/12">
        <div className="space-y-2">
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#F8F6EF] tracking-tight">
            Architectural foundation engineered for longevity
          </h2>
          <p className="text-base text-[#D5D2C7] font-sans max-w-xl">
            Every bespoke platform avoids proprietary template lock-in and unnecessary client-side JavaScript bloat.
          </p>
        </div>
        <span className="font-mono text-xs text-[#A6D8A1]">
          Next.js App Router · TypeScript · Tailwind CSS
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STACK_LAYERS.map((item) => (
          <div
            key={item.layer}
            className="p-6 rounded-2xl bg-[#1D1D20] border border-[#F8F6EF]/12 space-y-2.5"
          >
            <span className="font-mono text-xs text-[#A6D8A1] block">{item.layer}</span>
            <h3 className="font-display text-lg font-medium text-[#F8F6EF] leading-snug">
              {item.title}
            </h3>
            <p className="text-sm text-[#D5D2C7] leading-relaxed font-sans">{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <CapabilityDetailTemplate
      service={service}
      nodeIndex={1}
      propositionTitle="Web performance is an institutional requirement, not an aesthetic bonus."
      problemsTitle="Why legacy template stacks fail"
      ctaTitle="Build your web flagship on modern architecture."
      ctaCopy="Bespoke Next.js platforms engineered with clean code, accessibility rigor, and zero plugin lock-in."
      specialtyBand={webArchitectureBand}
    />
  );
}
