import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
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

export default function IndustriesDirectoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#171717] text-[#F8F6EF]">
      <Container>
        <PageHeader
          badge="Industries"
          eyebrow="Sector Specialization"
          title="Presence engineered for your sector."
          description="We reject generic industry templates. Each practice is shaped around regulatory constraints, buyer trust, and stakeholder workflows unique to your field."
        />
      </Container>

      <Section background="charcoal" padding="tight">
        <SchoolBlueprint />
      </Section>

      <Section background="charcoal-subtle" padding="normal">
        <div className="max-w-6xl mx-auto text-left space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#F8F6EF]/12">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#A6D8A1]">
                  Five Specialized Sectors
                </span>
                <StickerMark name="s09-07-sun" size={22} />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F8F6EF] tracking-tight">
                Explore sector practice guides
              </h2>
            </div>
            <span className="text-xs font-mono text-[#9C9990]">
              Dedicated Domain Frameworks
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {INDUSTRIES.map((s) => (
              <div
                key={s.slug}
                className="p-6 sm:p-8 rounded-2xl bg-[#1E1E20] border border-[#F8F6EF]/12 hover:border-[#F8F6EF]/26 transition-colors flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-[0.12em] text-[#F4CF55] block">
                    {s.eyebrow}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#F8F6EF] group-hover:text-[#ED83A8] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#C4C1B8] leading-relaxed font-sans">
                    {s.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F8F6EF]/10 flex items-center justify-between text-xs">
                  <span className="font-mono text-[#9C9990]">
                    {s.deliverables.length} Deliverables Included
                  </span>
                  <Link
                    href={`/industries/${s.slug}`}
                    className="font-display font-semibold text-[#ED83A8] group-hover:underline inline-flex items-center gap-1 whitespace-nowrap"
                  >
                    <span>Read practice</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
