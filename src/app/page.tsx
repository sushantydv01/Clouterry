import React from "react";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import PresenceMatrix from "@/components/interactive/PresenceMatrix";
import SchoolBlueprint from "@/components/interactive/SchoolBlueprint";
import BrowserFrame from "@/components/ui/BrowserFrame";
import { PROJECTS } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── 01. Hero Section: Asymmetric Editorial Lockup ── */}
      <section
        className="relative pt-32 pb-20 sm:pt-40 sm:pb-28"
        aria-label="FIRM Introduction"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              {/* Eyebrow Status Marker */}
              <div className="inline-flex items-center gap-2 rounded-md border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-2.5 py-1 text-xs mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--positive)]" />
                <span className="font-mono text-[11px] text-[var(--text-secondary)]">
                  DIGITAL PRESENCE & GROWTH FIRM // EST. 2026
                </span>
              </div>

              {/* Massive Newsreader Headline */}
              <h1 className="font-display text-4xl font-normal tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.06]">
                We engineer enduring digital presence for ambitious organizations.
              </h1>

              {/* Thesis Statement */}
              <p className="mt-6 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                From brand identity and bespoke web infrastructure to editorial content and systematic visibility. We eliminate digital fragmentation, unifying your complete digital surface under one disciplined standard.
              </p>

              {/* Dual Action CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/connect"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)] shadow-xs"
                >
                  <span>Start a project</span>
                  <ArrowUpRight size={14} />
                </Link>
                <Link
                  href="/capabilities"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-6 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)]"
                >
                  Explore capabilities
                </Link>
              </div>
            </div>

            {/* Right Column: Strategic Metric Ribbon */}
            <div className="lg:col-span-4 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 shadow-xs">
              <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-tight block">
                ATELIER BLUEPRINT // 01
              </span>
              <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">
                Unified Presence Architecture
              </p>
              <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
                Five connected capabilities working as one continuous system to compound long-term brand equity.
              </p>

              <div className="mt-5 space-y-2.5 pt-4 border-t border-[var(--border-hairline)] text-xs text-[var(--text-secondary)]">
                <Link href="/capabilities/brand-identity" className="flex items-center justify-between hover:text-[var(--accent)] transition-colors">
                  <span>Brand & Identity</span>
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">Division 01 →</span>
                </Link>
                <Link href="/capabilities/web-technology" className="flex items-center justify-between hover:text-[var(--accent)] transition-colors">
                  <span>Web & Technology</span>
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">Division 02 →</span>
                </Link>
                <Link href="/capabilities/social-content" className="flex items-center justify-between hover:text-[var(--accent)] transition-colors">
                  <span>Social & Content</span>
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">Division 03 →</span>
                </Link>
                <Link href="/capabilities/marketing-growth" className="flex items-center justify-between hover:text-[var(--accent)] transition-colors">
                  <span>Marketing & Growth</span>
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">Division 04 →</span>
                </Link>
                <Link href="/capabilities/digital-management" className="flex items-center justify-between hover:text-[var(--accent)] transition-colors">
                  <span>Digital Management</span>
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">Division 05 →</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 02. The Firm Thesis: Ruled Narrow Measure ── */}
      <Section background="subtle" withRuledBaseline={true}>
        <div className="mx-auto max-w-3xl text-left">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            The Problem of Fragmentation
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Modern organizations do not lack digital tools. They lack cohesion.
          </h2>

          <div className="mt-6 space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
            <p>
              Most organizations manage digital presence as an accidental collection of disconnected vendors. A graphic designer builds the logo; a development contractor writes the website; a social media agency posts generic clips; a growth specialist runs ads to pages that fail to convert.
            </p>
            <p>
              When an organization’s digital surface is fractured, customer trust leaks at every seam. FIRM was built to provide an integrated alternative: senior design craft, modern software engineering, and disciplined visibility executed under a single, accountable stewardship.
            </p>
          </div>
        </div>
      </Section>

      {/* ── 03. Signature Experience 01: The Interactive Presence Matrix ── */}
      <Section id="matrix" background="page">
        <PresenceMatrix />
      </Section>

      {/* ── 04. Selected Work Exhibition with Browser Previews ── */}
      <Section id="work" background="subtle">
        <div className="max-w-5xl mx-auto text-left">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-3">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
                Selected Work & Studies
              </span>
              <h2 className="mt-1 font-display text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl">
                Demonstrated digital architecture
              </h2>
            </div>
            <Link
              href="/work"
              className="text-xs font-medium text-[var(--accent)] hover:underline inline-flex items-center gap-1 self-start sm:self-auto"
            >
              <span>View complete work archive</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Transparent Credibility Ribbon */}
          <div className="mb-8 p-3.5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span className="font-mono text-[11px] text-[var(--text-secondary)]">
                PORTFOLIO INTEGRITY: All featured studies are classified transparently with zero fabricated metrics.
              </span>
            </div>
            <span className="font-mono text-[10px] text-[var(--text-muted)] hidden sm:block">
              Strategic Concepts & Retrospectives
            </span>
          </div>

          {/* Exhibition Project Cards */}
          <div className="space-y-8">
            {PROJECTS.map((proj) => (
              <div
                key={proj.slug}
                className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-xs"
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  {/* Left: Case Context */}
                  <div className="lg:col-span-5 space-y-4">
                    <div>
                      <span className="font-mono text-[10px] text-[var(--accent)] font-semibold uppercase tracking-wider block">
                        {proj.industry} {"//"} {proj.classification}
                      </span>
                      <h3 className="mt-1.5 font-display text-2xl font-medium text-[var(--text-primary)]">
                        {proj.title}
                      </h3>
                      <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                        {proj.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[var(--border-hairline)] space-y-1.5">
                      <span className="font-mono text-[10px] uppercase text-[var(--text-muted)] block">
                        Scope of Engagement
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.divisions.map((div) => (
                          <span
                            key={div}
                            className="rounded-md bg-[var(--bg-subtle)] border border-[var(--border-hairline)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-secondary)]"
                          >
                            {div}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/work/${proj.slug}`}
                        className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-[var(--accent)] px-4 text-xs font-medium text-white hover:bg-[var(--accent-hover)] transition-colors"
                      >
                        <span>Read case retrospective</span>
                        <ArrowUpRight size={12} />
                      </Link>
                    </div>
                  </div>

                  {/* Right: Realistic Browser Frame Preview */}
                  <div className="lg:col-span-7">
                    <BrowserFrame url={proj.heroMockup.urlText}>
                      <div className="p-6 bg-[var(--bg-page)] text-left">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--accent)] font-medium">
                          {proj.clientType}
                        </span>
                        <h4 className="mt-1 font-display text-xl font-medium text-[var(--text-primary)]">
                          {proj.heroMockup.screenTitle}
                        </h4>
                        <p className="mt-1 text-[11px] text-[var(--text-secondary)] leading-relaxed">
                          {proj.heroMockup.screenSubtitle}
                        </p>

                        <div className="mt-5 grid grid-cols-3 gap-2 pt-4 border-t border-[var(--border-hairline)]">
                          {proj.heroMockup.metrics.map((m) => (
                            <div key={m.label} className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-hairline)]">
                              <span className="font-mono text-[9px] text-[var(--text-muted)] block">{m.label}</span>
                              <span className="font-mono text-xs font-medium text-[var(--text-primary)] mt-0.5 block">{m.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </BrowserFrame>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 05. Signature Experience 02: Institutional Focus (Education & Schools) ── */}
      <Section id="education" background="page">
        <SchoolBlueprint />
      </Section>

      {/* ── 06. Call to Action: Direct Intake ── */}
      <Section background="subtle">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-8 sm:p-12 text-center shadow-xs">
          <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-tight">
            COMMISSION BRIEFING // 2026
          </span>
          <h2 className="mt-3 font-display text-3xl font-normal tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Ready to unify your digital presence?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto">
            We work with a limited roster of organizations each quarter to ensure senior, unhurried execution on every engagement.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/connect"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <span>Submit a project brief</span>
              <ArrowUpRight size={14} />
            </Link>
            <a
              href="mailto:inquiries@firm.agency"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-6 text-sm font-medium text-[var(--text-primary)] hover:border-[var(--border-strong)]"
            >
              inquiries@firm.agency
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
