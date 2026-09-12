"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import AgencyTicker from "@/components/AgencyTicker";
import {
  Sparkle,
  VideoCamera,
  SpeakerHigh,
  SlidersHorizontal,
  Clock,
  ArrowUpRight,
} from "@phosphor-icons/react";
import Link from "next/link";

interface CohortDetail {
  id: string;
  num: string;
  name: string;
  status: "Active Sprint" | "Accepting Talent" | "In Development";
  subniche: string;
  hookRate: string;
  avgViews: string;
  cameraStandard: string;
  audioSignature: string;
  lightingStandard: string;
  sampleBrief: string;
  deliverables: string;
  description: string;
}

const ALL_COHORTS: CohortDetail[] = [
  {
    id: "beauty",
    num: "01",
    name: "Beauty & Daily Rituals",
    status: "Active Sprint",
    subniche: "Natural luminescence & daylight skincare",
    hookRate: "48.6%",
    avgViews: "34k - 180k",
    cameraStandard: "4K 60fps ProRes Log // 35mm Prime // Natural Macro",
    audioSignature: "Tactile dropper clicks, unhurried ASMR, room resonance",
    lightingStandard: "North-facing daylight window // Zero ring lights",
    sampleBrief: "The unhurried 7-day winter skin barrier restoration routine.",
    deliverables: "6 vertical cuts, 4K ProRes masters, 90-day Spark Ads codes, clean vocal stems",
    description:
      "Creators in this vertical reject the hyper-filtered 'candid' trend in favor of tactile honesty. Every frame focuses on natural skin texture, physical product weight, and peaceful daylight pacing that keeps viewers watching through the 30-second mark.",
  },
  {
    id: "culinary",
    num: "02",
    name: "Artisanal Culinary & Terroir",
    status: "Active Sprint",
    subniche: "Regional terroir & farm-to-table craft",
    hookRate: "52.4%",
    avgViews: "45k - 240k",
    cameraStandard: "4K 120fps Macro // Shallow DOF // Overhead 50mm",
    audioSignature: "Cast-iron sear, knife board rhythm, simmer acoustics",
    lightingStandard: "Warm ambient tungsten with cold daylight morning rim",
    sampleBrief: "Single-origin olive oil sensory test: smoke point & fermentation crumb.",
    deliverables: "6 vertical cuts, 4K ProRes masters, 90-day Spark Ads codes, Foley audio pack",
    description:
      "Culinary micro-creators with obsessive attention to process. No talking-head recipes; instead, magnetic visual pacing, room acoustics, and tactile macro cuts of fresh ingredients that stop the scroll instantly.",
  },
  {
    id: "workspaces",
    num: "03",
    name: "Workspaces & Hardware EDC",
    status: "Active Sprint",
    subniche: "Mechanical hardware, tactile acoustics, minimalist desks",
    hookRate: "47.8%",
    avgViews: "28k - 150k",
    cameraStandard: "Sony FX3 / 50mm Prime // Gimbal Stabilized // 4K ProRes",
    audioSignature: "Mechanical switch clatter, aluminum friction, cable click",
    lightingStandard: "Matte controlled softbox // Rich shadow depth",
    sampleBrief: "The 3-pound aluminum travel workstation stress-tested over 72 hours.",
    deliverables: "6 vertical cuts, 4K ProRes masters, 90-day Spark Ads codes, clean stems",
    description:
      "Designed for design-conscious software and hardware brands. Creators build immaculate desktop workspaces featuring clean cable routing, tactile physical knobs, and calm ambient audio.",
  },
  {
    id: "movement",
    num: "04",
    name: "Mindful Movement & Conditioning",
    status: "Active Sprint",
    subniche: "Kinetic form, architectural spaces, recovery science",
    hookRate: "44.9%",
    avgViews: "32k - 190k",
    cameraStandard: "Wide 24mm Stabilized // Outdoor concrete geometry",
    audioSignature: "Grip cadence, breathing tempo, clean ambient wind",
    lightingStandard: "High-contrast golden hour / dawn shadows",
    sampleBrief: "Uncut 3-minute mobility routine prior to heavy pull session.",
    deliverables: "6 vertical cuts, 4K ProRes masters, 90-day Spark Ads codes, raw B-roll",
    description:
      "Rejecting gym bro screaming and synthetic supplements. This cohort centers on functional mobility, physical discipline, clean architectural training spaces, and unhurried human movement.",
  },
  {
    id: "wardrobe",
    num: "05",
    name: "Capsule Wardrobe & Material Craft",
    status: "Accepting Talent",
    subniche: "Textile drape, heavy denim, slow fashion craft",
    hookRate: "46.2%",
    avgViews: "25k - 120k",
    cameraStandard: "4K 60fps // 85mm Portrait & 35mm Environmental",
    audioSignature: "Fabric rustle, leather creak, quiet ambient footsteps",
    lightingStandard: "Overcast exterior diffuse daylight",
    sampleBrief: "Five Japanese selvedge denim silhouettes styled for 30 days of wear.",
    deliverables: "6 vertical cuts, 4K ProRes masters, 90-day Spark Ads codes, photo stills",
    description:
      "Focused on heirloom garments, honest garment construction, and genuine personal aesthetic. No fast-fashion hauls; only intentional styling and tactile material quality.",
  },
  {
    id: "coffee",
    num: "06",
    name: "Slow Living & Morning Rituals",
    status: "In Development",
    subniche: "Ceramic acoustics, pour-over extraction, quiet craft",
    hookRate: "50.1%",
    avgViews: "30k - 160k",
    cameraStandard: "4K 60fps Macro // Natural window morning side-light",
    audioSignature: "Hand grinder crunch, kettle steam, ceramic saucer tap",
    lightingStandard: "Early dawn low-angle natural daylight",
    sampleBrief: "Ethiopian heirloom pour-over extraction ratio with clean acoustic pacing.",
    deliverables: "6 vertical cuts, 4K ProRes masters, 90-day Spark Ads codes, Foley stems",
    description:
      "A celebration of micro-moments and deliberate pacing. This vertical pairs perfectly with artisanal morning beverage, ceramic, and home ritual brands.",
  },
];

export default function CohortsPage() {
  const [filter, setFilter] = useState("all");

  const filteredCohorts =
    filter === "all"
      ? ALL_COHORTS
      : ALL_COHORTS.filter((c) =>
          filter === "active" ? c.status === "Active Sprint" : c.status !== "Active Sprint"
        );

  return (
    <div className="flex min-h-screen flex-col bg-cream text-ink selection:bg-gold selection:text-ink">
      <main className="flex-1">
        {/* Header */}
        <section className="px-6 pt-24 pb-14 sm:px-10 sm:pt-28 sm:pb-20 lg:px-16 border-b border-ink/10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream-dim/80 px-3.5 py-1 text-xs font-semibold text-ink mb-5">
              <Sparkle size={13} weight="fill" className="text-red" />
              <span>Talent Infrastructure // Active Directory</span>
            </div>

            <h1 className="font-display text-4xl font-extrabold tracking-[-0.04em] text-ink sm:text-6xl md:text-7xl">
              Curated Cohorts.
              <br />
              Zero Teleprompter Reads.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-ink/75 font-body leading-relaxed">
              We organize independent micro-creators by genuine cultural aesthetic rather than generic tags.
              Explore our active verticals, acoustic signatures, and equipment benchmarks below.
            </p>

            {/* Filter Toggle */}
            <div className="mt-8 flex justify-center gap-2">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={`btn-press rounded-md px-5 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  filter === "all"
                    ? "bg-red text-cream"
                    : "border border-ink/20 bg-cream text-ink hover:border-ink/50"
                }`}
              >
                All 6 Cohorts
              </button>
              <button
                type="button"
                onClick={() => setFilter("active")}
                className={`btn-press rounded-md px-5 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  filter === "active"
                    ? "bg-red text-cream"
                    : "border border-ink/20 bg-cream text-ink hover:border-ink/50"
                }`}
              >
                Active Sprints Only
              </button>
            </div>
          </div>
        </section>

        {/* Cohort Grid */}
        <section className="px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-2">
            {filteredCohorts.map((cohort) => (
              <div
                key={cohort.id}
                className="rounded-xl border border-ink/20 bg-cream-dim/60 p-7 sm:p-9 flex flex-col justify-between shadow-xs transition-all duration-300 hover:border-ink/40"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-ink/10 pb-4">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-red">
                      Cohort {cohort.num}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-cream px-2.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-ink/80">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          cohort.status === "Active Sprint"
                            ? "bg-red animate-pulse"
                            : "bg-gold"
                        }`}
                      />
                      <span>{cohort.status}</span>
                    </span>
                  </div>

                  {/* Title & Subniche */}
                  <div className="mt-5">
                    <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
                      {cohort.name}
                    </h2>
                    <p className="mt-1 font-mono text-xs text-ink/65 uppercase tracking-wider">
                      {cohort.subniche}
                    </p>
                  </div>

                  {/* Editorial Description */}
                  <p className="mt-4 text-sm sm:text-base text-ink/80 font-body leading-relaxed">
                    {cohort.description}
                  </p>

                  {/* Technical Specifications HUD */}
                  <div className="mt-6 space-y-2.5 rounded-lg border border-ink/10 bg-cream/70 p-4 text-xs font-body">
                    <div className="flex items-start gap-2">
                      <VideoCamera size={14} className="text-red shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-mono text-[11px] uppercase tracking-wider text-ink/60 block">
                          Camera Rig Standard
                        </strong>
                        <span className="text-ink/90 font-medium">{cohort.cameraStandard}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 border-t border-ink/10 pt-2">
                      <SpeakerHigh size={14} className="text-red shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-mono text-[11px] uppercase tracking-wider text-ink/60 block">
                          Acoustic Profile
                        </strong>
                        <span className="text-ink/90 font-medium">{cohort.audioSignature}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 border-t border-ink/10 pt-2">
                      <SlidersHorizontal size={14} className="text-red shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-mono text-[11px] uppercase tracking-wider text-ink/60 block">
                          Lighting Geometry
                        </strong>
                        <span className="text-ink/90 font-medium">{cohort.lightingStandard}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 border-t border-ink/10 pt-2">
                      <Clock size={14} className="text-red shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-mono text-[11px] uppercase tracking-wider text-ink/60 block">
                          Performance Benchmark
                        </strong>
                        <span className="text-ink/90 font-medium">
                          {cohort.hookRate} avg hook retention &bull; {cohort.avgViews} typical organic reach
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Sample Campaign Angle */}
                  <div className="mt-5 text-xs">
                    <span className="font-mono font-bold text-red uppercase tracking-wider block mb-1">
                      Demonstration Angle:
                    </span>
                    <p className="italic text-ink/75 font-body">&ldquo;{cohort.sampleBrief}&rdquo;</p>
                  </div>
                </div>

                {/* Bottom Actions: Brands Book / Creators Apply */}
                <div className="mt-8 border-t border-ink/10 pt-5 flex items-center justify-between gap-3">
                  <Link
                    href="/brands"
                    className="btn-press inline-flex items-center gap-1.5 rounded-md bg-ink px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-cream hover:bg-red transition-colors"
                  >
                    <span>Book This Cohort</span>
                    <ArrowUpRight size={13} weight="bold" />
                  </Link>

                  <Link
                    href="/creators#apply"
                    className="btn-press inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-ink hover:text-red transition-colors"
                  >
                    <span>Apply as Talent</span>
                    <ArrowUpRight size={11} weight="bold" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AgencyTicker tone="cream" />
      </main>

      <Footer />
    </div>
  );
}
