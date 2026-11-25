import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import TheThreadMini from "@/components/thread/TheThreadMini";
import { SERVICES } from "@/data/services";
import { ArrowUpRight, Check, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing & Growth — Search Visibility & Conversion Architecture | FIRM",
  description:
    "We connect high-intent demand to your digital flagship through technical SEO, disciplined search advertising, and conversion rate architecture.",
};

export default function MarketingGrowthPage() {
  const service = SERVICES.find((s) => s.slug === "marketing-growth") || SERVICES[3];

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
            <TheThreadMini activeNodeNum="04" showLabels={true} size="md" />
          </div>
        </PageHeader>
      </Container>

      {/* 02. Core Growth Proposition */}
      <Section background="black" padding="tight">
        <div className="max-w-4xl mx-auto text-left gumroad-card p-6 sm:p-10 border-white/10 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-[#10B981]/20 border border-[#10B981]/30 text-xs font-semibold text-[#10B981]">
            Growth Proposition
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Visibility is an engineering challenge, not an ad spend competition.
          </h2>
          <p className="text-base text-white/70 leading-relaxed font-sans">
            {service.proposition} Throwing money at paid ads without optimizing page speed, schema markup, and admissions funnels produces high bounce rates. We build organic discovery and conversion architecture directly into the web platform.
          </p>
        </div>
      </Section>

      {/* 03. Problems Eliminated */}
      <Section background="black" padding="normal">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Why traditional agency retainers burn budget
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

      {/* 04. Growth Architecture Showcase */}
      <Section background="black" padding="normal">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Technical SEO &amp; Inbound Conversion Funnels
            </h2>
          </div>

          <div className="gumroad-card p-8 sm:p-12 space-y-6 bg-gradient-to-b from-[#18181B] to-[#121214]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#10B981] text-black flex items-center justify-center font-bold">
                <TrendingUp size={20} />
              </div>
              <div>
                <h4 className="font-display text-xl font-bold text-white">Programmatic SEO Architecture</h4>
                <p className="text-xs text-white/50">Semantic JSON-LD • Static HTML Pre-rendering • Edge XML Sitemaps</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl">
              We structure pages with rigorous schema markup, canonical management, and sub-second Time to First Byte (TTFB). Search engines reward clean code with superior organic indexing.
            </p>
          </div>
        </div>
      </Section>

      {/* 05. Deliverables */}
      <Section background="black" padding="normal">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Complete marketing specifications
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

      {/* 06. Cross-Division Connections */}
      <Section background="black" padding="normal">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              How Marketing &amp; Growth connects along The Thread
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

      {/* 07. Closing CTA */}
      <Section background="black" padding="spacious">
        <div className="max-w-3xl mx-auto text-center space-y-6 gumroad-card p-8 sm:p-14 border-white/10">
          <span className="inline-block px-3 py-1 rounded-full bg-[#10B981]/20 border border-[#10B981]/30 text-xs font-semibold text-[#10B981]">
            Direct Inquiry &bull; Marketing &amp; Growth
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
            Stop burning ad spend on broken funnels.
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-lg mx-auto font-sans">
            Engineered inbound pipelines designed for long-term compound growth.
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
