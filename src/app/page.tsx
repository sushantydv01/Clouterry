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
    <div className="flex flex-col min-h-screen bg-[#F4F4F0]">
      {/* ── 01. Hero Section: Cheerful Neo-Brutalist Hero Lockup ── */}
      <section
        className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-black bg-[#F4F4F0] overflow-hidden"
        aria-label="FIRM Introduction"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Bold Headline & Actions */}
            <div className="lg:col-span-7 text-left">
              {/* Playful Floating Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                <div className="inline-flex items-center gap-2 border border-black bg-[#FF90E8] px-3 py-1 text-xs font-mono font-bold text-black shadow-[2px_2px_0_0_#000] -rotate-1 hover:rotate-0 transition-transform">
                  <span className="h-2 w-2 rounded-full bg-black" />
                  <span>DIGITAL PRESENCE &amp; GROWTH FIRM</span>
                </div>

                <div className="inline-flex items-center border border-black bg-[#F1F333] px-2.5 py-1 text-xs font-mono font-bold text-black shadow-[2px_2px_0_0_#000] rotate-2 hover:rotate-0 transition-transform">
                  <span>EST. 2026</span>
                </div>

                <div className="hidden sm:inline-flex items-center gap-1 border border-black bg-[#55D6BE] px-2.5 py-1 text-xs font-mono font-bold text-black shadow-[2px_2px_0_0_#000]">
                  <Sparkles size={11} />
                  <span>BUILT FOR SCALE</span>
                </div>
              </div>

              {/* Oversized Space Grotesk Headline */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-black leading-[1.02]">
                We engineer enduring digital presence for ambitious organizations.
              </h1>

              <p className="mt-6 text-base sm:text-lg text-[#2D2A26] leading-relaxed max-w-xl font-sans">
                Unifying brand identity, bespoke Next.js platforms, documentary editorial content, and systematic visibility under one disciplined architectural standard.
              </p>

              {/* High-Contrast Interactive Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/connect"
                  className="neo-btn text-sm px-6 py-3"
                >
                  <span>Start a project briefing</span>
                  <ArrowUpRight size={16} />
                </Link>
                <Link
                  href="/capabilities"
                  className="neo-btn-white text-sm px-6 py-3"
                >
                  Explore capabilities
                </Link>
              </div>

              {/* Monospace Neo-Brutalist Division Pills */}
              <div className="mt-10 pt-6 border-t border-black flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-black">
                <span className="border border-black bg-white px-2.5 py-1 shadow-[2px_2px_0_0_#000] hover:bg-[#FF90E8] transition-colors">
                  01 BRAND
                </span>
                <span className="border border-black bg-white px-2.5 py-1 shadow-[2px_2px_0_0_#000] hover:bg-[#55D6BE] transition-colors">
                  02 WEB
                </span>
                <span className="border border-black bg-white px-2.5 py-1 shadow-[2px_2px_0_0_#000] hover:bg-[#F1F333] transition-colors">
                  03 CONTENT
                </span>
                <span className="border border-black bg-white px-2.5 py-1 shadow-[2px_2px_0_0_#000] hover:bg-[#FF90E8] transition-colors">
                  04 GROWTH
                </span>
                <span className="border border-black bg-white px-2.5 py-1 shadow-[2px_2px_0_0_#000] hover:bg-[#55D6BE] transition-colors">
                  05 STEWARDSHIP
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual in Neo-Brutalist Framing */}
            <div className="lg:col-span-5">
              <div className="relative border border-black bg-white p-3 shadow-[8px_8px_0_0_#000] group">
                {/* Playful Floating Gumroad-Style Decorative Badges */}
                <div className="absolute -top-3.5 -right-3.5 z-10 border border-black bg-[#F1F333] text-black font-display font-bold text-xs px-3 py-1 shadow-[3px_3px_0_0_#000] rotate-6">
                  AUTHENTIC CRAFT
                </div>

                <div className="overflow-hidden border border-black">
                  <Image
                    src="/images/editorial/atelier-hero.webp"
                    alt="FIRM Architectural Drafting Atelier — Blueprints, unbleached paper, brass rules, and drafting ink"
                    width={1792}
                    height={1024}
                    priority
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-3 text-left flex items-center justify-between font-mono text-[11px] text-black border-t border-black mt-2 bg-[#F4F4F0]">
                  <span className="font-semibold">ATELIER BLUEPRINT // 40.7128° N</span>
                  <span className="bg-[#FF90E8] text-black border border-black px-2 py-0.5 font-bold">
                    SPEC 01
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 02. The Firm Thesis: Bold Callout Block ── */}
      <Section background="surface">
        <div className="mx-auto max-w-4xl border border-black bg-[#F4F4F0] p-6 sm:p-10 shadow-[6px_6px_0_0_#000] text-left">
          <span className="inline-block border border-black bg-[#F1F333] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
            The Problem of Fragmentation
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-black leading-tight">
            Modern organizations do not lack digital tools. They lack cohesion.
          </h2>

          <div className="mt-6 space-y-4 text-base text-[#2D2A26] leading-relaxed font-sans">
            <p>
              Most organizations manage digital presence as an accidental collection of disconnected vendors. A graphic designer builds the logo; a development contractor writes the website; a social media agency posts generic clips; a growth specialist runs ads to pages that fail to convert.
            </p>
            <p>
              When an organization’s digital surface is fractured, customer trust leaks at every seam. FIRM was built to provide an integrated alternative: senior design craft, modern software engineering, and disciplined visibility executed under a single, accountable stewardship.
            </p>
          </div>
        </div>
      </Section>

      {/* ── 03. Signature Experience 01: The Interactive Presence Matrix ── */}
      <Section id="matrix" background="page">
        <PresenceMatrix />
      </Section>

      {/* ── 04. Selected Work Exhibition with Neo-Brutalist Browser Previews ── */}
      <Section id="work" background="surface">
        <div className="max-w-5xl mx-auto text-left">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-3">
            <div>
              <span className="inline-block border border-black bg-[#55D6BE] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
                Selected Work &amp; Retrospectives
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-black">
                Demonstrated digital architecture
              </h2>
            </div>
            <Link
              href="/work"
              className="neo-btn text-xs px-4 py-2 self-start sm:self-auto"
            >
              <span>View complete work archive</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Transparent Credibility Ribbon */}
          <div className="mb-8 p-4 border border-black bg-[#F1F333] flex items-center justify-between text-xs shadow-[3px_3px_0_0_#000]">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-black shrink-0" />
              <span className="font-mono text-xs font-bold text-black">
                PORTFOLIO INTEGRITY: All featured studies are classified transparently with zero fabricated metrics.
              </span>
            </div>
            <span className="font-mono text-[10px] text-black font-bold uppercase hidden sm:block border-l border-black pl-3 ml-3">
              Strategic Concepts &amp; Retrospectives
            </span>
          </div>

          {/* Exhibition Project Cards */}
          <div className="space-y-10">
            {PROJECTS.map((proj) => (
              <div
                key={proj.slug}
                className="border border-black bg-white p-6 sm:p-8 shadow-[6px_6px_0_0_#000]"
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  {/* Left: Case Context */}
                  <div className="lg:col-span-5 space-y-4">
                    <div>
                      <span className="border border-black bg-[#FF90E8] px-2.5 py-0.5 font-mono text-[10px] text-black font-bold uppercase tracking-wider inline-block break-words shadow-[1px_1px_0_0_#000]">
                        {proj.industry} {"//"} {proj.classification}
                      </span>
                      <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-black">
                        {proj.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
                        {proj.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-black space-y-2">
                      <span className="font-mono text-[10px] uppercase font-bold text-black block">
                        Scope of Engagement
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.divisions.map((div) => (
                          <span
                            key={div}
                            className="bg-[#F4F4F0] border border-black px-2 py-0.5 font-mono text-[10px] font-bold text-black"
                          >
                            {div}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/work/${proj.slug}`}
                        className="neo-btn text-xs px-4 py-2"
                      >
                        <span>Read case retrospective</span>
                        <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </div>

                  {/* Right: Realistic Browser Frame Preview */}
                  <div className="lg:col-span-7">
                    <BrowserFrame url={proj.heroMockup.urlText}>
                      <div className="relative overflow-hidden bg-[#F4F4F0] text-left">
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
            ))}
          </div>
        </div>
      </Section>

      {/* ── 05. Signature Experience 02: Institutional Focus (Education & Schools) ── */}
      <Section id="education" background="page">
        <SchoolBlueprint />
      </Section>

      {/* ── 06. Featured Publications & Insights ── */}
      <Section background="surface">
        <div className="max-w-5xl mx-auto text-left">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-3">
            <div>
              <span className="inline-flex items-center gap-1.5 border border-black bg-[#F1F333] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
                <BookOpen size={13} />
                <span>FIELD MONOGRAPHS &amp; PERSPECTIVES</span>
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-black">
                Perspectives on presence &amp; craft
              </h2>
            </div>
            <Link
              href="/insights"
              className="neo-btn text-xs px-4 py-2 self-start sm:self-auto"
            >
              <span>Explore all publications</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {latestArticles.map((art, idx) => {
              const badgeColors = ["bg-[#FF90E8]", "bg-[#F1F333]", "bg-[#55D6BE]"];
              return (
                <article
                  key={art.slug}
                  className="neo-card p-5 flex flex-col justify-between group"
                >
                  <div>
                    <div className="overflow-hidden border border-black mb-3">
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

                    <div className="flex items-center gap-2 font-mono text-[10px] text-black mb-2">
                      <span className={`border border-black ${badgeColors[idx % badgeColors.length]} px-2 py-0.5 font-bold uppercase`}>
                        {art.category}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1 font-medium">
                        <Clock size={10} />
                        <span>{art.readingTime}</span>
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-black group-hover:text-[#DC341E] transition-colors leading-snug">
                      <Link href={`/insights/${art.slug}`}>
                        {art.title}
                      </Link>
                    </h3>

                    <p className="mt-2 text-xs text-[#2D2A26] line-clamp-2 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-black flex items-center justify-between text-xs">
                    <span className="font-mono text-[10px] text-[#605C56] font-semibold">{art.date}</span>
                    <Link
                      href={`/insights/${art.slug}`}
                      className="font-display font-bold text-black hover:text-[#DC341E] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Read</span>
                      <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ── 07. Call to Action: Direct Intake ── */}
      <Section background="page">
        <div className="mx-auto max-w-3xl border border-black bg-[#FF90E8] p-8 sm:p-12 text-center shadow-[8px_8px_0_0_#000]">
          <span className="inline-block border border-black bg-white px-3 py-1 font-mono text-xs font-bold text-black tracking-tight shadow-[2px_2px_0_0_#000]">
            COMMISSION BRIEFING // 2026
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
            Ready to unify your digital presence?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#2D2A26] font-medium leading-relaxed max-w-xl mx-auto">
            We partner with ambitious brands, independent academies, healthcare clinics, and professional firms seeking an enduring digital presence.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/connect"
              className="neo-btn text-sm px-6 py-3 w-full sm:w-auto"
            >
              <span>Submit a project brief</span>
              <ArrowUpRight size={15} />
            </Link>
            <a
              href="mailto:inquiries@firm.agency"
              className="neo-btn-white text-sm px-6 py-3 w-full sm:w-auto"
            >
              inquiries@firm.agency
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
