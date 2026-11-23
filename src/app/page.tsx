import React from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import PresenceMatrix from "@/components/interactive/PresenceMatrix";
import SchoolBlueprint from "@/components/interactive/SchoolBlueprint";
import BrowserFrame from "@/components/ui/BrowserFrame";
import { PROJECTS } from "@/data/projects";
import { ARTICLES } from "@/data/articles";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";

export default function Home() {
  const latestArticles = ARTICLES.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── 01. Hero Section: Asymmetric Atelier Lockup with Cinematic Scene ── */}
      <section
        className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-[var(--border-hairline)]"
        aria-label="FIRM Introduction"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Thesis & Actions */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 rounded-md border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-2.5 py-1 text-xs mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--positive)]" />
                <span className="font-mono text-[11px] text-[var(--text-secondary)]">
                  DIGITAL PRESENCE &amp; GROWTH FIRM // EST. 2026
                </span>
              </div>

              <h1 className="font-display text-4xl font-normal tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl leading-[1.06]">
                We engineer enduring digital presence for ambitious organizations.
              </h1>

              <p className="mt-6 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl">
                Unifying brand identity, bespoke Next.js platforms, documentary editorial content, and systematic visibility under one disciplined architectural standard.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/connect"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)] shadow-xs"
                >
                  <span>Start a project briefing</span>
                  <ArrowUpRight size={14} />
                </Link>
                <Link
                  href="/capabilities"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-6 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)]"
                >
                  Explore capabilities
                </Link>
              </div>

              {/* Monospace Architectural Tagline */}
              <div className="mt-10 pt-6 border-t border-[var(--border-hairline)] flex flex-wrap items-center gap-2 sm:gap-6 text-[10px] sm:text-[11px] font-mono text-[var(--text-muted)]">
                <span>01 BRAND</span>
                <span>•</span>
                <span>02 WEB</span>
                <span>•</span>
                <span>03 CONTENT</span>
                <span>•</span>
                <span>04 GROWTH</span>
                <span>•</span>
                <span>05 STEWARDSHIP</span>
              </div>
            </div>

            {/* Right Column: Sunlit Atelier Photography Visual */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-2 shadow-sm group">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/images/editorial/atelier-hero.webp"
                    alt="FIRM Architectural Drafting Atelier — Blueprints, unbleached paper, brass rules, and drafting ink"
                    width={1792}
                    height={1024}
                    priority
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-3 text-left flex items-center justify-between font-mono text-[10px] text-[var(--text-muted)]">
                  <span>ATELIER BLUEPRINT // 40.7128° N, 74.0060° W</span>
                  <span className="text-[var(--accent)] font-semibold">STUDIO SPEC 01</span>
                </div>
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

          <div className="mt-6 space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
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
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-3">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
                Selected Work &amp; Retrospectives
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
              Strategic Concepts &amp; Retrospectives
            </span>
          </div>

          {/* Exhibition Project Cards */}
          <div className="space-y-10">
            {PROJECTS.map((proj) => (
              <div
                key={proj.slug}
                className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-4 sm:p-8 shadow-xs"
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  {/* Left: Case Context */}
                  <div className="lg:col-span-5 space-y-4">
                    <div>
                      <span className="font-mono text-[10px] text-[var(--accent)] font-semibold uppercase tracking-wider block break-words">
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
                      <div className="relative overflow-hidden bg-[var(--bg-page)] text-left">
                        <Image
                          src={proj.image}
                          alt={proj.title}
                          width={1200}
                          height={675}
                          className="w-full h-auto object-cover"
                        />
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

      {/* ── 06. Featured Publications & Insights ── */}
      <Section background="subtle">
        <div className="max-w-5xl mx-auto text-left">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-3">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-semibold flex items-center gap-1.5">
                <BookOpen size={13} />
                <span>FIELD MONOGRAPHS &amp; PERSPECTIVES</span>
              </span>
              <h2 className="mt-1 font-display text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl">
                Perspectives on presence &amp; craft
              </h2>
            </div>
            <Link
              href="/insights"
              className="text-xs font-medium text-[var(--accent)] hover:underline inline-flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Explore all publications</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {latestArticles.map((art) => (
              <article
                key={art.slug}
                className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-5 flex flex-col justify-between transition-colors hover:border-[var(--border-strong)] group"
              >
                <div>
                  <div className="overflow-hidden rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-page)] mb-3">
                    <Link href={`/insights/${art.slug}`}>
                      <Image
                        src={art.heroImage}
                        alt={art.title}
                        width={1200}
                        height={675}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </Link>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[9px] text-[var(--text-muted)] mb-1.5">
                    <span className="text-[var(--accent)] font-semibold uppercase">{art.category}</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-0.5">
                      <Clock size={9} />
                      <span>{art.readingTime}</span>
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                    <Link href={`/insights/${art.slug}`}>
                      {art.title}
                    </Link>
                  </h3>

                  <p className="mt-2 text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--border-hairline)] flex items-center justify-between text-xs">
                  <span className="font-mono text-[10px] text-[var(--text-muted)]">{art.date}</span>
                  <Link
                    href={`/insights/${art.slug}`}
                    className="font-medium text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read</span>
                    <ArrowUpRight size={11} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 07. Call to Action: Direct Intake ── */}
      <Section background="page">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-8 sm:p-12 text-center shadow-xs">
          <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-tight">
            COMMISSION BRIEFING // 2026
          </span>
          <h2 className="mt-3 font-display text-3xl font-normal tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Ready to unify your digital presence?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto">
            We partner with ambitious brands, independent academies, healthcare clinics, and professional firms seeking an enduring digital presence.
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
