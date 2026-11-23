import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import BrowserFrame from "@/components/ui/BrowserFrame";
import { PROJECTS } from "@/data/projects";
import { ArrowUpRight, Check, AlertCircle } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Case Study & Retrospective | FIRM`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const otherProjects = PROJECTS.filter((p) => p.slug !== slug);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 01. Case Study Header */}
      <Container>
        <PageHeader
          badge={project.industry}
          eyebrow={`Case Study // ${project.classification}`}
          title={project.title}
          description={project.summary}
        >
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-secondary)]">
            <span>Client: {project.clientType}</span>
            <span>•</span>
            <span>Timeline: {project.timeframe}</span>
          </div>
        </PageHeader>
      </Container>

      {/* 02. Integrity Classification Notice */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-left flex items-start gap-3">
          <AlertCircle size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-mono font-semibold text-[var(--accent)] uppercase tracking-wider block">
              Credibility Standard Notice
            </span>
            <p className="mt-1 text-[var(--text-secondary)] leading-relaxed">
              {project.classificationNotice} We present our architecture, decisions, and deliverables with complete intellectual honesty, never inventing fictitious client testimonials or fabricated revenue figures.
            </p>
          </div>
        </div>
      </Section>

      {/* 03. Interactive Visual Browser Preview */}
      <Section background="page">
        <div className="max-w-5xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium block mb-2">
            Visual Demonstration
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            Interface architecture & responsive preview
          </h2>

          <BrowserFrame url={project.heroMockup.urlText}>
            <div className="relative overflow-hidden bg-[var(--bg-page)] text-left">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={675}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          </BrowserFrame>
        </div>
      </Section>

      {/* 04. Challenge & Strategic Approach */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto text-left grid gap-10 md:grid-cols-2">
          {/* Challenge */}
          <div className="p-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
            <span className="font-mono text-xs font-semibold text-[var(--accent)] uppercase">
              The Context & Challenge
            </span>
            <h3 className="mt-2 font-display text-2xl font-medium text-[var(--text-primary)]">
              Operational friction
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Strategic Approach */}
          <div className="p-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
            <span className="font-mono text-xs font-semibold text-[var(--positive)] uppercase">
              The Strategic Approach
            </span>
            <h3 className="mt-2 font-display text-2xl font-medium text-[var(--text-primary)]">
              Architectural intervention
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {project.strategicApproach}
            </p>
          </div>
        </div>
      </Section>

      {/* 05. Technical & Design Decisions */}
      <Section background="page">
        <div className="max-w-4xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Engineering Rigor
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            Technical and architectural decisions
          </h2>

          <div className="grid gap-3 sm:grid-cols-2">
            {project.technicalDecisions.map((dec) => (
              <div
                key={dec}
                className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] flex items-start gap-3 text-xs text-[var(--text-primary)]"
              >
                <Check size={14} className="text-[var(--positive)] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{dec}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 06. Execution Details */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Execution Breakdown
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            Key system components delivered
          </h2>

          <div className="space-y-4">
            {project.executionDetails.map((ex) => (
              <div
                key={ex.heading}
                className="p-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]"
              >
                <h3 className="font-display text-lg font-medium text-[var(--text-primary)]">
                  {ex.heading}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {ex.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 07. Deliverables Summary */}
      <Section background="page">
        <div className="max-w-4xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Assets Handed Over
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-8">
            Complete project deliverables
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {project.deliverables.map((deliv) => (
              <div
                key={deliv.title}
                className="p-5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]"
              >
                <h3 className="text-xs font-mono font-semibold text-[var(--accent)] uppercase">
                  {deliv.title}
                </h3>
                <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
                  {deliv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 08. Related Case Studies */}
      <Section background="subtle">
        <div className="max-w-4xl mx-auto text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            Further Retrospectives
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text-primary)] mb-6">
            Explore other case studies
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {otherProjects.map((op) => (
              <div
                key={op.slug}
                className="p-5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] text-[var(--accent)] uppercase font-semibold">
                    {op.industry}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-medium text-[var(--text-primary)]">
                    {op.title}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--text-secondary)] line-clamp-2">
                    {op.summary}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--border-hairline)]">
                  <Link
                    href={`/work/${op.slug}`}
                    className="text-xs font-medium text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read study</span>
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 09. Project Enquiry CTA */}
      <Section background="page">
        <div className="max-w-3xl mx-auto text-center rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-8 sm:p-12 shadow-xs">
          <span className="font-mono text-xs font-semibold text-[var(--accent)]">
            COMMISSION A SIMILAR SCOPE
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-[var(--text-primary)]">
            Discuss your organization’s digital transformation
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-lg mx-auto">
            We partner with independent academies, healthcare clinics, and professional firms on unified presence architecture.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/connect"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <span>Initiate a project brief</span>
              <ArrowUpRight size={13} />
            </Link>
            <Link
              href="/work"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-6 text-xs font-medium text-[var(--text-primary)] hover:border-[var(--border-strong)]"
            >
              Return to work archive
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
