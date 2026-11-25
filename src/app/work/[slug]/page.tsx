import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import TheThreadMini from "@/components/thread/TheThreadMini";
import StudyShowcaseArt from "@/components/illustrations/StudyShowcaseArt";
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
    title: `${project.title} | Architectural Concept Study | FIRM`,
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
    <div className="flex flex-col min-h-screen bg-[#171717] text-[#F8F6EF]">
      <Container>
        <PageHeader
          badge={project.industry}
          eyebrow={`${project.classification} · ${project.timeframe}`}
          title={project.title}
          description={project.summary}
        >
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#C4C1B8]">
            <span className="px-3.5 py-1.5 rounded-full bg-[#1E1E20] border border-[#F8F6EF]/14">
              Sector: {project.clientType}
            </span>
          </div>

          <div className="mt-8 max-w-md">
            <TheThreadMini activeDivisions={project.divisions} showLabels={true} size="md" />
          </div>
        </PageHeader>
      </Container>

      {/* Architectural Visual Study Plate (Zero fake UI metrics) */}
      <Section background="charcoal" padding="tight">
        <div className="max-w-5xl mx-auto text-left space-y-6">
          <div className="p-4 rounded-xl border border-[#F8F6EF]/12 bg-[#1E1E20] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="font-mono uppercase tracking-wider text-[#F4CF55] font-semibold">
                {project.classification}
              </span>
              <p className="text-[#C4C1B8] font-sans">
                {project.classificationNotice}
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#A6D8A1] shrink-0 flex items-center gap-1.5">
              <ShieldCheck size={14} />
              <span>Zero Fabricated Metrics</span>
            </span>
          </div>

          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#F8F6EF]/14 bg-[#1E1E20]">
            <StudyShowcaseArt slug={project.slug} />
          </div>
        </div>
      </Section>

      {/* Challenge & Strategic Intervention */}
      <Section background="charcoal-subtle" padding="normal">
        <div className="max-w-5xl mx-auto text-left grid gap-6 md:grid-cols-2">
          <div className="p-7 sm:p-8 rounded-2xl bg-[#1E1E20] border border-[#F8F6EF]/12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#9C9990] block">
              Context &amp; Friction
            </span>
            <h2 className="font-display text-2xl font-bold text-[#F8F6EF]">
              Operational challenge
            </h2>
            <p className="text-sm text-[#C4C1B8] leading-relaxed font-sans">
              {project.challenge}
            </p>
          </div>

          <div className="p-7 sm:p-8 rounded-2xl bg-[#1E1E20] border border-[#F8F6EF]/12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#A6D8A1] block">
              Strategic Response
            </span>
            <h2 className="font-display text-2xl font-bold text-[#F8F6EF]">
              Architectural intervention
            </h2>
            <p className="text-sm text-[#C4C1B8] leading-relaxed font-sans">
              {project.strategicApproach}
            </p>
          </div>
        </div>
      </Section>

      {/* Technical Decisions */}
      <Section background="charcoal" padding="normal">
        <div className="max-w-5xl mx-auto text-left space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F8F6EF]">
            Technical and architectural decisions
          </h2>

          <div className="grid gap-3.5 sm:grid-cols-2">
            {project.technicalDecisions.map((dec) => (
              <div
                key={dec}
                className="p-4 rounded-xl border border-[#F8F6EF]/12 bg-[#1E1E20] flex items-start gap-3 text-sm text-[#C4C1B8]"
              >
                <Check size={15} className="text-[#A6D8A1] shrink-0 mt-1 stroke-[2.5]" />
                <span className="leading-relaxed">{dec}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Key Components Delivered */}
      <Section background="charcoal-subtle" padding="normal">
        <div className="max-w-5xl mx-auto text-left space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F8F6EF]">
            Key system components executed
          </h2>

          <div className="divide-y divide-[#F8F6EF]/12 border-y border-[#F8F6EF]/12">
            {project.executionDetails.map((ex, idx) => (
              <div key={ex.heading} className="py-6 grid gap-3 sm:grid-cols-12 items-start">
                <span className="sm:col-span-2 text-xs font-mono text-[#ED83A8]">
                  Layer 0{idx + 1}
                </span>
                <div className="sm:col-span-10 space-y-1.5">
                  <h3 className="font-display text-xl font-bold text-[#F8F6EF]">
                    {ex.heading}
                  </h3>
                  <p className="text-sm text-[#C4C1B8] leading-relaxed font-sans">
                    {ex.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Deliverables & Related */}
      <Section background="charcoal" padding="normal">
        <div className="max-w-5xl mx-auto text-left space-y-12">
          <div className="space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F8F6EF]">
              Complete project deliverables
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.deliverables.map((deliv) => (
                <div
                  key={deliv.title}
                  className="p-5 rounded-xl border border-[#F8F6EF]/12 bg-[#1E1E20] space-y-1.5"
                >
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#F4CF55]">
                    {deliv.title}
                  </h3>
                  <p className="text-sm text-[#C4C1B8] leading-relaxed font-sans">
                    {deliv.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 pt-6 border-t border-[#F8F6EF]/12">
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#F8F6EF]">
              Other architectural studies
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              {otherProjects.map((op) => (
                <div
                  key={op.slug}
                  className="p-6 rounded-2xl bg-[#1E1E20] border border-[#F8F6EF]/12 hover:border-[#F8F6EF]/26 transition-colors flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-xs font-mono text-[#ED83A8]">
                      {op.industry}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-bold text-[#F8F6EF] group-hover:text-[#ED83A8] transition-colors">
                      {op.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#C4C1B8] line-clamp-2 leading-relaxed font-sans">
                      {op.summary}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-[#F8F6EF]/10">
                    <Link
                      href={`/work/${op.slug}`}
                      className="text-sm font-display font-semibold text-[#F8F6EF] hover:text-[#ED83A8] inline-flex items-center gap-1"
                    >
                      <span>Read study</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section background="charcoal-subtle" padding="spacious">
        <div className="max-w-3xl mx-auto text-center space-y-6 p-8 sm:p-12 rounded-2xl bg-[#1E1E20] border border-[#F8F6EF]/14">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#F8F6EF] leading-tight">
            Discuss your organization&apos;s digital architecture
          </h2>
          <p className="text-sm sm:text-base text-[#C4C1B8] max-w-lg mx-auto leading-relaxed font-sans">
            We partner with independent schools, clinics, and advisory firms seeking long-term digital craft.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link href="/connect" className="firm-btn-primary text-sm w-full sm:w-auto">
              <span>Start a project</span>
              <ArrowUpRight size={15} className="stroke-[2.25]" />
            </Link>
            <Link href="/work" className="firm-btn-secondary text-sm w-full sm:w-auto">
              <span>Return to archive</span>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
