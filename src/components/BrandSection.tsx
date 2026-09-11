"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CalendarCheck, EnvelopeSimple, ArrowUpRight } from "@phosphor-icons/react";
import { scrollReveal, dialogMotion, viewportOnce, motionEase } from "@/lib/motion";

const CATEGORIES = [
  { name: "Beauty & Daily Rituals", count: "18 Creators", cadence: "14-Day Delivery" },
  { name: "Food & Regional Culture", count: "14 Creators", cadence: "14-Day Delivery" },
  { name: "Movement & Conditioning", count: "16 Creators", cadence: "14-Day Delivery" },
  { name: "Workspaces & Tech EDC", count: "16 Creators", cadence: "14-Day Delivery" },
];

export default function BrandSection() {
  const [showCallModal, setShowCallModal] = useState(false);

  return (
    <section id="brands" className="relative border-t border-cream/15 bg-red px-6 py-20 text-cream sm:px-10 sm:py-28 lg:px-16 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-12 lg:grid-cols-12 lg:items-start"
        >
          {/* Left Column: Restrained, confident editorial */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full bg-yellow animate-pulse-subtle" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-cream/60">
                Enterprise & Growth Brands · Cohort Model
              </span>
            </div>

            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[0.98] tracking-[-0.035em] text-cream sm:text-5xl md:text-6xl">
              A curated bench of creators,
              <br />
              <span className="font-serif italic font-normal text-yellow">managed end to end.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg font-body">
              We build specialized creator cohorts around your vertical and coordinate the entire relationship
              from brief to delivered short-form assets. You receive high-converting, rights-cleared video on a
              guaranteed 14-day turnaround without wrangling thirty independent contracts or chasing revisions.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => setShowCallModal(true)}
                className="btn-press group inline-flex items-center gap-2.5 rounded-md bg-cream px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-red hover:bg-yellow hover:text-ink focus-visible:outline-2 focus-visible:outline-yellow shadow-sm cursor-pointer"
              >
                <span>Book Brand Consultation</span>
                <ArrowUpRight
                  size={14}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>

              <span className="font-mono text-xs text-cream/60">
                20-min strategy session with our founders
              </span>
            </div>
          </div>

          {/* Right Column: Quiet active cohort verticals index */}
          <div className="lg:col-span-5 border-t border-cream/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-cream/70">
                Active Cohort Verticals
              </span>
              <span className="font-mono text-xs text-cream/45">Q3 / 2026</span>
            </div>

            <div className="mt-4 divide-y divide-cream/10 border-t border-cream/15">
              {CATEGORIES.map((cat, idx) => (
                <div
                  key={cat.name}
                  className="group flex items-center justify-between py-3.5 text-sm font-medium text-cream transition-all duration-200 hover:text-yellow hover:translate-x-1 cursor-default"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-cream/40 group-hover:text-yellow transition-colors">0{idx + 1}</span>
                    <span className="font-display font-semibold tracking-tight">{cat.name}</span>
                  </div>
                  <span className="font-mono text-xs text-cream/60 group-hover:text-yellow transition-colors">{cat.count}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-cream/15 pt-4 flex flex-col gap-2 font-mono text-xs text-cream/75">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
                <span>Standard 14-day turnaround guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
                <span>Pre-cleared 90-day Spark Ads + organic rights</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Booking Modal with physical settling motion */}
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
                  <h4 className="font-display text-xl font-bold text-cream">Schedule a brand consultation</h4>
                  <p className="mt-0.5 text-xs text-cream/60 font-body">Twenty-minute category strategy session</p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowCallModal(false)}
                  className="rounded-md p-1.5 text-cream/60 hover:bg-cream/10 hover:text-cream transition-colors cursor-pointer"
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
                  className="btn-press inline-flex items-center justify-center gap-2 rounded-md bg-cream py-3.5 text-center text-xs font-bold uppercase tracking-wider text-red hover:bg-yellow hover:text-ink shadow-sm"
                >
                  <span>Open Calendar Scheduler</span>
                  <ArrowUpRight size={14} weight="bold" />
                </a>

                <button
                  type="button"
                  onClick={() => setShowCallModal(false)}
                  className="py-2 text-center text-xs font-semibold uppercase tracking-wider text-cream/60 hover:text-cream transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
