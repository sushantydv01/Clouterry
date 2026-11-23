import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { INDUSTRIES } from "@/data/industries";
import { ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare & Medical — Clinical Digital Presence | FIRM",
  description:
    "Calm, patient-first digital presence architecture for specialty medical clinics, surgical centers, and healthcare providers.",
};

export default function HealthcareIndustryPage() {
  const sector = INDUSTRIES.find((i) => i.slug === "healthcare") || INDUSTRIES[1];

  return (
    <div className="flex flex-col min-h-screen">
      <Container>
        <PageHeader
          badge={sector.eyebrow}
          eyebrow="Specialty Medical Practices"
          title={sector.title}
          description={sector.description}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/connect"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <span>Schedule a healthcare consultation</span>
              <ArrowUpRight size={13} />
            </Link>
            <Link
              href="/work/aether-health"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-6 text-xs font-medium text-[var(--text-primary)] hover:border-[var(--border-strong)]"
            >
              View Aether Health Case Study
            </Link>
          </div>
        </PageHeader>
      </Container>

      {/* Challenges & Solutions */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Clinical Dilemmas Solved
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            Reassuring patients while simplifying intake
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {sector.challenges.map((c) => (
              <div
                key={c.title}
                className="p-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Solutions & Deliverables */}
      <Section background="page">
        <div className="max-w-4xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            FIRM Healthcare Framework
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            Tangible deliverables for medical flagships
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {sector.deliverables.map((deliv) => (
              <div
                key={deliv}
                className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] flex items-center gap-3 text-xs font-medium text-[var(--text-primary)]"
              >
                <Check size={14} className="text-[var(--positive)] shrink-0" />
                <span>{deliv}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="subtle">
        <div className="max-w-3xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Practice FAQ
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-6">
            Frequently asked questions by medical directors
          </h2>

          <div className="space-y-4">
            {sector.faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]"
              >
                <h3 className="text-sm font-medium text-[var(--text-primary)]">
                  {faq.question}
                </h3>
                <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="page">
        <div className="max-w-3xl mx-auto text-center rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-8 sm:p-12 shadow-xs">
          <span className="font-mono text-xs font-semibold text-[var(--accent)]">
            HEALTHCARE INTAKE
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-[var(--text-primary)]">
            Elevate your clinic’s patient experience
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-lg mx-auto">
            Discuss a patient-centered digital presence overhaul with our healthcare practice partners.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/connect"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <span>Submit healthcare briefing</span>
              <ArrowUpRight size={13} />
            </Link>
            <Link
              href="/industries"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-6 text-xs font-medium text-[var(--text-primary)] hover:border-[var(--border-strong)]"
            >
              View all industry sectors
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
