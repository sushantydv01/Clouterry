import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import StickerMark from "@/components/illustrations/StickerMark";
import TheThreadOval from "@/components/thread/TheThreadOval";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About FIRM | Philosophy, Methodology & Leadership",
  description:
    "Learn about FIRM's founding philosophy, architectural methodology, and why digital presence requires integrated stewardship.",
};

const PHILOSOPHY_TENETS = [
  {
    num: "01",
    label: "Coherence",
    color: "#ED83A8",
    title: "Brand, code, and content operate as one system",
    description:
      "When designers and engineers build inside the same repository, layouts hold together under real production loads and typography stays disciplined.",
  },
  {
    num: "02",
    label: "Craft",
    color: "#F4CF55",
    title: "Clear typography outlasts transient trends",
    description:
      "We prioritize balanced hierarchy, generous breathing room, and clean semantics over passing template gimmicks so platforms age gracefully.",
  },
  {
    num: "03",
    label: "Leadership",
    color: "#A6D8A1",
    title: "Direct partner execution on every sprint",
    description:
      "Senior partners direct every engagement from diagnostic discovery to deployment, removing account layers and junior handoff dilution.",
  },
];

const SPRINT_CADENCE = [
  {
    num: "01",
    color: "#ED83A8",
    title: "Diagnostic & Surface Audit (Days 1 to 7)",
    description:
      "Forensic review of your current website architecture, typography system, user pathways, and stakeholder interviews.",
  },
  {
    num: "02",
    color: "#F4CF55",
    title: "Brand & Technical Blueprint (Days 8 to 18)",
    description:
      "Authoring living CSS design tokens, responsive layout wireframes, content structure, and Next.js App Router schemas.",
  },
  {
    num: "03",
    color: "#A6D8A1",
    title: "Engineering & Production (Days 19 to 40)",
    description:
      "Full Next.js Server Component build, documentary editorial media production, WCAG 2.1 AA testing, and QA verification.",
  },
  {
    num: "04",
    color: "#F8F6EF",
    title: "Deployment & Stewardship (Day 45+)",
    description:
      "Controlled production release, search indexing verification, full client repository handoff, and continuous fractional care.",
  },
];

export default function FirmPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#171717] text-[#F8F6EF]">
      <Container>
        <PageHeader
          badge="About FIRM"
          eyebrow="Identity & Practice"
          title="Built to eliminate digital fragmentation."
          description="We are an independent digital presence and growth studio uniting brand design, software engineering, and editorial media for enduring institutions."
        />
      </Container>

      {/* Authentic Studio Photography Specimen (E07) */}
      <section className="pb-16 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="rounded-2xl border border-[#F8F6EF]/14 bg-[#1E1E20] p-3 sm:p-4 space-y-3">
          <div className="overflow-hidden rounded-xl relative aspect-[16/9]">
            <Image
              src="/images/editorial/atelier-hero.webp"
              alt="Inside FIRM's sunlit architectural studio workspace with floorplans and drafting instruments"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1152px"
              className="object-cover"
            />
          </div>
          <div className="px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs text-[#C4C1B8]">
            <div className="flex items-center gap-2.5">
              <StickerMark name="s09-02-flower" size={22} />
              <span className="font-mono uppercase tracking-[0.12em] text-[#F8F6EF]">
                Single Senior Standard
              </span>
            </div>
            <span className="font-mono text-[#9C9990]">
              Direct Partner Accountability · Full Client Ownership
            </span>
          </div>
        </div>
      </section>

      {/* Philosophy Strip */}
      <Section id="philosophy" background="charcoal-subtle" padding="spacious">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#F8F6EF]/12 pb-6">
            <div className="space-y-2.5 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#F4CF55] block">
                Operating Philosophy
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F8F6EF] leading-[1.08]">
                Three commitments guiding every commission.
              </h2>
            </div>
            <StickerMark name="s09-01-sparkle" size={28} className="hidden sm:block" />
          </div>

          <div className="grid gap-8 md:grid-cols-3 pt-2">
            {PHILOSOPHY_TENETS.map((item) => (
              <div key={item.num} className="border-t border-[#F8F6EF]/16 pt-6 space-y-3">
                <span
                  className="font-mono text-xs font-medium uppercase tracking-[0.12em] block"
                  style={{ color: item.color }}
                >
                  {item.num} · {item.label}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F8F6EF] leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#C4C1B8] leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* The Thread Synthesis */}
      <Section background="charcoal" padding="spacious">
        <TheThreadOval />
      </Section>

      {/* 4-Stage Cadence */}
      <Section id="approach" background="charcoal-subtle" padding="normal">
        <div className="mx-auto max-w-4xl text-left space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#A6D8A1] block">
              Methodology
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F8F6EF]">
              A 4-stage architectural sprint cadence
            </h2>
            <p className="text-base text-[#C4C1B8] leading-relaxed font-sans">
              We operate in transparent weekly sprints rather than open-ended billable retainers:
            </p>
          </div>

          <div className="divide-y divide-[#F8F6EF]/12 border-y border-[#F8F6EF]/12">
            {SPRINT_CADENCE.map((stage) => (
              <div key={stage.num} className="py-6 flex items-start gap-5">
                <span
                  className="font-mono text-sm font-bold pt-1 shrink-0"
                  style={{ color: stage.color }}
                >
                  {stage.num}
                </span>
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#F8F6EF]">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-[#C4C1B8] leading-relaxed font-sans">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section background="charcoal" padding="spacious">
        <div className="max-w-3xl mx-auto text-center space-y-6 p-8 sm:p-12 rounded-2xl bg-[#1E1E20] border border-[#F8F6EF]/14">
          <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#ED83A8] block">
            Begin an Engagement
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#F8F6EF] leading-tight">
            Ready to partner with an integrated studio?
          </h2>
          <p className="text-sm sm:text-base text-[#C4C1B8] max-w-lg mx-auto leading-relaxed font-sans">
            Senior partner execution uniting brand architecture, clean software, and sustained organic visibility.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/connect"
              className="firm-btn-primary text-sm w-full sm:w-auto"
            >
              <span>Start a project</span>
              <ArrowUpRight size={15} className="stroke-[2.25]" />
            </Link>
            <Link
              href="/work"
              className="firm-btn-secondary text-sm w-full sm:w-auto"
            >
              <span>View concept studies</span>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
