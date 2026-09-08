"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CATEGORIES = [
  {
    name: "Beauty & Lifestyle",
    cadence: "Daily routines, GRWM, skincare, aesthetics",
    status: "Active Cohort",
  },
  {
    name: "Food & Travel",
    cadence: "Local spots, recipes, authentic tasting, city guides",
    status: "Active Cohort",
  },
  {
    name: "Fitness & Wellness",
    cadence: "Workouts, recovery, mindful living, performance",
    status: "Curating Now",
  },
  {
    name: "Tech & Gaming",
    cadence: "Desk setups, gear walkthroughs, daily driver reviews",
    status: "Curating Now",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Category alignment",
    desc: "We define your target niche and content goals without bloated agency discovery decks.",
  },
  {
    step: "02",
    title: "Cohort selection",
    desc: "We handpick matching creators with authentic engagement and voice, not inflated follower vanity.",
  },
  {
    step: "03",
    title: "Managed execution",
    desc: "From creative brief to final delivery and usage rights, Clouterry manages the full relationship.",
  },
];

export default function BrandSection() {
  const [showCallModal, setShowCallModal] = useState(false);

  return (
    <section
      id="brands"
      className="relative bg-cream px-6 py-24 sm:py-32 text-ink border-t border-ink/8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header Block */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream-dim px-3.5 py-1 text-xs font-semibold text-ink/80">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              For Brands
            </div>

            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl leading-[1.15]">
              A curated bench of creators, managed end to end.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-ink/70 leading-relaxed">
              We build cohorts around your category and manage the relationship from brief to delivery. You get authentic content that resonates with your audience, without the operational drag of chasing individual creators.
            </p>

            <div className="mt-5 rounded-2xl border border-gold/30 bg-gold/10 px-4 py-3 text-xs text-ink/80 leading-relaxed">
              <span className="font-semibold text-ink">Founding partner advantage:</span> Brands who collaborate early help shape the exact verticals and creator cohorts we construct.
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="https://calendly.com/clouterry"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  setShowCallModal(true);
                }}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-cream shadow-md transition-all hover:bg-ink/85 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ink focus-visible:outline-none"
              >
                <span>Book a call</span>
                <svg
                  className="h-4 w-4 text-cream/70"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <span className="text-xs text-ink/50">
                Direct with founder • 20 min introductory discussion
              </span>
            </div>
          </motion.div>
        </div>

        {/* Categories & Process Split */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Creator Categories Grid */}
          <div className="lg:col-span-7">
            <h3 className="font-display text-lg font-semibold text-ink/90">
              Categories we&apos;re actively building cohorts around
            </h3>
            <p className="mt-1 text-xs text-ink/55">
              Curated by aesthetic fit and engagement consistency
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.name}
                  className="group rounded-2xl border border-ink/10 bg-cream-dim/60 p-5 transition-all hover:border-ink/25 hover:bg-cream-dim"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-base font-semibold text-ink">
                      {cat.name}
                    </span>
                    <span className="rounded-full bg-cream px-2.5 py-0.5 text-[11px] font-medium text-ink/65 border border-ink/8">
                      {cat.status}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-ink/65 leading-relaxed">
                    {cat.cadence}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Clarity */}
          <div className="lg:col-span-5 rounded-3xl border border-ink/10 bg-cream-dim/40 p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-ink">
              How partnership works
            </h3>
            <p className="mt-1 text-xs text-ink/55">
              Credibility through operational clarity
            </p>

            <div className="mt-6 flex flex-col gap-6">
              {PROCESS_STEPS.map((step) => (
                <div key={step.step} className="flex gap-4">
                  <span className="font-display text-sm font-bold text-red shrink-0 pt-0.5">
                    {step.step}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-ink">
                      {step.title}
                    </h4>
                    <p className="mt-1 text-xs text-ink/70 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal / Dialog */}
      {showCallModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 backdrop-blur-xs p-4"
        >
          <div className="w-full max-w-md rounded-3xl bg-cream p-7 text-ink shadow-2xl border border-ink/10">
            <div className="flex items-center justify-between border-b border-ink/10 pb-4">
              <div>
                <h4 className="font-display text-xl font-bold text-ink">
                  Schedule a Founder Call
                </h4>
                <p className="text-xs text-ink/60 mt-0.5">
                  Direct introductory strategy session
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowCallModal(false)}
                className="rounded-full p-1 text-ink/50 hover:bg-ink/10 hover:text-ink transition-colors"
                aria-label="Close modal"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-5 space-y-3 text-sm text-ink/75 leading-relaxed">
              <p>
                While volume is low, all brand inquiries are handled personally by our founding team to understand your exact category objectives.
              </p>
              <div className="rounded-2xl bg-cream-dim p-4 border border-ink/8 text-xs text-ink/80">
                <span className="font-semibold text-ink">Prefer email first?</span> Reach us anytime at{" "}
                <a
                  href="mailto:hello@clouterry.com"
                  className="font-semibold text-red underline hover:text-red-deep"
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
                className="flex items-center justify-center rounded-full bg-ink py-3 px-6 text-sm font-semibold text-cream transition-all hover:bg-ink/85"
              >
                Open Calendly Scheduler
              </a>
              <button
                type="button"
                onClick={() => setShowCallModal(false)}
                className="py-2 text-center text-xs font-semibold text-ink/50 hover:text-ink"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
