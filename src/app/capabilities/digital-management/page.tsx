import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { SERVICES } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Management & Consulting — Platform Stewardship | FIRM",
  description:
    "Fractional digital leadership, continuous platform maintenance, and technical governance for organizations where uptime and reputation matter.",
};

export default function DigitalManagementPage() {
  const service = SERVICES.find((s) => s.slug === "digital-management") || SERVICES[4];

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
              <span>Explore stewardship retainers</span>
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
            Stewardship Proposition
          </span>
          <h2 className="mt-3.5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] leading-tight">
            Launching a digital platform is not the finish line. It is day one.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3A3835] leading-relaxed font-sans">
            {service.proposition} Unattended software platforms decay in performance, accumulate security vulnerabilities, and fall behind evolving browser and accessibility standards. We provide the disciplined fractional governance required to protect your digital flagship.
          </p>
        </div>
      </Section>

      {/* 03. Visual Demonstration: Live Stewardship Board Specimen */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-[#171717] bg-[#F4CF55] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
            Operational Dashboard
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-8">
            Continuous platform monitoring &amp; SLA oversight
          </h2>

          <div className="border border-[#171717] bg-white p-6 sm:p-9 shadow-[6px_6px_0_0_#171717]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-[#171717] gap-3">
              <span className="font-mono text-xs font-bold text-[#171717]">
                STEWARDSHIP STATUS // INSTITUTIONAL FLEET
              </span>
              <span className="inline-flex items-center gap-2 border border-[#171717] bg-[#A6D8A1] px-3.5 py-1 font-mono text-xs font-bold text-[#171717] shadow-[2px_2px_0_0_#171717]">
                <span className="h-2 w-2 rounded-full bg-[#171717]" />
                <span>All Managed Systems Operational</span>
              </span>
            </div>

            <div className="pt-6 grid gap-4 sm:grid-cols-3">
              <div className="p-4 border border-[#171717] bg-[#F8F6EF] shadow-[3px_3px_0_0_#171717]">
                <span className="font-mono text-[10px] text-[#6E6A63] font-bold block">Edge Uptime (Last 90 Days)</span>
                <span className="font-mono text-2xl font-bold text-[#171717] tabular-nums mt-1 block">
                  99.98%
                </span>
                <span className="border border-[#171717] bg-white px-2 py-0.5 text-[9px] font-mono font-bold text-[#171717] inline-block mt-1">
                  Global CDN Monitored
                </span>
              </div>
              <div className="p-4 border border-[#171717] bg-[#F8F6EF] shadow-[3px_3px_0_0_#171717]">
                <span className="font-mono text-[10px] text-[#6E6A63] font-bold block">Security Patch Cadence</span>
                <span className="font-mono text-2xl font-bold text-[#171717] tabular-nums mt-1 block">
                  Monthly
                </span>
                <span className="border border-[#171717] bg-white px-2 py-0.5 text-[9px] font-mono font-bold text-[#171717] inline-block mt-1">
                  Next.js &amp; Node.js
                </span>
              </div>
              <div className="p-4 border border-[#171717] bg-[#F8F6EF] shadow-[3px_3px_0_0_#171717]">
                <span className="font-mono text-[10px] text-[#6E6A63] font-bold block">Support SLA Response</span>
                <span className="font-mono text-2xl font-bold text-[#171717] tabular-nums mt-1 block">
                  &lt; 24h
                </span>
                <span className="border border-[#171717] bg-[#ED83A8] px-2 py-0.5 text-[9px] font-mono font-bold text-[#171717] inline-block mt-1">
                  Senior Partner Access
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
            Operational Failures Prevented
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-8">
            The hidden risks of unattended digital platforms
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
            Stewardship Methodology
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-8">
            The continuous governance cycle
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
            Contractual SLA Assets
          </span>
          <h2 className="mt-2.5 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-8">
            Annual stewardship deliverables
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
            How Digital Management connects with other divisions
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
            Questions regarding our Digital Management practice
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

      {/* 09. CTA in Fresh Garden Green */}
      <Section background="green">
        <div className="max-w-3xl mx-auto text-center border border-[#171717] bg-[#A6D8A1] p-8 sm:p-14 shadow-[8px_8px_0_0_#171717]">
          <span className="inline-block border border-[#171717] bg-white px-3.5 py-1 font-mono text-xs font-bold text-[#171717] shadow-[2px_2px_0_0_#171717]">
            STEWARDSHIP INTAKE // 05 GOVERNANCE
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold text-[#171717] leading-tight">
            Protect your organization’s digital investment
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#171717] font-medium leading-relaxed max-w-lg mx-auto font-sans">
            Discuss an ongoing fractional stewardship retainer with our partners to ensure continuous security, speed, and content governance.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/connect"
              className="neo-btn text-xs px-6 py-3 w-full sm:w-auto shadow-[4px_4px_0_0_#171717]"
            >
              <span>Inquire about stewardship retainers</span>
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
