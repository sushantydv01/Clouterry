import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { INDUSTRIES } from "@/data/industries";
import { ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Startups & Ventures — Rapid Launch-Cadence Platforms | FIRM",
  description:
    "Investor-grade brand identity, high-conversion landing pages, and rapid-launch Next.js web platforms for high-growth ventures.",
};

export default function StartupsIndustryPage() {
  const sector = INDUSTRIES.find((i) => i.slug === "startups") || INDUSTRIES[4];

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F0]">
      <Container>
        <PageHeader
          badge={sector.eyebrow}
          eyebrow="Venture-Backed & Emerging Companies"
          title={sector.title}
          description={sector.description}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/connect"
              className="neo-btn text-xs px-5 py-2.5"
            >
              <span>Inquire about 4-week sprint</span>
              <ArrowUpRight size={13} />
            </Link>
            <Link
              href="/capabilities/brand-identity"
              className="neo-btn-white text-xs px-5 py-2.5"
            >
              Explore Brand Identity
            </Link>
          </div>
        </PageHeader>
      </Container>

      {/* Challenges & Solutions */}
      <Section background="surface">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#FF90E8] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Venture Challenges
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            Looking like a market leader before your next capital round
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {sector.challenges.map((c, idx) => {
              const tagColors = ["bg-[#FF90E8]", "bg-[#F1F333]"];
              return (
                <div
                  key={c.title}
                  className="neo-card p-6 shadow-[4px_4px_0_0_#000]"
                >
                  <span className={`inline-block border border-black ${tagColors[idx % tagColors.length]} px-2 py-0.5 font-mono text-[10px] text-black font-bold uppercase mb-3`}>
                    Venture Hurdle 0{idx + 1}
                  </span>
                  <h3 className="font-display text-base font-bold text-black">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                    {c.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Deliverables */}
      <Section background="page">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#F1F333] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            FIRM Venture Framework
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            Deliverables for high-growth startups
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {sector.deliverables.map((deliv) => (
              <div
                key={deliv}
                className="p-4 border border-black bg-white shadow-[3px_3px_0_0_#000] flex items-center gap-3 text-xs sm:text-sm font-semibold text-black"
              >
                <div className="w-6 h-6 rounded-none border border-black bg-[#55D6BE] flex items-center justify-center shrink-0">
                  <Check size={14} className="text-black stroke-[3]" />
                </div>
                <span>{deliv}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="surface">
        <div className="max-w-3xl mx-auto text-center border border-black bg-[#FF90E8] p-8 sm:p-12 shadow-[8px_8px_0_0_#000]">
          <span className="inline-block border border-black bg-white px-3 py-1 font-mono text-xs font-bold text-black shadow-[2px_2px_0_0_#000]">
            VENTURE INTAKE
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-black leading-tight">
            Ship your brand and web platform in 4 weeks
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#2D2A26] font-medium leading-relaxed max-w-lg mx-auto">
            Our startup sprint gives founders an enterprise-grade digital flagship without the bloated 4-month agency overhead.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/connect"
              className="neo-btn text-xs px-6 py-3 w-full sm:w-auto"
            >
              <span>Initiate venture sprint</span>
              <ArrowUpRight size={13} />
            </Link>
            <Link
              href="/industries"
              className="neo-btn-white text-xs px-6 py-3 w-full sm:w-auto"
            >
              View all industry sectors
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
