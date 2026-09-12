"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import AgencyTicker from "@/components/AgencyTicker";
import { X, ArrowUpRight, CalendarCheck, EnvelopeSimple, ShieldCheck, Check, Sparkle } from "@phosphor-icons/react";
import { dialogMotion } from "@/lib/motion";

const COHORTS = [
  {
    num: "01",
    name: "Beauty & Daily Rituals",
    tag: "Skincare, Glow & Textures",
    desc: "Unhurried morning rituals, daylight skin checks, tactile serum applications, and clean vanity aesthetics.",
    creatorsCount: "18 Creators Active",
    specs: ["4K ProRes vertical", "Daylight balanced", "Clean audio stems", "Spark-ad cleared"],
  },
  {
    num: "02",
    name: "Food & Regional Culture",
    tag: "Culinary ASMR & Terroir",
    desc: "Artisanal plating, farm-to-table technique, sizzling cast iron acoustics, and honest local food discovery.",
    creatorsCount: "14 Creators Active",
    specs: ["Kitchen ASMR", "Overhead & macro", "Recipe rights cleared", "ProRes vertical"],
  },
  {
    num: "03",
    name: "Movement & Conditioning",
    tag: "Athletic Form & Recovery",
    desc: "Kinetic form breakdowns, architectural studio spaces, nervous system recovery, and mindful athletic routines.",
    creatorsCount: "16 Creators Active",
    specs: ["Architectural spaces", "Kinetic breakdown", "Recovery focus", "Spark-ad ready"],
  },
  {
    num: "04",
    name: "Workspaces & Tech EDC",
    tag: "Industrial Design & Desk Craft",
    desc: "Mechanical audio, clean ergonomics, tactile gear loadouts, and macro cinematic desk tours with zero fluff.",
    creatorsCount: "16 Creators Active",
    specs: ["Switch acoustics", "Walnut & matte surfaces", "EDC macro", "ProRes vertical"],
  },
];

const MODELS = [
  {
    num: "01",
    name: "Launch Sprint",
    cadence: "14-Day Delivery",
    desc: "A high-impact burst for a seasonal product drop. 5 to 8 handpicked cohort creators, 1 unified brief, full organic and Spark Ad commercial usage rights for 90 days.",
    deliverables: ["5 to 8 Creator Videos (4K ProRes)", "90-Day Spark Ads Rights", "Raw Cutdowns & B-Roll", "Dedicated Operational Lead"],
  },
  {
    num: "02",
    name: "Always-On Roster",
    cadence: "Bi-Weekly Drops",
    desc: "A continuous monthly presence across your chosen vertical. 10 to 15 recurring creators, bi-weekly content drops, and a quarterly creative refresh.",
    deliverables: ["20 to 30 Assets / Month", "Ongoing Whitelisting Rights", "Audience Resonance Analysis", "Iterative Script Enhancements"],
  },
  {
    num: "03",
    name: "Bespoke Cohort",
    cadence: "Custom Sourcing",
    desc: "Custom talent scouting for a high-specification niche or luxury market tier, with category exclusivity and perpetual global usage rights on request.",
    deliverables: ["Custom Roster Scouting", "Category Exclusivity", "Perpetual Commercial Rights", "Executive Creative Direction"],
  },
];

export default function BrandsPage() {
  const [showCallModal, setShowCallModal] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-cream text-ink selection:bg-gold selection:text-ink">
      <main className="flex-1 pb-24 text-left">
        {/* Editorial Header */}
        <section className="border-b border-ink/10 px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-28 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-widest text-red mb-4">
                Brand Infrastructure
              </div>

              <h1 className="font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.035em] text-ink sm:text-6xl md:text-7xl">
                A curated bench of creators.
                <br />
                Managed end to end.
              </h1>

              <p className="mt-6 text-base leading-relaxed text-ink/80 sm:text-lg font-body">
                Skip managing thirty separate influencer contracts and endless revision loops. We curate
                specialized cohorts around your vertical and deliver high-converting creative assets on schedule.
              </p>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => setShowCallModal(true)}
                  className="btn-press group inline-flex items-center gap-2.5 rounded-md bg-red px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-cream transition-all duration-200 hover:bg-red-deep focus-visible:outline-2 focus-visible:outline-gold shadow-xs cursor-pointer"
                >
                  <span>Book Brand Consultation</span>
                  <ArrowUpRight
                    size={14}
                    weight="bold"
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>

                <div className="flex items-center gap-2 text-xs text-ink/70 font-body">
                  <ShieldCheck size={16} className="text-red" weight="bold" />
                  <span>Guaranteed turnaround or full refund</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Cohort Dossier Gallery (Zero Stock Photos, Architectural Layout) */}
        <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-4 border-b border-ink/15 pb-6 md:flex-row md:items-end">
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  Active Roster Cohorts
                </h2>
                <p className="mt-1 text-sm text-ink/70 font-body">
                  Specialized squads organized by authentic audience rapport.
                </p>
              </div>
              <span className="text-xs text-ink/60 font-mono uppercase">14-day turnaround from brief approval</span>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {COHORTS.map((cohort) => (
                <div
                  key={cohort.num}
                  className="rounded-md border border-ink/15 bg-cream-dim/50 p-7 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-baseline justify-between border-b border-ink/10 pb-3">
                      <span className="font-display text-xs font-bold uppercase tracking-widest text-red">
                        Cohort {cohort.num}
                      </span>
                      <span className="text-xs text-ink/55 font-mono">{cohort.creatorsCount}</span>
                    </div>

                    <h3 className="mt-4 font-display text-2xl font-bold text-ink">{cohort.name}</h3>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-red">
                      {cohort.tag}
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-ink/80 font-body">
                      {cohort.desc}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-ink/10 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {cohort.specs.map((spec) => (
                        <span
                          key={spec}
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-ink/75 bg-cream px-2.5 py-1 rounded-sm border border-ink/10"
                        >
                          <Sparkle size={10} weight="fill" className="text-red" />
                          <span>{spec}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kinetic Ticker */}
        <AgencyTicker tone="cream" />

        {/* Engagement Models */}
        <section className="bg-cream-dim/60 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 border-t border-ink/15 text-ink">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Choose your partnership cadence.
              </h2>
              <p className="mt-2 text-sm text-ink/75 font-body">
                Structured for speed, predictability, and complete commercial usage clarity.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {MODELS.map((model) => (
                <div
                  key={model.num}
                  className="flex flex-col justify-between border border-ink/15 bg-cream p-7 rounded-md"
                >
                  <div>
                    <div className="flex items-baseline justify-between border-b border-ink/10 pb-4">
                      <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
                        {model.name}
                      </h3>
                      <span className="text-xs font-bold text-red uppercase tracking-wider">{model.cadence}</span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-ink/80 font-body">{model.desc}</p>

                    <div className="mt-6 space-y-2 border-t border-ink/10 pt-4">
                      <span className="mb-2 block text-xs uppercase tracking-wider text-ink/50 font-bold">
                        Included deliverables
                      </span>
                      {model.deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-ink/85">
                          <Check size={14} weight="bold" className="text-red shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 border-t border-ink/10 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowCallModal(true)}
                      className="btn-press w-full rounded-md bg-red py-3 text-center text-xs font-bold uppercase tracking-wider text-cream hover:bg-red-deep cursor-pointer shadow-xs"
                    >
                      Inquire about {model.name}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Booking Modal */}
      <AnimatePresence>
        {showCallModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/75 backdrop-blur-sm p-4"
          >
            <motion.div
              variants={dialogMotion}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-md rounded-md border border-ink/20 bg-cream p-8 text-ink shadow-2xl will-change-transform"
            >
              <div className="flex items-center justify-between border-b border-ink/10 pb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">Schedule a brand consultation</h3>
                  <p className="mt-0.5 text-xs text-ink/60 font-body">Twenty-minute category strategy session</p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowCallModal(false)}
                  className="btn-press rounded-md p-1.5 text-ink/60 hover:bg-ink/5 hover:text-ink transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={20} weight="bold" />
                </button>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink/80 font-body">
                <p>
                  Brand consultations are hosted personally by our founding team to understand your aesthetic
                  targets, campaign timelines, and cohort requirements.
                </p>

                <div className="rounded-md border border-ink/10 bg-cream-dim p-4 space-y-2 text-xs">
                  <div className="flex items-center gap-2 font-semibold text-ink">
                    <CalendarCheck size={16} className="text-red" weight="bold" />
                    <span>Direct scheduling available via Calendly</span>
                  </div>
                  <div className="flex items-center gap-2 text-ink/80">
                    <EnvelopeSimple size={16} className="text-red" weight="bold" />
                    <span>
                      Direct email:{" "}
                      <a href="mailto:hello@clouterry.com" className="font-bold text-red underline underline-offset-2 hover:text-red-deep">
                        hello@clouterry.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="https://calendly.com/clouterry"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-press inline-flex items-center justify-center gap-2 rounded-md bg-red py-3.5 text-center text-xs font-bold uppercase tracking-wider text-cream transition-colors duration-200 hover:bg-red-deep shadow-xs"
                >
                  <span>Open Calendar Scheduler</span>
                  <ArrowUpRight size={14} weight="bold" />
                </a>

                <button
                  type="button"
                  onClick={() => setShowCallModal(false)}
                  className="btn-press py-2 text-center text-xs font-semibold uppercase tracking-wider text-ink/60 hover:text-ink transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
