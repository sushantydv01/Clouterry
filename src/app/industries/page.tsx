import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries — Domain Specialization | FIRM",
  description:
    "How FIRM's unified digital presence capabilities apply across sectors: Schools & Education, Healthcare, Professional Services, Retail, and Startups.",
};

const SECTORS = [
  {
    id: "education",
    title: "Education & Schools",
    desc: "Independent preparatory academies, K-12 schools, and specialized colleges. Decoupling prospective parent admissions funnels from internal family utility portals.",
    highlight: "Primary Specialization",
  },
  {
    id: "healthcare",
    title: "Healthcare & Clinics",
    desc: "Specialty medical practices, surgical centers, and health providers requiring calm, patient-first UX, clinical authority, and strict privacy compliance.",
    highlight: "Compliant & Trustworthy",
  },
  {
    id: "professional",
    title: "Professional Services",
    desc: "Law firms, accounting practices, and architectural consultancies whose clients expect typographic dignity, editorial authority, and intellectual prestige.",
    highlight: "Prestige & Thought Leadership",
  },
  {
    id: "retail",
    title: "Retail & E-commerce",
    desc: "Boutique consumer goods and specialty merchants needing headless commerce performance without sacrificing brand storytelling.",
    highlight: "Editorial Commerce",
  },
  {
    id: "startups",
    title: "Startups & Ventures",
    desc: "Funded ventures requiring rapid launch-cadence brand identity, high-conversion landing pages, and investor-grade web platforms.",
    highlight: "High-Cadence Launch",
  },
  {
    id: "local",
    title: "Established Local Enterprises",
    desc: "Multi-location and premier local service businesses building local search dominance and high-trust quotation experiences.",
    highlight: "Local Search Dominance",
  },
];

export default function IndustriesPage() {
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

      <Section background="subtle">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((s) => (
            <div
              key={s.id}
              className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 flex flex-col justify-between text-left"
            >
              <div>
                <span className="font-mono text-[10px] text-[var(--accent)] font-semibold uppercase tracking-wider block">
                  {s.highlight}
                </span>
                <h3 className="mt-2 font-display text-xl font-medium text-[var(--text-primary)]">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-xs text-[var(--text-secondary)] leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between text-xs">
                <Link
                  href="/connect"
                  className="font-medium text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                >
                  <span>Inquire for {s.title.split("&")[0].trim()}</span>
                  <ArrowUpRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
