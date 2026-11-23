import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { INDUSTRIES } from "@/data/industries";
import { ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Retail & E-commerce — Headless Commerce & Editorial Storytelling | FIRM",
  description:
    "Headless Next.js storefronts and editorial brand storytelling for boutique consumer brands that refuse to look like generic templates.",
};

export default function RetailIndustryPage() {
  const sector = INDUSTRIES.find((i) => i.slug === "retail") || INDUSTRIES[3];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F6EF]">
      <Container>
        <PageHeader
          badge={sector.eyebrow}
          eyebrow="Boutique & Consumer Brands"
          title={sector.title}
          description={sector.description}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/connect"
              className="neo-btn-green text-xs px-5 py-2.5"
            >
              <span>Inquire for commerce</span>
              <ArrowUpRight size={13} />
            </Link>
            <Link
              href="/capabilities/web-technology"
              className="neo-btn-white text-xs px-5 py-2.5"
            >
              Explore Next.js Engineering
            </Link>
          </div>
        </PageHeader>
      </Container>

      {/* Challenges & Solutions */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#ED83A8] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            Commerce Challenges
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] mb-8">
            Balancing narrative craft with checkout conversion
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {sector.challenges.map((c, idx) => {
              const tagColors = ["bg-[#ED83A8]", "bg-[#F4CF55]"];
              return (
                <div
                  key={c.title}
                  className="neo-card p-6 shadow-[4px_4px_0_0_#171717]"
                >
                  <span className={`inline-block border border-[#171717] ${tagColors[idx % tagColors.length]} px-2 py-0.5 font-mono text-[10px] text-[#171717] font-bold uppercase mb-3`}>
                    Challenge 0{idx + 1}
                  </span>
                  <h3 className="font-display text-base font-bold text-[#171717]">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#404040] leading-relaxed">
                    {c.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Deliverables */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#F4CF55] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            FIRM Retail Framework
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] mb-8">
            Deliverables for editorial storefronts
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {sector.deliverables.map((deliv) => (
              <div
                key={deliv}
                className="p-4 border border-[#171717] bg-[#FFFFFF] shadow-[3px_3px_0_0_#171717] flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#171717]"
              >
                <div className="w-6 h-6 rounded-none border border-[#171717] bg-[#A6D8A1] flex items-center justify-center shrink-0">
                  <Check size={14} className="text-[#171717] stroke-[3]" />
                </div>
                <span>{deliv}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="cream">
        <div className="max-w-3xl mx-auto text-center border border-[#171717] bg-[#A6D8A1] p-8 sm:p-12 shadow-[8px_8px_0_0_#171717]">
          <span className="inline-block border border-[#171717] bg-[#FFFFFF] px-3 py-1 font-mono text-xs font-bold text-[#171717] shadow-[2px_2px_0_0_#171717]">
            COMMERCE INTAKE
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-[#171717] leading-tight">
            Engineer an unforgettable shopping experience
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#171717] font-medium leading-relaxed max-w-lg mx-auto">
            Discuss a headless storefront sprint with our technical and brand partners.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/connect"
              className="neo-btn text-xs px-6 py-3 w-full sm:w-auto"
            >
              <span>Submit commerce briefing</span>
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
