import React from "react";
import type { Metadata } from "next";
import CapabilityDetailTemplate from "@/components/capabilities/CapabilityDetailTemplate";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Marketing & Growth | Search Visibility & Conversion Architecture | FIRM",
  description:
    "We connect high-intent demand to your digital flagship through technical SEO, disciplined search advertising, and conversion rate architecture.",
};

const GROWTH_SYSTEMS = [
  {
    code: "01 · Schema & Crawl",
    title: "Structured JSON-LD & Clean Sitemaps",
    detail:
      "Every page ships semantically annotated for EducationalOrganization, MedicalClinic, or LegalService queries with crisp canonical hierarchies.",
  },
  {
    code: "02 · Intent Capture",
    title: "Dedicated Landing Architectures",
    detail:
      "Search traffic lands on fast, focused Next.js conversion routes aligned seamlessly with campaign wording and admissions inquiry steps.",
  },
  {
    code: "03 · Privacy Analytics",
    title: "Compliant Measurement Without Spyware",
    detail:
      "Transparent attribution tracking inquiry completions and search term performance while respecting school, legal, and medical privacy norms.",
  },
];

export default function MarketingGrowthPage() {
  const service = SERVICES.find((s) => s.slug === "marketing-growth") || SERVICES[3];

  const growthBand = (
    <div className="space-y-8 text-left">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#F8F6EF]/12">
        <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#F8F6EF] tracking-tight">
          Visibility built into HTML architecture, not rented exclusively from ads
        </h2>
        <span className="font-mono text-xs text-[#ED83A8]">
          Technical SEO · Conversion Paths · Privacy First
        </span>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {GROWTH_SYSTEMS.map((item) => (
          <div
            key={item.code}
            className="p-6 sm:p-7 rounded-2xl bg-[#1D1D20] border border-[#F8F6EF]/12 space-y-2.5"
          >
            <span className="font-mono text-xs text-[#ED83A8] block">{item.code}</span>
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
      nodeIndex={3}
      propositionTitle="Visibility without trust wastes budget; trust without visibility goes unseen."
      problemsTitle="Why traditional ad retainers burn spend"
      ctaTitle="Build compounding search and conversion pathways."
      ctaCopy="Align technical SEO, ad campaigns, and high-speed conversion pages inside a unified repository."
      specialtyBand={growthBand}
    />
  );
}
