import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import {
  VignetteArchitecturalCoherence,
  VignetteSeniorEngagement,
  VignetteEnduringUtility,
} from "@/components/illustrations/StudioTenetsVignettes";
import {
  DoodleBadgeStamp,
  DoodleHandStar,
  DoodleWavyLine,
} from "@/components/illustrations/ThreadDoodles";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Firm — Philosophy, Methodology & Leadership | FIRM",
  description:
    "Learn about FIRM's founding philosophy, architectural methodology, and why we believe digital presence requires integrated stewardship.",
};

export default function FirmPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-white">
      <Container>
        <PageHeader
          badge="ABOUT"
          eyebrow="Identity &amp; Purpose"
          title="Built to eliminate digital fragmentation."
          description="We are an independent digital presence and growth firm. We partner with ambitious brands, independent academies, and clinical practices to engineer digital systems that compound in institutional value."
        />
      </Container>

      {/* Hero Visual: Studio Atelier */}
      <section className="pb-16 max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <div className="rounded-3xl border border-white/10 bg-[#141416] p-3 sm:p-4 shadow-2xl space-y-3">
          <div className="overflow-hidden rounded-2xl relative aspect-[16/9]">
            <Image
              src="/images/editorial/atelier-hero.webp"
              alt="FIRM Studio Atelier: craftsmanship meets digital systems engineering"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="p-4 text-left flex items-center justify-between text-xs text-white/70 border-t border-white/10 bg-[#18181B] rounded-xl">
            <div className="flex items-center gap-2">
              <DoodleBadgeStamp text="ATELIER CADENCE" color="#FFC700" />
              <span className="font-semibold text-white/90">Single senior accountability</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white font-mono text-[11px]">
              Zero Vendor Seams
            </span>
          </div>
        </div>
      </section>

      {/* Operating Philosophy on Warm Paper for Rich Visual Rhythm */}
      <Section id="philosophy" background="warm-paper" padding="spacious">
        <div className="mx-auto max-w-5xl text-left space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-black/10">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <DoodleBadgeStamp text="OPERATING PHILOSOPHY" color="#FFC700" />
                <DoodleHandStar color="#FF90E8" size={20} />
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#121214] leading-tight">
                Three commitments that guide our studio
              </h2>
            </div>
            <span className="text-xs font-mono font-bold text-black/60">
              CORE TENETS &bull; 2026—2036
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3 pt-2">
            <div className="firm-warm-card p-6 sm:p-8 space-y-4 border-2 border-black/10 hover:border-black/30 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-black/10">
                  <span className="font-mono text-xs font-bold text-[#FF5C40]">01 &bull; COHERENCE</span>
                  <VignetteArchitecturalCoherence size={42} />
                </div>
                <h3 className="text-xl font-display font-bold text-[#121214] leading-snug">
                  Brand, code, and content operate as one system
                </h3>
                <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-sans">
                  When designers and developers work in the same repository, websites load fast and layouts hold together under production traffic.
                </p>
              </div>
            </div>

            <div className="firm-warm-card p-6 sm:p-8 space-y-4 border-2 border-black/10 hover:border-black/30 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-black/10">
                  <span className="font-mono text-xs font-bold text-[#FFB800]">02 &bull; ENDURING CRAFT</span>
                  <VignetteEnduringUtility size={42} />
                </div>
                <h3 className="text-xl font-display font-bold text-[#121214] leading-snug">
                  Clean typography outlasts passing design fads
                </h3>
                <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-sans">
                  We prioritize clear typography, calibrated spacing, and semantic code over transient visual gimmicks. A platform should last ten years without feeling dated.
                </p>
              </div>
            </div>

            <div className="firm-warm-card p-6 sm:p-8 space-y-4 border-2 border-black/10 hover:border-black/30 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-black/10">
                  <span className="font-mono text-xs font-bold text-[#3875FF]">03 &bull; SENIOR PARTNERS</span>
                  <VignetteSeniorEngagement size={42} />
                </div>
                <h3 className="text-xl font-display font-bold text-[#121214] leading-snug">
                  Direct partner execution on every project
                </h3>
                <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-sans">
                  Senior partners lead each sprint from diagnostic audit to live deployment. We eliminate account executive layers and junior handoffs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 4-Stage Cadence */}
      <Section id="approach" background="black" padding="normal">
        <div className="mx-auto max-w-4xl text-left space-y-8">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              A 4-Stage Architectural Cadence
            </h2>
            <p className="mt-2 text-base text-white/70 leading-relaxed font-sans">
              We work on fixed, transparent weekly sprints rather than open-ended, billable hours:
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <div className="gumroad-card p-6 flex items-start gap-4">
              <span className="px-3 py-1 rounded-lg bg-[#FF5C40] text-black font-display font-bold text-base shrink-0">
                01
              </span>
              <div>
                <h4 className="text-base sm:text-lg font-display font-bold text-white">Diagnostic &amp; Surface Audit (Days 1–7)</h4>
                <p className="mt-1 text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                  Forensic audit of your current digital footprint: Core Web Vitals profiling, typography audit, information architecture mapping, and stakeholder interviews.
                </p>
              </div>
            </div>

            <div className="gumroad-card p-6 flex items-start gap-4">
              <span className="px-3 py-1 rounded-lg bg-[#3875FF] text-black font-display font-bold text-base shrink-0">
                02
              </span>
              <div>
                <h4 className="text-base sm:text-lg font-display font-bold text-white">Brand &amp; Technical Blueprint (Days 8–18)</h4>
                <p className="mt-1 text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                  Establishing living design tokens, responsive layout wireframes, content hierarchies, and Next.js 16 App Router architectural schemas.
                </p>
              </div>
            </div>

            <div className="gumroad-card p-6 flex items-start gap-4">
              <span className="px-3 py-1 rounded-lg bg-[#FFB800] text-black font-display font-bold text-base shrink-0">
                03
              </span>
              <div>
                <h4 className="text-base sm:text-lg font-display font-bold text-white">Engineering &amp; Production (Days 19–40)</h4>
                <p className="mt-1 text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                  Full Next.js Server Component development, documentary editorial content production, accessibility screening (WCAG 2.1 AA), and zero-defect QA.
                </p>
              </div>
            </div>

            <div className="gumroad-card p-6 flex items-start gap-4">
              <span className="px-3 py-1 rounded-lg bg-[#10B981] text-black font-display font-bold text-base shrink-0">
                04
              </span>
              <div>
                <h4 className="text-base sm:text-lg font-display font-bold text-white">Deployment &amp; Ongoing Stewardship (Day 45+)</h4>
                <p className="mt-1 text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                  Staged DNS cutover, global edge CDN caching, search console indexing, and transition to our continuous fractional SLA stewardship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section background="black" padding="spacious">
        <div className="max-w-3xl mx-auto text-center space-y-6 gumroad-card p-8 sm:p-14 border-white/10">
          <DoodleBadgeStamp text="START AN ENGAGEMENT" color="#FFC700" />
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
            Ready to partner with an integrated studio?
          </h2>
          <div className="flex justify-center -mt-2">
            <DoodleWavyLine color="#FF90E8" width={220} />
          </div>
          <p className="text-sm sm:text-base text-white/70 max-w-lg mx-auto leading-relaxed font-sans">
            Senior partner leadership across brand, software, and organic growth.
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
              href="/work"
              className="gumroad-btn-secondary text-xs sm:text-sm !py-3 !px-6 w-full sm:w-auto"
            >
              Explore concept studies
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
