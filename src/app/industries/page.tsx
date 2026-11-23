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
  const getAccentBadge = (idx: number) => {
    const colors = ["bg-[#FF90E8]", "bg-[#55D6BE]", "bg-[#F1F333]", "bg-[#FF90E8]", "bg-[#55D6BE]"];
    return colors[idx % colors.length];
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F0]">
      <Container>
        <PageHeader
          badge="INDUSTRIES"
          eyebrow="Sector Specialization"
          title="Presence engineered for your sector."
          description="We do not apply generic templates. We understand the regulatory constraints, stakeholder dynamics, and audience expectations unique to your industry."
        />
      </Container>

      {/* Primary Specialization Spotlight: Education & Schools with School Blueprint */}
      <Section background="surface">
        <SchoolBlueprint />
      </Section>

      {/* Industry Sector Directory Cards */}
      <Section background="page">
        <div className="max-w-5xl mx-auto text-left">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-3">
            <div>
              <span className="inline-block border border-black bg-[#F1F333] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
                Sector Practice Guides
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-black">
                Explore individual industry frameworks
              </h2>
            </div>
            <span className="border border-black bg-white px-3 py-1 font-mono text-xs font-bold text-black shadow-[2px_2px_0_0_#000]">
              5 Core Sectors
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {INDUSTRIES.map((s, idx) => (
              <div
                key={s.slug}
                className="neo-card p-6 sm:p-8 flex flex-col justify-between text-left shadow-[4px_4px_0_0_#000]"
              >
                <div>
                  <span className={`border border-black ${getAccentBadge(idx)} px-2.5 py-0.5 font-mono text-[10px] text-black font-bold uppercase tracking-wider inline-block shadow-[1px_1px_0_0_#000]`}>
                    {s.eyebrow}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold text-black">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                    {s.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black flex items-center justify-between text-xs">
                  <span className="font-mono text-xs font-bold text-[#605C56]">
                    {s.deliverables.length} Deliverables Included
                  </span>
                  <Link
                    href={`/industries/${s.slug}`}
                    className="neo-btn text-xs px-3.5 py-1.5"
                  >
                    <span>Read practice</span>
                    <ArrowUpRight size={12} />
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
