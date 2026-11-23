import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Firm — Philosophy, Approach & Leadership | FIRM",
  description:
    "Learn about FIRM's founding philosophy, operational methodology, and why we believe digital presence requires architectural coherence.",
};

export default function FirmPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Container>
        <PageHeader
          badge="THE FIRM"
          eyebrow="Identity & Purpose"
          title="Built to eliminate digital fragmentation."
          description="We are a digital presence consultancy. We partner with ambitious brands, schools, and organizations to engineer digital systems that compound in value."
        />
      </Container>

      {/* Philosophy Section */}
      <Section id="philosophy" background="subtle">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Core Tenets
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[var(--text-primary)]">
            Our Operating Philosophy
          </h2>

          <div className="mt-8 space-y-6 text-sm text-[var(--text-secondary)] leading-relaxed">
            <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6">
              <h3 className="text-base font-medium text-[var(--text-primary)]">
                01 // Architectural Coherence
              </h3>
              <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                Brand identity, software engineering, and content creation are not separate problems. They are three facets of one single asset: an organization’s digital presence.
              </p>
            </div>

            <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6">
              <h3 className="text-base font-medium text-[var(--text-primary)]">
                02 // Enduring Craft Over Ephemeral Trends
              </h3>
              <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                We reject purple neo-glows, spinning 3D gimmicks, and aggressive marketing hype. We craft typography, spacing, and code that remains distinguished ten years from now.
              </p>
            </div>

            <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6">
              <h3 className="text-base font-medium text-[var(--text-primary)]">
                03 // Intellectual Honesty
              </h3>
              <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                We never recommend capabilities a client does not need, invent vanity numbers, or hide behind junior account managers. Senior partners lead every engagement.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Approach Section */}
      <Section id="approach" background="page">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Methodology
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[var(--text-primary)]">
            A 4-Stage Architectural Cadence
          </h2>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 p-5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
              <span className="font-mono text-sm font-semibold text-[var(--accent)]">01</span>
              <div>
                <p className="text-sm font-medium text-[var(--text-primary)]">Diagnostic & Architecture (Days 1–7)</p>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">Complete surface audit, stakeholder alignment, information architecture.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
              <span className="font-mono text-sm font-semibold text-[var(--accent)]">02</span>
              <div>
                <p className="text-sm font-medium text-[var(--text-primary)]">Brand & Technical Blueprint (Days 8–18)</p>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">Typographic design system, interactive wireframes, and component tokens.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
              <span className="font-mono text-sm font-semibold text-[var(--accent)]">03</span>
              <div>
                <p className="text-sm font-medium text-[var(--text-primary)]">Engineering & Production (Days 19–40)</p>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">Next.js App Router development, editorial content production, performance audits.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
              <span className="font-mono text-sm font-semibold text-[var(--accent)]">04</span>
              <div>
                <p className="text-sm font-medium text-[var(--text-primary)]">Deployment & Stewardship (Day 45+)</p>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">Staged rollout, DNS configuration, and long-term digital management.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/connect"
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-[var(--accent)] px-5 text-xs font-medium text-white hover:bg-[var(--accent-hover)]"
            >
              <span>Initiate a project briefing</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
