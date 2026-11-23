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
    <div className="flex flex-col min-h-screen">
      <Container>
        <PageHeader
          badge="INDUSTRIES"
          eyebrow="Sector Specialization"
          title="Presence engineered for your sector."
          description="We do not apply generic templates. We understand the regulatory constraints, stakeholder dynamics, and audience expectations unique to your industry."
        />
      </Container>

      {/* Primary Specialization Spotlight: Education & Schools with School Blueprint */}
      <Section background="subtle">
        <SchoolBlueprint />
      </Section>

      {/* Industry Sector Directory Cards */}
      <Section background="page">
        <div className="max-w-5xl mx-auto text-left">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
                Sector Practice Guides
              </span>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl font-medium text-[var(--text-primary)]">
                Explore individual industry frameworks
              </h2>
            </div>
            <span className="font-mono text-xs text-[var(--text-muted)]">
              5 Core Sectors
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {INDUSTRIES.map((s) => (
              <div
                key={s.slug}
                className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 flex flex-col justify-between text-left transition-colors hover:border-[var(--border-strong)]"
              >
                <div>
                  <span className="font-mono text-[10px] text-[var(--accent)] font-semibold uppercase tracking-wider block">
                    {s.eyebrow}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-medium text-[var(--text-primary)]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                    {s.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">
                    {s.deliverables.length} Deliverables
                  </span>
                  <Link
                    href={`/industries/${s.slug}`}
                    className="font-medium text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read sector practice</span>
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
