"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import BrowserFrame from "@/components/ui/BrowserFrame";
import { PROJECTS } from "@/data/projects";
import { ArrowUpRight, Filter, ShieldCheck } from "lucide-react";

const CATEGORIES = [
  "All Practices",
  "Education & Schools",
  "Healthcare & Medical",
  "Professional Services",
];

export default function WorkArchivePage() {
  const [selectedCategory, setSelectedCategory] = useState("All Practices");

  const filteredProjects =
    selectedCategory === "All Practices"
      ? PROJECTS
      : PROJECTS.filter((p) => p.industry === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F6EF]">
      <Container>
        <PageHeader
          badge="OUR WORK"
          eyebrow="Portfolio & Retrospectives"
          title="Architectural case studies."
          description="We present our work with transparent categorization. Every study showcases our strategic approach, technical stack decisions, and tangible deliverables."
        />
      </Container>

      {/* 3-Tier Credibility Notice Ribbon */}
      <Section background="cream">
        <div className="max-w-5xl mx-auto space-y-6 text-left">
          <div className="p-5 border border-[#171717] bg-[#FFFFFF] shadow-[4px_4px_0_0_#171717] flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-none border border-[#171717] bg-[#F4CF55] flex items-center justify-center shrink-0">
                <ShieldCheck size={18} className="text-[#171717] stroke-[2.5]" />
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-[#171717] uppercase tracking-wider block">
                  The Three-Tier Credibility Standard
                </span>
                <p className="mt-1 text-[#404040] leading-relaxed">
                  FIRM never fabricates client testimonials or invents fake revenue statistics. All projects are clearly classified into:
                  <strong className="text-[#171717]"> 01 Client Commissions</strong>,
                  <strong className="text-[#171717]"> 02 Strategic Concepts &amp; Studies</strong>, or
                  <strong className="text-[#171717]"> 03 Studio Initiatives</strong>.
                </p>
              </div>
            </div>
            <span className="border border-[#171717] bg-[#A6D8A1] px-2.5 py-1 font-mono text-[10px] font-bold text-[#171717] uppercase shrink-0 shadow-[2px_2px_0_0_#171717]">
              100% Intellectual Honesty
            </span>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="font-mono text-xs font-bold text-[#171717] mr-2 flex items-center gap-1.5">
              <Filter size={13} className="stroke-[2.5]" />
              <span>Filter Sector:</span>
            </span>
            {CATEGORIES.map((cat) => {
              const isActive = cat === selectedCategory;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono border border-[#171717] transition-all ${
                    isActive
                      ? "bg-[#F4CF55] text-[#171717] font-bold shadow-[3px_3px_0_0_#171717] -translate-x-0.5 -translate-y-0.5"
                      : "bg-[#FFFFFF] text-[#171717] font-medium shadow-[2px_2px_0_0_#171717] hover:bg-[#F8F6EF]"
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
      <Section background="white">
        <div className="max-w-5xl mx-auto space-y-12 text-left">
          {filteredProjects.map((proj, pIdx) => {
            const tagColors = ["bg-[#ED83A8]", "bg-[#F4CF55]", "bg-[#A6D8A1]"];
            const tagColor = tagColors[pIdx % tagColors.length];

            return (
              <article
                key={proj.slug}
                className="border border-[#171717] bg-[#FFFFFF] p-4 sm:p-8 lg:p-10 shadow-[4px_4px_0_0_#171717] sm:shadow-[6px_6px_0_0_#171717]"
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  {/* Left: Case Narrative */}
                  <div className="lg:col-span-5 space-y-4 min-w-0">
                    <div>
                      <span className={`inline-block border border-[#171717] ${tagColor} px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#171717] uppercase tracking-wider mb-2 shadow-[2px_2px_0_0_#171717] max-w-full break-words`}>
                        {proj.industry} {"//"} {proj.classification}
                      </span>
                      <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-[#171717]">
                        {proj.title}
                      </h2>
                      <p className="mt-2 text-xs sm:text-sm text-[#404040] leading-relaxed">
                        {proj.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#171717] space-y-2">
                      <span className="font-mono text-[10px] font-bold uppercase text-[#171717] block">
                        Connected Capabilities
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.divisions.map((div) => (
                          <span
                            key={div}
                            className="border border-[#171717] bg-[#F8F6EF] px-2 py-0.5 font-mono text-[10px] font-medium text-[#171717]"
                          >
                            {div}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/work/${proj.slug}`}
                        className="neo-btn-pink text-xs px-5 py-2.5"
                      >
                        <span>Read complete retrospective</span>
                        <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </div>

                  {/* Right: High-Craft Browser Frame Mockup */}
                  <div className="lg:col-span-7">
                    <BrowserFrame url={proj.heroMockup.urlText}>
                      <div className="relative overflow-hidden bg-[#F8F6EF] text-left">
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
