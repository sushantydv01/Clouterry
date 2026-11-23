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
    <div className="flex flex-col min-h-screen bg-[#F4F4F0]">
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
              className="neo-btn text-xs px-5 py-2.5"
            >
              <span>Commission an identity sprint</span>
              <ArrowUpRight size={13} />
            </Link>
            <span className="border border-black bg-white px-3 py-1 font-mono text-xs font-bold text-black shadow-[2px_2px_0_0_#000]">
              Cadence: {service.timeframe}
            </span>
          </div>
        </PageHeader>
      </Container>

      {/* 02. Core Proposition & Thesis */}
      <Section background="surface">
        <div className="max-w-4xl mx-auto text-left border border-black bg-[#F4F4F0] p-6 sm:p-10 shadow-[6px_6px_0_0_#000]">
          <span className="inline-block border border-black bg-[#FF90E8] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Strategic Proposition
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-black leading-tight">
            A brand is the visual standard that governs every organizational interaction.
          </h2>
          <p className="mt-4 text-base text-[#2D2A26] leading-relaxed font-sans">
            {service.proposition} When an institution’s visual presentation lacks craft or coherence, prospective clients, students, or partners judge its core capability by its weakest touchpoint.
          </p>
        </div>
      </Section>

      {/* 03. Problems Addressed */}
      <Section background="page">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#F1F333] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Reputation Failures Prevented
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            The cost of visual fragmentation
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            {service.problems.map((prob) => (
              <div
                key={prob.title}
                className="neo-card p-6 flex flex-col justify-between shadow-[4px_4px_0_0_#000]"
              >
                <div>
                  <h3 className="text-base font-display font-bold text-black">
                    {prob.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                    {prob.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 04. Visual Specimen: Typography & Token Architecture */}
      <Section background="surface">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#55D6BE] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Visual Demonstration
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-6">
            Typographic specimens &amp; token discipline
          </h2>

          <div className="mb-6 overflow-hidden border border-black bg-white p-2 shadow-[6px_6px_0_0_#000]">
            <Image
              src="/images/brand/brand-identity-specimen.webp"
              alt="FIRM Brand & Identity Architecture Specimen"
              width={1200}
              height={675}
              className="w-full h-auto object-cover border border-black"
            />
          </div>

          <div className="border border-black bg-white p-6 sm:p-8 shadow-[6px_6px_0_0_#000]">
            {/* Specimen Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-black gap-2">
              <span className="font-mono text-xs font-bold text-black">
                SPECIMEN // CHEERFUL NEO-BRUTALIST SCALE
              </span>
              <span className="font-mono text-xs text-[#605C56] font-semibold">
                Space Grotesk 72 / 32 / 16 / 12
              </span>
            </div>

            {/* Specimen Rows */}
            <div className="pt-6 space-y-6">
              <div>
                <span className="font-mono text-[10px] text-black font-bold block mb-1">
                  Display Headline (Space Grotesk — 700 Weight)
                </span>
                <p className="font-display text-3xl sm:text-5xl font-bold text-black tracking-tight leading-[1.04]">
                  Architectural integrity in digital form.
                </p>
              </div>

              <div className="pt-4 border-t border-black">
                <span className="font-mono text-[10px] text-black font-bold block mb-1">
                  Interface Body (Space Grotesk / Inter — 400 Weight / 1.6 Line Height)
                </span>
                <p className="font-sans text-sm sm:text-base text-[#2D2A26] leading-relaxed max-w-2xl">
                  Typography establishes the subconscious hierarchy of your organization. When optical spacing, tabular figures, and solid black hairlines are calculated with mathematical precision, the reader perceives calm authority.
                </p>
              </div>

              <div className="pt-4 border-t border-black flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 border border-black bg-[#F4F4F0] px-2.5 py-1 shadow-[2px_2px_0_0_#000]">
                  <span className="h-4 w-4 bg-[#F4F4F0] border border-black" />
                  <span className="font-mono text-xs font-bold text-black">#F4F4F0 (Ground)</span>
                </div>
                <div className="flex items-center gap-2 border border-black bg-white px-2.5 py-1 shadow-[2px_2px_0_0_#000]">
                  <span className="h-4 w-4 bg-black border border-black" />
                  <span className="font-mono text-xs font-bold text-black">#000000 (Ink)</span>
                </div>
                <div className="flex items-center gap-2 border border-black bg-white px-2.5 py-1 shadow-[2px_2px_0_0_#000]">
                  <span className="h-4 w-4 bg-[#FF90E8] border border-black" />
                  <span className="font-mono text-xs font-bold text-black">#FF90E8 (Pink)</span>
                </div>
                <div className="flex items-center gap-2 border border-black bg-white px-2.5 py-1 shadow-[2px_2px_0_0_#000]">
                  <span className="h-4 w-4 bg-[#F1F333] border border-black" />
                  <span className="font-mono text-xs font-bold text-black">#F1F333 (Yellow)</span>
                </div>
                <div className="flex items-center gap-2 border border-black bg-white px-2.5 py-1 shadow-[2px_2px_0_0_#000]">
                  <span className="h-4 w-4 bg-[#55D6BE] border border-black" />
                  <span className="font-mono text-xs font-bold text-black">#55D6BE (Teal)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 05. The FIRM Methodology */}
      <Section background="page">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#FF90E8] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Operating Methodology
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            The 4-stage identity development cadence
          </h2>

          <div className="space-y-4">
            {service.methodology.map((m) => (
              <div
                key={m.step}
                className="flex items-start gap-4 p-5 border border-black bg-white shadow-[4px_4px_0_0_#000]"
              >
                <span className="border border-black bg-[#FF90E8] font-mono text-xs font-bold text-black px-2.5 py-1 shrink-0 shadow-[1px_1px_0_0_#000]">
                  {m.step}
                </span>
                <div>
                  <h3 className="text-base font-display font-bold text-black">
                    {m.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 06. Detailed Deliverables */}
      <Section background="surface">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#F1F333] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Handover Assets
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            Complete identity specifications
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {service.deliverables.map((deliv) => (
              <div
                key={deliv.category}
                className="p-6 border border-black bg-white shadow-[4px_4px_0_0_#000] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xs font-mono text-black uppercase font-bold pb-2 border-b border-black">
                    {deliv.category}
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-xs text-[#2D2A26]">
                    {deliv.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <span className="h-4 w-4 bg-[#55D6BE] border border-black flex items-center justify-center text-black font-bold text-[10px] mt-0.5 shrink-0">
                          ✓
                        </span>
                        <span className="font-medium text-black">{it}</span>
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
      <Section background="page">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#55D6BE] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            System Coherence
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-6">
            How Brand &amp; Identity connects to the other divisions
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.crossConnections.map((conn) => (
              <div
                key={conn.division}
                className="p-5 border border-black bg-white shadow-[3px_3px_0_0_#000]"
              >
                <Link
                  href={`/capabilities/${conn.slug}`}
                  className="font-display text-base font-bold text-black hover:text-[#DC341E] hover:underline inline-flex items-center gap-1"
                >
                  <span>{conn.division}</span>
                  <ArrowUpRight size={13} />
                </Link>
                <p className="mt-2 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                  {conn.relationship}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 08. Relevant Case Studies */}
      <Section background="surface">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#FF90E8] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Proven Practice
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-6">
            Representative case studies featuring this division
          </h2>

          <div className="p-6 border border-black bg-[#F4F4F0] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-[4px_4px_0_0_#000]">
            <div>
              <span className="border border-black bg-[#FF90E8] px-2 py-0.5 font-mono text-[10px] text-black uppercase font-bold inline-block mb-1">
                Education &amp; Schools // Architecture Study
              </span>
              <h3 className="mt-1 font-display text-xl font-bold text-black">
                Saint Jude Academy Brand Overhaul
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#2D2A26] max-w-xl">
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
      <Section background="page">
        <div className="max-w-3xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#F1F333] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Frequently Asked
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            Questions regarding our Brand &amp; Identity practice
          </h2>

          <div className="space-y-4">
            {service.faqs.map((faq) => (
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

      {/* 10. Dedicated Project Enquiry CTA */}
      <Section background="surface">
        <div className="max-w-3xl mx-auto text-center border border-black bg-[#FF90E8] p-8 sm:p-12 shadow-[8px_8px_0_0_#000]">
          <span className="inline-block border border-black bg-white px-3 py-1 font-mono text-xs font-bold text-black shadow-[2px_2px_0_0_#000]">
            COMMISSION INTAKE // 01 BRAND
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-black leading-tight">
            Ready to establish an enduring brand standard?
          </h2>
          <p className="mt-3 text-sm text-[#2D2A26] font-medium leading-relaxed max-w-lg mx-auto">
            We partner with a limited roster of organizations each quarter. Initiate a briefing to discuss your positioning, scope, and target launch timeframe.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/connect"
              className="neo-btn text-xs px-6 py-3 w-full sm:w-auto"
            >
              <span>Submit brand briefing</span>
              <ArrowUpRight size={13} />
            </Link>
            <Link
              href="/capabilities"
              className="neo-btn-white text-xs px-6 py-3 w-full sm:w-auto"
            >
              Explore all capabilities
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
