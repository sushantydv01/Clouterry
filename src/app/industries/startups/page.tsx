import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { INDUSTRIES } from "@/data/industries";
import { ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Startups & Ventures — Rapid Launch-Cadence Platforms | FIRM",
  description:
    "Investor-grade brand identity, high-conversion landing pages, and rapid-launch Next.js web platforms for high-growth ventures.",
};

export default function StartupsIndustryPage() {
  const sector = INDUSTRIES.find((i) => i.slug === "startups") || INDUSTRIES[4];

  return (
    <div className="flex flex-col min-h-screen">
      <Container>
        <PageHeader
          badge={sector.eyebrow}
          eyebrow="Venture-Backed & Emerging Companies"
          title={sector.title}
          description={sector.description}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/connect"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <span>Inquire about 4-week sprint</span>
              <ArrowUpRight size={13} />
            </Link>
            <Link
              href="/capabilities/brand-identity"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-6 text-xs font-medium text-[var(--text-primary)] hover:border-[var(--border-strong)]"
            >
              Explore Brand Identity
            </Link>
          </div>
        </PageHeader>
      </Container>

      {/* Challenges & Solutions */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Venture Challenges
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            Looking like a market leader before your next capital round
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {sector.challenges.map((c) => (
              <div
                key={c.title}
                className="p-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]"
              >
                <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                  {c.title}
                </h3>
                <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Deliverables */}
      <Section background="page">
        <div className="max-w-4xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            FIRM Venture Framework
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            Deliverables for high-growth startups
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

      {/* CTA */}
      <Section background="subtle">
        <div className="max-w-3xl mx-auto text-center rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-8 sm:p-12 shadow-xs">
          <span className="font-mono text-xs font-semibold text-[var(--accent)]">
            VENTURE INTAKE
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-[var(--text-primary)]">
            Ship your brand and web platform in 4 weeks
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-lg mx-auto">
            Our startup sprint gives founders an enterprise-grade digital flagship without the bloated 4-month agency overhead.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/connect"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <span>Initiate venture sprint</span>
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
