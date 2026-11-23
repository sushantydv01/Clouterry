import React from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import PresenceMatrix from "@/components/interactive/PresenceMatrix";
import SchoolBlueprint from "@/components/interactive/SchoolBlueprint";
import BrowserFrame from "@/components/ui/BrowserFrame";
import { PROJECTS } from "@/data/projects";
import { ARTICLES } from "@/data/articles";
import { ArrowUpRight, BookOpen, Clock, Sparkles } from "lucide-react";

export default function Home() {
  const latestArticles = ARTICLES.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F6EF]">
      {/* ── 01. Hero Section: Confident Pop Garden Hero Lockup ── */}
      <section
        className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-[#171717] bg-[#F8F6EF] overflow-hidden"
        aria-label="FIRM Introduction"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Bold Headline & Actions */}
            <div className="lg:col-span-7 text-left">
              {/* Playful Floating Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 border border-[#171717] bg-[#ED83A8] px-3.5 py-1 text-xs font-mono font-bold text-[#171717] shadow-[2px_2px_0_0_#171717] -rotate-1 hover:rotate-0 transition-transform">
                  <span className="h-2 w-2 rounded-full bg-[#171717]" />
                  <span>DIGITAL PRESENCE &amp; GROWTH FIRM</span>
                </div>

                <div className="inline-flex items-center border border-[#171717] bg-[#F4CF55] px-3 py-1 text-xs font-mono font-bold text-[#171717] shadow-[2px_2px_0_0_#171717] rotate-2 hover:rotate-0 transition-transform">
                  <span>EST. 2026</span>
                </div>

                <div className="hidden sm:inline-flex items-center gap-1.5 border border-[#171717] bg-[#A6D8A1] px-3 py-1 text-xs font-mono font-bold text-[#171717] shadow-[2px_2px_0_0_#171717]">
                  <Sparkles size={12} className="stroke-[2.5]" />
                  <span>100% INTELLECTUAL HONESTY</span>
                </div>
              </div>

              {/* Oversized Space Grotesk Headline with Rose Pink Anchor Accent */}
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.75rem] font-bold tracking-tight text-[#171717] leading-[0.98]">
                We engineer{" "}
                <span className="inline-block bg-[#ED83A8] px-3 py-0.5 border border-[#171717] shadow-[3px_3px_0_0_#171717] rotate-[-0.5deg]">
                  enduring digital presence
                </span>{" "}
                for ambitious organizations.
              </h1>

              <p className="mt-7 text-lg sm:text-xl text-[#3A3835] leading-relaxed max-w-xl font-sans">
                Unifying brand identity, bespoke Next.js platforms, documentary editorial content, and systematic visibility under one disciplined architectural standard.
              </p>

              {/* High-Contrast Action Buttons */}
              <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/connect"
                  className="neo-btn-pink text-sm px-7 py-3.5 shadow-[4px_4px_0_0_#171717]"
                >
                  <span>Start a project briefing</span>
                  <ArrowUpRight size={17} className="stroke-[2.5]" />
                </Link>
                <Link
                  href="/capabilities"
                  className="neo-btn-white text-sm px-6 py-3.5 shadow-[3px_3px_0_0_#171717]"
                >
                  Explore capabilities
                </Link>
              </div>

              {/* Monospace Division Pills with Pop Garden Hover Highlights */}
              <div className="mt-12 pt-7 border-t border-[#171717] flex flex-wrap items-center gap-2.5 text-xs font-mono font-bold text-[#171717]">
                <span className="border border-[#171717] bg-white px-3 py-1.5 shadow-[2px_2px_0_0_#171717] hover:bg-[#ED83A8] transition-colors cursor-default">
                  01 BRAND
                </span>
                <span className="border border-[#171717] bg-white px-3 py-1.5 shadow-[2px_2px_0_0_#171717] hover:bg-[#A6D8A1] transition-colors cursor-default">
                  02 WEB
                </span>
                <span className="border border-[#171717] bg-white px-3 py-1.5 shadow-[2px_2px_0_0_#171717] hover:bg-[#F4CF55] transition-colors cursor-default">
                  03 CONTENT
                </span>
                <span className="border border-[#171717] bg-white px-3 py-1.5 shadow-[2px_2px_0_0_#171717] hover:bg-[#ED83A8] transition-colors cursor-default">
                  04 GROWTH
                </span>
                <span className="border border-[#171717] bg-white px-3 py-1.5 shadow-[2px_2px_0_0_#171717] hover:bg-[#A6D8A1] transition-colors cursor-default">
                  05 STEWARDSHIP
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual in Pop Garden Framing */}
            <div className="lg:col-span-5">
              <div className="relative border border-[#171717] bg-white p-3.5 shadow-[8px_8px_0_0_#171717] group">
                {/* Playful Floating Pop Garden Stamp */}
                <div className="absolute -top-3 right-0 sm:-top-4 sm:-right-4 z-10 border border-[#171717] bg-[#F4CF55] text-[#171717] font-display font-bold text-xs px-3.5 py-1.5 shadow-[3px_3px_0_0_#171717] rotate-6">
                  AUTHENTIC CRAFT
                </div>

                <div className="overflow-hidden border border-[#171717]">
                  <Image
                    src="/images/editorial/atelier-hero.webp"
                    alt="FIRM Architectural Drafting Atelier — Blueprints, unbleached paper, brass rules, and drafting ink"
                    width={1792}
                    height={1024}
                    priority
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-3.5 text-left flex items-center justify-between font-mono text-xs text-[#171717] border-t border-[#171717] mt-2.5 bg-[#F8F6EF]">
                  <span className="font-bold">ATELIER BLUEPRINT // 40.7128° N</span>
                  <span className="bg-[#ED83A8] text-[#171717] border border-[#171717] px-2.5 py-0.5 font-bold shadow-[1px_1px_0_0_#171717]">
                    SPEC 01
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 02. The Firm Thesis: Contrast Shift (Full-Width Midnight Black) ── */}
      <Section background="dark">
        <div className="mx-auto max-w-5xl text-left">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block border border-[#171717] bg-[#F4CF55] text-[#171717] px-3.5 py-1 font-mono text-xs uppercase tracking-wider font-bold shadow-[2px_2px_0_0_#ED83A8]">
              The Problem of Fragmentation
            </span>
            <span className="font-mono text-xs text-[#A6D8A1] uppercase font-bold tracking-wider hidden sm:inline">
              {"// Why Traditional Agency Retainers Fail"}
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8F6EF] leading-tight">
            Modern organizations do not lack digital tools.{" "}
            <span className="text-[#ED83A8] underline decoration-4 underline-offset-8">
              They lack cohesion.
            </span>
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Left Card: The Conventional Vendor Trap */}
            <div className="p-6 sm:p-8 border border-[#3A3835] bg-[#222222] text-[#F8F6EF] shadow-[4px_4px_0_0_#000]">
              <span className="inline-block border border-[#3A3835] bg-[#171717] text-[#A8A49A] px-2.5 py-0.5 font-mono text-[10px] uppercase font-bold tracking-wider mb-3">
                The Conventional Trap
              </span>
              <h3 className="font-display text-xl font-bold text-[#F8F6EF]">
                Accidental Collection of Vendors
              </h3>
              <p className="mt-3 text-sm text-[#D5D2C9] leading-relaxed font-sans">
                Most organizations manage presence piecemeal: a graphic designer creates a logo; a contractor builds a generic template; a social agency posts disconnected clips; a growth freelancer runs ads to pages that fail to convert.
              </p>
              <div className="mt-5 pt-4 border-t border-[#3A3835] font-mono text-xs text-[#DC341E] font-bold">
                Result: Brand dilution &amp; customer trust leaks at every seam.
              </div>
            </div>

            {/* Right Card: The FIRM Integrated Alternative */}
            <div className="p-6 sm:p-8 border border-[#171717] bg-[#F8F6EF] text-[#171717] shadow-[6px_6px_0_0_#ED83A8]">
              <span className="inline-block border border-[#171717] bg-[#ED83A8] text-[#171717] px-2.5 py-0.5 font-mono text-[10px] uppercase font-bold tracking-wider mb-3 shadow-[1px_1px_0_0_#171717]">
                The FIRM Architecture
              </span>
              <h3 className="font-display text-xl font-bold text-[#171717]">
                Unified Architectural Stewardship
              </h3>
              <p className="mt-3 text-sm text-[#3A3835] leading-relaxed font-sans">
                FIRM integrates senior creative direction, high-performance Next.js engineering, documentary photography, and organic visibility under a single accountable standard with zero subcontracting handoffs.
              </p>
              <div className="mt-5 pt-4 border-t border-[#171717] font-mono text-xs text-[#171717] font-bold flex items-center gap-1.5">
                <span className="text-[#A6D8A1] text-base">■</span>
                <span>One standard. 100% owned code. Compounding enterprise value.</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 03. Signature Experience 01: The Interactive Presence Matrix ── */}
      <Section id="matrix" background="cream">
        <PresenceMatrix />
      </Section>

      {/* ── 04. Selected Work Exhibition with Pop Garden Previews ── */}
      <Section id="work" background="white">
        <div className="max-w-5xl mx-auto text-left">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
            <div>
              <span className="inline-block border border-[#171717] bg-[#A6D8A1] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
                Selected Work &amp; Retrospectives
              </span>
              <h2 className="mt-2.5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717]">
                Demonstrated digital architecture
              </h2>
            </div>
            <Link
              href="/work"
              className="neo-btn text-xs px-5 py-2.5 self-start sm:self-auto"
            >
              <span>View complete work archive</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Transparent Credibility Ribbon */}
          <div className="mb-10 p-4 border border-[#171717] bg-[#F4CF55] flex items-center justify-between text-xs shadow-[3px_3px_0_0_#171717]">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#171717] shrink-0" />
              <span className="font-mono text-xs font-bold text-[#171717]">
                PORTFOLIO INTEGRITY: All featured studies are classified transparently with zero fabricated metrics.
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#171717] font-bold uppercase hidden sm:block border-l border-[#171717] pl-3 ml-3">
              Strategic Concepts &amp; Retrospectives
            </span>
          </div>

          {/* Exhibition Project Cards */}
          <div className="space-y-12">
            {PROJECTS.map((proj, pIdx) => {
              const tagColors = ["bg-[#ED83A8]", "bg-[#A6D8A1]", "bg-[#F4CF55]"];
              const tagColor = tagColors[pIdx % tagColors.length];

              return (
                <div
                  key={proj.slug}
                  className="border border-[#171717] bg-white p-4 sm:p-8 lg:p-10 shadow-[4px_4px_0_0_#171717] sm:shadow-[6px_6px_0_0_#171717]"
                >
                  <div className="grid gap-8 lg:grid-cols-12 lg:items-center min-w-0">
                    {/* Left: Case Context */}
                    <div className="lg:col-span-5 space-y-4 min-w-0">
                      <div>
                        <span className={`border border-[#171717] ${tagColor} px-3 py-0.5 font-mono text-[10px] text-[#171717] font-bold uppercase tracking-wider inline-block shadow-[1px_1px_0_0_#171717] max-w-full break-words`}>
                          {proj.industry} {"//"} {proj.classification}
                        </span>
                        <h3 className="mt-2.5 font-display text-2xl sm:text-3xl font-bold text-[#171717]">
                          {proj.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-[#3A3835] leading-relaxed font-sans">
                          {proj.summary}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#171717] space-y-2">
                        <span className="font-mono text-[10px] uppercase font-bold text-[#171717] block">
                          Scope of Engagement
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
                          className="neo-btn text-xs px-5 py-2.5"
                        >
                          <span>Read case retrospective</span>
                          <ArrowUpRight size={13} />
                        </Link>
                      </div>
                    </div>

                    {/* Right: Browser Frame Preview */}
                    <div className="lg:col-span-7">
                      <BrowserFrame url={proj.heroMockup.urlText}>
                        <div className="relative overflow-hidden bg-[#F8F6EF] text-left">
                          <Image
                            src={proj.image}
                            alt={proj.title}
                            width={1200}
                            height={675}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </BrowserFrame>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ── 05. Signature Experience 02: Institutional Focus (Education & Schools) ── */}
      <Section id="education" background="cream">
        <SchoolBlueprint />
      </Section>

      {/* ── 06. Featured Publications & Insights ── */}
      <Section background="white">
        <div className="max-w-5xl mx-auto text-left">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 border border-[#171717] bg-[#F4CF55] px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
                <BookOpen size={13} className="stroke-[2.5]" />
                <span>FIELD MONOGRAPHS &amp; PERSPECTIVES</span>
              </span>
              <h2 className="mt-2.5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717]">
                Perspectives on presence &amp; craft
              </h2>
            </div>
            <Link
              href="/insights"
              className="neo-btn text-xs px-5 py-2.5 self-start sm:self-auto"
            >
              <span>Explore all publications</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {latestArticles.map((art, idx) => {
              const badgeColors = ["bg-[#ED83A8]", "bg-[#F4CF55]", "bg-[#A6D8A1]"];
              return (
                <article
                  key={art.slug}
                  className="neo-card p-6 flex flex-col justify-between group"
                >
                  <div>
                    <div className="overflow-hidden border border-[#171717] mb-4">
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

                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#171717] group-hover:text-[#ED83A8] transition-colors leading-snug">
                      <Link href={`/insights/${art.slug}`}>
                        {art.title}
                      </Link>
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-[#3A3835] line-clamp-2 leading-relaxed font-sans">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#171717] flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-[#6E6A63] font-semibold">{art.date}</span>
                    <Link
                      href={`/insights/${art.slug}`}
                      className="font-display font-bold text-[#171717] hover:text-[#ED83A8] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Read</span>
                      <ArrowUpRight size={12} className="stroke-[2.5]" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ── 07. Call to Action: Direct Intake in Pop Garden Rose Pink ── */}
      <Section background="pink">
        <div className="mx-auto max-w-3xl border border-[#171717] bg-[#ED83A8] p-8 sm:p-14 text-center shadow-[8px_8px_0_0_#171717]">
          <span className="inline-block border border-[#171717] bg-white px-3.5 py-1 font-mono text-xs font-bold text-[#171717] tracking-tight shadow-[2px_2px_0_0_#171717]">
            COMMISSION BRIEFING // 2026
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#171717] leading-tight">
            Ready to unify your digital presence?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#171717] font-medium leading-relaxed max-w-xl mx-auto font-sans">
            We partner with ambitious brands, independent academies, healthcare clinics, and professional firms seeking an enduring digital presence.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/connect"
              className="neo-btn text-sm px-7 py-3.5 w-full sm:w-auto shadow-[4px_4px_0_0_#171717]"
            >
              <span>Submit a project brief</span>
              <ArrowUpRight size={15} />
            </Link>
            <a
              href="mailto:inquiries@firm.agency"
              className="neo-btn-white text-sm px-7 py-3.5 w-full sm:w-auto shadow-[3px_3px_0_0_#171717]"
            >
              inquiries@firm.agency
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
