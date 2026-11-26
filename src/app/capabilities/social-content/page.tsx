import React from "react";
import type { Metadata } from "next";
import CapabilityDetailTemplate from "@/components/capabilities/CapabilityDetailTemplate";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Social Media & Content | Editorial Video & Narrative Strategy | FIRM",
  description:
    "We produce disciplined editorial video, photography art direction, and high-retention content that protects brand stature.",
};

const EDITORIAL_PILLARS = [
  {
    code: "01 · Capture",
    title: "On-Site Documentary Production",
    detail:
      "Natural lighting, calm environmental framing, and studio-grade audio interviewing founders, faculty, and clinicians without stiff teleprompter scripts.",
  },
  {
    code: "02 · Monographs",
    title: "Authority Publishing & Long-Form Prose",
    detail:
      "Substantive research essays, admissions viewbooks, and legal thought leadership formatted cleanly for distraction-free screen reading.",
  },
  {
    code: "03 · Cadence",
    title: "Governance & Pre-Clearance Calendars",
    detail:
      "Monthly batch production pipelines scheduled 90 days ahead with communication lead sign-off before publication.",
  },
];

export default function SocialContentPage() {
  const service = SERVICES.find((s) => s.slug === "social-content") || SERVICES[2];

  const contentBand = (
    <div className="space-y-8 text-left">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#F8F6EF]/12">
        <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#F8F6EF] tracking-tight">
          Documentary production crafted for institutional credibility
        </h2>
        <span className="font-mono text-xs text-[#F4CF55]">
          Zero Trendy Gimmicks · Calm Visual Authority
        </span>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {EDITORIAL_PILLARS.map((item) => (
          <div
            key={item.code}
            className="p-6 sm:p-7 rounded-2xl bg-[#1D1D20] border border-[#F8F6EF]/12 space-y-2.5"
          >
            <span className="font-mono text-xs text-[#F4CF55] block">{item.code}</span>
            <h3 className="font-display text-xl font-medium text-[#F8F6EF]">{item.title}</h3>
            <p className="text-sm sm:text-base text-[#D5D2C7] leading-relaxed font-sans">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <CapabilityDetailTemplate
      service={service}
      nodeIndex={2}
      propositionTitle="Content is documented proof of your work, never disposable feed filler."
      problemsTitle="Why trend-chasing social media erodes stature"
      ctaTitle="Elevate your storytelling to match your institution."
      ctaCopy="Documentary film, photography art direction, and long-form publishing coordinated directly alongside your web presence."
      specialtyBand={contentBand}
    />
  );
}
