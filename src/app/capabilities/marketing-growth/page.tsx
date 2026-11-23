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
              <span>Request growth diagnostic</span>
              <ArrowUpRight size={13} />
            </Link>
            <span className="border border-black bg-white px-3 py-1 font-mono text-xs font-bold text-black shadow-[2px_2px_0_0_#000]">
              Cadence: {service.timeframe}
            </span>
          </div>
        </PageHeader>
      </Container>

      {/* 02. Core Proposition */}
      <Section background="surface">
        <div className="max-w-4xl mx-auto text-left border border-black bg-[#F4F4F0] p-6 sm:p-10 shadow-[6px_6px_0_0_#000]">
          <span className="inline-block border border-black bg-[#FF90E8] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Growth Proposition
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-black leading-tight">
            Visibility without conversion is an expensive vanity.
          </h2>
          <p className="mt-4 text-base text-[#2D2A26] leading-relaxed font-sans">
            {service.proposition} We build search architectures that connect qualified, high-intent prospective families, clients, and partners directly to streamlined conversion pathways on your website.
          </p>
        </div>
      </Section>

      {/* 03. Strategic Inbound Funnel Specimen */}
      <Section background="page">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#55D6BE] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Architectural Workflow
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            The high-intent search conversion pipeline
          </h2>

          <div className="border border-black bg-white p-6 sm:p-8 shadow-[6px_6px_0_0_#000]">
            <div className="space-y-4">
              {/* Funnel Stage 1 */}
              <div className="p-4 border border-black bg-[#F4F4F0] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-[3px_3px_0_0_#000]">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 border border-black bg-[#FF90E8] flex items-center justify-center text-black font-mono text-xs font-bold">
                    01
                  </div>
                  <div>
                    <span className="text-sm font-bold text-black block">High-Intent Demand Discovery</span>
                    <span className="text-xs text-[#2D2A26]">Targeting specific terms (e.g. &apos;independent boarding school admissions&apos;)</span>
                  </div>
                </div>
                <span className="border border-black bg-white px-2.5 py-0.5 font-mono text-xs font-bold text-black self-start sm:self-auto">
                  Search Intent Layer
                </span>
              </div>

              {/* Funnel Stage 2 */}
              <div className="p-4 border border-black bg-[#F4F4F0] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-[3px_3px_0_0_#000]">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 border border-black bg-[#F1F333] flex items-center justify-center text-black font-mono text-xs font-bold">
                    02
                  </div>
                  <div>
                    <span className="text-sm font-bold text-black block">Sub-Second Landing Experience</span>
                    <span className="text-xs text-[#2D2A26]">Dedicated Next.js page answering specific search questions immediately</span>
                  </div>
                </div>
                <span className="border border-black bg-[#55D6BE] px-2.5 py-0.5 font-mono text-xs font-bold text-black self-start sm:self-auto">
                  100% Core Web Vitals
                </span>
              </div>

              {/* Funnel Stage 3 */}
              <div className="p-4 border border-black bg-[#F4F4F0] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-[3px_3px_0_0_#000]">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 border border-black bg-[#55D6BE] flex items-center justify-center text-black font-mono text-xs font-bold">
                    03
                  </div>
                  <div>
                    <span className="text-sm font-bold text-black block">Friction-Free 3-Step Intake</span>
                    <span className="text-xs text-[#2D2A26]">Mobile tour booking or brief submission with zero clutter</span>
                  </div>
                </div>
                <span className="border border-black bg-black text-white px-2.5 py-0.5 font-mono text-xs font-bold self-start sm:self-auto">
                  Conversion Gateway
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 04. Problems Solved */}
      <Section background="surface">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#DC341E] text-white px-3 py-0.5 font-mono text-xs uppercase tracking-wider font-bold shadow-[2px_2px_0_0_#000]">
            Inbound Failures Prevented
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            Why traditional digital marketing wastes budget
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

      {/* 05. Methodology */}
      <Section background="page">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#FF90E8] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Strategic Methodology
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            The 4-stage search acquisition cadence
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

      {/* 06. Deliverables */}
      <Section background="surface">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#F1F333] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Handover Deliverables
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            Growth &amp; visibility specifications
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

      {/* 07. Cross Connections */}
      <Section background="page">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#55D6BE] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            System Coherence
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-6">
            How Marketing &amp; Growth connects with other divisions
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

      {/* 08. FAQ */}
      <Section background="surface">
        <div className="max-w-3xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#F1F333] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Frequently Asked
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            Questions regarding our Marketing &amp; Growth practice
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

      {/* 09. CTA */}
      <Section background="page">
        <div className="max-w-3xl mx-auto text-center border border-black bg-[#FF90E8] p-8 sm:p-12 shadow-[8px_8px_0_0_#000]">
          <span className="inline-block border border-black bg-white px-3 py-1 font-mono text-xs font-bold text-black shadow-[2px_2px_0_0_#000]">
            GROWTH INTAKE // 04 INBOUND
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-black leading-tight">
            Ready to establish search authority?
          </h2>
          <p className="mt-3 text-sm text-[#2D2A26] font-medium leading-relaxed max-w-lg mx-auto">
            Request a comprehensive search visibility audit to discover where your competitors are capturing prospective inquiries.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/connect"
              className="neo-btn text-xs px-6 py-3 w-full sm:w-auto"
            >
              <span>Request visibility diagnostic</span>
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
