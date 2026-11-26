import React from "react";
import type { Metadata } from "next";
import CapabilityDetailTemplate from "@/components/capabilities/CapabilityDetailTemplate";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Digital Management & Consulting | Platform Stewardship | FIRM",
  description:
    "Fractional digital leadership, continuous platform maintenance, and technical governance for organizations where uptime and reputation matter.",
};

const SLA_PILLARS = [
  {
    code: "01 · Custody",
    title: "100% Client Git & Asset Ownership",
    detail:
      "You hold the repository, domain DNS, fonts, and media library. Zero vendor lock-in or proprietary CMS licensing fees.",
  },
  {
    code: "02 · Hygiene",
    title: "Continuous Security & Speed Auditing",
    detail:
      "Routine framework dependency updates, automated uptime health checks, and quarterly accessibility regression reviews.",
  },
  {
    code: "03 · Evolution",
    title: "Dedicated Monthly Enhancement Sprints",
    detail:
      "Rollover engineering allocation for new campaign pages, staff updates, and admissions season improvements with 24-hour response SLAs.",
  },
];

export default function DigitalManagementPage() {
  const service = SERVICES.find((s) => s.slug === "digital-management") || SERVICES[4];

  const managementBand = (
    <div className="space-y-8 text-left">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#F8F6EF]/12">
        <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#F8F6EF] tracking-tight">
          Stewardship that preserves software speed and visual standards year after year
        </h2>
        <span className="font-mono text-xs text-[#A6D8A1]">
          Fractional CDO · Security SLAs · Client Ownership
        </span>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {SLA_PILLARS.map((item) => (
          <div
            key={item.code}
            className="p-6 sm:p-7 rounded-2xl bg-[#1D1D20] border border-[#F8F6EF]/12 space-y-2.5"
          >
            <span className="font-mono text-xs text-[#A6D8A1] block">{item.code}</span>
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
      nodeIndex={4}
      propositionTitle="Launching is day one; sustained digital equity depends on continuous stewardship."
      problemsTitle="Why websites decay inside twelve months"
      ctaTitle="Secure senior long-term digital stewardship."
      ctaCopy="Fractional engineering governance, security updates, and design token custody under clear SLAs."
      specialtyBand={managementBand}
    />
  );
}
