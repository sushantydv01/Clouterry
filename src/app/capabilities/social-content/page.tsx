import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { SERVICES } from "@/data/services";
import { ArrowUpRight, Check, Play } from "lucide-react";

export const metadata: Metadata = {
  title: "Social Media & Content — Editorial Video & Narrative Strategy | FIRM",
  description:
    "We produce disciplined editorial video, photography art direction, and high-retention content that protects brand stature.",
};

export default function SocialContentPage() {
  const service = SERVICES.find((s) => s.slug === "social-content") || SERVICES[2];

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
              <span>Explore content retainers</span>
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
            Editorial Proposition
          </span>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Social media for serious organizations is the continuous demonstration of institutional craft.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {service.proposition} We replace desperate algorithmic trend chasing with disciplined editorial storytelling: documentary photography, thoughtful short-form video, and narrative arcs that respect your audience’s intelligence.
          </p>
        </div>
      </Section>

      {/* 03. Visual Demonstration: Editorial Content Framework */}
      <Section background="page">
        <div className="max-w-5xl mx-auto text-left">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-3">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
                Visual Demonstration
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)]">
                The 9:16 vertical video & editorial rhythm
              </h2>
            </div>
            <span className="font-mono text-xs text-[var(--text-muted)]">
              4K ProRes Mastered // Clean Ambient Stems
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Specimen Card 1 */}
            <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-5 flex flex-col justify-between">
              <div>
                <div className="relative aspect-[9/14] w-full rounded-xl bg-gradient-to-br from-[#EFE9DF] to-[#DDD5C7] p-4 flex flex-col justify-between overflow-hidden border border-[var(--border-hairline)] mb-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-md bg-black/40 px-2 py-0.5 font-mono text-[10px] text-white backdrop-blur-xs">
                      DOCUMENTARY // 0:45
                    </span>
                    <Play size={14} className="text-white opacity-80" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-black/70 block uppercase">Audio Stem</span>
                    <p className="font-mono text-xs font-semibold text-black/90">
                      Classroom Dialogue & Acoustic Resonance
                    </p>
                  </div>
                </div>
                <h3 className="font-display text-base font-medium text-[var(--text-primary)]">
                  The Faculty Focus Narrative
                </h3>
                <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
                  Unscripted 45-second micro-essays highlighting master educators explaining complex concepts.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[var(--border-hairline)] text-[11px] font-mono text-[var(--text-muted)]">
                Focus: Academic Rigor
              </div>
            </div>

            {/* Specimen Card 2 */}
            <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-5 flex flex-col justify-between">
              <div>
                <div className="relative aspect-[9/14] w-full rounded-xl bg-gradient-to-br from-[#EAE4D9] to-[#C9BFAC] p-4 flex flex-col justify-between overflow-hidden border border-[var(--border-hairline)] mb-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-md bg-black/40 px-2 py-0.5 font-mono text-[10px] text-white backdrop-blur-xs">
                      ARCHITECTURAL // 0:30
                    </span>
                    <Play size={14} className="text-white opacity-80" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-black/70 block uppercase">Lighting</span>
                    <p className="font-mono text-xs font-semibold text-black/90">
                      Natural North Light & Historic Stone
                    </p>
                  </div>
                </div>
                <h3 className="font-display text-base font-medium text-[var(--text-primary)]">
                  Campus Space & Atmosphere
                </h3>
                <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
                  Slow-pacing architectural vignettes showing library mornings, laboratory setups, and athletic training.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[var(--border-hairline)] text-[11px] font-mono text-[var(--text-muted)]">
                Focus: Environmental Prestige
              </div>
            </div>

            {/* Specimen Card 3 */}
            <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-5 flex flex-col justify-between">
              <div>
                <div className="relative aspect-[9/14] w-full rounded-xl bg-gradient-to-br from-[#DFD6C7] to-[#B8A690] p-4 flex flex-col justify-between overflow-hidden border border-[var(--border-hairline)] mb-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-md bg-black/40 px-2 py-0.5 font-mono text-[10px] text-white backdrop-blur-xs">
                      STUDENT CRAFT // 0:60
                    </span>
                    <Play size={14} className="text-white opacity-80" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-black/70 block uppercase">Pacing</span>
                    <p className="font-mono text-xs font-semibold text-black/90">
                      Step-by-Step Senior Project Build
                    </p>
                  </div>
                </div>
                <h3 className="font-display text-base font-medium text-[var(--text-primary)]">
                  Student Excellence In Motion
                </h3>
                <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
                  Behind-the-scenes documentary coverage of student robotics, theatrical rehearsals, and research symposiums.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[var(--border-hairline)] text-[11px] font-mono text-[var(--text-muted)]">
                Focus: Authentic Achievement
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 04. Problems Solved */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Reputation Failures Prevented
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            Why commoditized social media hurts established brands
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
            Production Methodology
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            The 4-stage content governance cycle
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
            Handover Media Assets
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            Monthly editorial deliverables
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
            How Social Media & Content connects with other divisions
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
            Questions regarding our Social Media & Content practice
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
            RETAINER INTAKE // 03 CONTENT
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-[var(--text-primary)]">
            Ready to elevate your organization’s social content?
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-lg mx-auto">
            Discuss a quarterly capture cadence and narrative calendar tailored to your school admissions cycle or brand product drops.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/connect"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <span>Inquire about content programs</span>
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
