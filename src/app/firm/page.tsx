import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { ArrowUpRight, ShieldCheck, Clock, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "The Firm — Philosophy, Methodology & Leadership | FIRM",
  description:
    "Learn about FIRM's founding philosophy, architectural methodology, and why we believe digital presence requires integrated stewardship.",
};

export default function FirmPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F0]">
      <Container>
        <PageHeader
          badge="THE FIRM"
          eyebrow="Identity &amp; Purpose"
          title="Built to eliminate digital fragmentation."
          description="We are a digital presence consultancy. We partner with ambitious brands, independent academies, and professional firms to engineer digital systems that compound in institutional value."
        />
      </Container>

      {/* Hero Visual: Studio Atelier in Neo-Brutalist Framing */}
      <section className="pb-16 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="border border-black bg-white p-3 shadow-[8px_8px_0_0_#000]">
          <div className="overflow-hidden border border-black">
            <Image
              src="/images/editorial/atelier-hero.webp"
              alt="FIRM Studio Atelier — Physical craftsmanship meets digital systems engineering"
              width={1792}
              height={1024}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-3 text-left flex items-center justify-between font-mono text-[11px] text-black border-t border-black mt-2 bg-[#F4F4F0]">
            <span className="font-bold">THE FIRM // ATELIER CADENCE</span>
            <span className="border border-black bg-[#FF90E8] px-2 py-0.5 font-bold">
              STUDIO &amp; GLOBAL DELIVERY
            </span>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <Section id="philosophy" background="surface">
        <div className="mx-auto max-w-4xl text-left">
          <span className="inline-block border border-black bg-[#F1F333] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Core Tenets
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-black">
            Our Operating Philosophy
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#2D2A26] leading-relaxed">
            We reject the disposable agency model of monthly hype retainers and generic templates. Every decision we make is governed by three enduring commitments:
          </p>

          <div className="mt-8 space-y-6">
            <div className="neo-card p-6 sm:p-8 shadow-[4px_4px_0_0_#000]">
              <div className="inline-flex items-center gap-2 border border-black bg-[#FF90E8] px-2.5 py-0.5 font-mono text-xs text-black font-bold mb-3 shadow-[2px_2px_0_0_#000]">
                <Compass size={14} />
                <span>TENET 01 // ARCHITECTURAL COHERENCE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-black">
                Brand, software, and content are not separate problems
              </h3>
              <p className="mt-3 text-sm text-[#2D2A26] leading-relaxed">
                They are three facets of one single asset: an organization’s digital presence. When a graphic designer builds a logo without understanding Next.js Server Components, or when a marketing contractor runs ads to a sluggish landing page, trust leaks. We engineer every touchpoint under one disciplined architectural blueprint.
              </p>
            </div>

            <div className="neo-card p-6 sm:p-8 shadow-[4px_4px_0_0_#000]">
              <div className="inline-flex items-center gap-2 border border-black bg-[#F1F333] px-2.5 py-0.5 font-mono text-xs text-black font-bold mb-3 shadow-[2px_2px_0_0_#000]">
                <Clock size={14} />
                <span>TENET 02 // ENDURING CRAFT OVER EPHEMERAL TRENDS</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-black">
                Timeless typography and speed over passing aesthetic gimmicks
              </h3>
              <p className="mt-3 text-sm text-[#2D2A26] leading-relaxed">
                We reject purple neo-glows, spinning 3D cubes, and aggressive marketing popups. We craft typography, spacing, and semantic code that remains distinguished ten years from now. A website should feel like a well-constructed civic building, not a disposable trade show booth.
              </p>
            </div>

            <div className="neo-card p-6 sm:p-8 shadow-[4px_4px_0_0_#000]">
              <div className="inline-flex items-center gap-2 border border-black bg-[#55D6BE] px-2.5 py-0.5 font-mono text-xs text-black font-bold mb-3 shadow-[2px_2px_0_0_#000]">
                <ShieldCheck size={14} />
                <span>TENET 03 // RADICAL INTELLECTUAL HONESTY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-black">
                Transparent classifications, zero vanity metrics, and senior leadership
              </h3>
              <p className="mt-3 text-sm text-[#2D2A26] leading-relaxed">
                We never recommend capabilities an organization does not need, fabricate client testimonials, or hide behind junior account handlers. Senior partners lead every diagnostic, architectural specification, and engineering sprint from inception to live deployment.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Approach Section */}
      <Section id="approach" background="page">
        <div className="mx-auto max-w-4xl text-left">
          <span className="inline-block border border-black bg-[#FF90E8] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            Execution Cadence
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-black">
            A 4-Stage Architectural Cadence
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#2D2A26] leading-relaxed">
            We work on fixed, transparent weekly sprints rather than open-ended, billable hours:
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 p-6 border border-black bg-white shadow-[4px_4px_0_0_#000]">
              <span className="border border-black bg-[#FF90E8] text-black font-mono font-bold text-base px-2.5 py-1 shrink-0 shadow-[2px_2px_0_0_#000]">
                01
              </span>
              <div>
                <p className="text-base sm:text-lg font-display font-bold text-black">Diagnostic &amp; Surface Audit (Days 1–7)</p>
                <p className="mt-1.5 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                  Forensic audit of your current digital footprint: Core Web Vitals profiling, typography audit, information architecture mapping, and stakeholder interviews.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 border border-black bg-white shadow-[4px_4px_0_0_#000]">
              <span className="border border-black bg-[#F1F333] text-black font-mono font-bold text-base px-2.5 py-1 shrink-0 shadow-[2px_2px_0_0_#000]">
                02
              </span>
              <div>
                <p className="text-base sm:text-lg font-display font-bold text-black">Brand &amp; Technical Blueprint (Days 8–18)</p>
                <p className="mt-1.5 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                  Establishing the living design tokens, responsive layout wireframes, content hierarchies, and Next.js 16 App Router architectural schemas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 border border-black bg-white shadow-[4px_4px_0_0_#000]">
              <span className="border border-black bg-[#55D6BE] text-black font-mono font-bold text-base px-2.5 py-1 shrink-0 shadow-[2px_2px_0_0_#000]">
                03
              </span>
              <div>
                <p className="text-base sm:text-lg font-display font-bold text-black">Engineering &amp; Production (Days 19–40)</p>
                <p className="mt-1.5 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                  Full Next.js Server Component development, documentary editorial content production, accessibility screening (WCAG 2.1 AA), and zero-defect QA.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 border border-black bg-white shadow-[4px_4px_0_0_#000]">
              <span className="border border-black bg-[#FF90E8] text-black font-mono font-bold text-base px-2.5 py-1 shrink-0 shadow-[2px_2px_0_0_#000]">
                04
              </span>
              <div>
                <p className="text-base sm:text-lg font-display font-bold text-black">Deployment &amp; Ongoing Stewardship (Day 45+)</p>
                <p className="mt-1.5 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                  Staged DNS cutover, global edge CDN caching, search console indexing, and transition to our continuous fractional SLA stewardship.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/connect"
              className="neo-btn text-sm px-6 py-3"
            >
              <span>Initiate a studio conversation</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
