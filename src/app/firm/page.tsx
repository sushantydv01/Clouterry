import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { ArrowUpRight, ShieldCheck, Clock, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "The Firm — Philosophy, Methodology & Leadership | FIRM",
  description:
    "Learn about FIRM's founding philosophy, architectural methodology, and why we believe digital presence requires integrated stewardship.",
};

export default function FirmPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Container>
        <PageHeader
          badge="THE FIRM"
          eyebrow="Identity &amp; Purpose"
          title="Built to eliminate digital fragmentation."
          description="We are a digital presence consultancy. We partner with ambitious brands, independent academies, and professional firms to engineer digital systems that compound in institutional value."
        />
      </Container>

      {/* Hero Visual: Studio Atelier */}
      <section className="pb-16 max-w-5xl mx-auto px-6 sm:px-8 w-full">
        <div className="overflow-hidden rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-2 shadow-xs">
          <Image
            src="/images/editorial/atelier-hero.webp"
            alt="FIRM Studio Atelier — Physical craftsmanship meets digital systems engineering"
            width={1792}
            height={1024}
            priority
            className="w-full h-auto rounded-xl object-cover"
          />
          <div className="p-3 text-left flex items-center justify-between font-mono text-[10px] text-[var(--text-muted)]">
            <span>THE FIRM // ATELIER CADENCE</span>
            <span>NEW YORK STUDIO &amp; GLOBAL DELIVERY</span>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <Section id="philosophy" background="subtle">
        <div className="mx-auto max-w-4xl text-left">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Core Tenets
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[var(--text-primary)]">
            Our Operating Philosophy
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            We reject the disposable agency model of monthly hype retainers and generic templates. Every decision we make is governed by three enduring commitments:
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 sm:p-8">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)] font-semibold mb-2">
                <Compass size={14} />
                <span>TENET 01 // ARCHITECTURAL COHERENCE</span>
              </div>
              <h3 className="text-xl font-display font-medium text-[var(--text-primary)]">
                Brand, software, and content are not separate problems
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                They are three facets of one single asset: an organization’s digital presence. When a graphic designer builds a logo without understanding Next.js Server Components, or when a marketing contractor runs ads to a sluggish landing page, trust leaks. We engineer every touchpoint under one disciplined architectural blueprint.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 sm:p-8">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)] font-semibold mb-2">
                <Clock size={14} />
                <span>TENET 02 // ENDURING CRAFT OVER EPHEMERAL TRENDS</span>
              </div>
              <h3 className="text-xl font-display font-medium text-[var(--text-primary)]">
                Timeless typography and speed over passing aesthetic gimmicks
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                We reject purple neo-glows, spinning 3D cubes, and aggressive marketing popups. We craft typography, spacing, and semantic code that remains distinguished ten years from now. A website should feel like a well-constructed civic building, not a disposable trade show booth.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 sm:p-8">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)] font-semibold mb-2">
                <ShieldCheck size={14} />
                <span>TENET 03 // RADICAL INTELLECTUAL HONESTY</span>
              </div>
              <h3 className="text-xl font-display font-medium text-[var(--text-primary)]">
                Transparent classifications, zero vanity metrics, and senior leadership
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                We never recommend capabilities an organization does not need, fabricate client testimonials, or hide behind junior account handlers. Senior partners lead every diagnostic, architectural specification, and engineering sprint from inception to live deployment.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Approach Section */}
      <Section id="approach" background="page">
        <div className="mx-auto max-w-4xl text-left">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Execution Cadence
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[var(--text-primary)]">
            A 4-Stage Architectural Cadence
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            We work on fixed, transparent weekly sprints rather than open-ended, billable hours:
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 p-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
              <span className="font-mono text-base font-semibold text-[var(--accent)] mt-0.5">01</span>
              <div>
                <p className="text-base font-medium text-[var(--text-primary)]">Diagnostic &amp; Surface Audit (Days 1–7)</p>
                <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
                  Forensic audit of your current digital footprint: Core Web Vitals profiling, typography audit, information architecture mapping, and stakeholder interviews.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
              <span className="font-mono text-base font-semibold text-[var(--accent)] mt-0.5">02</span>
              <div>
                <p className="text-base font-medium text-[var(--text-primary)]">Brand &amp; Technical Blueprint (Days 8–18)</p>
                <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
                  Establishing the living design tokens, responsive layout wireframes, content hierarchies, and Next.js 16 App Router architectural schemas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
              <span className="font-mono text-base font-semibold text-[var(--accent)] mt-0.5">03</span>
              <div>
                <p className="text-base font-medium text-[var(--text-primary)]">Engineering &amp; Production (Days 19–40)</p>
                <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
                  Full Next.js Server Component development, documentary editorial content production, accessibility screening (WCAG 2.1 AA), and zero-defect QA.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
              <span className="font-mono text-base font-semibold text-[var(--accent)] mt-0.5">04</span>
              <div>
                <p className="text-base font-medium text-[var(--text-primary)]">Deployment &amp; Ongoing Stewardship (Day 45+)</p>
                <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
                  Staged DNS cutover, global edge CDN caching, search console indexing, and transition to our continuous fractional SLA stewardship.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/connect"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-xs font-medium text-white hover:bg-[var(--accent-hover)] transition-colors shadow-xs"
            >
              <span>Initiate an executive briefing</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
