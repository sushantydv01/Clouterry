import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SchoolBlueprint from "@/components/interactive/SchoolBlueprint";
import { INDUSTRIES } from "@/data/industries";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Education & Schools — Institutional Digital Presence Practice | FIRM",
  description:
    "Dedicated digital presence architecture for independent preparatory academies, K-12 schools, and educational institutions. Balancing admissions conversion with institutional dignity.",
};

export default function EducationPracticePage() {
  const education = INDUSTRIES.find((i) => i.slug === "education") || INDUSTRIES[0];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 01. Editorial Hero */}
      <Container>
        <PageHeader
          badge="SPECIALIZED PRACTICE"
          eyebrow="Education & Schools"
          title="Digital presence engineered for schools & educational academies."
          description={education.description}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/connect"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <span>Schedule an institutional briefing</span>
              <ArrowUpRight size={13} />
            </Link>
            <Link
              href="/work/saint-jude-academy"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-6 text-xs font-medium text-[var(--text-primary)] hover:border-[var(--border-strong)]"
            >
              Explore Saint Jude Academy Study
            </Link>
          </div>
        </PageHeader>
      </Container>

      {/* 02. Institutional Dilemma & Thesis */}
      <Section background="subtle" withRuledBaseline={true}>
        <div className="max-w-3xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            The Institutional Dilemma
          </span>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Why traditional school websites fail both prospective families and current parents.
          </h2>
          <div className="mt-4 space-y-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            <p>
              Schools have a unique digital tension: they must inspire prospective parents to inquire and apply, while simultaneously serving current families with daily schedules, athletic rainouts, and cafeteria menus.
            </p>
            <p>
              When both audiences share an unorganized homepage, prospective parents bounce due to visual clutter, and current families get frustrated trying to find simple daily calendars. FIRM’s architecture decouples the admissions gateway from community utilities.
            </p>
          </div>
        </div>
      </Section>

      {/* 03. Signature Interactive Tool: The School Digital Blueprint */}
      <Section background="page">
        <div className="max-w-5xl mx-auto mb-10 overflow-hidden rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] shadow-xs">
          <Image
            src="/images/education/school-blueprint-specimen.webp"
            alt="The 4-Layer Institutional Architecture for Independent Schools"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
          />
        </div>
        <SchoolBlueprint />
      </Section>

      {/* 04. Six Dedicated Pillars for Schools */}
      <Section background="subtle">
        <div className="max-w-5xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Complete Practice Scope
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            Six pillars of school digital presence
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Pillar A */}
            <div className="p-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
              <span className="font-mono text-[10px] text-[var(--accent)] font-semibold uppercase">Pillar A</span>
              <h3 className="mt-1 font-display text-lg font-medium text-[var(--text-primary)]">
                Institutional Brand Identity
              </h3>
              <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                Preserving school heritage, redrafting crests, refining school colorways, and setting typographic hierarchies that reflect academic stature.
              </p>
            </div>

            {/* Pillar B */}
            <div className="p-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
              <span className="font-mono text-[10px] text-[var(--accent)] font-semibold uppercase">Pillar B</span>
              <h3 className="mt-1 font-display text-lg font-medium text-[var(--text-primary)]">
                Admissions Conversion Funnel
              </h3>
              <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                Streamlined 3-step open house RSVP forms, digital interactive viewbooks, and automated sync with Slate, Blackbaud, or HubSpot CRMs.
              </p>
            </div>

            {/* Pillar C */}
            <div className="p-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
              <span className="font-mono text-[10px] text-[var(--accent)] font-semibold uppercase">Pillar C</span>
              <h3 className="mt-1 font-display text-lg font-medium text-[var(--text-primary)]">
                Parent & Community Portals
              </h3>
              <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                Dedicated top utility ribbon for current parents: iCal synced calendars, lunch menus, athletic game schedules, and single-sign-on gateway links.
              </p>
            </div>

            {/* Pillar D */}
            <div className="p-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
              <span className="font-mono text-[10px] text-[var(--accent)] font-semibold uppercase">Pillar D</span>
              <h3 className="mt-1 font-display text-lg font-medium text-[var(--text-primary)]">
                Campus Photography & Video
              </h3>
              <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                Documentary art direction capturing authentic classroom rigor, fine arts, laboratory research, and athletic discipline without staged smiles.
              </p>
            </div>

            {/* Pillar E */}
            <div className="p-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
              <span className="font-mono text-[10px] text-[var(--accent)] font-semibold uppercase">Pillar E</span>
              <h3 className="mt-1 font-display text-lg font-medium text-[var(--text-primary)]">
                WCAG 2.1 AA Accessibility
              </h3>
              <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                Rigorous screen-reader testing, keyboard focus rings, and high-contrast compliance to safeguard civil rights accessibility and protect funding.
              </p>
            </div>

            {/* Pillar F */}
            <div className="p-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
              <span className="font-mono text-[10px] text-[var(--accent)] font-semibold uppercase">Pillar F</span>
              <h3 className="mt-1 font-display text-lg font-medium text-[var(--text-primary)]">
                Annual Giving & Alumni Stature
              </h3>
              <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                Endowment and capital campaign landing pages that communicate generational legacy and inspire philanthropic alumni commitment.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 05. Frequently Addressed School Questions */}
      <Section background="page">
        <div className="max-w-3xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Institutional Clarity
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            Frequently asked questions by school heads & trustees
          </h2>

          <div className="space-y-4">
            {education.faqs.map((faq) => (
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

      {/* 06. Institutional Intake CTA */}
      <Section background="subtle">
        <div className="max-w-3xl mx-auto text-center rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-8 sm:p-12 shadow-xs">
          <span className="font-mono text-xs font-semibold text-[var(--accent)]">
            INSTITUTIONAL BRIEFING // EDUCATION
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-[var(--text-primary)]">
            Discuss an admissions & digital presence overhaul
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-lg mx-auto">
            We work with a select number of independent academies and educational institutions each academic year. Schedule an introductory consultation with our senior practice partners.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/connect"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <span>Request institutional briefing</span>
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
