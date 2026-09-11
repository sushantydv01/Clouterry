"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AgencyTicker from "@/components/AgencyTicker";
import { X, ArrowUpRight, CalendarCheck, EnvelopeSimple, ShieldCheck } from "@phosphor-icons/react";
import { dialogMotion } from "@/lib/motion";

const COHORTS = [
  {
    num: "01",
    name: "Beauty & Daily Rituals",
    tag: "Skincare, Glow & Textures",
    desc: "Unhurried morning rituals, daylight skin checks, tactile serum applications, and clean vanity aesthetic.",
    creatorsCount: "18 Creators Active",
    image: "/cohorts/beauty.jpg",
  },
  {
    num: "02",
    name: "Food & Regional Culture",
    tag: "Culinary ASMR & Terroir",
    desc: "Artisanal plating, farm-to-table technique, sizzling cast iron acoustics, and honest local food discovery.",
    creatorsCount: "14 Creators Active",
    image: "/cohorts/food.jpg",
  },
  {
    num: "03",
    name: "Movement & Conditioning",
    tag: "Athletic Form & Recovery",
    desc: "Kinetic form breakdowns, architectural studio spaces, nervous system recovery, and mindful athletic routines.",
    creatorsCount: "16 Creators Active",
    image: "/cohorts/fitness.jpg",
  },
  {
    num: "04",
    name: "Workspaces & Tech EDC",
    tag: "Industrial Design & Desk Craft",
    desc: "Mechanical audio, clean ergonomics, tactile gear loadouts, and macro cinematic desk tours with zero fluff.",
    creatorsCount: "16 Creators Active",
    image: "/cohorts/tech.jpg",
  },
];

const MODELS = [
  {
    num: "01",
    name: "Launch Sprint",
    cadence: "14-Day Delivery",
    desc: "A high-impact burst for a seasonal product drop. 5 to 8 handpicked cohort creators, 1 unified brief, full organic and Spark Ad commercial usage rights for 90 days.",
    deliverables: ["5-8 Creator Videos (4K ProRes)", "90-Day Spark Ads Rights", "Raw Cutdowns & B-Roll", "Dedicated Operational Lead"],
  },
  {
    num: "02",
    name: "Always-On Roster",
    cadence: "Bi-Weekly Drops",
    desc: "A continuous monthly presence across your chosen vertical. 10 to 15 recurring creators, bi-weekly content drops, and a quarterly creative refresh.",
    deliverables: ["20-30 Assets / Month", "Ongoing Whitelisting Rights", "Audience Resonance Analysis", "Iterative Script Enhancements"],
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
    <div className="flex min-h-screen flex-col bg-red text-cream selection:bg-yellow selection:text-ink">
      <Navigation />

      <main className="flex-1 pb-24 text-left">
        {/* Editorial Header */}
        <section className="border-b border-cream/15 px-6 pt-16 pb-20 sm:px-10 sm:pt-24 sm:pb-28 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="inline-block h-2 w-2 rounded-full bg-yellow animate-pulse-subtle" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-cream/60">
                  Brand Infrastructure · 14-Day Delivery
                </span>
              </div>

              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.035em] text-cream sm:text-6xl md:text-7xl">
                A curated bench of creators.
                <br />
                <span className="font-serif italic font-normal text-yellow">Managed end to end.</span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-cream/85 sm:text-lg font-body">
                Skip managing thirty separate influencer contracts and endless revision loops. We curate
                specialized cohorts around your vertical and deliver high-converting creative assets on schedule.
              </p>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => setShowCallModal(true)}
                  className="group inline-flex items-center gap-2.5 rounded-md bg-cream px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-red transition-all duration-200 hover:bg-yellow hover:text-ink focus-visible:outline-2 focus-visible:outline-yellow shadow-sm cursor-pointer"
                >
                  <span>Book Brand Consultation</span>
                  <ArrowUpRight
                    size={14}
                    weight="bold"
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>

                <div className="flex items-center gap-2 font-mono text-xs text-cream/70">
                  <ShieldCheck size={16} className="text-yellow" weight="bold" />
                  <span>Guaranteed turnaround or full refund</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Cohort Dossier Gallery */}
        <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-4 border-b border-cream/15 pb-6 md:flex-row md:items-end">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-cream/50">Vertical Roster Catalog</span>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
                  Active Roster Cohorts
                </h2>
              </div>
              <span className="font-mono text-xs text-cream/60">Turnaround: 14 Days from brief approval</span>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {COHORTS.map((cohort) => (
                <div
                  key={cohort.num}
                  className="group border border-cream/20 bg-red-deep/70 p-5 transition-all duration-300 hover:border-cream/50 hover:shadow-md rounded-md"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-red-deep rounded-sm">
                    <Image
                      src={cohort.image}
                      alt={cohort.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 rounded-sm bg-red px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-cream border border-cream/25">
                      {cohort.num} / VERTICAL
                    </div>
                    <div className="absolute bottom-3 right-3 rounded-sm bg-cream/95 px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-red backdrop-blur-sm">
                      {cohort.creatorsCount}
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-display text-xl font-bold text-cream">{cohort.name}</h3>
                    <div className="font-serif italic text-sm text-yellow">{cohort.tag}</div>
                    <p className="mt-2 text-xs leading-relaxed text-cream/80 font-body">{cohort.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kinetic Ticker */}
        <AgencyTicker tone="dark" />

        {/* Engagement Models */}
        <section className="bg-red-deep/50 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 border-t border-cream/15 text-cream">
          <div className="mx-auto max-w-6xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-yellow">Engagement Models</span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
              Choose your partnership cadence.
            </h2>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {MODELS.map((model) => (
                <div
                  key={model.num}
                  className="flex flex-col justify-between border border-cream/20 bg-red-deep p-7 transition-all hover:border-cream/50 rounded-md"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-cream/15 pb-4">
                      <span className="font-mono text-xl font-bold text-yellow">{model.num}</span>
                      <span className="rounded-sm bg-cream/15 px-2.5 py-1 font-mono text-[10px] font-bold text-cream border border-cream/20">
                        {model.cadence}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-cream">
                      {model.name}
                    </h3>

                    <p className="mt-3 text-xs leading-relaxed text-cream/80 font-body">{model.desc}</p>

                    <div className="mt-6 space-y-2 border-t border-cream/15 pt-4">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-cream/50 block mb-2">
                        Included Deliverables
                      </span>
                      {model.deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-cream/85">
                          <span className="text-yellow font-bold">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 border-t border-cream/15 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowCallModal(true)}
                      className="w-full rounded-md bg-cream py-2.5 text-center text-xs font-bold uppercase tracking-wider text-red transition-all duration-200 hover:bg-yellow hover:text-ink cursor-pointer"
                    >
                      Inquire for {model.name}
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 backdrop-blur-sm p-4"
          >
            <motion.div
              variants={dialogMotion}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-md rounded-md border border-cream/20 bg-red-deep p-8 text-cream shadow-2xl will-change-transform"
            >
              <div className="flex items-center justify-between border-b border-cream/15 pb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-cream">Schedule a brand consultation</h3>
                  <p className="mt-0.5 text-xs text-cream/60 font-body">Twenty-minute category strategy session</p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowCallModal(false)}
                  className="btn-press rounded-md p-1.5 text-cream/60 hover:bg-cream/10 hover:text-cream transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={20} weight="bold" />
                </button>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-cream/85 font-body">
                <p>
                  Brand consultations are hosted personally by our founding team to understand your aesthetic
                  targets, campaign timelines, and cohort requirements.
                </p>

                <div className="rounded-md border border-cream/15 bg-red/40 p-4 space-y-2 text-xs">
                  <div className="flex items-center gap-2 font-semibold text-cream">
                    <CalendarCheck size={16} className="text-yellow" weight="bold" />
                    <span>Direct scheduling available via Calendly</span>
                  </div>
                  <div className="flex items-center gap-2 text-cream/80">
                    <EnvelopeSimple size={16} className="text-yellow" weight="bold" />
                    <span>
                      Direct email:{" "}
                      <a href="mailto:hello@clouterry.com" className="font-bold text-yellow hover:underline">
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
                  className="btn-press inline-flex items-center justify-center gap-2 rounded-md bg-cream py-3.5 text-center text-xs font-bold uppercase tracking-wider text-red transition-colors duration-200 hover:bg-yellow hover:text-ink shadow-sm"
                >
                  <span>Open Calendar Scheduler</span>
                  <ArrowUpRight size={14} weight="bold" />
                </a>

                <button
                  type="button"
                  onClick={() => setShowCallModal(false)}
                  className="btn-press py-2 text-center text-xs font-semibold uppercase tracking-wider text-cream/60 hover:text-cream transition-colors cursor-pointer"
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
