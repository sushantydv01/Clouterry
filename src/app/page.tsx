import React from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import CapabilitiesWorkbench from "@/components/interactive/CapabilitiesWorkbench";
import TheThreadOval from "@/components/thread/TheThreadOval";
import BeforeAfterSection from "@/components/thread/BeforeAfterSection";
import StudyShowcaseArt from "@/components/illustrations/StudyShowcaseArt";
import StickerMark from "@/components/illustrations/StickerMark";
import { CAPABILITY_NODES } from "@/lib/threadTheme";
import { PROJECTS } from "@/data/projects";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const STUDIO_PRINCIPLES = [
  {
    num: "01",
    title: "Tokens compile directly into code",
    body: "Design systems live as CSS variables and semantic HTML inside one repository so interfaces never drift from brand craft.",
  },
  {
    num: "02",
    title: "Fixed sprints, direct partners",
    body: "Every engagement runs in predictable weekly milestones led directly by the senior strategists and engineers writing your code.",
  },
  {
    num: "03",
    title: "Complete repository custody",
    body: "Upon completion you hold the Git repository, token architecture, fonts, and raw documentary media with zero lock-in.",
  },
  {
    num: "04",
    title: "Engineered across a decade",
    body: "Accessible contrast, fast edge delivery, and disciplined typography age gracefully instead of forcing periodic template rebuilds.",
  },
];

const COMPANION_SECTORS = [
  {
    slug: "healthcare",
    name: "Healthcare Clinics",
    detail: "Low-anxiety patient intake and specialist directories.",
    accent: "#A6D8A1",
  },
  {
    slug: "professional",
    name: "Professional Services",
    detail: "Editorial legal journals, partner dossiers & credentials.",
    accent: "#ED83A8",
  },
  {
    slug: "retail",
    name: "Boutique Retail",
    detail: "Headless storefronts uniting craft narrative with speed.",
    accent: "#F4CF55",
  },
  {
    slug: "startups",
    name: "Startups & Ventures",
    detail: "Four-week launch systems grounded in scalable brand tokens.",
    accent: "#ED83A8",
  },
];

export default function Home() {
  const leadStudy = PROJECTS[0];
  const supportingStudies = PROJECTS.slice(1, 3);

  return (
    <div className="flex flex-col min-h-screen bg-[#171717] text-[#F8F6EF]">
      {/* ── 01. Edge-to-Edge Midnight Charcoal Atelier Hero (S01 Full-Viewport Integration) ── */}
      <section
        data-surface="dark"
        className="relative pt-24 pb-8 lg:pt-24 lg:pb-10 bg-[#171717] overflow-hidden"
        aria-label="FIRM Studio Introduction"
      >
        {/* Desktop Full-Bleed Right Artwork Blending Naturally Above Discipline Baseline */}
        <div
          className="hidden lg:block absolute top-0 right-0 bottom-[76px] w-[62%] xl:w-[68%] pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <Image
            src="/images/studio/s01-garden-collage.webp"
            alt="Tactile paper-cut studio collage showing an architectural archway, rose pink flower, camera, browser frame, and unbroken thread"
            fill
            priority
            sizes="(min-width: 1024px) 68vw, 100vw"
            className="object-cover object-right"
          />
          <div className="absolute inset-y-0 left-0 w-[52%] xl:w-[40%] bg-gradient-to-r from-[#171717] via-[#171717]/78 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#171717] via-[#171717]/80 to-transparent" />
        </div>

        <Container size="wide" className="relative z-10">
          <div className="min-h-[calc(100dvh-8.5rem)] lg:min-h-[600px] xl:min-h-[660px] flex flex-col justify-between gap-10">
            {/* Primary Above-Fold Lockup — Cultured Medium Display + Optical Italic Serif */}
            <div className="pt-4 sm:pt-8 lg:pt-12 max-w-[490px] xl:max-w-[610px] space-y-6 text-left">
              <div className="inline-flex items-center gap-2.5">
                <span className="text-sm font-sans font-medium text-[#F4CF55]">
                  Digital Presence &amp; Growth Studio
                </span>
                <StickerMark name="s09-01-sparkle" size={18} />
              </div>

              <h1 className="font-display text-[44px] sm:text-6xl lg:text-[64px] xl:text-[78px] font-medium tracking-[-0.03em] text-[#F8F6EF] leading-[1.01]">
                One partner.{" "}
                <span className="block firm-serif-italic font-normal text-[#ED83A8] pb-1">
                  Connected craft.
                </span>
              </h1>

              <p className="text-base sm:text-xl text-[#D5D2C7] font-sans leading-relaxed max-w-[46ch]">
                We unite brand identity, bespoke software, documentary media, and organic search inside one continuous digital standard.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3.5">
                <Link
                  href="/connect"
                  className="firm-btn-primary text-sm sm:text-base w-full sm:w-auto"
                >
                  <span>Start a project</span>
                  <ArrowUpRight size={16} className="stroke-[2]" />
                </Link>

                <a
                  href="#capabilities-workbench"
                  className="firm-btn-secondary text-sm sm:text-base w-full sm:w-auto"
                >
                  <span>Inspect disciplines</span>
                  <ArrowDownRight size={16} className="text-[#D5D2C7]" />
                </a>
              </div>
            </div>

            {/* Mobile & Tablet (< lg) Edge-to-Edge S01 Vignette Blending Seamlessly Out of Charcoal */}
            <div className="block lg:hidden relative -mx-5 sm:-mx-8 aspect-[5/4] overflow-hidden bg-[#171717]">
              <Image
                src="/images/studio/s01-garden-collage-mobile.webp"
                alt="Paper-cut architectural garden collage illustration"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#171717] to-transparent" />
            </div>

            {/* Hero Bottom Discipline Bar (Desktop >= lg — Short descriptors at 1024px, full names at 1280px+ prevent collisions) */}
            <div className="hidden lg:grid grid-cols-5 gap-4 xl:gap-6 pt-6 border-t border-[#F8F6EF]/12 relative z-20">
              {CAPABILITY_NODES.map((node) => (
                <Link
                  key={node.slug}
                  href={`/capabilities/${node.slug}`}
                  className="group flex items-baseline gap-2.5 text-left py-1 min-w-0"
                >
                  <span className="font-mono text-xs text-[#ACA89E] tabular-nums shrink-0">
                    {node.num}
                  </span>
                  <div className="min-w-0">
                    <span className="font-display text-sm font-medium text-[#F8F6EF] group-hover:text-[#ED83A8] transition-colors inline-flex items-center gap-1.5 max-w-full">
                      <span
                        className="h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: node.color }}
                        aria-hidden="true"
                      />
                      <span className="xl:hidden truncate">{node.shortName}</span>
                      <span className="hidden xl:inline truncate">
                        {node.name === "Digital Management & Consulting"
                          ? "Digital Advisory"
                          : node.name}
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 02. Warm Cream Atelier Capabilities Exhibition (#F8F6EF Canvas Shift) ── */}
      <Section
        id="capabilities-workbench"
        background="warm-paper"
        containerSize="wide"
        padding="spacious"
      >
        <CapabilitiesWorkbench />
      </Section>

      {/* ── 03. The Thread Synthesis & Interactive SVG Circuit (S02) ── */}
      <Section background="charcoal" containerSize="wide" padding="spacious">
        <TheThreadOval />
      </Section>

      {/* ── 04. Interactive Architectural Comparison (S03 Multi-Vendor vs One Repository) ── */}
      <Section background="charcoal-subtle" containerSize="wide" padding="normal">
        <BeforeAfterSection />
      </Section>

      {/* ── 05. Selected Architecture Studies on Warm Cream (#F8F6EF) ── */}
      <Section background="warm-paper" containerSize="wide" padding="spacious">
        <div className="w-full space-y-12">
          {/* Open Left-Stacked Editorial Header */}
          <div className="max-w-2xl space-y-4 pb-8 border-b border-[#171717]/15">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-medium tracking-[-0.025em] text-[#171717] leading-[1.06]">
              Architecture applied to complex institutions.
            </h2>
            <p className="text-base sm:text-lg text-[#3F3D38] leading-relaxed font-sans">
              Transparent concept blueprints showing how connected design and software resolve institutional friction without fabricated claims.
            </p>
            <div className="pt-1">
              <Link
                href="/work"
                className="firm-btn-outline-dark text-sm"
              >
                <span>All concept studies</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          {/* Lead Study Exhibition (7/5 Open Asymmetric Spread: Saint Jude Academy) */}
          {leadStudy && (
            <article className="grid gap-8 lg:gap-12 lg:grid-cols-12 items-center group">
              <div className="lg:col-span-7">
                <Link
                  href={`/work/${leadStudy.slug}`}
                  className="block relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#171717] border border-[#171717]/14 shadow-[0_24px_48px_rgba(23,23,23,0.12)]"
                >
                  <StudyShowcaseArt
                    slug={leadStudy.slug}
                    loading="eager"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </Link>
              </div>

              <div className="lg:col-span-5 space-y-5 text-left">
                <div className="flex flex-wrap items-center gap-2.5 text-xs font-sans font-medium text-[#3F3D38]">
                  <span className="px-2.5 py-1 rounded-full bg-[#F4CF55] text-[#171717] font-semibold">
                    {leadStudy.classification}
                  </span>
                  <span>{leadStudy.industry}</span>
                  <span>·</span>
                  <span className="font-mono">{leadStudy.timeframe}</span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-tight text-[#171717] leading-[1.08]">
                  <Link
                    href={`/work/${leadStudy.slug}`}
                    className="group-hover:text-[#171717]/75 transition-colors"
                  >
                    {leadStudy.title}
                  </Link>
                </h3>

                <p className="text-base text-[#3F3D38] leading-relaxed font-sans max-w-lg">
                  {leadStudy.summary}
                </p>

                <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1 text-xs font-sans text-[#3F3D38]">
                  {leadStudy.divisions.map((div) => (
                    <span key={div} className="inline-flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ED83A8]" aria-hidden="true" />
                      <span>{div}</span>
                    </span>
                  ))}
                </div>

                <div className="pt-3">
                  <Link
                    href={`/work/${leadStudy.slug}`}
                    className="firm-btn-dark text-sm"
                  >
                    <span>Inspect study</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* Supporting Two-Column Gallery Pair (W02 & W03 — Clean Open Plates) */}
          <div className="grid gap-10 lg:grid-cols-2 pt-10 border-t border-[#171717]/15">
            {supportingStudies.map((project) => (
              <article key={project.slug} className="space-y-5 group">
                <Link
                  href={`/work/${project.slug}`}
                  className="block relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#171717] border border-[#171717]/14 shadow-[0_18px_36px_rgba(23,23,23,0.1)]"
                >
                  <StudyShowcaseArt
                    slug={project.slug}
                    loading="eager"
                    sizes="(max-width: 1024px) 100vw, 48vw"
                  />
                </Link>

                <div className="grid gap-4 sm:grid-cols-12 items-start">
                  <div className="sm:col-span-8 space-y-2">
                    <span className="text-xs font-sans font-medium text-[#3F3D38] block">
                      {project.industry} · {project.classification}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#171717] tracking-tight">
                      <Link
                        href={`/work/${project.slug}`}
                        className="group-hover:underline"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-sm sm:text-base text-[#3F3D38] leading-relaxed font-sans">
                      {project.summary}
                    </p>
                  </div>

                  <div className="sm:col-span-4 flex sm:justify-end pt-1">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-display font-medium text-[#171717] hover:text-[#3F3D38] underline underline-offset-4 whitespace-nowrap"
                    >
                      <span>Read study</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 06. Operating Principles + Reputation-Critical Sector Architecture ── */}
      <Section background="charcoal" containerSize="wide" padding="spacious">
        <div className="w-full grid gap-12 lg:gap-16 lg:grid-cols-12 items-start">
          {/* Left Column (5 cols): Studio Principles */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-[-0.025em] text-[#F8F6EF] leading-[1.08]">
                Operating principles built for longevity.
              </h2>
              <p className="text-base text-[#D5D2C7] leading-relaxed font-sans">
                Four structural standards govern every commission from initial audit through post-launch custody.
              </p>
            </div>

            <div className="divide-y divide-[#F8F6EF]/12 border-y border-[#F8F6EF]/12">
              {STUDIO_PRINCIPLES.map((item) => (
                <div key={item.num} className="py-5 grid grid-cols-12 gap-4 items-start">
                  <span className="col-span-2 font-mono text-xs text-[#F4CF55] pt-1 tabular-nums">
                    {item.num}
                  </span>
                  <div className="col-span-10 space-y-1.5">
                    <h3 className="font-display text-lg sm:text-xl font-medium text-[#F8F6EF] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#D5D2C7] leading-relaxed font-sans">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (7 cols): Sectors Practice Index (Education anchor + Clean Open Hairline Grid) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#F8F6EF]/12">
              <div className="space-y-1.5">
                <h2 className="font-display text-2xl sm:text-4xl font-medium tracking-tight text-[#F8F6EF]">
                  Built for reputation-critical sectors.
                </h2>
                <p className="text-sm sm:text-base text-[#D5D2C7] font-sans">
                  Specialized architectural blueprints shaped around real institutional trust.
                </p>
              </div>
              <Link
                href="/industries"
                className="text-sm font-display font-medium text-[#ED83A8] hover:underline inline-flex items-center gap-1 whitespace-nowrap shrink-0"
              >
                <span>Explore sector guides</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Featured Primary Practice: Education & Schools */}
            <Link
              href="/industries/education"
              className="group block rounded-2xl bg-[#1D1D20] border border-[#F8F6EF]/14 hover:border-[#F4CF55]/50 p-6 sm:p-8 transition-colors space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-xs font-sans font-medium text-[#F4CF55]">
                  <span className="h-2 w-2 rounded-full bg-[#F4CF55]" aria-hidden="true" />
                  <span>Primary Practice · Education &amp; Schools</span>
                </span>
                <span className="text-xs font-display font-medium text-[#F8F6EF] group-hover:text-[#F4CF55] inline-flex items-center gap-1">
                  <span>Inspect 4-layer school blueprint</span>
                  <ArrowUpRight size={14} />
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#F8F6EF] group-hover:text-[#F4CF55] transition-colors">
                  Preparatory academies, independent K-12 schools, and higher education
                </h3>
                <p className="text-sm sm:text-base text-[#D5D2C7] leading-relaxed max-w-2xl">
                  Separating prospective parent admissions gateways and campus storytelling cleanly from daily family schedules and WCAG 2.1 AA utility portals.
                </p>
              </div>
            </Link>

            {/* Open Hairline Companion Sector Directory (Eliminates repetitive box-in-box nesting) */}
            <div className="grid gap-x-8 divide-y sm:divide-y-0 sm:grid-cols-2 border-y border-[#F8F6EF]/12 sm:border-t-0 sm:border-b-0">
              {COMPANION_SECTORS.map((sector) => (
                <Link
                  key={sector.slug}
                  href={`/industries/${sector.slug}`}
                  className="group py-5 sm:py-6 border-b border-[#F8F6EF]/12 flex items-start justify-between gap-4 transition-colors"
                >
                  <div className="space-y-1.5">
                    <span className="inline-flex items-center gap-2 font-display text-lg font-medium text-[#F8F6EF] group-hover:text-[#ED83A8] transition-colors">
                      <span
                        className="h-2 w-2 rounded-full shrink-0"
                        style={{ backgroundColor: sector.accent }}
                        aria-hidden="true"
                      />
                      <span>{sector.name}</span>
                    </span>
                    <p className="text-sm text-[#D5D2C7] leading-relaxed font-sans">
                      {sector.detail}
                    </p>
                  </div>
                  <ArrowUpRight size={16} className="text-[#ACA89E] group-hover:text-[#ED83A8] shrink-0 mt-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── 07. Asymmetric Horizon Invitation + Full-Bleed Panoramic Horizon (S10) ── */}
      <section
        data-surface="dark"
        className="relative w-full bg-[#171717] border-t border-[#F8F6EF]/10 pt-20 sm:pt-24 overflow-hidden"
        aria-label="Start a project invitation"
      >
        <Container size="wide" className="relative z-10 pb-8 sm:pb-12">
          <div className="grid gap-8 lg:grid-cols-12 items-end text-left">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#F8F6EF] text-[#171717] text-xs font-sans font-medium">
                <StickerMark name="s09-09-paper-plane" size={20} />
                <span>Direct Partner Review</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-[60px] font-medium tracking-[-0.03em] text-[#F8F6EF] leading-[1.04]">
                Bring one standard to your digital presence.
              </h2>
            </div>

            <div className="lg:col-span-5 space-y-5 lg:pb-1">
              <p className="text-base sm:text-lg text-[#D5D2C7] leading-relaxed font-sans">
                Share your organization, goals, and timeline. A senior studio partner reviews every architecture brief directly.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3.5">
                <Link
                  href="/connect"
                  className="firm-btn-primary text-sm sm:text-base w-full sm:w-auto"
                >
                  <span>Start a project</span>
                  <ArrowUpRight size={16} className="stroke-[2]" />
                </Link>
                <Link
                  href="/faq"
                  className="firm-btn-secondary text-sm sm:text-base w-full sm:w-auto"
                >
                  <span>Read operational FAQ</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>

        {/* Full-Width 100vw Panoramic S10 Horizon Scene */}
        <div className="relative w-full -mt-2 sm:-mt-8 pointer-events-none select-none [mask-image:linear-gradient(to_bottom,transparent_0%,black_28%,black_100%)]">
          <div className="hidden sm:block relative aspect-[16/7] max-h-[540px] w-full">
            <Image
              src="/images/studio/s10-horizon-panorama.webp"
              alt="Panoramic paper-cut landscape showing layered green terraced hills, butter yellow stairs, cream pavilions, and an unbroken rose pink ribbon path"
              fill
              loading="eager"
              sizes="100vw"
              className="object-cover object-bottom"
            />
          </div>
          <div className="block sm:hidden relative aspect-[4/3] w-full">
            <Image
              src="/images/studio/s10-horizon-panorama-mobile.webp"
              alt="Panoramic paper-cut landscape showing cream pavilions and a rose pink path across green hills"
              fill
              loading="eager"
              sizes="100vw"
              className="object-cover object-bottom"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
