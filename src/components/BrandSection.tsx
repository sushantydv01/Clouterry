"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "@phosphor-icons/react";
import RevealOnScroll from "./RevealOnScroll";

const CATEGORIES = [
  "Beauty & Daily Rituals",
  "Food & Regional Culture",
  "Movement & Conditioning",
  "Workspaces & Tech EDC",
];

export default function BrandSection() {
  const [showCallModal, setShowCallModal] = useState(false);

  return (
    <section
      id="brands"
      className="relative bg-void/85 backdrop-blur-xs px-6 py-16 sm:py-20 text-star-white border-t border-star-white/8 text-left"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Main narrative */}
          <RevealOnScroll className="lg:col-span-7">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-star-white leading-snug">
                A curated bench of creators,
                <br />
                managed end to end.
              </h2>

              <p className="mt-5 text-sm sm:text-base text-silver leading-relaxed max-w-xl">
                We build specialized creator cohorts around your vertical and coordinate the entire relationship from brief to delivered short-form assets. You receive high-converting, rights-cleared video on a guaranteed 14-day turnaround without wrangling 30 independent contracts or chasing revisions.
              </p>

              <div className="mt-8">
                <button
                  type="button"
                  data-cursor="cta"
                  onClick={() => setShowCallModal(true)}
                  className="rounded-md liquid-glass-interactive px-6 py-2.5 text-xs sm:text-sm font-semibold text-star-white border-b-2 border-b-vermillion/60 hover:border-b-vermillion focus-visible:ring-2 focus-visible:ring-vermillion transition-all duration-300"
                >
                  Book a call
                </button>
              </div>
            </div>
          </RevealOnScroll>

          {/* Categories */}
          <RevealOnScroll direction="right" className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-star-white/8 pt-8 lg:pt-0 lg:pl-10">
            <div>
              <div className="text-xs uppercase tracking-wider text-silver/50 font-semibold mb-4">
                Active Cohort Verticals
              </div>
              <div className="space-y-3 text-sm text-silver/75">
                {CATEGORIES.map((cat) => (
                  <div key={cat} className="border-b border-star-white/8 pb-2.5 hover:text-star-white hover:border-vermillion/20 transition-colors duration-300">
                    {cat}
                  </div>
                ))}
              </div>
              <div className="mt-6 text-xs text-silver/40 leading-relaxed">
                Standard 14-day turnaround. Pre-cleared 90-day Spark Ads and organic commercial rights included.
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

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
            className="fixed inset-0 z-50 flex items-center justify-center bg-void/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-md rounded-xl liquid-glass p-7 text-star-white shadow-2xl relative"
            >
              <div className="flex items-center justify-between border-b border-star-white/10 pb-4">
                <div>
                  <h4 className="font-display text-lg font-bold text-star-white">
                    Schedule Brand Consultation
                  </h4>
                  <p className="text-xs text-silver/50 mt-0.5">
                    Direct 20 minute category strategy
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowCallModal(false)}
                  className="p-1 text-silver/50 hover:text-star-white transition-colors duration-300"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-5 space-y-3 text-xs sm:text-sm text-silver leading-relaxed">
                <p>
                  Brand consultations are conducted directly by our founding team to understand your aesthetic targets and cohort requirements.
                </p>
                <div className="rounded-md bg-space-deep/80 p-4 border border-star-white/8 text-xs text-silver">
                  <span className="font-semibold text-star-white">Direct contact:</span> Reach us directly at{" "}
                  <a
                    href="mailto:hello@clouterry.com"
                    className="font-semibold text-vermillion underline hover:text-vermillion-deep transition-colors duration-300"
                  >
                    hello@clouterry.com
                  </a>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href="https://calendly.com/clouterry"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="cta"
                  className="rounded-md liquid-glass-interactive py-3 text-center text-xs sm:text-sm font-semibold text-star-white border-b-2 border-b-vermillion transition-all duration-300"
                >
                  Open Calendly Scheduler
                </a>
                <button
                  type="button"
                  onClick={() => setShowCallModal(false)}
                  className="py-2 text-center text-xs font-semibold text-silver/40 hover:text-silver transition-colors duration-300"
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
