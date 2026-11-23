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
    <div className="flex flex-col min-h-screen bg-[#F4F4F0]">
      {/* 01. Case Study Header */}
      <Container>
        <PageHeader
          badge={project.industry}
          eyebrow={`Case Study // ${project.classification}`}
          title={project.title}
          description={project.summary}
        >
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono font-medium text-black">
            <span className="border border-black bg-white px-2.5 py-1 shadow-[2px_2px_0_0_#000]">
              Client: {project.clientType}
            </span>
            <span className="border border-black bg-[#F1F333] px-2.5 py-1 font-bold shadow-[2px_2px_0_0_#000]">
              Timeline: {project.timeframe}
            </span>
          </div>
        </PageHeader>
      </Container>

      {/* 02. Integrity Classification Notice */}
      <Section background="surface">
        <div className="max-w-4xl mx-auto p-5 border border-black bg-white shadow-[4px_4px_0_0_#000] text-left flex items-start gap-3">
          <div className="w-8 h-8 rounded-none border border-black bg-[#F1F333] flex items-center justify-center shrink-0">
            <AlertCircle size={18} className="text-black stroke-[2.5]" />
          </div>
          <div className="text-xs sm:text-sm">
            <span className="font-mono font-bold text-black uppercase tracking-wider block">
              Credibility Standard Notice
            </span>
            <p className="mt-1 text-[#2D2A26] leading-relaxed">
              {project.classificationNotice} We present our architecture, decisions, and deliverables with complete intellectual honesty, never inventing fictitious client testimonials or fabricated revenue figures.
            </p>
          </div>
        </div>
      </Section>

      {/* 03. Interactive Visual Browser Preview */}
      <Section background="page">
        <div className="max-w-5xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#FF90E8] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000] mb-2">
            Visual Demonstration
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            Interface architecture &amp; responsive preview
          </h2>

          <BrowserFrame url={project.heroMockup.urlText}>
            <div className="relative overflow-hidden bg-[#F4F4F0] text-left">
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
      <Section background="surface">
        <div className="max-w-4xl mx-auto text-left grid gap-8 md:grid-cols-2">
          {/* Challenge */}
          <div className="neo-card p-6 sm:p-8 shadow-[4px_4px_0_0_#000]">
            <span className="border border-black bg-[#DC341E] text-white px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase shadow-[2px_2px_0_0_#000]">
              The Context &amp; Challenge
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold text-black">
              Operational friction
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Strategic Approach */}
          <div className="neo-card p-6 sm:p-8 shadow-[4px_4px_0_0_#000]">
            <span className="border border-black bg-[#55D6BE] text-black px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase shadow-[2px_2px_0_0_#000]">
              The Strategic Approach
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold text-black">
              Architectural intervention
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
              {project.strategicApproach}
            </p>
          </div>
        </div>
      </Section>

      {/* 05. Technical & Design Decisions */}
      <Section background="page">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#F1F333] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Engineering Rigor
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            Technical and architectural decisions
          </h2>

          <div className="grid gap-3 sm:grid-cols-2">
            {project.technicalDecisions.map((dec) => (
              <div
                key={dec}
                className="p-4 border border-black bg-white shadow-[3px_3px_0_0_#000] flex items-start gap-3 text-xs sm:text-sm font-medium text-black"
              >
                <div className="w-5 h-5 rounded-none border border-black bg-[#55D6BE] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} className="text-black stroke-[3]" />
                </div>
                <span className="leading-relaxed">{dec}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 06. Execution Details */}
      <Section background="surface">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#FF90E8] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Execution Breakdown
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            Key system components delivered
          </h2>

          <div className="space-y-4">
            {project.executionDetails.map((ex, idx) => {
              const tagColors = ["bg-[#FF90E8]", "bg-[#F1F333]", "bg-[#55D6BE]"];
              return (
                <div
                  key={ex.heading}
                  className="neo-card p-6 sm:p-8 shadow-[4px_4px_0_0_#000]"
                >
                  <span className={`inline-block border border-black ${tagColors[idx % tagColors.length]} px-2.5 py-0.5 font-mono text-[10px] text-black font-bold uppercase mb-2 shadow-[2px_2px_0_0_#000]`}>
                    Component 0{idx + 1}
                  </span>
                  <h3 className="font-display text-xl font-bold text-black">
                    {ex.heading}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                    {ex.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 07. Deliverables Summary */}
      <Section background="page">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#55D6BE] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Assets Handed Over
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            Complete project deliverables
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {project.deliverables.map((deliv) => (
              <div
                key={deliv.title}
                className="p-5 border border-black bg-white shadow-[3px_3px_0_0_#000]"
              >
                <h3 className="text-xs font-mono font-bold text-black uppercase">
                  {deliv.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                  {deliv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 08. Related Case Studies */}
      <Section background="surface">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#F1F333] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Further Retrospectives
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-6">
            Explore other case studies
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {otherProjects.map((op) => (
              <div
                key={op.slug}
                className="neo-card p-6 shadow-[4px_4px_0_0_#000] flex flex-col justify-between"
              >
                <div>
                  <span className="border border-black bg-[#FF90E8] px-2 py-0.5 font-mono text-[10px] text-black font-bold uppercase shadow-[2px_2px_0_0_#000]">
                    {op.industry}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-black">
                    {op.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#2D2A26] line-clamp-2">
                    {op.summary}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-black">
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
      <Section background="page">
        <div className="max-w-3xl mx-auto text-center border border-black bg-[#FF90E8] p-8 sm:p-12 shadow-[8px_8px_0_0_#000]">
          <span className="inline-block border border-black bg-white px-3 py-1 font-mono text-xs font-bold text-black shadow-[2px_2px_0_0_#000]">
            COMMISSION A SIMILAR SCOPE
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-black leading-tight">
            Discuss your organization’s digital transformation
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#2D2A26] font-medium leading-relaxed max-w-lg mx-auto">
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
