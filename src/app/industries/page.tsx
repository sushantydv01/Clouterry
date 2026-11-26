import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SchoolBlueprint from "@/components/interactive/SchoolBlueprint";
import StickerMark from "@/components/illustrations/StickerMark";
import { INDUSTRIES } from "@/data/industries";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries | Domain Specialization & Practice Areas | FIRM",
  description:
    "How FIRM's unified digital presence capabilities apply across Schools & Education, Healthcare, Professional Services, Retail, and Startups.",
};

/**
 * `/industries` — Uses dedicated `e02-school-architecture.webp` dual-courtyard plate
 * and unboxed hairline sector rows instead of identical box grids.
 */
export default function IndustriesDirectoryPage() {
  const education = INDUSTRIES.find((i) => i.slug === "education") || INDUSTRIES[0];
  const companionSectors = INDUSTRIES.filter((i) => i.slug !== "education");

  const sectorMeta = [
    { label: "Clinical & Surgical", color: "#A6D8A1" },
    { label: "Legal & Advisory", color: "#ED83A8" },
    { label: "Headless Commerce", color: "#F4CF55" },
    { label: "Venture Launches", color: "#A6D8A1" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#171717] text-[#F8F6EF]">
      {/* 01. Asymmetric Header */}
      <Container size="wide">
        <PageHeader
          kicker="Contextual Specialization"
          title="Presence shaped around your sector."
          description="We reject one-size-fits-all templates. Every sector engagement reflects real institutional governance, audience sensitivity, and stakeholder workflows."
          aside={
            <div className="p-6 rounded-2xl bg-[#1D1D20] border border-[#F8F6EF]/12 flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <span className="font-sans text-xs font-semibold text-[#F4CF55] block">
                  Flagship Practice
                </span>
                <p className="font-display text-lg font-medium text-[#F8F6EF]">
                  Education &amp; Independent Schools
                </p>
                <p className="text-sm text-[#D5D2C7]">
                  Admissions conversion cleanly separated from internal parent portals.
                </p>
              </div>
              <StickerMark name="s09-07-sun" size={28} />
            </div>
          }
        />
      </Container>

      {/* 02. Warm Cream Un-Nested 4-Layer School Digital Blueprint */}
      <Section background="warm-paper" containerSize="wide" padding="normal">
        <SchoolBlueprint />
      </Section>

      {/* 03. Open Flagship Education Feature + Unboxed Sector Directory */}
      <Section background="charcoal" containerSize="wide" padding="spacious">
        <div className="w-full space-y-12 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#F8F6EF]/12">
            <h2 className="font-display text-3xl sm:text-5xl font-medium text-[#F8F6EF] tracking-[-0.025em]">
              Sector practice guides
            </h2>
            <span className="font-mono text-xs text-[#ACA89E]">
              Five Dedicated Domain Frameworks
            </span>
          </div>

          {/* Education Flagship Spread (Open 12-Col Split with e02 Dual-Courtyard Artwork) */}
          <article className="grid gap-8 lg:gap-12 lg:grid-cols-12 items-center pb-10 border-b border-[#F8F6EF]/12">
            <div className="lg:col-span-6">
              <Link
                href="/industries/education"
                className="block relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#F8F6EF]/14 bg-[#121214] group"
              >
                <Image
                  src="/images/studio/e02-school-architecture.webp"
                  alt="Dual-courtyard architectural plan separating admissions gateway arch from structured parent utility mosaic"
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </Link>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="font-sans text-xs font-semibold text-[#F4CF55] block">
                Primary Sector Practice
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-medium text-[#F8F6EF] tracking-tight">
                {education.title}
              </h3>
              <p className="text-base text-[#D5D2C7] leading-relaxed font-sans">
                {education.tagline}
              </p>
              <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-[#F8F6EF]/12">
                <span className="font-mono text-xs text-[#ACA89E]">
                  4-Layer School Blueprint · {education.deliverables.length} Deliverables
                </span>
                <Link href="/industries/education" className="firm-btn-primary text-sm">
                  <span>Read education guide</span>
                  <ArrowUpRight size={15} className="stroke-[2]" />
                </Link>
              </div>
            </div>
          </article>

          {/* Open Hairline Directory for Companion Sectors (Eliminates repetitive dark box wall) */}
          <div className="divide-y divide-[#F8F6EF]/12 border-b border-[#F8F6EF]/12">
            {companionSectors.map((sector, idx) => {
              const meta = sectorMeta[idx % sectorMeta.length];

              return (
                <article
                  key={sector.slug}
                  className="py-7 sm:py-8 grid gap-5 lg:grid-cols-12 items-start lg:items-center group"
                >
                  <div className="lg:col-span-4 space-y-1.5">
                    <div className="inline-flex items-center gap-2 text-xs font-sans font-medium" style={{ color: meta.color }}>
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: meta.color }} aria-hidden="true" />
                      <span>{meta.label}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#F8F6EF] group-hover:text-[#ED83A8] transition-colors">
                      <Link href={`/industries/${sector.slug}`}>
                        {sector.title}
                      </Link>
                    </h3>
                  </div>

                  <div className="lg:col-span-5 text-base text-[#D5D2C7] leading-relaxed font-sans">
                    <p>{sector.tagline}</p>
                    <p className="text-xs font-mono text-[#ACA89E] pt-1.5">
                      {sector.deliverables.length} sector-specific deliverables included
                    </p>
                  </div>

                  <div className="lg:col-span-3 flex lg:justify-end">
                    <Link
                      href={`/industries/${sector.slug}`}
                      className="firm-btn-secondary text-sm"
                    >
                      <span>Read practice</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
}
