import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import TheThreadMini from "@/components/thread/TheThreadMini";
import { ServiceDivision } from "@/data/services";
import { CAPABILITY_NODES } from "@/lib/threadTheme";
import { ArrowUpRight, Check } from "lucide-react";

interface CapabilityDetailTemplateProps {
  service: ServiceDivision;
  nodeIndex: number;
  propositionTitle: string;
  problemsTitle: string;
  ctaTitle: string;
  ctaCopy: string;
  specialtyBand?: React.ReactNode;
}

/**
 * Refined Midnight Atelier layout for individual `/capabilities/[slug]` routes.
 */
export default function CapabilityDetailTemplate({
  service,
  nodeIndex,
  propositionTitle,
  problemsTitle,
  ctaTitle,
  ctaCopy,
  specialtyBand,
}: CapabilityDetailTemplateProps) {
  const node = CAPABILITY_NODES[nodeIndex] || CAPABILITY_NODES[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#171717] text-[#F8F6EF]">
      {/* 01. Asymmetric Header Paired Directly With Commissioned Specimen Art */}
      <Container size="wide">
        <PageHeader
          kicker={`${service.code} · ${service.timeframe}`}
          title={service.title}
          description={service.subtitle}
          aside={
            <div className="space-y-4">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#F8F6EF]/14 bg-[#121214]">
                <Image
                  src={node.image}
                  alt={`${service.title} editorial paper-cut architectural specimen`}
                  fill
                  priority
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <TheThreadMini activeNodeNum={node.num} showLabels={true} size="sm" />
            </div>
          }
        >
          <div className="flex flex-wrap items-center gap-3.5">
            <Link href="/connect" className="firm-btn-primary text-sm">
              <span>Start a project</span>
              <ArrowUpRight size={15} className="stroke-[2]" />
            </Link>
            <Link href="/capabilities" className="firm-btn-secondary text-sm">
              <span>All five practices</span>
            </Link>
          </div>
        </PageHeader>
      </Container>

      {/* 02. Warm Cream Proposition & Friction Removed */}
      <Section background="warm-paper" containerSize="wide" padding="spacious">
        <div className="grid gap-12 lg:grid-cols-12 items-start text-left">
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-sans font-semibold text-[#3F3D38] block">
              Strategic position
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-[-0.025em] text-[#171717] leading-[1.08]">
              {propositionTitle}
            </h2>
            <p className="text-base sm:text-lg text-[#3F3D38] leading-relaxed font-sans">
              {service.proposition}
            </p>
          </div>

          <div className="lg:col-span-7 lg:border-l lg:border-[#171717]/15 lg:pl-12 space-y-6">
            <h3 className="font-display text-xl sm:text-2xl font-medium text-[#171717]">
              {problemsTitle}
            </h3>
            <div className="divide-y divide-[#171717]/14 border-y border-[#171717]/14">
              {service.problems.map((prob, idx) => (
                <div key={prob.title} className="py-5 grid gap-3 sm:grid-cols-12 items-start">
                  <span className="sm:col-span-2 font-mono text-xs text-[#3F3D38] tabular-nums pt-0.5">
                    0{idx + 1}
                  </span>
                  <div className="sm:col-span-10 space-y-1.5">
                    <h4 className="font-display text-lg font-medium text-[#171717]">
                      {prob.title}
                    </h4>
                    <p className="text-sm sm:text-base text-[#3F3D38] leading-relaxed font-sans">
                      {prob.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 03. Discipline-Specific Specimen Band */}
      {specialtyBand && (
        <Section background="charcoal" containerSize="wide" padding="normal">
          {specialtyBand}
        </Section>
      )}

      {/* 04. 4-Stage Methodology & Complete Deliverables Matrix */}
      <Section background="charcoal-subtle" containerSize="wide" padding="spacious">
        <div className="space-y-16 text-left">
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#F8F6EF]/12">
              <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-[#F8F6EF]">
                Sprint methodology
              </h2>
              <span className="font-mono text-xs text-[#ACA89E]">
                Cadence · {service.timeframe}
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.methodology.map((m) => (
                <div
                  key={m.step}
                  className="border-t border-[#F8F6EF]/18 pt-5 space-y-2.5"
                >
                  <span
                    className="font-mono text-xs tabular-nums block"
                    style={{ color: node.color }}
                  >
                    Stage {m.step}
                  </span>
                  <h3 className="text-lg sm:text-xl font-display font-medium text-[#F8F6EF]">
                    {m.title}
                  </h3>
                  <p className="text-sm text-[#D5D2C7] leading-relaxed font-sans">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 pt-6 border-t border-[#F8F6EF]/12">
            <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-[#F8F6EF]">
              Complete handover specifications
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {service.deliverables.map((deliv) => (
                <div
                  key={deliv.category}
                  className="p-6 sm:p-7 rounded-2xl bg-[#1D1D20] border border-[#F8F6EF]/12 space-y-4"
                >
                  <h3 className="text-sm font-display font-medium text-[#F4CF55] pb-3 border-b border-[#F8F6EF]/12">
                    {deliv.category}
                  </h3>
                  <ul className="space-y-3 text-sm text-[#D5D2C7]">
                    {deliv.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 leading-snug">
                        <span className="mt-0.5 h-4 w-4 rounded-full bg-[#A6D8A1] text-[#171717] inline-flex items-center justify-center shrink-0">
                          <Check size={11} className="stroke-[2.5]" />
                        </span>
                        <span className="text-[#F8F6EF]">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 05. Cross-Discipline Connections & FAQs */}
      <Section background="warm-paper" containerSize="wide" padding="spacious">
        <div className="grid gap-12 lg:grid-cols-12 items-start text-left">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#171717] tracking-tight">
              Connected along The Thread
            </h2>
            <div className="divide-y divide-[#171717]/14 border-y border-[#171717]/14">
              {service.crossConnections.map((conn) => (
                <div key={conn.division} className="py-4 space-y-1">
                  <Link
                    href={`/capabilities/${conn.slug}`}
                    className="font-display text-base font-medium text-[#171717] hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>{conn.division}</span>
                    <ArrowUpRight size={14} />
                  </Link>
                  <p className="text-sm text-[#3F3D38] leading-relaxed font-sans">
                    {conn.relationship}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#171717] tracking-tight">
              Operational clarity
            </h2>
            <div className="divide-y divide-[#171717]/14 border-y border-[#171717]/14">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="py-4 space-y-1.5">
                  <h3 className="font-display text-base font-medium text-[#171717]">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-[#3F3D38] leading-relaxed font-sans">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 06. Closing CTA */}
      <Section background="charcoal" containerSize="wide" padding="normal">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 text-left">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-[-0.025em] text-[#F8F6EF] leading-tight">
              {ctaTitle}
            </h2>
            <p className="text-base sm:text-lg text-[#D5D2C7] leading-relaxed font-sans">
              {ctaCopy}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0">
            <Link href="/connect" className="firm-btn-primary text-sm sm:text-base">
              <span>Start a project</span>
              <ArrowUpRight size={16} className="stroke-[2]" />
            </Link>
            <Link href="/capabilities" className="firm-btn-secondary text-sm sm:text-base">
              <span>Explore disciplines</span>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
