import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import StickerMark from "@/components/illustrations/StickerMark";
import SprintJourneyExplorer from "@/components/firm/SprintJourneyExplorer";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About FIRM | Philosophy, Methodology & Leadership",
  description:
    "Learn about FIRM's founding philosophy, architectural methodology, and why digital presence requires integrated stewardship.",
};

const PHILOSOPHY_TENETS = [
  {
    num: "01",
    label: "Coherence",
    color: "#ED83A8",
    title: "Brand, code, and content operate inside one repository",
    description:
      "When designers and engineers build inside the same codebase, responsive proportions hold under production load and brand guidelines never fossilize inside unmaintained slide decks.",
  },
  {
    num: "02",
    label: "Craft",
    color: "#F4CF55",
    title: "Clear hierarchy outlasts transient design trends",
    description:
      "We prioritize calm visual authority, accessible contrast, and honest editorial copy over generic agency effects so institutions retain stature across an entire decade.",
  },
  {
    num: "03",
    label: "Stewardship",
    color: "#A6D8A1",
    title: "Direct senior execution from sprint one through custody",
    description:
      "Founding strategists and engineers lead discovery, interface composition, production engineering, and repository handover with zero account-layer dilution.",
  },
];

export default function FirmPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#171717] text-[#F8F6EF]">
      {/* 01. Split Opening Studio Essay + Unboxed Authentic Photography (E07) */}
      <section data-surface="dark" className="pt-28 pb-16 sm:pt-32 sm:pb-20 bg-[#171717]" aria-label="Studio Overview">
        <Container size="wide">
          <div className="grid gap-10 lg:gap-14 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#F8F6EF] text-[#171717] text-xs font-sans font-medium">
                <StickerMark name="s09-02-flower" size={18} />
                <span>About FIRM Studio</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[58px] font-medium tracking-[-0.03em] text-[#F8F6EF] leading-[1.03]">
                Built to end digital fragmentation.
              </h1>

              <p className="text-base sm:text-lg text-[#D5D2C7] leading-relaxed font-sans">
                Organizations rarely fail because they lack talented specialists. They lose coherence in the seams between an outside brand shop, an offshore web contractor, a content freelancer, and a separate search vendor.
              </p>

              <p className="text-base text-[#ACA89E] leading-relaxed font-sans">
                FIRM unifies five practices inside one accountable senior studio so design decisions hold together all the way into live software.
              </p>

              <div className="pt-2 flex flex-wrap gap-3.5">
                <Link href="/connect" className="firm-btn-primary text-sm">
                  <span>Start a project</span>
                  <ArrowUpRight size={15} className="stroke-[2]" />
                </Link>
                <Link href="/work" className="firm-btn-secondary text-sm">
                  <span>View concept studies</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#F8F6EF]/14 bg-[#1D1D20]">
                <Image
                  src="/images/editorial/atelier-hero.webp"
                  alt="Sunlit architectural drafting desk inside FIRM studio showing floorplans and brass measuring tools"
                  fill
                  priority
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-[#ACA89E] pt-1">
                <span>Single Senior Standard</span>
                <span>Direct Partner Execution · Full Repository Ownership</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 02. Warm Cream Paper Philosophy Spread */}
      <Section id="philosophy" background="warm-paper" containerSize="wide" padding="spacious">
        <div className="w-full space-y-12 text-left">
          <div className="grid gap-6 lg:grid-cols-12 items-end pb-8 border-b border-[#171717]/15">
            <div className="lg:col-span-8">
              <h2 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-medium tracking-[-0.025em] text-[#171717] leading-[1.06]">
                Three commitments guiding every commission.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <StickerMark name="s09-01-sparkle" size={28} className="hidden lg:inline-block" />
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-3 pt-2">
            {PHILOSOPHY_TENETS.map((item) => (
              <div key={item.num} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#171717]/15">
                  <span className="font-display text-4xl font-medium text-[#171717] tabular-nums">
                    {item.num}
                  </span>
                  <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-[#3F3D38]">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: item.color }}
                      aria-hidden="true"
                    />
                    <span>{item.label}</span>
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-medium text-[#171717] leading-snug">
                  {item.title}
                </h3>
                <p className="text-base text-[#3F3D38] leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 03. Interactive 4-Stage Sprint Explorer */}
      <Section id="approach" background="charcoal" containerSize="wide" padding="spacious">
        <SprintJourneyExplorer />
      </Section>

      {/* 04. Warm Yellow Editorial Invitation Band */}
      <Section background="butter-yellow" containerSize="wide" padding="normal">
        <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-8 text-left">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-[-0.025em] text-[#171717] leading-[1.06]">
              Ready to partner with an integrated studio?
            </h2>
            <p className="text-base sm:text-lg text-[#171717]/80 font-sans leading-relaxed">
              Senior partner execution uniting brand architecture, clean software engineering, and sustained organic visibility.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0">
            <Link href="/connect" className="firm-btn-dark text-sm sm:text-base">
              <span>Start a project</span>
              <ArrowUpRight size={16} />
            </Link>
            <Link href="/capabilities" className="firm-btn-outline-dark text-sm sm:text-base">
              <span>Explore disciplines</span>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
