import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import BrowserFrame from "@/components/ui/BrowserFrame";
import { SERVICES } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Web & Technology — Next.js App Router Engineering | FIRM",
  description:
    "We engineer ultra-fast, accessible, bespoke web platforms using Next.js 16, React 19, and Tailwind CSS. Built for institutions and brands where performance matters.",
};

export default function WebTechnologyPage() {
  const service = SERVICES.find((s) => s.slug === "web-technology") || SERVICES[1];

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
              <span>Initiate engineering sprint</span>
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
          <span className="inline-block border border-black bg-[#55D6BE] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Engineering Proposition
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-black leading-tight">
            Your website is your organization’s most valuable digital asset.
          </h2>
          <p className="mt-4 text-base text-[#2D2A26] leading-relaxed font-sans">
            {service.proposition} We build bespoke software on the modern React 19 and Next.js 16 App Router architecture, delivering sub-second load times, 100% Core Web Vitals, and strict WCAG 2.1 AA accessibility.
          </p>
        </div>
      </Section>

      {/* 03. Engineering Showcase: Browser Frame Specimen */}
      <Section background="page">
        <div className="max-w-5xl mx-auto text-left">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-3">
            <div>
              <span className="inline-block border border-black bg-[#F1F333] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
                Visual Demonstration
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black">
                Bespoke browser engineering &amp; responsive design
              </h2>
            </div>
            <span className="border border-black bg-white px-3 py-1 font-mono text-xs font-bold text-black shadow-[2px_2px_0_0_#000]">
              Next.js 16 App Router + Turbopack
            </span>
          </div>

          <div className="mb-8 overflow-hidden border border-black bg-white p-2 shadow-[6px_6px_0_0_#000]">
            <Image
              src="/images/web/web-technology-specimen.webp"
              alt="Next.js 16 App Router Server Component Hierarchy"
              width={1200}
              height={675}
              className="w-full h-auto object-cover border border-black"
            />
          </div>

          <BrowserFrame url="firm.agency/architecture">
            <div className="p-6 sm:p-10 bg-[#F4F4F0] text-left">
              <div className="max-w-2xl">
                <span className="border border-black bg-[#55D6BE] px-2.5 py-0.5 font-mono text-[10px] text-black font-bold uppercase tracking-wider inline-block">
                  NEXT.JS APP ROUTER // PERFORMANCE REPORT
                </span>
                <h3 className="mt-3 font-display text-2xl sm:text-4xl font-bold text-black">
                  Sub-second rendering across all edge regions.
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                  By eliminating client-side hydration bottlenecks and utilizing React 19 Server Components, FIRM web platforms deliver instantaneous page transitions with zero visual layout shift.
                </p>
              </div>

              {/* Metrics Ribbon */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 border border-black bg-white shadow-[3px_3px_0_0_#000]">
                  <span className="font-mono text-[10px] text-[#605C56] font-bold block">Largest Contentful Paint</span>
                  <span className="font-mono text-2xl font-bold text-black tabular-nums mt-1 block">
                    0.48s
                  </span>
                  <span className="border border-black bg-[#55D6BE] px-1.5 py-0.5 text-[9px] font-mono font-bold text-black inline-block mt-1">
                    Google Good (&lt; 2.5s)
                  </span>
                </div>
                <div className="p-4 border border-black bg-white shadow-[3px_3px_0_0_#000]">
                  <span className="font-mono text-[10px] text-[#605C56] font-bold block">Cumulative Layout Shift</span>
                  <span className="font-mono text-2xl font-bold text-black tabular-nums mt-1 block">
                    0.00
                  </span>
                  <span className="border border-black bg-[#55D6BE] px-1.5 py-0.5 text-[9px] font-mono font-bold text-black inline-block mt-1">
                    Zero visual jump
                  </span>
                </div>
                <div className="p-4 border border-black bg-white shadow-[3px_3px_0_0_#000]">
                  <span className="font-mono text-[10px] text-[#605C56] font-bold block">Accessibility Score</span>
                  <span className="font-mono text-2xl font-bold text-black tabular-nums mt-1 block">
                    100%
                  </span>
                  <span className="border border-black bg-[#55D6BE] px-1.5 py-0.5 text-[9px] font-mono font-bold text-black inline-block mt-1">
                    WCAG 2.1 AA
                  </span>
                </div>
                <div className="p-4 border border-black bg-white shadow-[3px_3px_0_0_#000]">
                  <span className="font-mono text-[10px] text-[#605C56] font-bold block">Edge Build Time</span>
                  <span className="font-mono text-2xl font-bold text-black tabular-nums mt-1 block">
                    280ms
                  </span>
                  <span className="border border-black bg-[#F1F333] px-1.5 py-0.5 text-[9px] font-mono font-bold text-black inline-block mt-1">
                    Turbopack
                  </span>
                </div>
              </div>
            </div>
          </BrowserFrame>
        </div>
      </Section>

      {/* 04. Problems Solved */}
      <Section background="surface">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#DC341E] text-white px-3 py-0.5 font-mono text-xs uppercase tracking-wider font-bold shadow-[2px_2px_0_0_#000]">
            Engineering Failures Prevented
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            Why legacy software stacks fail modern organizations
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
          <span className="inline-block border border-black bg-[#55D6BE] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Engineering Cadence
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            The 4-stage technical delivery cycle
          </h2>

          <div className="space-y-4">
            {service.methodology.map((m) => (
              <div
                key={m.step}
                className="flex items-start gap-4 p-5 border border-black bg-white shadow-[4px_4px_0_0_#000]"
              >
                <span className="border border-black bg-[#55D6BE] font-mono text-xs font-bold text-black px-2.5 py-1 shrink-0 shadow-[1px_1px_0_0_#000]">
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
            Tangible Code Assets
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            Handover specifications &amp; codebase deliverables
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
          <span className="inline-block border border-black bg-[#FF90E8] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            System Coherence
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-6">
            How Web &amp; Technology connects with the other divisions
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

      {/* 08. Relevant Case Study */}
      <Section background="surface">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#55D6BE] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Proven Practice
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-6">
            Representative case studies featuring this division
          </h2>

          <div className="p-6 border border-black bg-[#F4F4F0] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-[4px_4px_0_0_#000]">
            <div>
              <span className="border border-black bg-[#55D6BE] px-2 py-0.5 font-mono text-[10px] text-black uppercase font-bold inline-block mb-1">
                Healthcare &amp; Medical // Architecture Study
              </span>
              <h3 className="mt-1 font-display text-xl font-bold text-black">
                Aether Health Clinical Platform
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#2D2A26] max-w-xl">
                Next.js App Router patient gateway, HIPAA-conscious intake workflows, and sub-second provider directory.
              </p>
            </div>
            <Link
              href="/work/aether-health"
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
            Questions regarding our Web &amp; Technology practice
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

      {/* 10. CTA */}
      <Section background="surface">
        <div className="max-w-3xl mx-auto text-center border border-black bg-[#55D6BE] p-8 sm:p-12 shadow-[8px_8px_0_0_#000]">
          <span className="inline-block border border-black bg-white px-3 py-1 font-mono text-xs font-bold text-black shadow-[2px_2px_0_0_#000]">
            COMMISSION INTAKE // 02 WEB
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-black leading-tight">
            Ready to build an institutional web flagship?
          </h2>
          <p className="mt-3 text-sm text-[#2D2A26] font-medium leading-relaxed max-w-lg mx-auto">
            Schedule a technical consultation with our engineering partners to evaluate your current architecture, Core Web Vitals, and migration roadmap.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/connect"
              className="neo-btn text-xs px-6 py-3 w-full sm:w-auto"
            >
              <span>Submit engineering brief</span>
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
