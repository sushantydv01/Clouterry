import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work — Case Studies & Strategic Concepts | FIRM",
  description:
    "Explore FIRM's work across brand identity, web engineering, and digital presence systems. Transparently categorized into Client Commissions and Strategic Concepts.",
};

const PROJECTS = [
  {
    title: "Saint Jude Academy",
    category: "Education & Schools",
    classification: "Strategic Concept & Architecture Study",
    scope: "Brand Identity, Next.js Platform, Admissions Funnel",
    desc: "A unified digital presence overhaul transforming an 80-year-old independent academy's admissions portal, storytelling, and family community hub.",
    deliverables: ["WCAG 2.1 AA Platform", "Admissions Funnel", "Editorial Photography Guide"],
  },
  {
    title: "Aether Health Clinic",
    category: "Healthcare & Medical",
    classification: "Strategic Concept & Architecture Study",
    scope: "Identity System, Patient Intake Portal, Web Engineering",
    desc: "A calm, dignified digital presence for a specialty medical practice, replacing clinical coldness with reassurance, speed, and seamless booking.",
    deliverables: ["HIPAA-Conscious Architecture", "Patient Gateway", "Typographic Token System"],
  },
  {
    title: "Vance & Partners Legal",
    category: "Professional Services",
    classification: "Strategic Concept & Architecture Study",
    scope: "Practice Area Directory, Editorial Publishing, Rebrand",
    desc: "Elevating a corporate law firm's digital presence to reflect the intellectual rigor of its senior partners through literary typography and search visibility.",
    deliverables: ["Editorial Publication Hub", "Partner Biographies", "Technical SEO Infrastructure"],
  },
];

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Container>
        <PageHeader
          badge="OUR WORK"
          eyebrow="Portfolio & Retrospectives"
          title="Architectural case studies."
          description="We present our work with transparent categorization. Every study showcases our strategic approach, technical stack decisions, and tangible deliverables."
        />
      </Container>

      <Section background="subtle">
        {/* Integrity Notice Ribbon */}
        <div className="mb-10 p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            <span className="font-mono text-[11px] text-[var(--text-secondary)]">
              CREDIBILITY STANDARD: We transparently distinguish Client Commissions from Strategic Architecture Concepts.
            </span>
          </div>
          <span className="font-mono text-[11px] text-[var(--text-muted)]">Zero Fabricated Testimonials</span>
        </div>

        <div className="space-y-8">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 sm:p-8 flex flex-col justify-between"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-[var(--border-hairline)]">
                <div>
                  <span className="font-mono text-[10px] text-[var(--accent)] font-semibold uppercase tracking-wider">
                    {p.category} {"//"} {p.classification}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-medium text-[var(--text-primary)]">
                    {p.title}
                  </h3>
                </div>
                <span className="font-mono text-xs text-[var(--text-muted)]">{p.scope}</span>
              </div>

              <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                {p.desc}
              </p>

              <div className="mt-6 pt-4 border-t border-[var(--border-hairline)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {p.deliverables.map((d) => (
                    <span
                      key={d}
                      className="rounded-md bg-[var(--bg-subtle)] border border-[var(--border-hairline)] px-2.5 py-1 text-[11px] font-mono text-[var(--text-secondary)]"
                    >
                      {d}
                    </span>
                  ))}
                </div>

                <Link
                  href="/connect"
                  className="text-xs font-medium text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                >
                  <span>Discuss similar scope</span>
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
