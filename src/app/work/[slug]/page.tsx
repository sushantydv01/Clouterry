import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import TheThreadMini from "@/components/thread/TheThreadMini";
import StudyShowcaseArt from "@/components/illustrations/StudyShowcaseArt";
import ProjectAnatomyInspector from "@/components/work/ProjectAnatomyInspector";
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
      {/* 01. Portfolio Masthead + Bespoke Paper-Cut Exhibition Plate */}
      <Container size="wide">
        <PageHeader
          kicker={`${project.industry} · ${project.classification} · ${project.timeframe}`}
          title={project.title}
          description={project.summary}
          aside={
            <div className="space-y-4">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#F8F6EF]/14 bg-[#121214]">
                <StudyShowcaseArt
                  slug={project.slug}
                  priority
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 44vw"
                />
              </div>
              <TheThreadMini activeDivisions={project.divisions} showLabels={true} size="sm" />
            </div>
          }
        >
          <div className="flex flex-wrap items-center gap-3 text-xs font-sans text-[#D5D2C7]">
            <span className="px-3.5 py-1.5 rounded-full bg-[#1D1D20] border border-[#F8F6EF]/14">
              {project.clientType}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[#A6D8A1]">
              <ShieldCheck size={14} />
              <span>{project.classification} · Zero Fabricated Metrics</span>
            </span>
          </div>
        </PageHeader>
      </Container>

      {/* Transparency Framing Banner */}
      <div className="border-t border-[#F8F6EF]/10 bg-[#121214] py-4">
        <Container size="wide">
          <p className="text-xs sm:text-sm text-[#D5D2C7] font-sans">
            <strong className="text-[#F4CF55] font-sans font-semibold mr-2">
              {project.classification}:
            </strong>
            {project.classificationNotice}
          </p>
        </Container>
      </div>

      {/* 02. Warm Cream Paper: Challenge vs Architectural Intervention */}
      <Section background="warm-paper" containerSize="wide" padding="spacious">
        <div className="grid gap-12 lg:grid-cols-12 items-start text-left">
          <div className="lg:col-span-6 space-y-3">
            <span className="font-mono text-xs text-[#3F3D38] block">
              01 · Context &amp; Friction
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#171717] tracking-tight">
              Operational challenge
            </h2>
            <p className="text-base sm:text-lg text-[#3F3D38] leading-relaxed font-sans">
              {project.challenge}
            </p>
          </div>

          <div className="lg:col-span-6 space-y-3 lg:border-l lg:border-[#171717]/15 lg:pl-12">
            <span className="font-mono text-xs text-[#3F3D38] block">
              02 · Strategic Response
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#171717] tracking-tight">
              Architectural intervention
            </h2>
            <p className="text-base sm:text-lg text-[#3F3D38] leading-relaxed font-sans">
              {project.strategicApproach}
            </p>
          </div>
        </div>
      </Section>

      {/* 03. System Execution Layers, Interactive Anatomy Inspector & Deliverables */}
      <Section background="charcoal" containerSize="wide" padding="spacious">
        <div className="space-y-16 text-left">
          <div className="grid gap-14 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-[#F8F6EF]">
                Key system layers executed
              </h2>

              <div className="divide-y divide-[#F8F6EF]/12 border-y border-[#F8F6EF]/12">
                {project.executionDetails.map((ex, idx) => (
                  <div key={ex.heading} className="py-6 grid gap-3 sm:grid-cols-12 items-start">
                    <span className="sm:col-span-3 font-mono text-xs text-[#ED83A8] tabular-nums pt-1">
                      Layer 0{idx + 1}
                    </span>
                    <div className="sm:col-span-9 space-y-1.5">
                      <h3 className="font-display text-xl font-medium text-[#F8F6EF]">
                        {ex.heading}
                      </h3>
                      <p className="text-base text-[#D5D2C7] leading-relaxed font-sans">
                        {ex.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-medium tracking-tight text-[#F8F6EF]">
                  Technical decisions
                </h2>
                <ul className="space-y-3 text-sm text-[#D5D2C7]">
                  {project.technicalDecisions.map((dec) => (
                    <li key={dec} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="mt-1 h-4 w-4 rounded-full bg-[#A6D8A1] text-[#171717] inline-flex items-center justify-center shrink-0">
                        <Check size={11} className="stroke-[2.5]" />
                      </span>
                      <span>{dec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#F8F6EF]/12 space-y-4">
                <h2 className="font-display text-2xl font-medium tracking-tight text-[#F8F6EF]">
                  Architectural deliverables
                </h2>
                <div className="divide-y divide-[#F8F6EF]/12 border-y border-[#F8F6EF]/12">
                  {project.deliverables.map((deliv) => (
                    <div key={deliv.title} className="py-4 space-y-1.5">
                      <h3 className="font-display text-base font-medium text-[#F4CF55]">
                        {deliv.title}
                      </h3>
                      <p className="text-sm text-[#D5D2C7] font-sans leading-relaxed">
                        {deliv.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive 8-Layer Project Anatomy Inspector */}
          <ProjectAnatomyInspector project={project} />
        </div>
      </Section>

      {/* 04. Related Studies & Closing Action */}
      <Section background="charcoal-subtle" containerSize="wide" padding="normal">
        <div className="space-y-12 text-left">
          <div className="space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#F8F6EF]">
              Other concept studies
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {otherProjects.map((op) => (
                <Link
                  key={op.slug}
                  href={`/work/${op.slug}`}
                  className="group p-6 sm:p-7 rounded-2xl bg-[#1D1D20] border border-[#F8F6EF]/12 hover:border-[#F8F6EF]/30 transition-colors grid gap-5 sm:grid-cols-12 items-center"
                >
                  <div className="sm:col-span-5 relative aspect-[16/10] rounded-xl overflow-hidden bg-[#121214]">
                    <StudyShowcaseArt
                      slug={op.slug}
                      loading="eager"
                      sizes="(max-width: 1024px) 100vw, 22vw"
                    />
                  </div>
                  <div className="sm:col-span-7 space-y-2">
                    <span className="font-sans text-xs font-medium text-[#ED83A8] block">
                      {op.industry}
                    </span>
                    <h3 className="font-display text-xl font-medium text-[#F8F6EF] group-hover:text-[#F4CF55] transition-colors">
                      {op.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#D5D2C7] line-clamp-2 leading-relaxed">
                      {op.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-10 border-t border-[#F8F6EF]/12 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#F8F6EF]">
                Discuss your organization&apos;s architecture
              </h2>
              <p className="text-base text-[#D5D2C7]">
                We partner with schools, medical clinics, and advisory firms seeking long-term digital craft.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3.5 shrink-0">
              <Link href="/connect" className="firm-btn-primary text-sm">
                <span>Start a project</span>
                <ArrowUpRight size={15} className="stroke-[2]" />
              </Link>
              <Link href="/work" className="firm-btn-secondary text-sm">
                <span>All concept studies</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
