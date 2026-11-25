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
  title: "Education & Schools — Institutional Digital Presence Practice | FIRM",
  description:
    "Dedicated digital presence architecture for independent preparatory academies, K-12 schools, and educational institutions. Balancing admissions conversion with institutional dignity.",
};

export default function EducationPracticePage() {
  const education = INDUSTRIES.find((i) => i.slug === "education") || INDUSTRIES[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-white">
      {/* 01. Hero */}
      <Container>
        <PageHeader
          badge="SPECIALIZED PRACTICE"
          eyebrow="Education &amp; Schools"
          title="Digital presence engineered for schools &amp; educational academies."
          description={education.description}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/connect"
              className="gumroad-btn-pink text-xs sm:text-sm font-bold !py-2.5 !px-5"
            >
              <span>Start a project</span>
              <ArrowUpRight size={14} className="stroke-[2.5]" />
            </Link>
            <Link
              href="/work/saint-jude-academy"
              className="gumroad-btn-secondary text-xs sm:text-sm !py-2.5 !px-5"
            >
              Explore Saint Jude Academy Study
            </Link>
          </div>
        </PageHeader>
      </Container>

      {/* 02. Institutional Dilemma & Thesis */}
      <Section background="black" padding="tight">
        <div className="max-w-4xl mx-auto text-left gumroad-card p-6 sm:p-10 border-white/10 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-[#10B981]/20 border border-[#10B981]/30 text-xs font-semibold text-[#10B981]">
            The Institutional Dilemma
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Why traditional school websites fail prospective families and current parents.
          </h2>
          <div className="space-y-3 text-sm sm:text-base text-white/70 leading-relaxed font-sans">
            <p>
              Schools have a unique digital tension: they must inspire prospective parents to apply, while simultaneously serving current families with daily schedules, athletic rainouts, and cafeteria menus.
            </p>
            <p>
              When both audiences share an unorganized homepage, prospective parents bounce due to visual clutter, and current families get frustrated trying to find simple daily utilities. FIRM’s architecture decouples the admissions gateway from community utilities.
            </p>
          </div>
        </div>
      </Section>

      {/* 03. Signature Interactive Tool: The School Digital Blueprint */}
      <Section background="black" padding="normal">
        <div className="max-w-5xl mx-auto mb-10 overflow-hidden rounded-2xl border border-white/10 bg-[#141416] p-2">
          <Image
            src="/images/education/school-blueprint-specimen.webp"
            alt="The 4-Layer Institutional Architecture for Independent Schools"
            width={1200}
            height={675}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
        <SchoolBlueprint />
      </Section>

      {/* 04. Six Dedicated Pillars for Schools */}
      <Section background="black" padding="normal">
        <div className="max-w-5xl mx-auto text-left space-y-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Six pillars of school digital presence
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Pillar A */}
            <div className="gumroad-card p-6 space-y-2">
              <span className="text-xs text-[#FF5C40] font-semibold">01 &bull; Heritage &amp; Identity</span>
              <h3 className="font-display text-lg font-bold text-white">
                Institutional Brand Identity
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Preserving school heritage, redrafting crests, refining school colorways, and setting typographic hierarchies reflecting academic stature.
              </p>
            </div>

            {/* Pillar B */}
            <div className="gumroad-card p-6 space-y-2">
              <span className="text-xs text-[#3875FF] font-semibold">02 &bull; Admissions Funnel</span>
              <h3 className="font-display text-lg font-bold text-white">
                Admissions Conversion Funnel
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Streamlined 3-step open house RSVP forms, digital interactive viewbooks, and automated sync with Slate, Blackbaud, or HubSpot CRMs.
              </p>
            </div>

            {/* Pillar C */}
            <div className="gumroad-card p-6 space-y-2">
              <span className="text-xs text-[#FFB800] font-semibold">03 &bull; Community Hub</span>
              <h3 className="font-display text-lg font-bold text-white">
                Parent &amp; Community Portals
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Dedicated top utility ribbon for current parents: iCal synced calendars, lunch menus, athletic schedules, and single-sign-on links.
              </p>
            </div>

            {/* Pillar D */}
            <div className="gumroad-card p-6 space-y-2">
              <span className="text-xs text-[#10B981] font-semibold">04 &bull; Documentary Media</span>
              <h3 className="font-display text-lg font-bold text-white">
                Campus Photography &amp; Video
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Documentary art direction capturing authentic classroom rigor, fine arts, laboratory research, and athletic discipline without staged smiles.
              </p>
            </div>

            {/* Pillar E */}
            <div className="gumroad-card p-6 space-y-2">
              <span className="text-xs text-[#FF5C9D] font-semibold">05 &bull; Inbound Discovery</span>
              <h3 className="font-display text-lg font-bold text-white">
                Local Search &amp; Discovery
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Dominating regional private school search terms, structured Google Maps knowledge panels, and verified review operations.
              </p>
            </div>

            {/* Pillar F */}
            <div className="gumroad-card p-6 space-y-2">
              <span className="text-xs text-white/50 font-semibold">06 &bull; SLA Governance</span>
              <h3 className="font-display text-lg font-bold text-white">
                Annual SLA Stewardship
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Continuous security updates, ADA compliance audits, and priority editorial turnaround for school announcements.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 05. Closing CTA */}
      <Section background="black" padding="spacious">
        <div className="max-w-3xl mx-auto text-center space-y-6 gumroad-card p-8 sm:p-14 border-white/10">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold">
            INSTITUTIONAL ADMISSIONS INTAKE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
            Schedule an institutional diagnostic for your school
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-lg mx-auto leading-relaxed">
            We partner with independent academies, classical schools, and higher-education faculties on unified digital presence.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/connect"
              className="gumroad-btn-pink text-xs sm:text-sm font-bold !py-3 !px-6 w-full sm:w-auto"
            >
              <span>Start a project</span>
              <ArrowUpRight size={14} className="stroke-[2.5]" />
            </Link>
            <Link
              href="/industries"
              className="gumroad-btn-secondary text-xs sm:text-sm !py-3 !px-6 w-full sm:w-auto"
            >
              View all industry practices
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
