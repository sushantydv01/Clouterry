import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { INDUSTRIES } from "@/data/industries";
import { ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Retail & E-commerce — Headless Commerce & Editorial Storytelling | FIRM",
  description:
    "Headless Next.js storefronts and editorial brand storytelling for boutique consumer brands that refuse to look like generic templates.",
};

export default function RetailIndustryPage() {
  const sector = INDUSTRIES.find((i) => i.slug === "retail") || INDUSTRIES[3];

  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-white">
      <Container>
        <PageHeader
          badge={sector.eyebrow}
          eyebrow="Boutique &amp; Consumer Brands"
          title={sector.title}
          description={sector.description}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/connect"
              className="gumroad-btn-pink text-xs sm:text-sm font-bold !py-2.5 !px-5"
            >
              <span>Start a project</span>
              <ArrowUpRight size={14} className="stroke-[2.5]" />
            </Link>
            <Link
              href="/capabilities/web-technology"
              className="gumroad-btn-secondary text-xs sm:text-sm !py-2.5 !px-5"
            >
              Explore Next.js Engineering
            </Link>
          </div>
        </PageHeader>
      </Container>

      {/* Challenges & Solutions */}
      <Section background="black" padding="tight">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div className="gumroad-card p-6 sm:p-10 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[#10B981]/20 border border-[#10B981]/30 text-xs font-semibold text-[#10B981]">
              Commerce Challenges
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Escaping generic marketplace templates
            </h2>
            <div className="space-y-4 pt-2">
              {sector.challenges.map((c) => (
                <div key={c.title} className="p-4 rounded-xl bg-[#141416] border border-white/5 space-y-1">
                  <h4 className="text-sm font-bold text-white">{c.title}</h4>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Deliverables */}
      <Section background="black" padding="normal">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Boutique retail practice scope
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {sector.deliverables.map((d) => (
              <div key={d} className="p-4 rounded-xl bg-[#18181B] border border-white/10 flex items-center gap-3 text-xs sm:text-sm text-white/80">
                <div className="w-5 h-5 rounded-full bg-[#10B981] text-black flex items-center justify-center shrink-0 font-bold">
                  <Check size={12} className="stroke-[3]" />
                </div>
                <span>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section background="black" padding="spacious">
        <div className="max-w-3xl mx-auto text-center space-y-6 gumroad-card p-8 sm:p-14 border-white/10">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold">
            COMMERCE ARCHITECTURE INTAKE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
            Build a bespoke storefront that commands attention
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-lg mx-auto leading-relaxed">
            Headless Next.js storefronts with sub-second checkout speeds and rich editorial narrative.
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
              href="/industries"
              className="gumroad-btn-secondary text-xs sm:text-sm !py-3 !px-6 w-full sm:w-auto"
            >
              View all industry practices
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
