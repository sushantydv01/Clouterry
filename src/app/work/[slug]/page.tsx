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
    <div className="flex flex-col min-h-screen bg-[#F8F6EF]">
      {/* 01. Case Study Header */}
      <Container>
        <PageHeader
          badge={project.industry}
          eyebrow={`Case Study // ${project.classification}`}
          title={project.title}
          description={project.summary}
        >
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono font-medium text-[#171717]">
            <span className="border border-[#171717] bg-[#FFFFFF] px-2.5 py-1 shadow-[2px_2px_0_0_#171717]">
              Client: {project.clientType}
            </span>
            <span className="border border-[#171717] bg-[#F4CF55] px-2.5 py-1 font-bold shadow-[2px_2px_0_0_#171717]">
              Timeline: {project.timeframe}
            </span>
          </div>
        </PageHeader>
      </Container>

      {/* 02. Integrity Classification Notice */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto p-5 border border-[#171717] bg-[#FFFFFF] shadow-[4px_4px_0_0_#171717] text-left flex items-start gap-3">
          <div className="w-8 h-8 rounded-none border border-[#171717] bg-[#F4CF55] flex items-center justify-center shrink-0">
            <AlertCircle size={18} className="text-[#171717] stroke-[2.5]" />
          </div>
          <div className="text-xs sm:text-sm">
            <span className="font-mono font-bold text-[#171717] uppercase tracking-wider block">
              Credibility Standard Notice
            </span>
            <p className="mt-1 text-[#404040] leading-relaxed">
              {project.classificationNotice} We present our architecture, decisions, and deliverables with complete intellectual honesty, never inventing fictitious client testimonials or fabricated revenue figures.
            </p>
          </div>
        </div>
      </Section>

      {/* 03. Interactive Visual Browser Preview */}
      <Section background="white">
        <div className="max-w-5xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#ED83A8] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717] mb-2">
            Visual Demonstration
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] mb-8">
            Interface architecture &amp; responsive preview
          </h2>

          <BrowserFrame url={project.heroMockup.urlText}>
            <div className="relative overflow-hidden bg-[#F8F6EF] text-left">
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
      <Section background="cream">
        <div className="max-w-4xl mx-auto text-left grid gap-8 md:grid-cols-2">
          {/* Challenge */}
          <div className="neo-card p-6 sm:p-8 shadow-[4px_4px_0_0_#171717]">
            <span className="border border-[#171717] bg-[#171717] text-[#FFFFFF] px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase shadow-[2px_2px_0_0_#171717]">
              The Context &amp; Challenge
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold text-[#171717]">
              Operational friction
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#404040] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Strategic Approach */}
          <div className="neo-card p-6 sm:p-8 shadow-[4px_4px_0_0_#171717]">
            <span className="border border-[#171717] bg-[#A6D8A1] text-[#171717] px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase shadow-[2px_2px_0_0_#171717]">
              The Strategic Approach
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold text-[#171717]">
              Architectural intervention
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#404040] leading-relaxed">
              {project.strategicApproach}
            </p>
          </div>
        </div>
      </Section>

      {/* 05. Technical & Design Decisions */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#F4CF55] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            Engineering Rigor
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] mb-8">
            Technical and architectural decisions
          </h2>

          <div className="grid gap-3 sm:grid-cols-2">
            {project.technicalDecisions.map((dec) => (
              <div
                key={dec}
                className="p-4 border border-[#171717] bg-[#FFFFFF] shadow-[3px_3px_0_0_#171717] flex items-start gap-3 text-xs sm:text-sm font-medium text-[#171717]"
              >
                <div className="w-5 h-5 rounded-none border border-[#171717] bg-[#A6D8A1] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} className="text-[#171717] stroke-[3]" />
                </div>
                <span className="leading-relaxed">{dec}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 06. Execution Details */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#ED83A8] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            Execution Breakdown
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] mb-8">
            Key system components delivered
          </h2>

          <div className="space-y-4">
            {project.executionDetails.map((ex, idx) => {
              const tagColors = ["bg-[#ED83A8]", "bg-[#F4CF55]", "bg-[#A6D8A1]"];
              return (
                <div
                  key={ex.heading}
                  className="neo-card p-6 sm:p-8 shadow-[4px_4px_0_0_#171717]"
                >
                  <span className={`inline-block border border-[#171717] ${tagColors[idx % tagColors.length]} px-2.5 py-0.5 font-mono text-[10px] text-[#171717] font-bold uppercase mb-2 shadow-[2px_2px_0_0_#171717]`}>
                    Component 0{idx + 1}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#171717]">
                    {ex.heading}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#404040] leading-relaxed">
                    {ex.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 07. Deliverables Summary */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#A6D8A1] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            Assets Handed Over
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] mb-8">
            Complete project deliverables
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {project.deliverables.map((deliv) => (
              <div
                key={deliv.title}
                className="p-5 border border-[#171717] bg-[#FFFFFF] shadow-[3px_3px_0_0_#171717]"
              >
                <h3 className="text-xs font-mono font-bold text-[#171717] uppercase">
                  {deliv.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#404040] leading-relaxed">
                  {deliv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 08. Related Case Studies */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#F4CF55] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            Further Retrospectives
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] mb-6">
            Explore other case studies
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {otherProjects.map((op) => (
              <div
                key={op.slug}
                className="neo-card p-6 shadow-[4px_4px_0_0_#171717] flex flex-col justify-between"
              >
                <div>
                  <span className="border border-[#171717] bg-[#ED83A8] px-2 py-0.5 font-mono text-[10px] text-[#171717] font-bold uppercase shadow-[2px_2px_0_0_#171717]">
                    {op.industry}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-[#171717]">
                    {op.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#404040] line-clamp-2">
                    {op.summary}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#171717]">
                  <Link
                    href={`/work/${op.slug}`}
                    className="neo-btn text-xs px-4 py-2"
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
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center border border-[#171717] bg-[#ED83A8] p-8 sm:p-12 shadow-[8px_8px_0_0_#171717]">
          <span className="inline-block border border-[#171717] bg-[#FFFFFF] px-3 py-1 font-mono text-xs font-bold text-[#171717] shadow-[2px_2px_0_0_#171717]">
            COMMISSION A SIMILAR SCOPE
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-[#171717] leading-tight">
            Discuss your organization’s digital transformation
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#171717] font-medium leading-relaxed max-w-lg mx-auto">
            We partner with independent academies, healthcare clinics, and professional firms on unified presence architecture.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/connect"
              className="neo-btn text-xs px-6 py-3 w-full sm:w-auto"
            >
              <span>Initiate a project brief</span>
              <ArrowUpRight size={13} />
            </Link>
            <Link
              href="/work"
              className="neo-btn-white text-xs px-6 py-3 w-full sm:w-auto"
            >
              Return to work archive
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
