"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import TheThreadMini from "@/components/thread/TheThreadMini";
import StudyShowcaseArt from "@/components/illustrations/StudyShowcaseArt";
import { PROJECTS } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

const CATEGORIES = [
  "All Practices",
  "Education & Schools",
  "Healthcare & Medical",
  "Professional Services",
];

/**
 * Art-directed Portfolio Index View:
 * Restrains display weight to medium (500) and cleanly pairs concept blueprints with honest classification.
 */
export default function WorkFilterView() {
  const [selectedCategory, setSelectedCategory] = useState("All Practices");

  const filteredProjects =
    selectedCategory === "All Practices"
      ? PROJECTS
      : PROJECTS.filter((p) => p.industry === selectedCategory);

  const showLeadSplit = selectedCategory === "All Practices" && filteredProjects.length >= 3;
  const leadProject = filteredProjects[0];
  const supportingProjects = showLeadSplit ? filteredProjects.slice(1) : filteredProjects;

  return (
    <div className="flex flex-col min-h-screen bg-[#171717] text-[#F8F6EF]">
      <Container size="wide">
        <PageHeader
          kicker="Architectural Concept Studies"
          title="Selected practice blueprints."
          description="Transparent demonstration studies across education, specialty healthcare, and commercial law illustrating architectural deliverables without fabricated performance metrics."
          aside={
            <div className="p-5 sm:p-6 rounded-2xl bg-[#1D1D20] border border-[#F8F6EF]/12 text-sm text-[#D5D2C7] leading-relaxed">
              <strong className="font-sans text-xs font-semibold text-[#F4CF55] block mb-1.5">
                Transparency Note
              </strong>
              Every work study carries explicit <span className="text-[#F8F6EF] font-medium">Concept Study</span> classification detailing authentic Next.js architecture, tokens, and editorial scope with zero invented outcomes.
            </div>
          }
        >
          {/* Filter Pills Integrated Cleanly Beneath Header */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            {CATEGORIES.map((cat) => {
              const isActive = cat === selectedCategory;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-sm font-display font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap border ${
                    isActive
                      ? "bg-[#F8F6EF] text-[#171717] border-[#F8F6EF]"
                      : "bg-[#1D1D20] text-[#D5D2C7] border-[#F8F6EF]/14 hover:text-[#F8F6EF] hover:border-[#F8F6EF]/35"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </PageHeader>
      </Container>

      {/* Lead Study Warm Cream Exhibition Spread */}
      {showLeadSplit && leadProject && (
        <Section background="warm-paper" containerSize="wide" padding="spacious">
          <article className="grid gap-10 lg:gap-14 lg:grid-cols-12 items-center group text-left">
            <div className="lg:col-span-7">
              <Link
                href={`/work/${leadProject.slug}`}
                className="block relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#171717]/15 bg-[#171717] shadow-[0_24px_48px_rgba(23,23,23,0.12)]"
              >
                <StudyShowcaseArt
                  slug={leadProject.slug}
                  priority
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </Link>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-sans text-[#3F3D38]">
                <span className="px-2.5 py-1 rounded-full bg-[#F4CF55] text-[#171717] font-semibold">
                  Lead Study · {leadProject.classification}
                </span>
                <span>{leadProject.industry}</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-[-0.025em] text-[#171717] leading-[1.06]">
                {leadProject.title}
              </h2>

              <p className="text-base sm:text-lg text-[#3F3D38] leading-relaxed font-sans">
                {leadProject.summary}
              </p>

              <div className="border-t border-[#171717]/14 pt-4 grid grid-cols-2 gap-4 text-xs text-[#3F3D38]">
                <div>
                  <span className="font-sans font-medium block text-[#171717]/65">
                    Sprint cadence
                  </span>
                  <span className="font-display font-medium text-sm text-[#171717]">
                    {leadProject.timeframe}
                  </span>
                </div>
                <div>
                  <span className="font-sans font-medium block text-[#171717]/65">
                    Deliverables
                  </span>
                  <span className="font-display font-medium text-sm text-[#171717]">
                    {leadProject.deliverables.length} Architectural Modules
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link href={`/work/${leadProject.slug}`} className="firm-btn-dark text-sm">
                  <span>Read concept study</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </article>
        </Section>
      )}

      {/* Supporting Studies */}
      <Section background="charcoal" containerSize="wide" padding="spacious">
        <div className="w-full space-y-16 text-left">
          {supportingProjects.map((proj, idx) => {
            const flipLayout = idx % 2 === 1;

            return (
              <article
                key={proj.slug}
                className={`grid gap-10 lg:gap-14 lg:grid-cols-12 items-center group ${
                  idx > 0 ? "pt-16 border-t border-[#F8F6EF]/12" : ""
                }`}
              >
                <div className={`lg:col-span-5 space-y-5 ${flipLayout ? "lg:order-2" : ""}`}>
                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-sans">
                    <span style={{ color: proj.accentColor }}>{proj.industry}</span>
                    <span className="text-[#ACA89E]">·</span>
                    <span className="text-[#ACA89E]">{proj.classification}</span>
                  </div>

                  <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#F8F6EF] tracking-tight">
                    <Link
                      href={`/work/${proj.slug}`}
                      className="group-hover:text-[#ED83A8] transition-colors"
                    >
                      {proj.title}
                    </Link>
                  </h2>

                  <p className="text-base text-[#D5D2C7] leading-relaxed font-sans">
                    {proj.summary}
                  </p>

                  <div className="pt-4 border-t border-[#F8F6EF]/12 space-y-2.5">
                    <span className="text-xs font-sans text-[#ACA89E] block">
                      Disciplines engaged
                    </span>
                    <TheThreadMini activeDivisions={proj.divisions} showLabels={true} size="sm" />
                  </div>

                  <div className="pt-3">
                    <Link href={`/work/${proj.slug}`} className="firm-btn-primary text-sm">
                      <span>Read concept study</span>
                      <ArrowUpRight size={15} className="stroke-[2]" />
                    </Link>
                  </div>
                </div>

                <div className={`lg:col-span-7 ${flipLayout ? "lg:order-1" : ""}`}>
                  <Link
                    href={`/work/${proj.slug}`}
                    className="block relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#F8F6EF]/14 bg-[#121214]"
                  >
                    <StudyShowcaseArt
                      slug={proj.slug}
                      loading="eager"
                      sizes="(max-width: 1024px) 100vw, 56vw"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
