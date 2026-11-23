"use client";

import React, { useState } from "react";
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
    <div className="flex flex-col min-h-screen">
      <Container>
        <PageHeader
          badge="OUR WORK"
          eyebrow="Portfolio & Retrospectives"
          title="Architectural case studies."
          description="We present our work with transparent categorization. Every study showcases our strategic approach, technical stack decisions, and tangible deliverables."
        />
      </Container>

      {/* 3-Tier Credibility Notice Ribbon */}
      <Section background="subtle">
        <div className="max-w-5xl mx-auto space-y-6 text-left">
          <div className="p-4 sm:p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs">
            <div className="flex items-start gap-3">
              <ShieldCheck size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-xs font-semibold text-[var(--accent)] uppercase tracking-wider block">
                  The Three-Tier Credibility Standard
                </span>
                <p className="mt-1 text-[var(--text-secondary)] leading-relaxed">
                  FIRM never fabricates client testimonials or invents fake revenue statistics. All projects are clearly classified into:
                  <strong className="text-[var(--text-primary)]"> 01 Client Commissions</strong>,
                  <strong className="text-[var(--text-primary)]"> 02 Strategic Concepts & Studies</strong>, or
                  <strong className="text-[var(--text-primary)]"> 03 Studio Initiatives</strong>.
                </p>
              </div>
            </div>
            <span className="font-mono text-[10px] text-[var(--text-muted)] shrink-0">
              100% Intellectual Honesty
            </span>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="font-mono text-xs text-[var(--text-muted)] mr-2 flex items-center gap-1">
              <Filter size={12} />
              <span>Filter Sector:</span>
            </span>
            {CATEGORIES.map((cat) => {
              const isActive = cat === selectedCategory;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-mono transition-colors ${
                    isActive
                      ? "bg-[var(--accent)] text-white font-medium shadow-2xs"
                      : "bg-[var(--bg-surface)] border border-[var(--border-hairline)] text-[var(--text-secondary)] hover:border-[var(--border-subtle)] hover:text-[var(--text-primary)]"
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
      <Section background="page">
        <div className="max-w-5xl mx-auto space-y-12 text-left">
          {filteredProjects.map((proj) => (
            <article
              key={proj.slug}
              className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 sm:p-10 shadow-xs"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                {/* Left: Case Narrative */}
                <div className="lg:col-span-5 space-y-4">
                  <div>
                    <span className="font-mono text-[10px] text-[var(--accent)] font-semibold uppercase tracking-wider block">
                      {proj.industry} {"//"} {proj.classification}
                    </span>
                    <h2 className="mt-1 font-display text-2xl sm:text-3xl font-medium text-[var(--text-primary)]">
                      {proj.title}
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {proj.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[var(--border-hairline)] space-y-2">
                    <span className="font-mono text-[10px] uppercase text-[var(--text-muted)] block">
                      Connected Capabilities
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.divisions.map((div) => (
                        <span
                          key={div}
                          className="rounded-md bg-[var(--bg-subtle)] border border-[var(--border-hairline)] px-2.5 py-0.5 font-mono text-[10px] text-[var(--text-secondary)]"
                        >
                          {div}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/work/${proj.slug}`}
                      className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-[var(--accent)] px-5 text-xs font-medium text-white hover:bg-[var(--accent-hover)] transition-colors"
                    >
                      <span>Read complete retrospective</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>

                {/* Right: High-Craft Browser Frame Mockup */}
                <div className="lg:col-span-7">
                  <BrowserFrame url={proj.heroMockup.urlText}>
                    <div className="p-6 bg-[var(--bg-page)] text-left">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--accent)] font-medium">
                        {proj.clientType}
                      </span>
                      <h3 className="mt-1 font-display text-xl sm:text-2xl font-medium text-[var(--text-primary)]">
                        {proj.heroMockup.screenTitle}
                      </h3>
                      <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
                        {proj.heroMockup.screenSubtitle}
                      </p>

                      <div className="mt-5 grid grid-cols-3 gap-2 pt-4 border-t border-[var(--border-hairline)]">
                        {proj.heroMockup.metrics.map((m) => (
                          <div key={m.label} className="p-2.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-hairline)]">
                            <span className="font-mono text-[9px] text-[var(--text-muted)] block">{m.label}</span>
                            <span className="font-mono text-xs font-medium text-[var(--text-primary)] mt-0.5 block">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </BrowserFrame>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
