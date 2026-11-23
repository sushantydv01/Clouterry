import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { SERVICES } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Brand & Identity — Strategic Positioning & Visual Systems | FIRM",
  description:
    "We engineer enduring brand platforms, typographic systems, and digital design tokens that establish immediate market authority.",
};

export default function BrandIdentityPage() {
  const service = SERVICES.find((s) => s.slug === "brand-identity") || SERVICES[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F6EF]">
      {/* 01. Editorial Hero */}
      <Container>
        <PageHeader
          badge={service.code}
          eyebrow={service.eyebrow}
          title={service.title}
          description={service.subtitle}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/connect"
              className="neo-btn-pink text-xs px-5 py-2.5 shadow-[3px_3px_0_0_#171717]"
            >
              <span>Commission an identity sprint</span>
              <ArrowUpRight size={13} className="stroke-[2.5]" />
            </Link>
            <span className="border border-[#171717] bg-white px-3 py-1 font-mono text-xs font-bold text-[#171717] shadow-[2px_2px_0_0_#171717]">
              Cadence: {service.timeframe}
            </span>
          </div>
        </PageHeader>
      </Container>

      {/* 02. Core Proposition & Thesis */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-left border border-[#171717] bg-[#F8F6EF] p-6 sm:p-10 shadow-[6px_6px_0_0_#171717]">
          <span className="inline-block border border-[#171717] bg-[#ED83A8] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            Strategic Proposition
          </span>
          <h2 className="mt-3.5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] leading-tight">
            A brand is the visual standard that governs every organizational interaction.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3A3835] leading-relaxed font-sans">
            {service.proposition} When an institution’s visual presentation lacks craft or coherence, prospective clients, students, or partners judge its core capability by its weakest touchpoint.
          </p>
        </div>
      </Section>

      {/* 03. Problems Addressed */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#F4CF55] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            Reputation Failures Prevented
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-8">
            The cost of visual fragmentation
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            {service.problems.map((prob) => (
              <div
                key={prob.title}
                className="neo-card p-6 flex flex-col justify-between shadow-[4px_4px_0_0_#171717]"
              >
                <div>
                  <h3 className="text-base font-display font-bold text-[#171717]">
                    {prob.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#3A3835] leading-relaxed font-sans">
                    {prob.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 04. Visual Specimen: Typography & Pop Garden Architecture */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#A6D8A1] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            Visual Demonstration
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-6">
            Typographic specimens &amp; token discipline
          </h2>

          <div className="mb-6 overflow-hidden border border-[#171717] bg-white p-2 shadow-[6px_6px_0_0_#171717]">
            <Image
              src="/images/brand/brand-identity-specimen.webp"
              alt="FIRM Brand & Identity Architecture Specimen"
              width={1200}
              height={675}
              className="w-full h-auto object-cover border border-[#171717]"
            />
          </div>

          <div className="border border-[#171717] bg-white p-6 sm:p-9 shadow-[6px_6px_0_0_#171717]">
            {/* Specimen Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-[#171717] gap-2">
              <span className="font-mono text-xs font-bold text-[#171717]">
                SPECIMEN // POP GARDEN SCALE
              </span>
              <span className="font-mono text-xs text-[#6E6A63] font-semibold">
                Space Grotesk 72 / 32 / 16 / 12
              </span>
            </div>

            {/* Specimen Rows */}
            <div className="pt-6 space-y-6">
              <div>
                <span className="font-mono text-[10px] text-[#171717] font-bold block mb-1">
                  Display Headline (Space Grotesk — 700 Weight)
                </span>
                <p className="font-display text-3xl sm:text-5xl font-bold text-[#171717] tracking-tight leading-[1.04]">
                  Architectural integrity in digital form.
                </p>
              </div>

              <div className="pt-4 border-t border-[#171717]">
                <span className="font-mono text-[10px] text-[#171717] font-bold block mb-1">
                  Interface Body (Space Grotesk / Inter — 400 Weight / 1.6 Line Height)
                </span>
                <p className="font-sans text-sm sm:text-base text-[#3A3835] leading-relaxed max-w-2xl">
                  Typography establishes the subconscious hierarchy of your organization. When optical spacing, tabular figures, and solid black hairlines are calculated with mathematical precision, the reader perceives calm authority.
                </p>
              </div>

              <div className="pt-4 border-t border-[#171717] flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 border border-[#171717] bg-[#F8F6EF] px-3 py-1 shadow-[2px_2px_0_0_#171717]">
                  <span className="h-4 w-4 bg-[#F8F6EF] border border-[#171717]" />
                  <span className="font-mono text-xs font-bold text-[#171717]">#F8F6EF (Warm Cream)</span>
                </div>
                <div className="flex items-center gap-2 border border-[#171717] bg-white px-3 py-1 shadow-[2px_2px_0_0_#171717]">
                  <span className="h-4 w-4 bg-[#171717] border border-[#171717]" />
                  <span className="font-mono text-xs font-bold text-[#171717]">#171717 (Midnight Ink)</span>
                </div>
                <div className="flex items-center gap-2 border border-[#171717] bg-white px-3 py-1 shadow-[2px_2px_0_0_#171717]">
                  <span className="h-4 w-4 bg-[#ED83A8] border border-[#171717]" />
                  <span className="font-mono text-xs font-bold text-[#171717]">#ED83A8 (Rose Pink)</span>
                </div>
                <div className="flex items-center gap-2 border border-[#171717] bg-white px-3 py-1 shadow-[2px_2px_0_0_#171717]">
                  <span className="h-4 w-4 bg-[#A6D8A1] border border-[#171717]" />
                  <span className="font-mono text-xs font-bold text-[#171717]">#A6D8A1 (Garden Green)</span>
                </div>
                <div className="flex items-center gap-2 border border-[#171717] bg-white px-3 py-1 shadow-[2px_2px_0_0_#171717]">
                  <span className="h-4 w-4 bg-[#F4CF55] border border-[#171717]" />
                  <span className="font-mono text-xs font-bold text-[#171717]">#F4CF55 (Butter Yellow)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 05. The FIRM Methodology */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#ED83A8] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            Operating Methodology
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-8">
            The 4-stage identity development cadence
          </h2>

          <div className="space-y-4">
            {service.methodology.map((m) => (
              <div
                key={m.step}
                className="flex items-start gap-4 p-5 border border-[#171717] bg-white shadow-[4px_4px_0_0_#171717]"
              >
                <span className="border border-[#171717] bg-[#ED83A8] font-mono text-xs font-bold text-[#171717] px-2.5 py-1 shrink-0 shadow-[1px_1px_0_0_#171717]">
                  {m.step}
                </span>
                <div>
                  <h3 className="text-base font-display font-bold text-[#171717]">
                    {m.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-[#3A3835] leading-relaxed font-sans">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 06. Detailed Deliverables */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#F4CF55] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            Handover Assets
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-8">
            Complete identity specifications
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {service.deliverables.map((deliv) => (
              <div
                key={deliv.category}
                className="p-6 border border-[#171717] bg-white shadow-[4px_4px_0_0_#171717] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xs font-mono text-[#171717] uppercase font-bold pb-2 border-b border-[#171717]">
                    {deliv.category}
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-xs text-[#3A3835]">
                    {deliv.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <span className="h-4 w-4 bg-[#A6D8A1] border border-[#171717] flex items-center justify-center text-[#171717] font-bold text-[10px] mt-0.5 shrink-0 shadow-[1px_1px_0_0_#171717]">
                          ✓
                        </span>
                        <span className="font-semibold text-[#171717]">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 07. Cross-Division Connections */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#A6D8A1] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            System Coherence
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-6">
            How Brand &amp; Identity connects to the other divisions
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.crossConnections.map((conn) => (
              <div
                key={conn.division}
                className="p-5 border border-[#171717] bg-white shadow-[3px_3px_0_0_#171717]"
              >
                <Link
                  href={`/capabilities/${conn.slug}`}
                  className="font-display text-base font-bold text-[#171717] hover:text-[#ED83A8] hover:underline inline-flex items-center gap-1"
                >
                  <span>{conn.division}</span>
                  <ArrowUpRight size={13} />
                </Link>
                <p className="mt-2 text-xs sm:text-sm text-[#3A3835] leading-relaxed font-sans">
                  {conn.relationship}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 08. Relevant Case Studies */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#ED83A8] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            Proven Practice
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-6">
            Representative case studies featuring this division
          </h2>

          <div className="p-6 border border-[#171717] bg-[#F8F6EF] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-[4px_4px_0_0_#171717]">
            <div>
              <span className="border border-[#171717] bg-[#ED83A8] px-2.5 py-0.5 font-mono text-[10px] text-[#171717] uppercase font-bold inline-block mb-1 shadow-[1px_1px_0_0_#171717]">
                Education &amp; Schools // Architecture Study
              </span>
              <h3 className="mt-1 font-display text-xl font-bold text-[#171717]">
                Saint Jude Academy Brand Overhaul
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#3A3835] max-w-xl font-sans">
                Editorial typography, historical mark re-drafting, and living digital tokens for an 80-year-old independent academy.
              </p>
            </div>
            <Link
              href="/work/saint-jude-academy"
              className="neo-btn text-xs px-4 py-2 shrink-0"
            >
              <span>View study</span>
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      </Section>

      {/* 09. FAQ */}
      <Section background="cream">
        <div className="max-w-3xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#F4CF55] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            Frequently Asked
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-8">
            Questions regarding our Brand &amp; Identity practice
          </h2>

          <div className="space-y-4">
            {service.faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-5 border border-[#171717] bg-white shadow-[3px_3px_0_0_#171717]"
              >
                <h3 className="text-base font-display font-bold text-[#171717]">
                  {faq.question}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#3A3835] leading-relaxed font-sans">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 10. Dedicated Project Enquiry CTA */}
      <Section background="pink">
        <div className="max-w-3xl mx-auto text-center border border-[#171717] bg-[#ED83A8] p-8 sm:p-14 shadow-[8px_8px_0_0_#171717]">
          <span className="inline-block border border-[#171717] bg-white px-3.5 py-1 font-mono text-xs font-bold text-[#171717] shadow-[2px_2px_0_0_#171717]">
            COMMISSION INTAKE // 01 BRAND
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold text-[#171717] leading-tight">
            Ready to establish an enduring brand standard?
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#171717] font-medium leading-relaxed max-w-lg mx-auto font-sans">
            We partner with a limited roster of organizations each quarter. Initiate a briefing to discuss your positioning, scope, and target launch timeframe.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/connect"
              className="neo-btn text-xs px-6 py-3 w-full sm:w-auto shadow-[4px_4px_0_0_#171717]"
            >
              <span>Submit brand briefing</span>
              <ArrowUpRight size={13} />
            </Link>
            <Link
              href="/capabilities"
              className="neo-btn-white text-xs px-6 py-3 w-full sm:w-auto shadow-[3px_3px_0_0_#171717]"
            >
              Explore all capabilities
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
