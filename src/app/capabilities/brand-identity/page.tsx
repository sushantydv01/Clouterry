import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { SERVICES } from "@/data/services";
import { ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Brand & Identity — Strategic Positioning & Visual Systems | FIRM",
  description:
    "We engineer enduring brand platforms, typographic systems, and digital design tokens that establish immediate market authority.",
};

export default function BrandIdentityPage() {
  const service = SERVICES.find((s) => s.slug === "brand-identity") || SERVICES[0];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 01. Editorial Hero */}
      <Container>
        <PageHeader
          badge={service.code}
          eyebrow={service.eyebrow}
          title={service.title}
          description={service.subtitle}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/connect"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <span>Commission an identity sprint</span>
              <ArrowUpRight size={13} />
            </Link>
            <span className="font-mono text-xs text-[var(--text-muted)]">
              Cadence: {service.timeframe}
            </span>
          </div>
        </PageHeader>
      </Container>

      {/* 02. Core Proposition & Thesis */}
      <Section background="subtle" withRuledBaseline={true}>
        <div className="max-w-3xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Strategic Proposition
          </span>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl">
            A brand is the visual standard that governs every organizational interaction.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {service.proposition} When an institution’s visual presentation lacks craft or coherence, prospective clients, students, or partners judge its core capability by its weakest touchpoint.
          </p>
        </div>
      </Section>

      {/* 03. Problems Addressed */}
      <Section background="page">
        <div className="max-w-4xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Reputation Failures Prevented
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            The cost of visual fragmentation
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            {service.problems.map((prob) => (
              <div
                key={prob.title}
                className="p-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                    {prob.title}
                  </h3>
                  <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                    {prob.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 04. Visual Specimen: Typography & Token Architecture */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Visual Demonstration
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-6">
            Typographic specimens &amp; token discipline
          </h2>

          <div className="mb-6 overflow-hidden rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] shadow-xs">
            <Image
              src="/images/brand/brand-identity-specimen.webp"
              alt="FIRM Brand & Identity Architecture Specimen"
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-xs">
            {/* Specimen Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-[var(--border-hairline)] gap-2">
              <span className="font-mono text-xs font-semibold text-[var(--text-primary)]">
                SPECIMEN // ATELIER BLUEPRINT TYPOGRAPHIC SCALE
              </span>
              <span className="font-mono text-[11px] text-[var(--text-muted)]">
                Optical Sizes 72 / 24 / 14 / 11
              </span>
            </div>

            {/* Specimen Rows */}
            <div className="pt-6 space-y-6">
              <div>
                <span className="font-mono text-[10px] text-[var(--text-muted)] block mb-1">
                  Editorial Headline (Newsreader Optical 72 — 400 Weight)
                </span>
                <p className="font-display text-3xl sm:text-5xl font-normal text-[var(--text-primary)] tracking-tight leading-[1.08]">
                  Architectural integrity in digital form.
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-hairline)]">
                <span className="font-mono text-[10px] text-[var(--text-muted)] block mb-1">
                  Interface Body (Inter — 400 Weight / 1.6 Line Height)
                </span>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                  Typography establishes the subconscious hierarchy of your organization. When optical spacing, tabular figures, and hairline divisions are calculated with mathematical precision, the reader perceives calm authority.
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-hairline)] flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-md bg-[#F7F4EE] border border-[var(--border-hairline)]" />
                  <span className="font-mono text-[11px] text-[var(--text-secondary)]">#F7F4EE (Canvas)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-md bg-[#1F1B16]" />
                  <span className="font-mono text-[11px] text-[var(--text-secondary)]">#1F1B16 (Ink)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-md bg-[#B84A29]" />
                  <span className="font-mono text-[11px] text-[var(--text-secondary)]">#B84A29 (Terracotta)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 05. The FIRM Methodology */}
      <Section background="page">
        <div className="max-w-4xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Operating Methodology
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            The 4-stage identity development cadence
          </h2>

          <div className="space-y-4">
            {service.methodology.map((m) => (
              <div
                key={m.step}
                className="flex items-start gap-4 p-5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]"
              >
                <span className="font-mono text-sm font-semibold text-[var(--accent)] mt-0.5">
                  {m.step}
                </span>
                <div>
                  <h3 className="text-sm font-medium text-[var(--text-primary)]">
                    {m.title}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 06. Detailed Deliverables */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Handover Assets
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            Complete identity specifications
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {service.deliverables.map((deliv) => (
              <div
                key={deliv.category}
                className="p-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xs font-mono text-[var(--accent)] uppercase font-semibold">
                    {deliv.category}
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-xs text-[var(--text-secondary)]">
                    {deliv.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <Check size={13} className="text-[var(--positive)] mt-0.5 shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 07. Cross-Division Connections */}
      <Section background="page">
        <div className="max-w-4xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            System Coherence
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-6">
            How Brand & Identity connects to the other divisions
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.crossConnections.map((conn) => (
              <div
                key={conn.division}
                className="p-5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]"
              >
                <Link
                  href={`/capabilities/${conn.slug}`}
                  className="font-display text-base font-medium text-[var(--text-primary)] hover:text-[var(--accent)] inline-flex items-center gap-1"
                >
                  <span>{conn.division}</span>
                  <ArrowUpRight size={12} />
                </Link>
                <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                  {conn.relationship}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 08. Relevant Case Studies */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Proven Practice
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-6">
            Representative case studies featuring this division
          </h2>

          <div className="p-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] text-[var(--accent)] uppercase font-semibold">
                Education & Schools // Strategic Concept & Architecture Study
              </span>
              <h3 className="mt-1 font-display text-xl font-medium text-[var(--text-primary)]">
                Saint Jude Academy Brand Overhaul
              </h3>
              <p className="mt-1 text-xs text-[var(--text-secondary)] max-w-xl">
                Editorial serif typography, historical mark re-drafting, and living digital tokens for an 80-year-old independent academy.
              </p>
            </div>
            <Link
              href="/work/saint-jude-academy"
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-4 text-xs font-medium text-[var(--text-primary)] hover:border-[var(--border-strong)] shrink-0"
            >
              <span>View study</span>
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      </Section>

      {/* 09. FAQ */}
      <Section background="page">
        <div className="max-w-3xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Frequently Asked
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            Questions regarding our Brand & Identity practice
          </h2>

          <div className="space-y-4">
            {service.faqs.map((faq) => (
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

      {/* 10. Dedicated Project Enquiry CTA */}
      <Section background="subtle">
        <div className="max-w-3xl mx-auto text-center rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-8 sm:p-12 shadow-xs">
          <span className="font-mono text-xs font-semibold text-[var(--accent)]">
            COMMISSION INTAKE // 01 BRAND
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-[var(--text-primary)]">
            Ready to establish an enduring brand standard?
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-lg mx-auto">
            We partner with a limited roster of organizations each quarter. Initiate a briefing to discuss your positioning, scope, and target launch timeframe.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/connect"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <span>Submit brand briefing</span>
              <ArrowUpRight size={13} />
            </Link>
            <Link
              href="/capabilities"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-6 text-xs font-medium text-[var(--text-primary)] hover:border-[var(--border-strong)]"
            >
              Explore all capabilities
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
