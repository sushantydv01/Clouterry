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
              className="neo-btn-green text-xs px-5 py-2.5 shadow-[3px_3px_0_0_#171717]"
            >
              <span>Initiate engineering sprint</span>
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
          <span className="inline-block border border-[#171717] bg-[#A6D8A1] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            Engineering Proposition
          </span>
          <h2 className="mt-3.5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] leading-tight">
            Your website is your organization’s most valuable digital asset.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3A3835] leading-relaxed font-sans">
            {service.proposition} We build bespoke software on the modern React 19 and Next.js 16 App Router architecture, delivering sub-second load times, 100% Core Web Vitals, and strict WCAG 2.1 AA accessibility.
          </p>
        </div>
      </Section>

      {/* 03. Engineering Showcase: Browser Frame Specimen */}
      <Section background="cream">
        <div className="max-w-5xl mx-auto text-left">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
            <div>
              <span className="inline-block border border-[#171717] bg-[#F4CF55] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
                Visual Demonstration
              </span>
              <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717]">
                Bespoke browser engineering &amp; responsive design
              </h2>
            </div>
            <span className="border border-[#171717] bg-white px-3.5 py-1.5 font-mono text-xs font-bold text-[#171717] shadow-[2px_2px_0_0_#171717]">
              Next.js 16 App Router + Turbopack
            </span>
          </div>

          <div className="mb-8 overflow-hidden border border-[#171717] bg-white p-2 shadow-[6px_6px_0_0_#171717]">
            <Image
              src="/images/web/web-technology-specimen.webp"
              alt="Next.js 16 App Router Server Component Hierarchy"
              width={1200}
              height={675}
              className="w-full h-auto object-cover border border-[#171717]"
            />
          </div>

          <BrowserFrame url="firm.agency/architecture">
            <div className="p-6 sm:p-10 bg-[#F8F6EF] text-left">
              <div className="max-w-2xl">
                <span className="border border-[#171717] bg-[#A6D8A1] px-3 py-0.5 font-mono text-[10px] text-[#171717] font-bold uppercase tracking-wider inline-block shadow-[1px_1px_0_0_#171717]">
                  NEXT.JS APP ROUTER // PERFORMANCE REPORT
                </span>
                <h3 className="mt-3.5 font-display text-2xl sm:text-4xl font-bold text-[#171717]">
                  Sub-second rendering across all edge regions.
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#3A3835] leading-relaxed font-sans">
                  By eliminating client-side hydration bottlenecks and utilizing React 19 Server Components, FIRM web platforms deliver instantaneous page transitions with zero visual layout shift.
                </p>
              </div>

              {/* Metrics Ribbon */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                <div className="p-4 border border-[#171717] bg-white shadow-[3px_3px_0_0_#171717]">
                  <span className="font-mono text-[10px] text-[#6E6A63] font-bold block">Largest Contentful Paint</span>
                  <span className="font-mono text-2xl font-bold text-[#171717] tabular-nums mt-1 block">
                    0.48s
                  </span>
                  <span className="border border-[#171717] bg-[#A6D8A1] px-1.5 py-0.5 text-[9px] font-mono font-bold text-[#171717] inline-block mt-1">
                    Google Good (&lt; 2.5s)
                  </span>
                </div>
                <div className="p-4 border border-[#171717] bg-white shadow-[3px_3px_0_0_#171717]">
                  <span className="font-mono text-[10px] text-[#6E6A63] font-bold block">Cumulative Layout Shift</span>
                  <span className="font-mono text-2xl font-bold text-[#171717] tabular-nums mt-1 block">
                    0.00
                  </span>
                  <span className="border border-[#171717] bg-[#A6D8A1] px-1.5 py-0.5 text-[9px] font-mono font-bold text-[#171717] inline-block mt-1">
                    Zero visual jump
                  </span>
                </div>
                <div className="p-4 border border-[#171717] bg-white shadow-[3px_3px_0_0_#171717]">
                  <span className="font-mono text-[10px] text-[#6E6A63] font-bold block">Accessibility Score</span>
                  <span className="font-mono text-2xl font-bold text-[#171717] tabular-nums mt-1 block">
                    100%
                  </span>
                  <span className="border border-[#171717] bg-[#A6D8A1] px-1.5 py-0.5 text-[9px] font-mono font-bold text-[#171717] inline-block mt-1">
                    WCAG 2.1 AA
                  </span>
                </div>
                <div className="p-4 border border-[#171717] bg-white shadow-[3px_3px_0_0_#171717]">
                  <span className="font-mono text-[10px] text-[#6E6A63] font-bold block">Edge Build Time</span>
                  <span className="font-mono text-2xl font-bold text-[#171717] tabular-nums mt-1 block">
                    280ms
                  </span>
                  <span className="border border-[#171717] bg-[#F4CF55] px-1.5 py-0.5 text-[9px] font-mono font-bold text-[#171717] inline-block mt-1">
                    Turbopack
                  </span>
                </div>
              </div>
            </div>
          </BrowserFrame>
        </div>
      </Section>

      {/* 04. Problems Solved */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#DC341E] text-white px-3.5 py-1 font-mono text-xs uppercase tracking-wider font-bold shadow-[2px_2px_0_0_#171717]">
            Engineering Failures Prevented
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-8">
            Why legacy software stacks fail modern organizations
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
          <span className="inline-block border border-[#171717] bg-[#A6D8A1] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            Engineering Cadence
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-8">
            The 4-stage technical delivery cycle
          </h2>

          <div className="space-y-4">
            {service.methodology.map((m) => (
              <div
                key={m.step}
                className="flex items-start gap-4 p-5 border border-[#171717] bg-white shadow-[4px_4px_0_0_#171717]"
              >
                <span className="border border-[#171717] bg-[#A6D8A1] font-mono text-xs font-bold text-[#171717] px-2.5 py-1 shrink-0 shadow-[1px_1px_0_0_#171717]">
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
            Tangible Code Assets
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-8">
            Handover specifications &amp; codebase deliverables
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
          <span className="inline-block border border-[#171717] bg-[#ED83A8] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            System Coherence
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-6">
            How Web &amp; Technology connects with the other divisions
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

      {/* 08. Relevant Case Study */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#A6D8A1] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            Proven Practice
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-6">
            Representative case studies featuring this division
          </h2>

          <div className="p-6 border border-[#171717] bg-[#F8F6EF] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-[4px_4px_0_0_#171717]">
            <div>
              <span className="border border-[#171717] bg-[#A6D8A1] px-2.5 py-0.5 font-mono text-[10px] text-[#171717] uppercase font-bold inline-block mb-1 shadow-[1px_1px_0_0_#171717]">
                Healthcare &amp; Medical // Architecture Study
              </span>
              <h3 className="mt-1 font-display text-xl font-bold text-[#171717]">
                Aether Health Clinical Platform
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#3A3835] max-w-xl font-sans">
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
      <Section background="cream">
        <div className="max-w-3xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#F4CF55] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            Frequently Asked
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-8">
            Questions regarding our Web &amp; Technology practice
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

      {/* 10. CTA in Fresh Garden Green */}
      <Section background="green">
        <div className="max-w-3xl mx-auto text-center border border-[#171717] bg-[#A6D8A1] p-8 sm:p-14 shadow-[8px_8px_0_0_#171717]">
          <span className="inline-block border border-[#171717] bg-white px-3.5 py-1 font-mono text-xs font-bold text-[#171717] shadow-[2px_2px_0_0_#171717]">
            COMMISSION INTAKE // 02 WEB
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold text-[#171717] leading-tight">
            Ready to build an institutional web flagship?
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#171717] font-medium leading-relaxed max-w-lg mx-auto font-sans">
            Schedule a technical consultation with our engineering partners to evaluate your current architecture, Core Web Vitals, and migration roadmap.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/connect"
              className="neo-btn text-xs px-6 py-3 w-full sm:w-auto shadow-[4px_4px_0_0_#171717]"
            >
              <span>Submit engineering brief</span>
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
