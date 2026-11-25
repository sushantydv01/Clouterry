import React from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import CapabilitiesWorkbench from "@/components/interactive/CapabilitiesWorkbench";
import TheThreadOval from "@/components/thread/TheThreadOval";
import CapabilityMarquee from "@/components/thread/CapabilityMarquee";
import BeforeAfterSection from "@/components/thread/BeforeAfterSection";
import StudyShowcaseArt from "@/components/illustrations/StudyShowcaseArt";
import StickerMark, { StickerName } from "@/components/illustrations/StickerMark";
import { PROJECTS } from "@/data/projects";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const OPERATING_TENETS: {
  num: string;
  title: string;
  label: string;
  body: string;
  sticker: StickerName;
  accent: string;
}[] = [
  {
    num: "01",
    label: "Coherence",
    title: "Tokens flow straight into code",
    body: "Brand systems, software, and content live inside one repository so typography and spacing hold together under real production loads.",
    sticker: "s09-02-flower",
    accent: "#ED83A8",
  },
  {
    num: "02",
    label: "Engagement",
    title: "Fixed sprints, zero handoff layers",
    body: "Every engagement runs in disciplined weekly milestones led directly by the senior partners authoring your design and codebase.",
    sticker: "s09-05-eye",
    accent: "#F4CF55",
  },
  {
    num: "03",
    label: "Ownership",
    title: "Complete repository custody",
    body: "Upon launch, you receive full ownership of the codebase, token architecture, fonts, and media without proprietary CMS lock-in.",
    sticker: "s09-17-lightbulb",
    accent: "#A6D8A1",
  },
  {
    num: "04",
    label: "Endurance",
    title: "Built to age across a decade",
    body: "Semantic HTML, accessible contrast, and durable editorial structure outlast short-lived visual trends and template rebuild cycles.",
    sticker: "s09-08-green-wedge",
    accent: "#F8F6EF",
  },
];

const PRACTICE_SECTORS = [
  {
    slug: "education",
    name: "Education & Schools",
    focus: "Admissions gateways decoupled from parent utilities",
    accent: "#F4CF55",
  },
  {
    slug: "healthcare",
    name: "Healthcare Clinics",
    focus: "Low-anxiety patient intake & specialist directories",
    accent: "#A6D8A1",
  },
  {
    slug: "professional",
    name: "Professional Services",
    focus: "Legal journals, partner dossiers & practice authority",
    accent: "#ED83A8",
  },
  {
    slug: "retail",
    name: "Boutique Retail",
    focus: "Bespoke storefronts with editorial storytelling",
    accent: "#A6D8A1",
  },
  {
    slug: "startups",
    name: "Startups & Ventures",
    focus: "Focused launch sprints anchored by unified brand tokens",
    accent: "#F4CF55",
  },
];

export default function Home() {
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-[#171717] text-[#F8F6EF]">
      {/* ── 01. Asymmetric Collage Hero (S01 Midnight Charcoal Integration) ── */}
      <section
        className="relative pt-28 pb-12 sm:pt-36 sm:pb-20 lg:pt-28 lg:pb-20 bg-[#171717] overflow-hidden"
        aria-label="FIRM Studio Introduction"
      >
        <Container size="wide" className="relative z-10">
          <div className="relative lg:min-h-[560px] xl:min-h-[620px] flex flex-col lg:flex-row lg:items-center gap-10">
            {/* Desktop Background Artwork Anchored Right Over Open Left ~44% Space */}
            <div className="hidden lg:block absolute inset-y-0 right-0 w-[64%] xl:w-[66%] pointer-events-none select-none overflow-hidden rounded-3xl">
              <Image
                src="/images/studio/s01-garden-collage.webp"
                alt="Tactile paper-cut collage depicting an architectural archway, blossom, camera, browser frame, and looping rose pink ribbon"
                fill
                priority
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover object-right"
              />
              {/* Soft left transition gradient keeping text crisp on #171717 */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#171717]/40 to-transparent w-[36%]" />
            </div>

            {/* Left Editorial Narrative Zone */}
            <div className="relative z-10 w-full lg:max-w-[540px] xl:max-w-[580px] space-y-6 text-left">
              <div className="inline-flex items-center gap-2.5">
                <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#F4CF55]">
                  Five Integrated Disciplines
                </span>
                <StickerMark name="s09-01-sparkle" size={22} />
              </div>

              <h1 className="font-display text-4xl sm:text-6xl xl:text-[68px] font-bold tracking-tight text-[#F8F6EF] leading-[1.03]">
                One partner.{" "}
                <span className="text-[#ED83A8]">Connected craft.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#C4C1B8] font-sans leading-relaxed max-w-lg">
                We unite brand identity, bespoke Next.js software, documentary media, and organic search inside one continuous digital standard.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3.5">
                <Link
                  href="/connect"
                  className="firm-btn-primary text-sm sm:text-base w-full sm:w-auto"
                >
                  <span>Start a project</span>
                  <ArrowUpRight size={16} className="stroke-[2.25]" />
                </Link>

                <a
                  href="#capabilities-workbench"
                  className="firm-btn-secondary text-sm sm:text-base w-full sm:w-auto"
                >
                  <span>Explore disciplines</span>
                  <ArrowDownRight size={16} className="text-[#9C9990]" />
                </a>
              </div>
            </div>

            {/* Mobile & Tablet Crisp 5:4 Right-Focal Crop Directly Below Above-Fold Lockup */}
            <div className="block lg:hidden relative w-full aspect-[5/4] rounded-2xl overflow-hidden border border-[#F8F6EF]/12 bg-[#171717]">
              <Image
                src="/images/studio/s01-garden-collage-mobile.webp"
                alt="Paper-cut architectural garden collage illustration"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── 02. Interactive Capabilities Workbench (S04-S08 + A02) ── */}
      <Section id="capabilities-workbench" background="charcoal" padding="spacious">
        <CapabilitiesWorkbench />
      </Section>

      {/* ── 03. The Thread Synthesis & Ribbon Track (S02 + A01) ── */}
      <Section background="charcoal-subtle" padding="spacious">
        <TheThreadOval />
      </Section>

      {/* ── 04. Architectural Contrast Split (S03) ── */}
      <Section background="charcoal" padding="spacious">
        <BeforeAfterSection />
      </Section>

      {/* ── 05. Studio Operating Tenets (Open Typographic Hairline Grid) ── */}
      <Section background="charcoal" padding="normal">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2.5 max-w-xl">
              <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#A6D8A1] block">
                Operating Tenets
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F8F6EF] leading-[1.08]">
                Principles built for endurance.
              </h2>
            </div>
            <Link
              href="/firm"
              className="text-sm font-display font-semibold text-[#ED83A8] hover:underline inline-flex items-center gap-1.5 whitespace-nowrap self-start sm:self-auto"
            >
              <span>Read studio philosophy</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 pt-2">
            {OPERATING_TENETS.map((tenet) => (
              <div
                key={tenet.num}
                className="border-t border-[#F8F6EF]/16 pt-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-xs font-medium uppercase tracking-[0.12em]"
                      style={{ color: tenet.accent }}
                    >
                      {tenet.num} · {tenet.label}
                    </span>
                    <StickerMark name={tenet.sticker} size={28} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#F8F6EF] leading-snug">
                    {tenet.title}
                  </h3>
                  <p className="text-sm text-[#C4C1B8] leading-relaxed font-sans">
                    {tenet.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 06. Selected Architectural Concept Studies (W01-W03) ── */}
      <Section background="charcoal-subtle" padding="spacious">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#F8F6EF]/12">
            <div className="max-w-2xl space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#ED83A8] block">
                Selected Architecture Studies
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F8F6EF] leading-[1.08]">
                Craft applied to complex organizations.
              </h2>
              <p className="text-base sm:text-lg text-[#C4C1B8] leading-relaxed font-sans">
                Transparent concept blueprints showing how five disciplines solve concrete institutional problems without fabricated outcomes.
              </p>
            </div>
            <Link
              href="/work"
              className="firm-btn-secondary text-xs sm:text-sm !py-2.5 !px-5 shrink-0 self-start sm:self-auto"
            >
              <span>All concept studies</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="space-y-8">
            {/* Primary 60/40 Featured Study: Saint Jude Academy */}
            {featuredProjects[0] && (
              <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#1E1E20] border border-[#F8F6EF]/12 hover:border-[#F8F6EF]/24 transition-colors group">
                <div className="grid gap-8 lg:grid-cols-12 items-center">
                  <div className="lg:col-span-7">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#F8F6EF]/12 bg-[#171717]">
                      <StudyShowcaseArt slug={featuredProjects[0].slug} />
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                    <div className="space-y-3.5">
                      <span className="text-xs font-mono uppercase tracking-[0.12em] text-[#F4CF55] block">
                        {featuredProjects[0].industry} · {featuredProjects[0].classification}
                      </span>

                      <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#F8F6EF] group-hover:text-[#ED83A8] transition-colors leading-tight">
                        {featuredProjects[0].title}
                      </h3>

                      <p className="text-sm sm:text-base text-[#C4C1B8] leading-relaxed font-sans">
                        {featuredProjects[0].summary}
                      </p>

                      <div className="pt-1 flex flex-wrap gap-2 text-xs font-mono text-[#9C9990]">
                        {featuredProjects[0].divisions.map((div) => (
                          <span
                            key={div}
                            className="px-3 py-1 rounded-full bg-[#171717] border border-[#F8F6EF]/10"
                          >
                            {div}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#F8F6EF]/10 flex flex-wrap items-center justify-between gap-4">
                      <span className="text-xs font-mono text-[#9C9990]">
                        {featuredProjects[0].timeframe}
                      </span>
                      <Link
                        href={`/work/${featuredProjects[0].slug}`}
                        className="firm-btn-primary text-xs sm:text-sm !py-2.5 !px-5"
                      >
                        <span>Inspect study</span>
                        <ArrowUpRight size={14} className="stroke-[2.25]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Supporting 2-Up Studies */}
            <div className="grid gap-6 md:grid-cols-2">
              {featuredProjects.slice(1, 3).map((project) => (
                <div
                  key={project.slug}
                  className="p-6 sm:p-8 rounded-2xl bg-[#1E1E20] border border-[#F8F6EF]/12 hover:border-[#F8F6EF]/24 transition-colors flex flex-col justify-between group"
                >
                  <div className="space-y-5">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#F8F6EF]/12 bg-[#171717]">
                      <StudyShowcaseArt slug={project.slug} />
                    </div>

                    <div className="space-y-2.5">
                      <span
                        className="text-xs font-mono uppercase tracking-[0.12em] block"
                        style={{ color: project.accentColor }}
                      >
                        {project.industry} · {project.classification}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-[#F8F6EF] group-hover:text-[#ED83A8] transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#C4C1B8] leading-relaxed font-sans">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F8F6EF]/10 flex items-center justify-between gap-4">
                    <span className="text-xs font-mono text-[#9C9990]">
                      {project.timeframe}
                    </span>
                    <Link
                      href={`/work/${project.slug}`}
                      className="text-sm font-display font-semibold text-[#ED83A8] hover:underline inline-flex items-center gap-1 whitespace-nowrap"
                    >
                      <span>Read study</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── 07. Marquee & Five Practice Sectors ── */}
      <CapabilityMarquee />

      <Section background="charcoal" padding="normal" withBorder={false}>
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#A6D8A1] block">
                Focused Sectors
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#F8F6EF]">
                Built for reputation-critical practices.
              </h2>
            </div>
            <Link
              href="/industries"
              className="text-sm font-display font-semibold text-[#F8F6EF] hover:text-[#ED83A8] transition-colors inline-flex items-center gap-1.5 whitespace-nowrap self-start sm:self-auto"
            >
              <span>Explore sector guides</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid gap-x-8 gap-y-2 md:grid-cols-5 border-t border-[#F8F6EF]/12 pt-6">
            {PRACTICE_SECTORS.map((sector) => (
              <Link
                key={sector.slug}
                href={`/industries/${sector.slug}`}
                className="group py-3 border-b border-[#F8F6EF]/10 md:border-b-0 space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: sector.accent }}
                    aria-hidden="true"
                  />
                  <span className="font-display text-base font-bold text-[#F8F6EF] group-hover:text-[#ED83A8] transition-colors">
                    {sector.name}
                  </span>
                </div>
                <p className="text-xs text-[#9C9990] leading-relaxed">
                  {sector.focus}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 08. Closing Panoramic Horizon Banner (S10 Full-Bleed Scene) ── */}
      <section
        className="relative w-full bg-[#171717] border-t border-[#F8F6EF]/10 pt-20 sm:pt-28 overflow-hidden"
        aria-label="Begin a Project"
      >
        <Container size="default" className="relative z-10 text-center space-y-6 pb-10 sm:pb-14">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#ED83A8]">
              Begin a Conversation
            </span>
            <StickerMark name="s09-09-paper-plane" size={22} />
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#F8F6EF] leading-[1.05] max-w-3xl mx-auto">
            Build digital equity that endures a decade.
          </h2>

          <p className="text-base sm:text-lg text-[#C4C1B8] max-w-xl mx-auto leading-relaxed font-sans">
            Share your organization, timeline, and objectives. A senior partner will review your architecture personally.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/connect"
              className="firm-btn-primary text-sm sm:text-base w-full sm:w-auto"
            >
              <span>Start a project</span>
              <ArrowUpRight size={16} className="stroke-[2.25]" />
            </Link>
            <Link
              href="/faq"
              className="firm-btn-secondary text-sm sm:text-base w-full sm:w-auto"
            >
              <span>Read operational FAQ</span>
            </Link>
          </div>
        </Container>

        {/* Full-Bleed Panoramic Horizon Bottom Landscape (S10) with soft sky blend */}
        <div className="relative w-full max-w-[1600px] mx-auto -mt-6 sm:-mt-16 pointer-events-none select-none [mask-image:linear-gradient(to_bottom,transparent_0%,black_26%,black_100%)]">
          <div className="hidden sm:block relative aspect-[16/7] w-full">
            <Image
              src="/images/studio/s10-horizon-panorama.webp"
              alt="Panoramic paper-cut landscape showing green terraced hills, butter yellow stairs, cream stepped pavilions, and an unbroken rose pink path"
              fill
              sizes="100vw"
              className="object-cover object-bottom"
            />
          </div>
          <div className="block sm:hidden relative aspect-[4/3] w-full">
            <Image
              src="/images/studio/s10-horizon-panorama-mobile.webp"
              alt="Panoramic paper-cut landscape showing stepped cream pavilions and a rose pink path"
              fill
              sizes="100vw"
              className="object-cover object-bottom"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
