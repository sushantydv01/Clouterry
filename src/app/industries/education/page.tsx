import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SchoolBlueprint from "@/components/interactive/SchoolBlueprint";
import { INDUSTRIES } from "@/data/industries";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Education & Schools | Institutional Digital Presence Practice | FIRM",
  description:
    "Dedicated digital presence architecture for independent preparatory academies, K-12 schools, and educational institutions. Balancing admissions conversion with institutional dignity.",
};

const SIX_PILLARS = [
  {
    num: "01",
    color: "#ED83A8",
    tag: "Heritage & Identity",
    title: "Institutional Brand Identity",
    description:
      "Preserving academic dignity, redrafting school crests, refining institutional colorways, and setting typographic hierarchies tailored to parents and faculty.",
  },
  {
    num: "02",
    color: "#A6D8A1",
    tag: "Admissions Funnel",
    title: "Admissions Conversion Gateway",
    description:
      "Frictionless 3-step open house booking forms, digital viewbooks, and direct inquiry syncing into Slate, Blackbaud, Ravenna, or HubSpot.",
  },
  {
    num: "03",
    color: "#F4CF55",
    tag: "Community Hub",
    title: "Parent & Community Utility",
    description:
      "Clean utility ribbon for current families: synced academic calendars, athletic notices, lunch menus, and single-sign-on LMS portal links.",
  },
  {
    num: "04",
    color: "#A6D8A1",
    tag: "Documentary Media",
    title: "Campus Photography & Video",
    description:
      "Unhurried documentary art direction capturing authentic seminars, arts studios, laboratory work, and athletics without generic stock smiles.",
  },
  {
    num: "05",
    color: "#ED83A8",
    tag: "Inbound Discovery",
    title: "Regional Search Visibility",
    description:
      "Structuring school programs cleanly in semantic HTML and Schema.org EducationalOrganization markup for regional family discovery.",
  },
  {
    num: "06",
    color: "#F4CF55",
    tag: "Governance & Care",
    title: "WCAG 2.1 AA & Annual SLA",
    description:
      "Verified keyboard/screen-reader accessibility audits, seasonal admissions campaign support, and rapid platform updates.",
  },
];

export default function EducationPracticePage() {
  const education = INDUSTRIES.find((i) => i.slug === "education") || INDUSTRIES[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#171717] text-[#F8F6EF]">
      {/* 01. Asymmetric Hero Header with Commissioned School Architecture Artwork */}
      <Container size="wide">
        <PageHeader
          kicker="Primary Sector Practice · Education & Schools"
          title="Digital presence engineered for schools and educational academies."
          description={education.description}
          aside={
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#F8F6EF]/14 bg-[#121214]">
              <Image
                src="/images/studio/e02-school-architecture.webp"
                alt="Dual-courtyard architectural plan separating admissions portal arch from organized community schedule tiles"
                fill
                priority
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover"
              />
            </div>
          }
        >
          <div className="flex flex-wrap items-center gap-3.5">
            <Link href="/connect" className="firm-btn-primary text-sm">
              <span>Start a project</span>
              <ArrowUpRight size={15} className="stroke-[2]" />
            </Link>
            <Link href="/work/saint-jude-academy" className="firm-btn-secondary text-sm">
              <span>Saint Jude Academy study</span>
            </Link>
          </div>
        </PageHeader>
      </Container>

      {/* 02. Warm Cream Interactive 4-Layer School Blueprint */}
      <Section background="warm-paper" containerSize="wide" padding="spacious">
        <SchoolBlueprint showPracticeLink={false} />
      </Section>

      {/* 03. Open 6-Pillar School Framework on Midnight Charcoal */}
      <Section background="charcoal" containerSize="wide" padding="spacious">
        <div className="space-y-12 text-left">
          <div className="grid gap-6 lg:grid-cols-12 items-end pb-6 border-b border-[#F8F6EF]/12">
            <div className="lg:col-span-7 space-y-2">
              <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-[-0.025em] text-[#F8F6EF]">
                Six pillars separating admissions from internal campus notices
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base text-[#D5D2C7] leading-relaxed font-sans">
                Prospective families require inspiring campus storytelling and clear tuition context; current parents need calendars and portals in one click without crowding the homepage.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SIX_PILLARS.map((p) => (
              <div key={p.num} className="border-t border-[#F8F6EF]/16 pt-6 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span style={{ color: p.color }}>
                    {p.num} · {p.tag}
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-medium text-[#F8F6EF]">
                  {p.title}
                </h3>
                <p className="text-sm sm:text-base text-[#D5D2C7] leading-relaxed font-sans">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 04. Closing CTA */}
      <Section background="butter-yellow" containerSize="wide" padding="normal">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 text-left">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-[-0.025em] text-[#171717] leading-tight">
              Schedule an institutional diagnostic for your school
            </h2>
            <p className="text-base text-[#171717]/80 font-sans">
              We partner with independent academies, classical schools, and educational institutions seeking modern clarity.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0">
            <Link href="/connect" className="firm-btn-dark text-sm sm:text-base">
              <span>Start a project</span>
              <ArrowUpRight size={16} />
            </Link>
            <Link href="/industries" className="firm-btn-outline-dark text-sm sm:text-base">
              <span>All industry practices</span>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
