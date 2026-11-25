import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import BrowserFrame from "@/components/ui/BrowserFrame";
import TheThreadMini from "@/components/thread/TheThreadMini";
import { PROJECTS } from "@/data/projects";
import { ArrowUpRight, Check, ShieldCheck } from "lucide-react";

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
    <div className="flex flex-col min-h-screen bg-[#000000] text-white">
      {/* 01. Case Study Header */}
      <Container>
        <PageHeader
          badge={project.industry}
          eyebrow={`${project.classification} · ${project.industry}`}
          title={project.title}
          description={project.summary}
        >
          <div className="flex flex-wrap items-center gap-3 text-xs text-white/70">
            <span className="px-3 py-1 rounded-full bg-[#18181B] border border-white/15">
              Client: {project.clientType}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white font-medium">
              Timeline: {project.timeframe}
            </span>
          </div>

          <div className="mt-8 max-w-md">
            <TheThreadMini activeDivisions={project.divisions} showLabels={true} size="md" />
          </div>
        </PageHeader>
      </Container>

      {/* 02. Interactive Visual Browser Preview & Classification */}
      <Section background="black" padding="tight">
        <div className="max-w-5xl mx-auto text-left space-y-6">
          {/* Subtle Classification Notice Strip */}
          <div className="p-4 rounded-xl border border-white/10 bg-[#141416] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-0.5 rounded-full bg-[#FF90E8] text-black font-semibold text-[11px]">
                {project.classification}
              </span>
              <p className="text-white/70 font-sans">
                {project.classificationNotice}
              </p>
            </div>
            <span className="text-[11px] text-white/60 shrink-0 flex items-center gap-1.5 font-medium">
              <ShieldCheck size={13} className="text-[#10B981]" />
              <span>Zero Fabricated Metrics</span>
            </span>
          </div>

          <div className="mb-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Interface architecture &amp; responsive preview
            </h2>
          </div>

          <BrowserFrame url={project.heroMockup.urlText}>
            <div className="relative overflow-hidden bg-[#141416] text-left">
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

      {/* 03. Challenge & Strategic Approach */}
      <Section background="black" padding="normal">
        <div className="max-w-4xl mx-auto text-left grid gap-6 md:grid-cols-2">
          {/* Challenge */}
          <div className="gumroad-card p-6 sm:p-8 space-y-3">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[11px] font-semibold">
              The Context &amp; Challenge
            </span>
            <h3 className="font-display text-2xl font-bold text-white">
              Operational friction
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
              {project.challenge}
            </p>
          </div>

          {/* Strategic Approach */}
          <div className="gumroad-card p-6 sm:p-8 space-y-3">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 text-[11px] font-semibold">
              The Strategic Approach
            </span>
            <h3 className="font-display text-2xl font-bold text-white">
              Architectural intervention
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
              {project.strategicApproach}
            </p>
          </div>
        </div>
      </Section>

      {/* 04. Technical & Design Decisions */}
      <Section background="black" padding="normal">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Technical and architectural decisions
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {project.technicalDecisions.map((dec) => (
              <div
                key={dec}
                className="p-4 rounded-xl border border-white/10 bg-[#18181B] flex items-start gap-3 text-xs sm:text-sm text-white/80"
              >
                <div className="w-5 h-5 rounded-full bg-[#10B981] text-black flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <Check size={12} className="stroke-[3]" />
                </div>
                <span className="leading-relaxed">{dec}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 05. Execution Details */}
      <Section background="black" padding="normal">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Key system components delivered
            </h2>
          </div>

          <div className="space-y-4">
            {project.executionDetails.map((ex, idx) => (
              <div
                key={ex.heading}
                className="gumroad-card p-6 sm:p-8 space-y-2"
              >
                <span className="text-xs text-white/40 font-semibold block">
                  Component 0{idx + 1}
                </span>
                <h3 className="font-display text-xl font-bold text-white">
                  {ex.heading}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                  {ex.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 06. Deliverables Summary */}
      <Section background="black" padding="normal">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Complete project deliverables
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {project.deliverables.map((deliv) => (
              <div
                key={deliv.title}
                className="p-5 rounded-xl border border-white/10 bg-[#18181B] space-y-1"
              >
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                  {deliv.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                  {deliv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 07. Related Case Studies */}
      <Section background="black" padding="normal">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Explore other architectural studies
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {otherProjects.map((op) => (
              <div
                key={op.slug}
                className="gumroad-card p-6 flex flex-col justify-between group hover:border-white/30 transition-all"
              >
                <div>
                  <span className="text-xs font-medium text-white/50">
                    {op.industry}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-white group-hover:text-[#FF90E8] transition-colors">
                    {op.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/70 line-clamp-2 leading-relaxed font-sans">
                    {op.summary}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    href={`/work/${op.slug}`}
                    className="text-xs font-semibold text-white hover:underline inline-flex items-center gap-1"
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

      {/* 08. Project Enquiry CTA */}
      <Section background="black" padding="spacious">
        <div className="max-w-3xl mx-auto text-center space-y-6 gumroad-card p-8 sm:p-14 border-white/10">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
            Discuss your organization’s digital transformation
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-lg mx-auto leading-relaxed font-sans">
            We partner with independent academies, healthcare clinics, and professional firms on unified presence architecture.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/connect"
              className="gumroad-btn-pink text-xs sm:text-sm font-bold !py-3 !px-6 w-full sm:w-auto"
            >
              <span>Start a project</span>
              <ArrowUpRight size={14} className="stroke-[2.5]" />
            </Link>
            <Link
              href="/work"
              className="gumroad-btn-secondary text-xs sm:text-sm !py-3 !px-6 w-full sm:w-auto"
            >
              Return to work archive
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
