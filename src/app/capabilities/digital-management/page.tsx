import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { SERVICES } from "@/data/services";
import { ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Management & Consulting — Platform Stewardship | FIRM",
  description:
    "Fractional digital leadership, continuous platform maintenance, and technical governance for organizations where uptime and reputation matter.",
};

export default function DigitalManagementPage() {
  const service = SERVICES.find((s) => s.slug === "digital-management") || SERVICES[4];

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
              <span>Explore stewardship retainers</span>
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
            Stewardship Proposition
          </span>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Launching a digital platform is not the finish line. It is day one.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {service.proposition} Unattended software platforms decay in performance, accumulate security vulnerabilities, and fall behind evolving browser and accessibility standards. We provide the disciplined fractional governance required to protect your digital flagship.
          </p>
        </div>
      </Section>

      {/* 03. Visual Demonstration: Live Stewardship Board Specimen */}
      <Section background="page">
        <div className="max-w-4xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Operational Dashboard
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            Continuous platform monitoring & SLA oversight
          </h2>

          <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-[var(--border-hairline)] gap-2">
              <span className="font-mono text-xs font-semibold text-[var(--text-primary)]">
                STEWARDSHIP STATUS // INSTITUTIONAL FLEET
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[var(--positive)]">
                <span className="h-2 w-2 rounded-full bg-[var(--positive)]" />
                <span>All Managed Systems Operational</span>
              </span>
            </div>

            <div className="pt-6 grid gap-4 sm:grid-cols-3">
              <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]">
                <span className="font-mono text-[10px] text-[var(--text-muted)] block">Edge Uptime (Last 90 Days)</span>
                <span className="font-mono text-2xl font-medium text-[var(--positive)] tabular-nums mt-1 block">
                  99.98%
                </span>
                <span className="text-[10px] text-[var(--text-muted)]">Global CDN Monitored</span>
              </div>
              <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]">
                <span className="font-mono text-[10px] text-[var(--text-muted)] block">Security Patch Cadence</span>
                <span className="font-mono text-2xl font-medium text-[var(--text-primary)] tabular-nums mt-1 block">
                  Monthly
                </span>
                <span className="text-[10px] text-[var(--text-muted)]">Next.js & Node.js Dependencies</span>
              </div>
              <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]">
                <span className="font-mono text-[10px] text-[var(--text-muted)] block">Support SLA Response</span>
                <span className="font-mono text-2xl font-medium text-[var(--accent)] tabular-nums mt-1 block">
                  &lt; 24h
                </span>
                <span className="text-[10px] text-[var(--text-muted)]">Direct Senior Partner Access</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 04. Problems Solved */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Operational Failures Prevented
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            The hidden risks of unattended digital platforms
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
            Stewardship Methodology
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            The continuous governance cycle
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
            Contractual SLA Assets
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            Annual stewardship deliverables
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
            How Digital Management connects with other divisions
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
            Questions regarding our Digital Management practice
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
            STEWARDSHIP INTAKE // 05 GOVERNANCE
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-[var(--text-primary)]">
            Protect your organization’s digital investment
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-lg mx-auto">
            Discuss an ongoing fractional stewardship retainer with our partners to ensure continuous security, speed, and content governance.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/connect"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <span>Inquire about stewardship retainers</span>
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
