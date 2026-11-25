import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SchoolBlueprint from "@/components/interactive/SchoolBlueprint";
import { INDUSTRIES } from "@/data/industries";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries — Domain Specialization & Practice Areas | FIRM",
  description:
    "How FIRM's unified digital presence capabilities apply across sectors: Schools & Education, Healthcare, Professional Services, Retail, and Startups.",
};

export default function IndustriesDirectoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-white">
      <Container>
        <PageHeader
          badge="INDUSTRIES"
          eyebrow="Sector Specialization"
          title="Presence engineered for your sector."
          description="We do not apply generic templates. We understand the regulatory constraints, stakeholder dynamics, and audience expectations unique to your industry."
        />
      </Container>

      {/* Primary Specialization Spotlight: Education & Schools with School Blueprint */}
      <Section background="black" padding="tight">
        <SchoolBlueprint />
      </Section>

      {/* Industry Sector Directory Cards */}
      <Section background="black" padding="normal">
        <div className="max-w-5xl mx-auto text-left space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Explore individual industry frameworks
              </h2>
            </div>
            <span className="px-3.5 py-1 rounded-full bg-[#18181B] border border-white/15 text-xs font-medium text-white/70">
              5 Core Sectors
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {INDUSTRIES.map((s) => (
              <div
                key={s.slug}
                className="gumroad-card p-6 sm:p-8 flex flex-col justify-between group hover:border-white/30 transition-all"
              >
                <div className="space-y-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 text-[11px] font-semibold">
                    {s.eyebrow}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#FF90E8] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                    {s.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-white/60">
                    {s.deliverables.length} Deliverables Included
                  </span>
                  <Link
                    href={`/industries/${s.slug}`}
                    className="text-xs font-semibold text-[#FF90E8] group-hover:underline inline-flex items-center gap-1"
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
