import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { SERVICES } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing & Growth — Search Visibility & Conversion Architecture | FIRM",
  description:
    "We connect high-intent demand to your digital flagship through technical SEO, disciplined search advertising, and conversion rate architecture.",
};

export default function MarketingGrowthPage() {
  const service = SERVICES.find((s) => s.slug === "marketing-growth") || SERVICES[3];

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
              <span>Request growth diagnostic</span>
              <ArrowUpRight size={13} className="stroke-[2.5]" />
            </Link>
            <span className="border border-[#171717] bg-white px-3 py-1 font-mono text-xs font-bold text-[#171717] shadow-[2px_2px_0_0_#171717]">
              Cadence: {service.timeframe}
            </span>
          </div>
        </PageHeader>
      </Container>

      {/* 02. Core Proposition */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-left border border-[#171717] bg-[#F8F6EF] p-6 sm:p-10 shadow-[6px_6px_0_0_#171717]">
          <span className="inline-block border border-[#171717] bg-[#ED83A8] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            Growth Proposition
          </span>
          <h2 className="mt-3.5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] leading-tight">
            Visibility without conversion is an expensive vanity.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3A3835] leading-relaxed font-sans">
            {service.proposition} We build search architectures that connect qualified, high-intent prospective families, clients, and partners directly to streamlined conversion pathways on your website.
          </p>
        </div>
      </Section>

      {/* 03. Strategic Inbound Funnel Specimen */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#A6D8A1] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            Architectural Workflow
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-8">
            The high-intent search conversion pipeline
          </h2>

          <div className="border border-[#171717] bg-white p-6 sm:p-9 shadow-[6px_6px_0_0_#171717]">
            <div className="space-y-4">
              {/* Funnel Stage 1 */}
              <div className="p-4 border border-[#171717] bg-[#F8F6EF] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-[3px_3px_0_0_#171717]">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 border border-[#171717] bg-[#ED83A8] flex items-center justify-center text-[#171717] font-mono text-xs font-bold shadow-[1px_1px_0_0_#171717]">
                    01
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#171717] block">High-Intent Demand Discovery</span>
                    <span className="text-xs text-[#3A3835]">Targeting specific terms (e.g. &apos;independent boarding school admissions&apos;)</span>
                  </div>
                </div>
                <span className="border border-[#171717] bg-white px-3 py-0.5 font-mono text-xs font-bold text-[#171717] self-start sm:self-auto">
                  Search Intent Layer
                </span>
              </div>

              {/* Funnel Stage 2 */}
              <div className="p-4 border border-[#171717] bg-[#F8F6EF] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-[3px_3px_0_0_#171717]">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 border border-[#171717] bg-[#F4CF55] flex items-center justify-center text-[#171717] font-mono text-xs font-bold shadow-[1px_1px_0_0_#171717]">
                    02
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#171717] block">Sub-Second Landing Experience</span>
                    <span className="text-xs text-[#3A3835]">Dedicated Next.js page answering specific search questions immediately</span>
                  </div>
                </div>
                <span className="border border-[#171717] bg-[#A6D8A1] px-3 py-0.5 font-mono text-xs font-bold text-[#171717] self-start sm:self-auto">
                  100% Core Web Vitals
                </span>
              </div>

              {/* Funnel Stage 3 */}
              <div className="p-4 border border-[#171717] bg-[#F8F6EF] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-[3px_3px_0_0_#171717]">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 border border-[#171717] bg-[#A6D8A1] flex items-center justify-center text-[#171717] font-mono text-xs font-bold shadow-[1px_1px_0_0_#171717]">
                    03
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#171717] block">Friction-Free 3-Step Intake</span>
                    <span className="text-xs text-[#3A3835]">Mobile tour booking or brief submission with zero clutter</span>
                  </div>
                </div>
                <span className="border border-[#171717] bg-[#171717] text-[#F8F6EF] px-3 py-0.5 font-mono text-xs font-bold self-start sm:self-auto">
                  Conversion Gateway
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 04. Problems Solved */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#DC341E] text-white px-3.5 py-1 font-mono text-xs uppercase tracking-wider font-bold shadow-[2px_2px_0_0_#171717]">
            Inbound Failures Prevented
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-8">
            Why traditional digital marketing wastes budget
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

      {/* 05. Methodology */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#ED83A8] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            Strategic Methodology
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-8">
            The 4-stage search acquisition cadence
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

      {/* 06. Deliverables */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#F4CF55] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            Handover Deliverables
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-8">
            Growth &amp; visibility specifications
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

      {/* 07. Cross Connections */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#A6D8A1] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            System Coherence
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-6">
            How Marketing &amp; Growth connects with other divisions
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

      {/* 08. FAQ */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#F4CF55] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            Frequently Asked
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-8">
            Questions regarding our Marketing &amp; Growth practice
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

      {/* 09. CTA in Rose Pink */}
      <Section background="pink">
        <div className="max-w-3xl mx-auto text-center border border-[#171717] bg-[#ED83A8] p-8 sm:p-14 shadow-[8px_8px_0_0_#171717]">
          <span className="inline-block border border-[#171717] bg-white px-3.5 py-1 font-mono text-xs font-bold text-[#171717] shadow-[2px_2px_0_0_#171717]">
            GROWTH INTAKE // 04 INBOUND
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold text-[#171717] leading-tight">
            Ready to establish search authority?
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#171717] font-medium leading-relaxed max-w-lg mx-auto font-sans">
            Request a comprehensive search visibility audit to discover where your competitors are capturing prospective inquiries.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/connect"
              className="neo-btn text-xs px-6 py-3 w-full sm:w-auto shadow-[4px_4px_0_0_#171717]"
            >
              <span>Request visibility diagnostic</span>
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
