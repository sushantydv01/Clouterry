"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import BrowserFrame from "@/components/ui/BrowserFrame";
import TheThreadMini from "@/components/thread/TheThreadMini";
import { PROJECTS } from "@/data/projects";
import { ArrowUpRight, Filter, ShieldCheck } from "lucide-react";

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
    <div className="flex flex-col min-h-screen bg-[#000000] text-white">
      <Container>
        <PageHeader
          badge="OUR WORK"
          eyebrow="Portfolio &amp; Retrospectives"
          title="Architectural case studies."
          description="We present our work with transparent categorization. Every study showcases our strategic approach, technical stack decisions, and tangible deliverables."
        />
      </Container>

      {/* Sector Filter & Classification Note */}
      <Section background="black" padding="tight">
        <div className="max-w-5xl mx-auto space-y-6 text-left">
          {/* Honest Concept Study Notice */}
          <div className="p-4 rounded-xl border border-white/10 bg-[#141416] flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-full bg-[#FF90E8] text-black font-semibold text-[11px]">
                Concept Studies
              </span>
              <p className="text-white/70 leading-relaxed font-sans">
                Featured studies showcase our architectural methodology, full-stack decisions, and domain frameworks with complete intellectual honesty.
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-white/10 text-white/80 text-[11px] font-medium shrink-0 flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-[#10B981]" />
              <span>Zero Fabricated Metrics</span>
            </span>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-semibold text-white/50 mr-2 flex items-center gap-1.5">
              <Filter size={13} />
              <span>Sector:</span>
            </span>
            {CATEGORIES.map((cat) => {
              const isActive = cat === selectedCategory;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer ${
                    isActive
                      ? "bg-white text-black font-semibold shadow-sm"
                      : "bg-[#18181B] text-white/70 hover:text-white border border-white/10 hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Project Exhibition Gallery */}
      <Section background="black" padding="normal">
        <div className="max-w-5xl mx-auto space-y-12 text-left">
          {filteredProjects.map((proj) => {
            return (
              <article
                key={proj.slug}
                className="gumroad-card p-6 sm:p-10 lg:p-12 border-white/10 space-y-8"
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  {/* Left: Case Narrative */}
                  <div className="lg:col-span-5 space-y-5 min-w-0">
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-xs font-medium text-white/50">
                        <span>{proj.industry}</span>
                        <span>&bull;</span>
                        <span>{proj.classification}</span>
                      </div>

                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {proj.title}
                      </h2>
                      <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                        {proj.summary}
                      </p>
                    </div>

                    {/* Active Connected Capabilities Rail */}
                    <div className="pt-4 border-t border-white/10 space-y-2">
                      <span className="text-xs text-white/50 block">
                        Disciplines in this study:
                      </span>
                      <TheThreadMini activeDivisions={proj.divisions} showLabels={false} size="sm" />
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/work/${proj.slug}`}
                        className="gumroad-btn-pink text-xs sm:text-sm font-bold !py-2.5 !px-5"
                      >
                        <span>Read case study</span>
                        <ArrowUpRight size={14} className="stroke-[2.5]" />
                      </Link>
                    </div>
                  </div>

                  {/* Right: High-Craft Browser Frame Mockup */}
                  <div className="lg:col-span-7">
                    <BrowserFrame url={proj.heroMockup.urlText}>
                      <div className="relative overflow-hidden bg-[#141416] text-left">
                        <Image
                          src={proj.image}
                          alt={proj.title}
                          width={1200}
                          height={675}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </BrowserFrame>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
