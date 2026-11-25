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

export default function WorkFilterView() {
  const [selectedCategory, setSelectedCategory] = useState("All Practices");

  const filteredProjects =
    selectedCategory === "All Practices"
      ? PROJECTS
      : PROJECTS.filter((p) => p.industry === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen bg-[#171717] text-[#F8F6EF]">
      <Container>
        <PageHeader
          badge="Our Work"
          eyebrow="Architectural Concept Studies"
          title="Selected practice blueprints."
          description="Transparent architectural studies across education, clinical care, and legal advisory detailing strategic decisions and deliverables with zero fabricated outcomes."
        />
      </Container>

      <Section background="charcoal" padding="tight">
        <div className="max-w-6xl mx-auto space-y-6 text-left">
          <div className="py-3 px-4 rounded-xl border border-[#F8F6EF]/12 bg-[#1E1E20] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <p className="text-[#C4C1B8] leading-relaxed">
              <strong className="text-[#F4CF55] font-mono uppercase tracking-wider mr-2">
                Transparency Notice:
              </strong>
              Featured work presents detailed concept studies illustrating FIRM&apos;s design system, Next.js code, and structural strategy without invented vanity numbers.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            {CATEGORIES.map((cat) => {
              const isActive = cat === selectedCategory;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs sm:text-sm font-display font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap border ${
                    isActive
                      ? "bg-[#F8F6EF] text-[#171717] border-[#F8F6EF] font-semibold"
                      : "bg-[#1E1E20] text-[#C4C1B8] border-[#F8F6EF]/12 hover:text-[#F8F6EF] hover:border-[#F8F6EF]/25"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </Section>

      <Section background="charcoal" padding="normal" withBorder={false}>
        <div className="max-w-6xl mx-auto space-y-8 text-left">
          {filteredProjects.map((proj) => (
            <article
              key={proj.slug}
              className="p-6 sm:p-10 rounded-2xl bg-[#1E1E20] border border-[#F8F6EF]/12 hover:border-[#F8F6EF]/24 transition-colors"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-5 space-y-5 min-w-0">
                  <div>
                    <span
                      className="text-xs font-mono uppercase tracking-[0.12em] block mb-2"
                      style={{ color: proj.accentColor }}
                    >
                      {proj.industry} · {proj.classification}
                    </span>

                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F8F6EF] tracking-tight">
                      {proj.title}
                    </h2>
                    <p className="mt-2 text-sm text-[#C4C1B8] leading-relaxed font-sans">
                      {proj.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F8F6EF]/10 space-y-2">
                    <span className="text-xs font-mono text-[#9C9990] block">
                      Disciplines engaged
                    </span>
                    <TheThreadMini activeDivisions={proj.divisions} showLabels={false} size="sm" />
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/work/${proj.slug}`}
                      className="firm-btn-primary text-xs sm:text-sm !py-2.5 !px-5"
                    >
                      <span>Read concept study</span>
                      <ArrowUpRight size={14} className="stroke-[2.25]" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#F8F6EF]/12 bg-[#171717]">
                    <StudyShowcaseArt slug={proj.slug} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
