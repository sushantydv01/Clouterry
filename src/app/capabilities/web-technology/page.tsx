import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import BrowserFrame from "@/components/ui/BrowserFrame";
import { SERVICES } from "@/data/services";
import { ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Web & Technology — Next.js App Router Engineering | FIRM",
  description:
    "We engineer ultra-fast, accessible, bespoke web platforms using Next.js 16, React 19, and Tailwind CSS. Built for institutions and brands where performance matters.",
};

export default function WebTechnologyPage() {
  const service = SERVICES.find((s) => s.slug === "web-technology") || SERVICES[1];

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
              <span>Initiate engineering sprint</span>
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
            Engineering Proposition
          </span>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Your website is your organization’s most valuable digital asset.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {service.proposition} We build bespoke software on the modern React 19 and Next.js 16 App Router architecture, delivering sub-second load times, 100% Core Web Vitals, and strict WCAG 2.1 AA accessibility.
          </p>
        </div>
      </Section>

      {/* 03. Engineering Showcase: Browser Frame Specimen */}
      <Section background="page">
        <div className="max-w-5xl mx-auto text-left">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-3">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
                Visual Demonstration
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)]">
                Bespoke browser engineering & responsive design
              </h2>
            </div>
            <span className="font-mono text-xs text-[var(--text-muted)]">
              Next.js 16 App Router + Turbopack
            </span>
          </div>

          <BrowserFrame url="firm.agency/architecture">
            <div className="p-6 sm:p-10 bg-[var(--bg-page)] text-left">
              <div className="max-w-2xl">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)] font-semibold">
                  NEXT.JS APP ROUTER // PERFORMANCE REPORT
                </span>
                <h3 className="mt-2 font-display text-2xl sm:text-4xl font-normal text-[var(--text-primary)]">
                  Sub-second rendering across all edge regions.
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  By eliminating client-side hydration bottlenecks and utilizing React 19 Server Components, FIRM web platforms deliver instantaneous page transitions with zero visual layout shift.
                </p>
              </div>

              {/* Metrics Ribbon */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
                  <span className="font-mono text-[10px] text-[var(--text-muted)] block">Largest Contentful Paint</span>
                  <span className="font-mono text-xl sm:text-2xl font-medium text-[var(--positive)] tabular-nums mt-1 block">
                    0.48s
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)]">Google Good (&lt; 2.5s)</span>
                </div>
                <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
                  <span className="font-mono text-[10px] text-[var(--text-muted)] block">Cumulative Layout Shift</span>
                  <span className="font-mono text-xl sm:text-2xl font-medium text-[var(--positive)] tabular-nums mt-1 block">
                    0.00
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)]">Zero visual jump</span>
                </div>
                <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
                  <span className="font-mono text-[10px] text-[var(--text-muted)] block">Accessibility Score</span>
                  <span className="font-mono text-xl sm:text-2xl font-medium text-[var(--positive)] tabular-nums mt-1 block">
                    100%
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)]">WCAG 2.1 AA Verified</span>
                </div>
                <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
                  <span className="font-mono text-[10px] text-[var(--text-muted)] block">Edge Build Time</span>
                  <span className="font-mono text-xl sm:text-2xl font-medium text-[var(--text-primary)] tabular-nums mt-1 block">
                    280ms
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)]">Turbopack Engine</span>
                </div>
              </div>
            </div>
          </BrowserFrame>
        </div>
      </Section>

      {/* 04. Problems Solved */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Engineering Failures Prevented
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            Why legacy software stacks fail modern organizations
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
            Software Methodology
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            The 4-stage engineering sprint
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
            Tangible Code Assets
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            Handover specifications & codebase deliverables
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
            How Web & Technology connects with the other divisions
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

      {/* 08. Relevant Case Study */}
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
                Healthcare & Medical // Strategic Concept & Architecture Study
              </span>
              <h3 className="mt-1 font-display text-xl font-medium text-[var(--text-primary)]">
                Aether Health Clinical Platform
              </h3>
              <p className="mt-1 text-xs text-[var(--text-secondary)] max-w-xl">
                Next.js App Router patient gateway, HIPAA-conscious intake workflows, and sub-second provider directory.
              </p>
            </div>
            <Link
              href="/work/aether-health"
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
            Questions regarding our Web & Technology practice
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

      {/* 10. CTA */}
      <Section background="subtle">
        <div className="max-w-3xl mx-auto text-center rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-8 sm:p-12 shadow-xs">
          <span className="font-mono text-xs font-semibold text-[var(--accent)]">
            COMMISSION INTAKE // 02 WEB
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-[var(--text-primary)]">
            Ready to build an institutional web flagship?
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-lg mx-auto">
            Schedule a technical consultation with our engineering partners to evaluate your current architecture, Core Web Vitals, and migration roadmap.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/connect"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <span>Submit engineering brief</span>
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
