import React from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import TheThreadOval from "@/components/thread/TheThreadOval";
import CapabilityMarquee from "@/components/thread/CapabilityMarquee";
import BeforeAfterSection from "@/components/thread/BeforeAfterSection";
import FullWidthIllustratedScene from "@/components/thread/FullWidthIllustratedScene";
import HeroThreadComposition from "@/components/illustrations/HeroThreadComposition";
import {
  DoodleBrandSpecimen,
  DoodleWebPlatform,
  DoodleEditorialCamera,
  DoodleOrganicGrowth,
  DoodleWavyLine,
  DoodleLoopArrow,
  DoodleBadgeStamp,
  DoodleHandStar,
  DoodleHandSparkle,
} from "@/components/illustrations/ThreadDoodles";
import {
  VignetteArchitecturalCoherence,
  VignetteSeniorEngagement,
  VignetteClientOwnership,
  VignetteEnduringUtility,
} from "@/components/illustrations/StudioTenetsVignettes";
import { PROJECTS } from "@/data/projects";
import { ArrowUpRight, Check, Search } from "lucide-react";

export default function Home() {
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-white">
      {/* ── 01. Gumroad-Inspired Hero Section ── */}
      <section
        className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-[#000000] overflow-hidden text-center"
        aria-label="FIRM Introduction"
      >
        <Container size="default" className="relative z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2">
              <DoodleBadgeStamp text="THE THREAD" color="#FFC700" />
              <span className="text-xs font-mono text-white/50 hidden sm:inline">
                Five Disciplines &bull; One Senior Standard
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.02]">
              One partner.{" "}
              <span className="firm-serif-italic text-[#FF90E8] font-normal block sm:inline">
                Five connected disciplines.
              </span>
            </h1>

            <div className="flex justify-center -mt-2">
              <DoodleWavyLine color="#FFC700" width={280} />
            </div>

            <p className="mt-4 text-lg sm:text-2xl text-white/75 font-sans leading-relaxed max-w-2xl mx-auto">
              We build brand identity systems, high-speed Next.js platforms, documentary media, and organic search visibility under one roof.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 relative">
              {/* Playful Looping Arrow pointing to the CTA */}
              <div className="hidden md:block absolute -left-16 sm:-left-20 top-2 -rotate-12">
                <DoodleLoopArrow color="#FF90E8" />
              </div>

              <Link
                href="/connect"
                className="gumroad-btn-pink text-base sm:text-lg font-bold px-8 py-4 w-full sm:w-auto shadow-lg hover:scale-102 transition-transform"
              >
                <span>Start a project</span>
                <ArrowUpRight size={18} className="stroke-[2.5]" />
              </Link>

              <Link
                href="/capabilities"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#18181B] border border-white/15 text-sm sm:text-base text-white/80 hover:text-white hover:border-white/30 transition-all inline-flex items-center justify-center gap-2.5"
              >
                <Search size={16} className="text-white/40" />
                <span>Explore 5 disciplines</span>
              </Link>
            </div>

            {/* ── Visual Centerpiece: Hand-Drawn Continuous Thread Studio Scene ── */}
            <div className="pt-8 sm:pt-12">
              <HeroThreadComposition />
            </div>
          </div>
        </Container>
      </section>

      {/* ── 02. Capabilities: Warm Paper Editorial Showcase (SHOW, DON'T JUST DESCRIBE) ── */}
      <Section background="warm-paper" padding="spacious">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Heading on Warm Paper */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-black/10">
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-2">
                <DoodleBadgeStamp text="SHOW, DON'T JUST DESCRIBE" color="#FFC700" />
                <DoodleHandStar color="#FF90E8" size={20} />
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#121214] leading-tight">
                Five integrated studios. Zero handoff gaps.
              </h2>
              <p className="text-base sm:text-lg text-black/70 font-sans leading-relaxed">
                Every discipline is crafted inside the same design-to-production pipeline.
              </p>
            </div>
            <Link
              href="/capabilities"
              className="gumroad-btn-secondary !bg-black !text-white text-xs sm:text-sm !py-2.5 !px-5 shrink-0 hover:!bg-[#222226]"
            >
              <span>View all disciplines</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Asymmetric Editorial Grid on Warm Paper */}
          <div className="space-y-8">
            {/* Row 1: Brand & Identity (7 cols) + Next.js Web Engineering (5 cols) */}
            <div className="grid gap-6 lg:grid-cols-12 items-stretch">
              {/* Card 1: Brand Identity & Living Design Tokens */}
              <div className="lg:col-span-7 firm-warm-card p-6 sm:p-10 flex flex-col justify-between space-y-8 border-2 border-black/10 group">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                  <div className="space-y-3 max-w-md">
                    <span className="text-xs font-bold text-[#FF5C40] uppercase tracking-wider font-mono">
                      01 &bull; Brand &amp; Identity
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#121214] tracking-tight">
                      Living design tokens built for real screens
                    </h3>
                    <p className="text-sm text-black/70 leading-relaxed font-sans">
                      We construct typographic hierarchies, color variables, and vector systems that compile directly into production code. No disconnected static PDFs.
                    </p>
                  </div>
                  <div className="shrink-0 self-center sm:self-start">
                    <DoodleBrandSpecimen size={110} />
                  </div>
                </div>

                {/* Live Typographic & Token Specimen Artifact */}
                <div className="rounded-2xl bg-[#F8F6F0] border border-black/10 p-5 space-y-3 shadow-inner">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-black/10">
                    <span className="font-mono text-[#121214] font-bold">firm.tokens.typography</span>
                    <span className="text-[11px] font-mono text-[#FF5C40]">Compiled CSS</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    <div className="p-2.5 rounded-lg bg-white border border-black/10 text-center">
                      <span className="font-display text-lg font-bold text-[#121214] block">Aa</span>
                      <span className="text-[10px] text-black/50 font-mono">Space Grotesk</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-black/10 text-center">
                      <span className="firm-serif-italic text-lg text-[#121214] block">Italic</span>
                      <span className="text-[10px] text-black/50 font-mono">Newsreader</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-black/10 text-center">
                      <div className="w-4 h-4 rounded-full bg-[#FF5C40] mx-auto mb-1" />
                      <span className="text-[10px] text-black/50 font-mono">#FF5C40</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-black/10 text-center">
                      <div className="w-4 h-4 rounded-full bg-[#3875FF] mx-auto mb-1" />
                      <span className="text-[10px] text-black/50 font-mono">#3875FF</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-black/10">
                  <span className="text-xs text-black/60 font-medium">Visual Authority &bull; Design Systems</span>
                  <Link
                    href="/capabilities/brand-identity"
                    className="text-xs font-bold text-[#FF5C40] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read capability guide</span>
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Card 2: Next.js Web Engineering */}
              <div className="lg:col-span-5 firm-warm-card p-6 sm:p-10 flex flex-col justify-between space-y-8 border-2 border-black/10 group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#3875FF] uppercase tracking-wider font-mono">
                      02 &bull; Web &amp; Technology
                    </span>
                    <DoodleWebPlatform size={64} />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#121214] tracking-tight">
                    Sub-second speed. Zero bloat.
                  </h3>
                  <p className="text-sm text-black/70 leading-relaxed font-sans">
                    Next.js 16 Server Components, edge CDN caching, and accessible HTML with zero client-side tracking bloat.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F8F6F0] border border-black/10 p-5 space-y-3 shadow-inner">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="font-display text-3xl font-bold text-[#121214]">100/100</span>
                      <p className="text-xs text-black/50 font-medium">Core Web Vitals</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#10B981] text-black text-xs font-bold font-mono">
                      &lt;600ms TTFB
                    </span>
                  </div>
                  <div className="pt-2 border-t border-black/10 text-xs text-black/70 flex items-center gap-2">
                    <Check size={14} className="text-[#10B981] stroke-[3]" />
                    <span>WCAG 2.1 AA accessibility standard out of the box.</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-black/10">
                  <span className="text-xs text-black/60 font-medium">React 19 &bull; Edge Delivery</span>
                  <Link
                    href="/capabilities/web-technology"
                    className="text-xs font-bold text-[#3875FF] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Inspect architecture</span>
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Row 2: Documentary Media (5 cols) + Growth & Advisory (7 cols) */}
            <div className="grid gap-6 lg:grid-cols-12 items-stretch">
              {/* Card 3: Documentary Media & Storytelling */}
              <div className="lg:col-span-5 firm-warm-card p-6 sm:p-10 flex flex-col justify-between space-y-8 border-2 border-black/10 group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#FFB800] uppercase tracking-wider font-mono">
                      03 &bull; Social &amp; Content
                    </span>
                    <DoodleEditorialCamera size={64} />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#121214] tracking-tight">
                    Documentary rigor over stock assets
                  </h3>
                  <p className="text-sm text-black/70 leading-relaxed font-sans">
                    Original photography, publication monographs, and narrative films captured specifically for your live layout.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8F6F0] border border-black/10 space-y-2">
                  <span className="text-xs font-bold text-[#121214] block">Editorial Artifacts</span>
                  <ul className="text-xs text-black/70 space-y-1.5">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
                      <span>On-site documentary film &amp; photography</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
                      <span>Quarterly strategic field monographs</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-black/10">
                  <span className="text-xs text-black/60 font-medium">Authentic Media &bull; Field Notes</span>
                  <Link
                    href="/capabilities/social-content"
                    className="text-xs font-bold text-[#FFB800] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View editorial scope</span>
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Card 4: Technical Growth & Advisory */}
              <div className="lg:col-span-7 firm-warm-card p-6 sm:p-10 flex flex-col justify-between space-y-8 border-2 border-black/10 group">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                  <div className="space-y-3 max-w-md">
                    <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider font-mono">
                      04 &amp; 05 &bull; Growth &amp; Advisory
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#121214] tracking-tight">
                      Compounding search visibility &amp; total ownership
                    </h3>
                    <p className="text-sm text-black/70 leading-relaxed font-sans">
                      Native JSON-LD schema, admissions conversion architecture, and direct senior stewardship without agency lock-in.
                    </p>
                  </div>
                  <div className="shrink-0 self-center sm:self-start">
                    <DoodleOrganicGrowth size={110} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-[#F8F6F0] border border-black/10">
                    <span className="text-[10px] font-mono font-bold text-[#10B981] block">TECHNICAL SEO</span>
                    <span className="text-xs font-bold text-[#121214] block mt-0.5">Programmatic Schema</span>
                    <p className="text-[11px] text-black/60 mt-1">Structured data directly in App Router</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#F8F6F0] border border-black/10">
                    <span className="text-[10px] font-mono font-bold text-[#FF5C9D] block">FULL STEWARDSHIP</span>
                    <span className="text-xs font-bold text-[#121214] block mt-0.5">Zero Proprietary Lock-In</span>
                    <p className="text-[11px] text-black/60 mt-1">Full code repository and token ownership</p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-black/10">
                  <span className="text-xs text-black/60 font-medium">Inbound Pipelines &bull; Full Autonomy</span>
                  <Link
                    href="/capabilities/marketing-growth"
                    className="text-xs font-bold text-[#10B981] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Explore growth architecture</span>
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 03. Central Yellow Oval Visual Moment (The Thread) ── */}
      <Section background="black" padding="spacious">
        <TheThreadOval />
      </Section>

      {/* ── 04. Studio Operating Tenets on Warm Paper (Open Editorial Grid) ── */}
      <Section background="warm-paper" padding="normal">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-black/10">
            <div className="max-w-2xl space-y-2">
              <DoodleBadgeStamp text="OUR OPERATING STANDARD" color="#FFC700" />
              <h3 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#121214] leading-tight">
                Studio operating tenets.
              </h3>
              <p className="text-base sm:text-lg text-black/70 leading-relaxed font-sans">
                We partner with leaders who value genuine craftsmanship, clean code, and senior execution.
              </p>
            </div>
            <div className="hidden sm:block">
              <DoodleHandSparkle color="#FF90E8" size={28} />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Tenet 1 */}
            <div className="p-6 rounded-2xl bg-white border-2 border-black/10 space-y-4 flex flex-col justify-between hover:border-black/25 transition-all shadow-sm group">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-black/10">
                  <span className="font-mono text-xs font-bold text-[#FF5C40]">01 &bull; COHERENCE</span>
                  <VignetteArchitecturalCoherence size={42} />
                </div>
                <h4 className="font-display text-lg font-bold text-[#121214] group-hover:text-[#FF5C40] transition-colors leading-snug">
                  Tokens flow directly into code
                </h4>
                <p className="text-xs text-black/70 leading-relaxed">
                  Brand, software, and content operate as one system. When designers and developers work in the same repository, the platform holds together under production load.
                </p>
              </div>
            </div>

            {/* Tenet 2 */}
            <div className="p-6 rounded-2xl bg-white border-2 border-black/10 space-y-4 flex flex-col justify-between hover:border-black/25 transition-all shadow-sm group">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-black/10">
                  <span className="font-mono text-xs font-bold text-[#3875FF]">02 &bull; ENGAGEMENT</span>
                  <VignetteSeniorEngagement size={42} />
                </div>
                <h4 className="font-display text-lg font-bold text-[#121214] group-hover:text-[#3875FF] transition-colors leading-snug">
                  Fixed cadence, zero middle management
                </h4>
                <p className="text-xs text-black/70 leading-relaxed">
                  We work in disciplined weekly sprints with measurable milestones. Senior partners direct the work from diagnostic audit through deployment.
                </p>
              </div>
            </div>

            {/* Tenet 3 */}
            <div className="p-6 rounded-2xl bg-white border-2 border-black/10 space-y-4 flex flex-col justify-between hover:border-black/25 transition-all shadow-sm group">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-black/10">
                  <span className="font-mono text-xs font-bold text-[#10B981]">03 &bull; OWNERSHIP</span>
                  <VignetteClientOwnership size={42} />
                </div>
                <h4 className="font-display text-lg font-bold text-[#121214] group-hover:text-[#10B981] transition-colors leading-snug">
                  Total client ownership, zero lock-in
                </h4>
                <p className="text-xs text-black/70 leading-relaxed">
                  Upon completion, you receive the full repository, design tokens, font licenses, and production assets. You retain full control of your infrastructure.
                </p>
              </div>
            </div>

            {/* Tenet 4 */}
            <div className="p-6 rounded-2xl bg-white border-2 border-black/10 space-y-4 flex flex-col justify-between hover:border-black/25 transition-all shadow-sm group">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-black/10">
                  <span className="font-mono text-xs font-bold text-[#FF5C9D]">04 &bull; UTILITY</span>
                  <VignetteEnduringUtility size={42} />
                </div>
                <h4 className="font-display text-lg font-bold text-[#121214] group-hover:text-[#FF5C9D] transition-colors leading-snug">
                  Built for decade-long shelf lives
                </h4>
                <p className="text-xs text-black/70 leading-relaxed">
                  We build websites on durable web standards. Clean code, accessible layouts, and clear typographic hierarchy outlive transient visual fads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 05. Capability Marquee ── */}
      <CapabilityMarquee />

      {/* ── 06. Before & After (Multi-Vendor vs Unified) ── */}
      <Section background="black" padding="normal">
        <BeforeAfterSection />
      </Section>

      {/* ── 07. Featured Concept Studies (Asymmetric High-Presence Showcase) ── */}
      <Section background="black" padding="spacious">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/10">
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-2">
                <DoodleBadgeStamp text="SELECTED CASE STUDIES" color="#FFC700" />
                <DoodleHandStar color="#FF90E8" size={20} />
              </div>
              <h3 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Architectural overhauls in action.
              </h3>
              <p className="text-base sm:text-lg text-white/65 leading-relaxed font-sans">
                Full-scope concept studies demonstrating how five connected disciplines transform digital stature.
              </p>
            </div>
            <Link
              href="/work"
              className="gumroad-btn-secondary text-xs sm:text-sm !py-2.5 !px-5 shrink-0"
            >
              <span>View all studies</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Asymmetric Case Study Layout: Primary Flagship + Secondary Pair */}
          <div className="space-y-8">
            {/* Primary Flagship: Saint Jude Preparatory Academy (High-Presence Visual Showcase) */}
            {featuredProjects[0] && (
              <div className="p-6 sm:p-10 rounded-3xl bg-[#141416] border border-white/10 hover:border-white/25 transition-all group shadow-2xl">
                <div className="grid gap-8 lg:grid-cols-12 items-center">
                  <div className="lg:col-span-7">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#18181B] border border-white/15 shadow-xl">
                      <Image
                        src={featuredProjects[0].image}
                        alt={featuredProjects[0].title}
                        fill
                        className="object-cover group-hover:scale-102 transition-transform duration-500"
                        priority
                      />
                      {/* Live Specimen Watermark Overlay */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-mono text-[#FFC700] border border-white/15">
                          FLAGSHIP BLUEPRINT
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#FFC700]">
                          {featuredProjects[0].industry}
                        </span>
                        <span className="text-white/40">&bull;</span>
                        <span className="text-xs text-white/50">8-Week Blueprint</span>
                      </div>

                      <h4 className="font-display text-2xl sm:text-4xl font-bold text-white group-hover:text-[#FF90E8] transition-colors leading-tight">
                        {featuredProjects[0].title}
                      </h4>

                      <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans">
                        {featuredProjects[0].summary}
                      </p>

                      {/* 3 Connected Divisions Badges */}
                      <div className="pt-2 flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#1C1C20] border border-white/10 text-xs text-[#FF5C40] font-mono">
                          01 Brand System
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#1C1C20] border border-white/10 text-xs text-[#3875FF] font-mono">
                          02 Next.js SSG
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#1C1C20] border border-white/10 text-xs text-[#FFB800] font-mono">
                          03 Documentary Film
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs text-white/50 font-mono">Decoupled Admissions &bull; WCAG 2.1 AA</span>
                      <Link
                        href={`/work/${featuredProjects[0].slug}`}
                        className="gumroad-btn-pink !py-2 !px-4 text-xs font-bold inline-flex items-center gap-1.5"
                      >
                        <span>Inspect full blueprint</span>
                        <ArrowUpRight size={13} className="stroke-[2.5]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Supporting Studies Pair */}
            <div className="grid gap-6 md:grid-cols-2">
              {featuredProjects.slice(1, 3).map((p, idx) => (
                <div
                  key={p.slug}
                  className="p-6 sm:p-8 rounded-3xl bg-[#141416] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between group shadow-xl"
                >
                  <div className="space-y-5">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#18181B] border border-white/15">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-white/80 border border-white/15">
                          {p.industry}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: idx === 0 ? "#10B981" : "#FF5C9D" }}
                        />
                        <span className="text-xs font-mono text-white/50">{p.clientType}</span>
                      </div>
                      <h4 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#FF90E8] transition-colors leading-snug">
                        {p.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-sans line-clamp-3">
                        {p.summary}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-white/40 font-mono">Specialized Practice</span>
                    <Link
                      href={`/work/${p.slug}`}
                      className="text-xs font-bold text-[#FF90E8] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Read study</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── 08. 5-Stage Architectural Journey (Full-Width Scene) ── */}
      <FullWidthIllustratedScene />

      {/* ── 09. Closing CTA Section with Distinctive Brand Presence ── */}
      <Section background="black" padding="spacious">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center">
            <DoodleBadgeStamp text="BEGIN A CONVERSATION" color="#FFC700" />
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            Build something that lasts.{" "}
            <span className="firm-serif-italic text-[#FF90E8] font-normal block sm:inline">
              Without the agency runaround.
            </span>
          </h2>

          <div className="flex justify-center -mt-2">
            <DoodleWavyLine color="#FFC700" width={260} />
          </div>

          <p className="text-base sm:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed font-sans">
            Tell us about your organization, timeline, and current digital presence challenges. A senior partner will review your requirements.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/connect"
              className="gumroad-btn-pink text-base sm:text-lg font-bold px-9 py-4 w-full sm:w-auto shadow-xl hover:scale-102 transition-transform"
            >
              <span>Start a project</span>
              <ArrowUpRight size={18} className="stroke-[2.5]" />
            </Link>

            <Link
              href="/faq"
              className="gumroad-btn-secondary text-sm sm:text-base px-7 py-4 w-full sm:w-auto"
            >
              <span>Read operational FAQ</span>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
