"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CalendarCheck, EnvelopeSimple, ArrowUpRight } from "@phosphor-icons/react";
import { dialogMotion } from "@/lib/motion";

const CATEGORIES = [
  { name: "Beauty & Daily Rituals", count: "18 Creators", cadence: "14-Day Delivery" },
  { name: "Food & Regional Culture", count: "14 Creators", cadence: "14-Day Delivery" },
  { name: "Movement & Conditioning", count: "16 Creators", cadence: "14-Day Delivery" },
  { name: "Workspaces & Tech EDC", count: "16 Creators", cadence: "14-Day Delivery" },
];

export default function BrandSection() {
  const [showCallModal, setShowCallModal] = useState(false);

  return (
    <section id="brands" className="relative border-t border-ink/15 bg-cream px-6 py-16 text-ink sm:px-10 sm:py-24 lg:px-16 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Restrained, confident editorial */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-extrabold leading-[1.0] tracking-[-0.035em] text-ink sm:text-4xl md:text-5xl">
              A curated bench of creators,
              <br />
              managed end to end.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/80 sm:text-lg font-body">
              We build specialized creator cohorts around your vertical and coordinate the entire relationship
              from brief to delivered short-form assets. You receive high-converting, rights-cleared video on a
              guaranteed 14-day turnaround without wrangling thirty independent contracts or chasing revisions.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => setShowCallModal(true)}
                className="btn-press group inline-flex items-center gap-2.5 rounded-md bg-red px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-cream hover:bg-red-deep focus-visible:outline-2 focus-visible:outline-gold shadow-xs cursor-pointer"
              >
                <span>Book Brand Consultation</span>
                <ArrowUpRight
                  size={14}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>

              <span className="text-xs text-ink/60 font-body">
                20-minute strategy session with our founders
              </span>
            </div>

            {/* What Arrives in the Delivery Folder */}
            <div className="mt-10 rounded-md border border-ink/10 bg-cream-dim/50 p-5 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-red block mb-2 font-mono">
                Standard 14-Day Delivery Kit
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs text-ink/80 font-body">
                <div>&bull; 4K 9:16 ProRes Video Masters</div>
                <div>&bull; 90-Day Spark Ads Code</div>
                <div>&bull; Raw B-Roll & Clean Audio Stems</div>
                <div>&bull; 1 Refinement Round Included</div>
              </div>
            </div>
          </div>

          {/* Right Column: Quiet active cohort verticals index */}
          <div className="lg:col-span-5 border-t border-ink/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <span className="text-xs font-bold uppercase tracking-wider text-ink/60">
              Active cohort verticals
            </span>

            <div className="mt-4 divide-y divide-ink/10 border-t border-ink/15">
              {CATEGORIES.map((cat, idx) => (
                <div
                  key={cat.name}
                  className="group flex items-center justify-between py-3.5 text-sm font-medium text-ink cursor-default"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs text-red font-mono tabular-nums">0{idx + 1}</span>
                    <span className="font-display font-semibold tracking-tight">{cat.name}</span>
                  </div>
                  <span className="text-xs text-ink/55">{cat.count}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 border-t border-ink/15 pt-4 text-sm text-ink/70 font-body">
              Standard 14-day turnaround guarantee. Pre-cleared 90-day Spark Ads and organic rights.
            </p>
          </div>
        </div>
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
                  <h4 className="font-display text-xl font-bold text-ink">Schedule a brand consultation</h4>
                  <p className="mt-0.5 text-xs text-ink/60 font-body">Twenty-minute category strategy session</p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowCallModal(false)}
                  className="rounded-md p-1.5 text-ink/60 hover:bg-ink/5 hover:text-ink transition-colors cursor-pointer"
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
                  className="btn-press inline-flex items-center justify-center gap-2 rounded-md bg-red py-3.5 text-center text-xs font-bold uppercase tracking-wider text-cream hover:bg-red-deep shadow-xs"
                >
                  <span>Open Calendar Scheduler</span>
                  <ArrowUpRight size={14} weight="bold" />
                </a>

                <button
                  type="button"
                  onClick={() => setShowCallModal(false)}
                  className="py-2 text-center text-xs font-semibold uppercase tracking-wider text-ink/60 hover:text-ink transition-colors cursor-pointer"
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
