import React from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeroStudioIllustration from "@/components/illustrations/HeroStudioIllustration";
import FragmentationDoodle from "@/components/illustrations/FragmentationDoodle";
import CapabilitiesEcosystem from "@/components/interactive/CapabilitiesEcosystem";
import IndustriesShowcase from "@/components/interactive/IndustriesShowcase";
import { DoodleArrow, DoodleUnderline, DoodleSparkle } from "@/components/illustrations/DoodleAccents";
import { PROJECTS } from "@/data/projects";
import { ARTICLES } from "@/data/articles";
import { ArrowUpRight, BookOpen, Clock, ShieldCheck } from "lucide-react";

export default function Home() {
  const latestArticles = ARTICLES.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F6EF]">
      {/* ── 01. Hero Section: Visual-First Studio Lockup ── */}
      <section
        className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 border-b-2 border-[#171717] bg-[#F8F6EF] overflow-hidden"
        aria-label="FIRM Introduction"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Expressive Headline & Punchy Intro */}
            <div className="lg:col-span-7 text-left">
              {/* Playful Floating Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 border-2 border-[#171717] bg-[#ED83A8] px-3.5 py-1 text-xs font-mono font-bold text-[#171717] shadow-[3px_3px_0_0_#171717] -rotate-1 hover:rotate-0 transition-transform">
                  <span className="h-2 w-2 rounded-full bg-[#171717]" />
                  <span>DIGITAL PRESENCE &amp; GROWTH FIRM</span>
                </div>

                <div className="inline-flex items-center border-2 border-[#171717] bg-[#F4CF55] px-3 py-1 text-xs font-mono font-bold text-[#171717] shadow-[2px_2px_0_0_#171717] rotate-2 hover:rotate-0 transition-transform">
                  <span>EST. 2026</span>
                </div>

                <div className="hidden sm:inline-flex items-center gap-1.5 border-2 border-[#171717] bg-[#A6D8A1] px-3 py-1 text-xs font-mono font-bold text-[#171717] shadow-[2px_2px_0_0_#171717]">
                  <DoodleSparkle size={12} className="text-[#171717]" />
                  <span>100% INTELLECTUAL HONESTY</span>
                </div>
              </div>

              {/* Oversized Space Grotesk Headline */}
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.75rem] font-bold tracking-tight text-[#171717] leading-[1.02]">
                We engineer{" "}
                <span className="relative inline-block">
                  <span className="bg-[#ED83A8] px-3 py-0.5 border-2 border-[#171717] shadow-[4px_4px_0_0_#171717] rotate-[-0.5deg] inline-block">
                    enduring presence
                  </span>
                </span>{" "}
                for ambitious organizations.
              </h1>

              {/* Short, Punchy Supporting Statement (No Wall of Text) */}
              <p className="mt-6 text-xl sm:text-2xl text-[#3A3835] font-display font-medium leading-relaxed max-w-xl">
                Brand, technology, content and growth —{" "}
                <span className="text-[#171717] font-bold underline decoration-[#F4CF55] decoration-4 underline-offset-4">
                  connected under one roof.
                </span>
              </p>

              {/* High-Contrast Action CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/connect"
                  className="neo-btn-pink text-sm px-8 py-4 shadow-[4px_4px_0_0_#171717] inline-flex items-center justify-center gap-2"
                >
                  <span>Start a project briefing</span>
                  <ArrowUpRight size={17} className="stroke-[2.5]" />
                </Link>
                <Link
                  href="/capabilities"
                  className="neo-btn-white text-sm px-7 py-4 shadow-[3px_3px_0_0_#171717] inline-flex items-center justify-center"
                >
                  Explore capabilities
                </Link>
              </div>

              {/* Hand-drawn Curly Arrow Note */}
              <div className="mt-8 flex items-center gap-3">
                <DoodleArrow direction="right" className="shrink-0" />
                <span className="font-mono text-xs font-bold text-[#171717]">
                  Senior partner delivery • Zero subcontracting handoffs
                </span>
              </div>
            </div>

            {/* Right Column: Original Hand-Drawn Studio Illustration */}
            <div className="lg:col-span-5">
              <HeroStudioIllustration />
            </div>
          </div>
        </Container>
      </section>

      {/* ── 02. The Capabilities Ecosystem (Asymmetric & Interactive) ── */}
      <Section id="capabilities" background="cream">
        <CapabilitiesEcosystem />
      </Section>

      {/* ── 03. The Fragmentation Problem: Visual Contrast Shift (Full-Width Midnight Black) ── */}
      <Section background="dark">
        <div className="mx-auto max-w-5xl text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <span className="inline-block border border-[#171717] bg-[#F4CF55] text-[#171717] px-3.5 py-1 font-mono text-xs uppercase tracking-wider font-bold shadow-[2px_2px_0_0_#ED83A8] self-start">
              THE FRAGMENTATION PROBLEM
            </span>
            <span className="font-mono text-xs text-[#A6D8A1] uppercase font-bold tracking-wider">
              {"// Why Conventional Agency Retainers Fail"}
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8F6EF] leading-tight">
            Modern organizations do not lack digital tools.{" "}
            <span className="text-[#ED83A8] underline decoration-4 underline-offset-8">
              They lack cohesion.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#D5D2C9] max-w-2xl font-sans">
            Managing presence piecemeal burns budget and fractures reputation. FIRM replaces disconnected contractors with one accountable architectural standard.
          </p>

          {/* Visual Comparison Doodle */}
          <div className="mt-12">
            <FragmentationDoodle />
          </div>
        </div>
      </Section>

      {/* ── 04. Selected Work: Visual-First Showcase (Clean, Spacious) ── */}
      <Section id="work" background="white">
        <div className="max-w-6xl mx-auto text-left">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 gap-6">
            <div>
              <span className="inline-block border border-[#171717] bg-[#A6D8A1] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
                DEMONSTRATED ARCHITECTURE
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171717] leading-tight">
                Selected work &amp; retrospectives
              </h2>
            </div>
            <Link
              href="/work"
              className="neo-btn text-xs px-6 py-3 self-start lg:self-auto inline-flex items-center gap-2"
            >
              <span>Explore complete archive</span>
              <ArrowUpRight size={14} className="stroke-[2.5]" />
            </Link>
          </div>

          {/* Credibility Ribbon */}
          <div className="mb-12 p-4 border-2 border-[#171717] bg-[#F4CF55] flex items-center justify-between text-xs shadow-[3px_3px_0_0_#171717]">
            <div className="flex items-center gap-3">
              <ShieldCheck size={18} className="text-[#171717] stroke-[2.5] shrink-0" />
              <span className="font-mono text-xs font-bold text-[#171717]">
                CREDIBILITY STANDARD: All featured studies are classified transparently as strategic concepts &amp; architectural retrospectives.
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#171717] font-bold uppercase hidden md:block border-l border-[#171717] pl-3 ml-3">
              Zero Fabricated Metrics
            </span>
          </div>

          {/* 3 Featured Projects — Clean, Visual-First Presentation */}
          <div className="space-y-16">
            {PROJECTS.map((proj, idx) => {
              const tagColors = ["bg-[#ED83A8]", "bg-[#A6D8A1]", "bg-[#F4CF55]"];
              const tagColor = tagColors[idx % tagColors.length];
              const isReversed = idx % 2 === 1;

              return (
                <article
                  key={proj.slug}
                  className="border-2 border-[#171717] bg-[#FFFFFF] p-6 sm:p-10 shadow-[8px_8px_0_0_#171717] overflow-hidden"
                >
                  <div className={`grid gap-8 lg:grid-cols-12 lg:items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>
                    {/* Left/Right Narrative Column */}
                    <div className={`lg:col-span-5 space-y-4 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                      <div>
                        <div className="flex items-center gap-2 mb-2.5">
                          <span className={`border border-[#171717] ${tagColor} px-2.5 py-0.5 font-mono text-[10px] text-[#171717] font-bold uppercase shadow-[1px_1px_0_0_#171717]`}>
                            {proj.industry}
                          </span>
                          <span className="border border-[#171717] bg-[#F8F6EF] px-2 py-0.5 font-mono text-[10px] text-[#171717] font-bold">
                            {proj.classification}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#171717]">
                          {proj.title}
                        </h3>
                        <p className="mt-2 text-sm text-[#404040] leading-relaxed font-sans">
                          {proj.summary}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#171717]">
                        <span className="font-mono text-[10px] uppercase font-bold text-[#666666] block mb-2">
                          Core Capabilities Deployed
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {proj.divisions.map((div) => (
                            <span
                              key={div}
                              className="bg-[#F8F6EF] border border-[#171717] px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#171717]"
                            >
                              {div}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <Link
                          href={`/work/${proj.slug}`}
                          className="neo-btn text-xs px-5 py-2.5 inline-flex items-center gap-1.5"
                        >
                          <span>Read case retrospective</span>
                          <ArrowUpRight size={13} className="stroke-[2.5]" />
                        </Link>
                      </div>
                    </div>

                    {/* Left/Right Mockup Image (Edge-to-Edge Visual) */}
                    <div className={`lg:col-span-7 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="border-2 border-[#171717] overflow-hidden bg-[#F8F6EF] shadow-[4px_4px_0_0_#171717] group">
                        <Image
                          src={proj.image}
                          alt={proj.title}
                          width={1200}
                          height={675}
                          className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ── 05. Industries Specialization (Asymmetric, Creative Composition) ── */}
      <Section id="industries" background="cream">
        <IndustriesShowcase />
      </Section>

      {/* ── 06. Featured Publications & Insights ── */}
      <Section background="white">
        <div className="max-w-6xl mx-auto text-left">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 border border-[#171717] bg-[#F4CF55] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
                <BookOpen size={13} className="stroke-[2.5]" />
                <span>FIELD MONOGRAPHS &amp; PERSPECTIVES</span>
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#171717]">
                Perspectives on presence &amp; craft
              </h2>
            </div>
            <Link
              href="/insights"
              className="neo-btn text-xs px-5 py-2.5 self-start sm:self-auto inline-flex items-center gap-1.5"
            >
              <span>Explore all publications</span>
              <ArrowUpRight size={13} className="stroke-[2.5]" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {latestArticles.map((art, idx) => {
              const badgeColors = ["bg-[#ED83A8]", "bg-[#F4CF55]", "bg-[#A6D8A1]"];
              return (
                <article
                  key={art.slug}
                  className="border-2 border-[#171717] bg-[#FFFFFF] p-6 shadow-[5px_5px_0_0_#171717] flex flex-col justify-between group hover:-translate-y-1 transition-transform"
                >
                  <div>
                    <div className="overflow-hidden border border-[#171717] mb-4 bg-[#F8F6EF]">
                      <Link href={`/insights/${art.slug}`}>
                        <Image
                          src={art.heroImage}
                          alt={art.title}
                          width={1200}
                          height={675}
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </Link>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-[10px] text-[#171717] mb-2.5">
                      <span className={`border border-[#171717] ${badgeColors[idx % badgeColors.length]} px-2 py-0.5 font-bold uppercase shadow-[1px_1px_0_0_#171717]`}>
                        {art.category}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1 font-semibold">
                        <Clock size={11} className="stroke-[2.5]" />
                        <span>{art.readingTime}</span>
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#171717] group-hover:text-[#ED83A8] transition-colors leading-snug">
                      <Link href={`/insights/${art.slug}`}>
                        {art.title}
                      </Link>
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-[#404040] line-clamp-2 leading-relaxed font-sans">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#171717] flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-[#6E6A63] font-semibold">{art.date}</span>
                    <Link
                      href={`/insights/${art.slug}`}
                      className="font-display font-bold text-[#171717] hover:text-[#ED83A8] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Read monograph</span>
                      <ArrowUpRight size={12} className="stroke-[2.5]" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ── 07. Call to Action: Expansive Brand Conclusion ── */}
      <Section background="pink">
        <div className="mx-auto max-w-4xl border-2 border-[#171717] bg-[#ED83A8] p-8 sm:p-16 text-center shadow-[10px_10px_0_0_#171717] relative">
          <div className="inline-flex items-center gap-2 border-2 border-[#171717] bg-[#FFFFFF] px-4 py-1 font-mono text-xs font-bold text-[#171717] tracking-tight shadow-[2px_2px_0_0_#171717] mb-4">
            <span className="h-2 w-2 rounded-full bg-[#171717]" />
            <span>COMMISSION BRIEFING // 2026</span>
          </div>

          <h2 className="mt-2 font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171717] leading-tight">
            Ready to unify your digital presence?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#171717] font-medium leading-relaxed max-w-xl mx-auto font-sans">
            We partner with a select roster of ambitious brands, independent academies, healthcare clinics, and professional firms each quarter.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/connect"
              className="neo-btn text-sm px-8 py-4 w-full sm:w-auto shadow-[4px_4px_0_0_#171717] inline-flex items-center justify-center gap-2"
            >
              <span>Submit a project brief</span>
              <ArrowUpRight size={16} />
            </Link>
            <a
              href="mailto:inquiries@firm.agency"
              className="neo-btn-white text-sm px-8 py-4 w-full sm:w-auto shadow-[3px_3px_0_0_#171717]"
            >
              inquiries@firm.agency
            </a>
          </div>

          <div className="mt-8 flex justify-center">
            <DoodleUnderline className="text-[#171717]" width={200} height={16} />
          </div>
        </div>
      </Section>
    </div>
  );
}
