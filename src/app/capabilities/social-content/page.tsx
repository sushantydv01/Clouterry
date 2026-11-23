import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { SERVICES } from "@/data/services";
import { ArrowUpRight, Play } from "lucide-react";

export const metadata: Metadata = {
  title: "Social Media & Content — Editorial Video & Narrative Strategy | FIRM",
  description:
    "We produce disciplined editorial video, photography art direction, and high-retention content that protects brand stature.",
};

export default function SocialContentPage() {
  const service = SERVICES.find((s) => s.slug === "social-content") || SERVICES[2];

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
              <span>Explore content retainers</span>
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
          <span className="inline-block border border-black bg-[#F1F333] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Editorial Proposition
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-black leading-tight">
            Social media for serious organizations is the continuous demonstration of institutional craft.
          </h2>
          <p className="mt-4 text-base text-[#2D2A26] leading-relaxed font-sans">
            {service.proposition} We replace desperate algorithmic trend chasing with disciplined editorial storytelling: documentary photography, thoughtful short-form video, and narrative arcs that respect your audience’s intelligence.
          </p>
        </div>
      </Section>

      {/* 03. Visual Demonstration: Editorial Content Framework */}
      <Section background="page">
        <div className="max-w-5xl mx-auto text-left">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-3">
            <div>
              <span className="inline-block border border-black bg-[#FF90E8] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
                Visual Demonstration
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black">
                The 9:16 vertical video &amp; editorial rhythm
              </h2>
            </div>
            <span className="border border-black bg-white px-3 py-1 font-mono text-xs font-bold text-black shadow-[2px_2px_0_0_#000]">
              4K Mastered // Clean Ambient Stems
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Specimen Card 1 */}
            <div className="p-5 border border-black bg-white shadow-[4px_4px_0_0_#000] flex flex-col justify-between">
              <div>
                <div className="relative aspect-[9/14] w-full bg-[#FF90E8] p-4 flex flex-col justify-between overflow-hidden border border-black mb-4 shadow-[2px_2px_0_0_#000]">
                  <div className="flex items-center justify-between">
                    <span className="border border-black bg-black px-2 py-0.5 font-mono text-[10px] text-white font-bold">
                      DOCUMENTARY // 0:45
                    </span>
                    <span className="h-6 w-6 rounded-full bg-white border border-black flex items-center justify-center">
                      <Play size={12} className="text-black fill-black ml-0.5" />
                    </span>
                  </div>
                  <div className="border border-black bg-white p-2 shadow-[1px_1px_0_0_#000]">
                    <span className="font-mono text-[9px] text-[#605C56] block uppercase font-bold">Audio Stem</span>
                    <p className="font-mono text-xs font-bold text-black">
                      Classroom Dialogue &amp; Acoustic Resonance
                    </p>
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold text-black">
                  The Faculty Focus Narrative
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                  Unscripted 45-second micro-essays highlighting master educators explaining complex concepts.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-black text-xs font-mono font-bold text-black">
                Focus: Academic Rigor
              </div>
            </div>

            {/* Specimen Card 2 */}
            <div className="p-5 border border-black bg-white shadow-[4px_4px_0_0_#000] flex flex-col justify-between">
              <div>
                <div className="relative aspect-[9/14] w-full bg-[#F1F333] p-4 flex flex-col justify-between overflow-hidden border border-black mb-4 shadow-[2px_2px_0_0_#000]">
                  <div className="flex items-center justify-between">
                    <span className="border border-black bg-black px-2 py-0.5 font-mono text-[10px] text-white font-bold">
                      ARCHITECTURAL // 0:30
                    </span>
                    <span className="h-6 w-6 rounded-full bg-white border border-black flex items-center justify-center">
                      <Play size={12} className="text-black fill-black ml-0.5" />
                    </span>
                  </div>
                  <div className="border border-black bg-white p-2 shadow-[1px_1px_0_0_#000]">
                    <span className="font-mono text-[9px] text-[#605C56] block uppercase font-bold">Lighting</span>
                    <p className="font-mono text-xs font-bold text-black">
                      Natural North Light &amp; Historic Stone
                    </p>
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold text-black">
                  Campus Space &amp; Atmosphere
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                  Slow-pacing architectural vignettes showing library mornings, laboratory setups, and athletic training.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-black text-xs font-mono font-bold text-black">
                Focus: Environmental Prestige
              </div>
            </div>

            {/* Specimen Card 3 */}
            <div className="p-5 border border-black bg-white shadow-[4px_4px_0_0_#000] flex flex-col justify-between">
              <div>
                <div className="relative aspect-[9/14] w-full bg-[#55D6BE] p-4 flex flex-col justify-between overflow-hidden border border-black mb-4 shadow-[2px_2px_0_0_#000]">
                  <div className="flex items-center justify-between">
                    <span className="border border-black bg-black px-2 py-0.5 font-mono text-[10px] text-white font-bold">
                      STUDENT CRAFT // 0:60
                    </span>
                    <span className="h-6 w-6 rounded-full bg-white border border-black flex items-center justify-center">
                      <Play size={12} className="text-black fill-black ml-0.5" />
                    </span>
                  </div>
                  <div className="border border-black bg-white p-2 shadow-[1px_1px_0_0_#000]">
                    <span className="font-mono text-[9px] text-[#605C56] block uppercase font-bold">Pacing</span>
                    <p className="font-mono text-xs font-bold text-black">
                      Step-by-Step Senior Project Build
                    </p>
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold text-black">
                  Student Excellence In Motion
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                  Behind-the-scenes documentary coverage of student robotics, theatrical rehearsals, and research symposiums.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-black text-xs font-mono font-bold text-black">
                Focus: Authentic Achievement
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 04. Problems Solved */}
      <Section background="surface">
        <div className="max-w-4xl mx-auto text-left">
          <span className="inline-block border border-black bg-[#DC341E] text-white px-3 py-0.5 font-mono text-xs uppercase tracking-wider font-bold shadow-[2px_2px_0_0_#000]">
            Reputation Pitfalls Prevented
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            Why social media degrades institutional stature
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
          <span className="inline-block border border-black bg-[#F1F333] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Production Methodology
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            The 4-stage content governance cycle
          </h2>

          <div className="space-y-4">
            {service.methodology.map((m) => (
              <div
                key={m.step}
                className="flex items-start gap-4 p-5 border border-black bg-white shadow-[4px_4px_0_0_#000]"
              >
                <span className="border border-black bg-[#F1F333] font-mono text-xs font-bold text-black px-2.5 py-1 shrink-0 shadow-[1px_1px_0_0_#000]">
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
          <span className="inline-block border border-black bg-[#55D6BE] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Handover Media Assets
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-black mb-8">
            Monthly editorial deliverables
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
            How Social Media &amp; Content connects with other divisions
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
            Questions regarding our Social Media &amp; Content practice
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
        <div className="max-w-3xl mx-auto text-center border border-black bg-[#F1F333] p-8 sm:p-12 shadow-[8px_8px_0_0_#000]">
          <span className="inline-block border border-black bg-white px-3 py-1 font-mono text-xs font-bold text-black shadow-[2px_2px_0_0_#000]">
            RETAINER INTAKE // 03 CONTENT
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-black leading-tight">
            Ready to elevate your organization’s social content?
          </h2>
          <p className="mt-3 text-sm text-[#2D2A26] font-medium leading-relaxed max-w-lg mx-auto">
            Discuss a quarterly capture cadence and narrative calendar tailored to your school admissions cycle or brand product drops.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/connect"
              className="neo-btn text-xs px-6 py-3 w-full sm:w-auto"
            >
              <span>Inquire about content programs</span>
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
