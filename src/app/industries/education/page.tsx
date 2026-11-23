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
    <div className="flex flex-col min-h-screen bg-[#F4F4F0]">
      {/* 01. Editorial Hero */}
      <Container>
        <PageHeader
          badge="SPECIALIZED PRACTICE"
          eyebrow="Education & Schools"
          title="Digital presence engineered for schools & educational academies."
          description={education.description}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/connect"
              className="neo-btn text-xs px-5 py-2.5"
            >
              <span>Schedule an institutional briefing</span>
              <ArrowUpRight size={13} />
            </Link>
            <Link
              href="/work/saint-jude-academy"
              className="neo-btn-white text-xs px-5 py-2.5"
            >
              Explore Saint Jude Academy Study
            </Link>
          </div>
        </PageHeader>
      </Container>

      {/* 02. Institutional Dilemma & Thesis */}
      <Section background="surface">
        <div className="max-w-4xl mx-auto text-left border border-black bg-[#F4F4F0] p-6 sm:p-10 shadow-[6px_6px_0_0_#000]">
          <span className="inline-block border border-black bg-[#FF90E8] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            The Institutional Dilemma
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-black leading-tight">
            Why traditional school websites fail both prospective families and current parents.
          </h2>
          <div className="mt-4 space-y-3 text-sm sm:text-base text-[#2D2A26] leading-relaxed font-sans">
            <p>
              Schools have a unique digital tension: they must inspire prospective parents to inquire and apply, while simultaneously serving current families with daily schedules, athletic rainouts, and cafeteria menus.
            </p>
            <p>
              When both audiences share an unorganized homepage, prospective parents bounce due to visual clutter, and current families get frustrated trying to find simple daily calendars. FIRM’s architecture decouples the admissions gateway from community utilities.
            </p>
          </div>
        </div>
      </Section>

      {/* 03. Signature Interactive Tool: The School Digital Blueprint */}
      <Section background="page">
        <div className="max-w-5xl mx-auto mb-10 overflow-hidden border border-black bg-white p-2 shadow-[6px_6px_0_0_#000]">
          <Image
            src="/images/education/school-blueprint-specimen.webp"
            alt="The 4-Layer Institutional Architecture for Independent Schools"
            width={1200}
            height={675}
            className="w-full h-auto object-cover border border-black"
          />
        </div>
        <SchoolBlueprint />
      </Section>

      {/* 04. Six Dedicated Pillars for Schools */}
      <Section background="surface">
        <div className="max-w-5xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#F1F333] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Complete Practice Scope
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            Six pillars of school digital presence
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Pillar A */}
            <div className="neo-card p-6 shadow-[4px_4px_0_0_#000]">
              <span className="border border-black bg-[#FF90E8] px-2 py-0.5 font-mono text-[10px] text-black font-bold uppercase">Pillar A</span>
              <h3 className="mt-2 font-display text-lg font-bold text-black">
                Institutional Brand Identity
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                Preserving school heritage, redrafting crests, refining school colorways, and setting typographic hierarchies that reflect academic stature.
              </p>
            </div>

            {/* Pillar B */}
            <div className="neo-card p-6 shadow-[4px_4px_0_0_#000]">
              <span className="border border-black bg-[#F1F333] px-2 py-0.5 font-mono text-[10px] text-black font-bold uppercase">Pillar B</span>
              <h3 className="mt-2 font-display text-lg font-bold text-black">
                Admissions Conversion Funnel
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                Streamlined 3-step open house RSVP forms, digital interactive viewbooks, and automated sync with Slate, Blackbaud, or HubSpot CRMs.
              </p>
            </div>

            {/* Pillar C */}
            <div className="neo-card p-6 shadow-[4px_4px_0_0_#000]">
              <span className="border border-black bg-[#55D6BE] px-2 py-0.5 font-mono text-[10px] text-black font-bold uppercase">Pillar C</span>
              <h3 className="mt-2 font-display text-lg font-bold text-black">
                Parent &amp; Community Portals
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                Dedicated top utility ribbon for current parents: iCal synced calendars, lunch menus, athletic game schedules, and single-sign-on gateway links.
              </p>
            </div>

            {/* Pillar D */}
            <div className="neo-card p-6 shadow-[4px_4px_0_0_#000]">
              <span className="border border-black bg-[#FF90E8] px-2 py-0.5 font-mono text-[10px] text-black font-bold uppercase">Pillar D</span>
              <h3 className="mt-2 font-display text-lg font-bold text-black">
                Campus Photography &amp; Video
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                Documentary art direction capturing authentic classroom rigor, fine arts, laboratory research, and athletic discipline without staged smiles.
              </p>
            </div>

            {/* Pillar E */}
            <div className="neo-card p-6 shadow-[4px_4px_0_0_#000]">
              <span className="border border-black bg-[#55D6BE] px-2 py-0.5 font-mono text-[10px] text-black font-bold uppercase">Pillar E</span>
              <h3 className="mt-2 font-display text-lg font-bold text-black">
                WCAG 2.1 AA Accessibility
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                Rigorous screen-reader testing, keyboard focus rings, and high-contrast compliance to safeguard civil rights accessibility and protect funding.
              </p>
            </div>

            {/* Pillar F */}
            <div className="neo-card p-6 shadow-[4px_4px_0_0_#000]">
              <span className="border border-black bg-[#F1F333] px-2 py-0.5 font-mono text-[10px] text-black font-bold uppercase">Pillar F</span>
              <h3 className="mt-2 font-display text-lg font-bold text-black">
                Annual Giving &amp; Alumni Stature
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                Endowment and capital campaign landing pages that communicate generational legacy and inspire philanthropic alumni commitment.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 05. Frequently Addressed School Questions */}
      <Section background="page">
        <div className="max-w-3xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#FF90E8] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Institutional Clarity
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            Frequently asked questions by school heads &amp; trustees
          </h2>

          <div className="space-y-4">
            {education.faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-5 border border-black bg-white shadow-[3px_3px_0_0_#000]"
              >
                <h3 className="text-base font-display font-bold text-black">
                  {faq.question}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 06. Institutional Intake CTA */}
      <Section background="surface">
        <div className="max-w-3xl mx-auto text-center border border-black bg-[#55D6BE] p-8 sm:p-12 shadow-[8px_8px_0_0_#000]">
          <span className="inline-block border border-black bg-white px-3 py-1 font-mono text-xs font-bold text-black shadow-[2px_2px_0_0_#000]">
            INSTITUTIONAL BRIEFING // EDUCATION
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-black leading-tight">
            Discuss an admissions &amp; digital presence overhaul
          </h2>
          <p className="mt-3 text-sm text-[#2D2A26] font-medium leading-relaxed max-w-lg mx-auto">
            We work with a select number of independent academies and educational institutions each academic year. Schedule an introductory consultation with our senior practice partners.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/connect"
              className="neo-btn text-xs px-6 py-3 w-full sm:w-auto"
            >
              <span>Request institutional briefing</span>
              <ArrowUpRight size={13} />
            </Link>
            <Link
              href="/industries"
              className="neo-btn-white text-xs px-6 py-3 w-full sm:w-auto"
            >
              View all industry sectors
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
