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
              <span>Explore stewardship retainers</span>
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
            Stewardship Proposition
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-black leading-tight">
            Launching a digital platform is not the finish line. It is day one.
          </h2>
          <p className="mt-4 text-base text-[#2D2A26] leading-relaxed font-sans">
            {service.proposition} Unattended software platforms decay in performance, accumulate security vulnerabilities, and fall behind evolving browser and accessibility standards. We provide the disciplined fractional governance required to protect your digital flagship.
          </p>
        </div>
      </Section>

      {/* 03. Visual Demonstration: Live Stewardship Board Specimen */}
      <Section background="page">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#F1F333] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Operational Dashboard
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            Continuous platform monitoring &amp; SLA oversight
          </h2>

          <div className="border border-black bg-white p-6 sm:p-8 shadow-[6px_6px_0_0_#000]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-black gap-2">
              <span className="font-mono text-xs font-bold text-black">
                STEWARDSHIP STATUS // INSTITUTIONAL FLEET
              </span>
              <span className="inline-flex items-center gap-2 border border-black bg-[#55D6BE] px-3 py-1 font-mono text-xs font-bold text-black shadow-[2px_2px_0_0_#000]">
                <span className="h-2 w-2 rounded-full bg-black" />
                <span>All Managed Systems Operational</span>
              </span>
            </div>

            <div className="pt-6 grid gap-4 sm:grid-cols-3">
              <div className="p-4 border border-black bg-[#F4F4F0] shadow-[3px_3px_0_0_#000]">
                <span className="font-mono text-[10px] text-[#605C56] font-bold block">Edge Uptime (Last 90 Days)</span>
                <span className="font-mono text-2xl font-bold text-black tabular-nums mt-1 block">
                  99.98%
                </span>
                <span className="border border-black bg-white px-1.5 py-0.5 text-[9px] font-mono font-bold text-black inline-block mt-1">
                  Global CDN Monitored
                </span>
              </div>
              <div className="p-4 border border-black bg-[#F4F4F0] shadow-[3px_3px_0_0_#000]">
                <span className="font-mono text-[10px] text-[#605C56] font-bold block">Security Patch Cadence</span>
                <span className="font-mono text-2xl font-bold text-black tabular-nums mt-1 block">
                  Monthly
                </span>
                <span className="border border-black bg-white px-1.5 py-0.5 text-[9px] font-mono font-bold text-black inline-block mt-1">
                  Next.js &amp; Node.js
                </span>
              </div>
              <div className="p-4 border border-black bg-[#F4F4F0] shadow-[3px_3px_0_0_#000]">
                <span className="font-mono text-[10px] text-[#605C56] font-bold block">Support SLA Response</span>
                <span className="font-mono text-2xl font-bold text-black tabular-nums mt-1 block">
                  &lt; 24h
                </span>
                <span className="border border-black bg-[#FF90E8] px-1.5 py-0.5 text-[9px] font-mono font-bold text-black inline-block mt-1">
                  Senior Partner Access
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
            Operational Failures Prevented
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            The hidden risks of unattended digital platforms
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
            Stewardship Methodology
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            The continuous governance cycle
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
            Contractual SLA Assets
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            Annual stewardship deliverables
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
            How Digital Management connects with other divisions
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
            Questions regarding our Digital Management practice
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
        <div className="max-w-3xl mx-auto text-center border border-black bg-[#55D6BE] p-8 sm:p-12 shadow-[8px_8px_0_0_#000]">
          <span className="inline-block border border-black bg-white px-3 py-1 font-mono text-xs font-bold text-black shadow-[2px_2px_0_0_#000]">
            STEWARDSHIP INTAKE // 05 GOVERNANCE
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-black leading-tight">
            Protect your organization’s digital investment
          </h2>
          <p className="mt-3 text-sm text-[#2D2A26] font-medium leading-relaxed max-w-lg mx-auto">
            Discuss an ongoing fractional stewardship retainer with our partners to ensure continuous security, speed, and content governance.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/connect"
              className="neo-btn text-xs px-6 py-3 w-full sm:w-auto"
            >
              <span>Inquire about stewardship retainers</span>
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
