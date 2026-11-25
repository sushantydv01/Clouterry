import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import TheThreadMini from "@/components/thread/TheThreadMini";
import { SERVICES } from "@/data/services";
import { ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Brand & Identity — Strategic Positioning & Visual Systems | FIRM",
  description:
    "We engineer enduring brand platforms, typographic systems, and digital design tokens that establish immediate market authority.",
};

export default function BrandIdentityPage() {
  const service = SERVICES.find((s) => s.slug === "brand-identity") || SERVICES[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-white">
      {/* 01. Hero Header */}
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
              className="gumroad-btn-pink text-xs sm:text-sm font-bold !py-2.5 !px-5"
            >
              <span>Start a project</span>
              <ArrowUpRight size={14} className="stroke-[2.5]" />
            </Link>
            <span className="px-3.5 py-1 rounded-full bg-[#18181B] border border-white/15 text-xs text-white/70">
              Cadence: {service.timeframe}
            </span>
          </div>

          <div className="mt-8 max-w-md">
            <TheThreadMini activeNodeNum="01" showLabels={true} size="md" />
          </div>
        </PageHeader>
      </Container>

      {/* 02. Core Strategic Proposition */}
      <Section background="black" padding="tight">
        <div className="max-w-4xl mx-auto text-left gumroad-card p-6 sm:p-10 border-white/10 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FF5C40]/20 border border-[#FF5C40]/30 text-xs font-semibold text-[#FF5C40]">
            Strategic Proposition
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            A brand is the visual standard governing every organizational interaction.
          </h2>
          <p className="text-base text-white/70 leading-relaxed font-sans">
            {service.proposition} When an institution&apos;s visual presentation lacks craft or coherence, prospective clients, students, or partners judge its core capability by its weakest touchpoint.
          </p>
        </div>
      </Section>

      {/* 03. Problems Addressed */}
      <Section background="black" padding="normal">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              The cost of visual fragmentation
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {service.problems.map((prob) => (
              <div
                key={prob.title}
                className="gumroad-card p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-display font-bold text-white">
                    {prob.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                    {prob.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 04. Visual Specimen: Typography & Tokens */}
      <Section background="black" padding="normal">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Typographic specimens &amp; token discipline
            </h2>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#141416] p-2">
            <Image
              src="/images/brand/brand-identity-specimen.webp"
              alt="FIRM Brand & Identity Architecture Specimen"
              width={1200}
              height={675}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          <div className="gumroad-card p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-white/10 gap-2 text-xs">
              <span className="text-white/90 font-bold">
                Type Specimen &bull; Scale Architecture
              </span>
              <span className="text-white/40">
                Space Grotesk / Inter / JetBrains Mono
              </span>
            </div>

            <div>
              <span className="text-[11px] text-white/50 font-medium block mb-1">
                Display Headline (Space Grotesk, 600 Weight)
              </span>
              <p className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.04]">
                Architectural integrity in digital form.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-[11px] text-white/50 font-medium block mb-1">
                Interface Body (Inter, 400 Weight)
              </span>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl">
                Typography establishes the subconscious authority of your organization. When optical spacing, tabular figures, and hair-line precision are calculated mathematically, the reader perceives calm competence.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 05. 4-Stage Cadence */}
      <Section background="black" padding="normal">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              The 4-stage identity development cadence
            </h2>
          </div>

          <div className="space-y-4">
            {service.methodology.map((m) => (
              <div
                key={m.step}
                className="gumroad-card p-5 sm:p-6 flex items-start gap-4"
              >
                <span className="px-2.5 py-1 rounded-md bg-[#FF5C40] text-black font-display text-xs font-bold shrink-0">
                  {m.step}
                </span>
                <div>
                  <h3 className="text-base font-display font-bold text-white">
                    {m.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 06. Deliverables */}
      <Section background="black" padding="normal">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Complete identity specifications
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {service.deliverables.map((deliv) => (
              <div
                key={deliv.category}
                className="gumroad-card p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xs font-bold text-white pb-2 border-b border-white/10">
                    {deliv.category}
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-xs text-white/80">
                    {deliv.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#10B981] text-black flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">
                          <Check size={11} className="stroke-[3]" />
                        </div>
                        <span className="font-medium text-white/90">{it}</span>
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
      <Section background="black" padding="normal">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              How Brand &amp; Identity connects along The Thread
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.crossConnections.map((conn) => (
              <div
                key={conn.division}
                className="gumroad-card p-5 space-y-2"
              >
                <Link
                  href={`/capabilities/${conn.slug}`}
                  className="font-display text-base font-bold text-white hover:text-[#FF90E8] inline-flex items-center gap-1 transition-colors"
                >
                  <span>{conn.division}</span>
                  <ArrowUpRight size={13} />
                </Link>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                  {conn.relationship}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 08. Closing CTA */}
      <Section background="black" padding="spacious">
        <div className="max-w-3xl mx-auto text-center space-y-6 gumroad-card p-8 sm:p-14 border-white/10">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FF5C40]/20 border border-[#FF5C40]/30 text-xs font-semibold text-[#FF5C40]">
            Direct Inquiry &bull; Brand &amp; Identity
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
            Ready to establish an enduring brand standard?
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-lg mx-auto font-sans">
            We partner with a limited roster of organizations each quarter. Initiate a briefing to discuss your positioning, scope, and target launch timeframe.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/connect"
              className="gumroad-btn-pink text-xs sm:text-sm font-bold !py-3 !px-6 w-full sm:w-auto"
            >
              <span>Start a project</span>
              <ArrowUpRight size={14} className="stroke-[2.5]" />
            </Link>
            <Link
              href="/capabilities"
              className="gumroad-btn-secondary text-xs sm:text-sm !py-3 !px-6 w-full sm:w-auto"
            >
              Explore all disciplines
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
