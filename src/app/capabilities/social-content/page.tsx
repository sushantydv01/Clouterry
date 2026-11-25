import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import TheThreadMini from "@/components/thread/TheThreadMini";
import { SERVICES } from "@/data/services";
import { ArrowUpRight, Check, Play } from "lucide-react";

export const metadata: Metadata = {
  title: "Social Media & Content — Editorial Video & Narrative Strategy | FIRM",
  description:
    "We produce disciplined editorial video, photography art direction, and high-retention content that protects brand stature.",
};

export default function SocialContentPage() {
  const service = SERVICES.find((s) => s.slug === "social-content") || SERVICES[2];

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
            <TheThreadMini activeNodeNum="03" showLabels={true} size="md" />
          </div>
        </PageHeader>
      </Container>

      {/* 02. Core Editorial Proposition */}
      <Section background="black" padding="tight">
        <div className="max-w-4xl mx-auto text-left gumroad-card p-6 sm:p-10 border-white/10 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FFB800]/20 border border-[#FFB800]/30 text-xs font-semibold text-[#FFB800]">
            Editorial Proposition
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Content is institutional proof, not ephemeral social filler.
          </h2>
          <p className="text-base text-white/70 leading-relaxed font-sans">
            {service.proposition} Disposable TikTok trends and low-effort posts erode the stature of serious institutions. We direct cinematic documentary video, long-form monographs, and disciplined content cadences that build enduring intellectual equity.
          </p>
        </div>
      </Section>

      {/* 03. Problems Eliminated */}
      <Section background="black" padding="normal">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Why trend-chasing agencies degrade institutional trust
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

      {/* 04. Video & Editorial Showcase */}
      <Section background="black" padding="normal">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Documentary Film &amp; Field Monograph Architecture
            </h2>
          </div>

          <div className="gumroad-card p-8 sm:p-12 text-center space-y-6 bg-gradient-to-b from-[#18181B] to-[#121214]">
            <div className="w-16 h-16 rounded-full bg-[#FFB800] text-black flex items-center justify-center mx-auto shadow-lg">
              <Play size={24} className="fill-black ml-1" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Cinematic Documentary Production
            </h3>
            <p className="text-sm sm:text-base text-white/70 max-w-lg mx-auto leading-relaxed">
              We interview founders, senior faculty, and clinicians on location. Color-graded, sound-designed narratives engineered for web flagships and targeted distribution.
            </p>
          </div>
        </div>
      </Section>

      {/* 05. Deliverables */}
      <Section background="black" padding="normal">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Complete content specifications
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
              How Social &amp; Content connects along The Thread
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
          <span className="inline-block px-3 py-1 rounded-full bg-[#FFB800]/20 border border-[#FFB800]/30 text-xs font-semibold text-[#FFB800]">
            Direct Inquiry &bull; Social &amp; Content
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
            Elevate your content to match your institutional caliber.
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-lg mx-auto font-sans">
            Cinematic storytelling and authoritative thought leadership without agency gimmicks.
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
