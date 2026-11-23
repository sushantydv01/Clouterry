import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { SERVICES } from "@/data/services";
import { ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing & Growth — Search Visibility & Conversion Architecture | FIRM",
  description:
    "We connect high-intent demand to your digital flagship through technical SEO, disciplined search advertising, and conversion rate architecture.",
};

export default function MarketingGrowthPage() {
  const service = SERVICES.find((s) => s.slug === "marketing-growth") || SERVICES[3];

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
              <span>Request growth diagnostic</span>
              <ArrowUpRight size={13} />
            </Link>
            <span className="font-mono text-xs text-[var(--text-muted)]">
              Cadence: {service.timeframe}
            </span>
          </div>
        </PageHeader>
      </Container>

      {/* 02. Core Proposition */}
      <Section background="subtle" withRuledBaseline={true}>
        <div className="max-w-3xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Growth Proposition
          </span>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Visibility without conversion is an expensive vanity.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {service.proposition} We build search architectures that connect qualified, high-intent prospective families, clients, and partners directly to streamlined conversion pathways on your website.
          </p>
        </div>
      </Section>

      {/* 03. Strategic Inbound Funnel Specimen */}
      <Section background="page">
        <div className="max-w-4xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Architectural Workflow
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            The high-intent search conversion pipeline
          </h2>

          <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-xs">
            <div className="space-y-4">
              {/* Funnel Stage 1 */}
              <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[var(--bg-raised)] flex items-center justify-center text-[var(--accent)] font-mono text-xs font-semibold">
                    01
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[var(--text-primary)] block">High-Intent Demand Discovery</span>
                    <span className="text-[11px] text-[var(--text-muted)]">Targeting specific terms (e.g. &apos;independent boarding school admissions&apos;)</span>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-[var(--accent)] font-medium">Search Intent Layer</span>
              </div>

              {/* Funnel Stage 2 */}
              <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[var(--bg-raised)] flex items-center justify-center text-[var(--accent)] font-mono text-xs font-semibold">
                    02
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[var(--text-primary)] block">Sub-Second Landing Experience</span>
                    <span className="text-[11px] text-[var(--text-muted)]">Dedicated Next.js page answering specific search questions immediately</span>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-[var(--positive)] font-medium">100% Core Web Vitals</span>
              </div>

              {/* Funnel Stage 3 */}
              <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[var(--bg-raised)] flex items-center justify-center text-[var(--accent)] font-mono text-xs font-semibold">
                    03
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[var(--text-primary)] block">Friction-Free 3-Step Intake</span>
                    <span className="text-[11px] text-[var(--text-muted)]">Mobile tour booking or brief submission with zero clutter</span>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-[var(--text-primary)] font-medium">Conversion Gateway</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 04. Problems Solved */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Inbound Failures Prevented
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            Why traditional digital marketing wastes budget
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

      {/* 05. Methodology */}
      <Section background="page">
        <div className="max-w-4xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Strategic Methodology
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            The 4-stage search acquisition cadence
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

      {/* 06. Deliverables */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Handover Deliverables
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            Growth & visibility specifications
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

      {/* 07. Cross Connections */}
      <Section background="page">
        <div className="max-w-4xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            System Coherence
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-6">
            How Marketing & Growth connects with other divisions
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

      {/* 08. FAQ */}
      <Section background="subtle">
        <div className="max-w-3xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Frequently Asked
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            Questions regarding our Marketing & Growth practice
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

      {/* 09. CTA */}
      <Section background="page">
        <div className="max-w-3xl mx-auto text-center rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-8 sm:p-12 shadow-xs">
          <span className="font-mono text-xs font-semibold text-[var(--accent)]">
            GROWTH INTAKE // 04 INBOUND
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-[var(--text-primary)]">
            Ready to establish search authority?
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-lg mx-auto">
            Request a comprehensive search visibility audit to discover where your competitors are capturing prospective inquiries.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/connect"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <span>Request visibility diagnostic</span>
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
