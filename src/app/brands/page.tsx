"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { X } from "@phosphor-icons/react";

const COHORTS = [
  {
    name: "Beauty & Daily Rituals",
    cadence: "Skincare routines, texture checks, aesthetic morning rituals",
    creatorsCount: "18 creators",
    sampleDeliverables: "GRWM format, organic review, raw 4K vertical UGC",
    turnaround: "14-day delivery",
  },
  {
    name: "Food & Regional Culture",
    cadence: "Artisanal culinary, regional tasting notes, kitchen ASMR",
    creatorsCount: "14 creators",
    sampleDeliverables: "Recipe walkthroughs, pantry integration, venue visits",
    turnaround: "14-day delivery",
  },
  {
    name: "Movement & Conditioning",
    cadence: "Form breakdown, athletic recovery, intentional wellness",
    creatorsCount: "16 creators",
    sampleDeliverables: "Workout integrations, morning routines, gear reviews",
    turnaround: "14-day delivery",
  },
  {
    name: "Workspaces & Tech EDC",
    cadence: "Clean ergonomics, desk setups, creative workflow tours",
    creatorsCount: "16 creators",
    sampleDeliverables: "Hardware reviews, software integrations, workspace tours",
    turnaround: "14-day delivery",
  },
];

const PACKAGES = [
  {
    name: "Launch Sprint",
    tagline: "High-impact burst for seasonal product releases",
    features: [
      "5 to 8 handpicked cohort creators",
      "Unified creative brief coordination",
      "Full organic & Spark Ad usage rights (90 days)",
      "Dedicated account coordinator",
    ],
    highlight: false,
  },
  {
    name: "Always-On Roster",
    tagline: "Continuous monthly cultural presence across your vertical",
    features: [
      "10 to 15 recurring cohort creators",
      "Bi-weekly content drops and iterative testing",
      "Full raw 4K asset library access",
      "Per-asset whitelisting & Spark Ads support",
      "Quarterly vertical refresh",
    ],
    highlight: true,
  },
  {
    name: "Bespoke Cohort",
    tagline: "Custom talent scout and build for enterprise brands",
    features: [
      "Custom creator scouting in specific sub-genre",
      "Category exclusivity option",
      "Custom perpetual usage rights",
      "Executive strategy consulting",
    ],
    highlight: false,
  },
];

export default function BrandsPage() {
  const [showCallModal, setShowCallModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-silver antialiased selection:bg-star-white selection:text-void relative z-10">
      <Navigation />

      <main className="flex-1 pt-36 pb-24 sm:pt-48 sm:pb-32 text-left">
        {/* Header: Quiet, confident restraint */}
        <section className="px-6 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-star-white leading-tight">
                A curated bench of creators.
                <br />
                Managed end to end.
              </h1>

              <p className="mt-6 text-base sm:text-lg text-silver/85 leading-relaxed">
                Skip managing 30 separate influencer contracts and revision loops. We curate specialized cohorts around your vertical and deliver converting creative assets on schedule.
              </p>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => setShowCallModal(true)}
                  className="rounded-md liquid-glass-interactive px-7 py-3 text-xs sm:text-sm font-semibold text-star-white border-b-2 border-b-ember/80 hover:border-b-ember focus-visible:ring-2 focus-visible:ring-ember"
                >
                  Book a call
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cohort Spec: Clean, quiet list */}
        <section className="mt-20 px-6 sm:px-8">
          <div className="mx-auto max-w-6xl border-t border-star-white/10 pt-12">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h2 className="font-display text-2xl font-bold text-star-white">
                  Active Vertical Cohorts
                </h2>
                <p className="text-xs text-silver/60 mt-1">
                  Each cohort is capped to preserve personal alignment and high output discipline
                </p>
              </div>
              <span className="text-xs text-silver/60">
                Turnaround: 14 days from brief approval
              </span>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {COHORTS.map((cohort) => (
                <div
                  key={cohort.name}
                  className="border-b border-star-white/10 pb-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-display text-lg font-bold text-star-white">
                        {cohort.name}
                      </h3>
                      <span className="text-xs font-mono text-silver/50">
                        {cohort.creatorsCount}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-silver/80 leading-relaxed">
                      {cohort.cadence}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-star-white/10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-xs text-silver/60">
                    <span>{cohort.sampleDeliverables}</span>
                    <span className="font-medium text-star-white">{cohort.turnaround}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration Models */}
        <section className="mt-20 px-6 sm:px-8">
          <div className="mx-auto max-w-6xl border-t border-star-white/10 pt-14">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-star-white">
                Structured Engagement Models
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver/70">
                Transparent scopes tailored to campaign velocity with zero bloated agency retainers
              </p>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`p-6 sm:p-8 rounded-xl flex flex-col justify-between liquid-glass ${
                    pkg.highlight
                      ? "border-ember/40 shadow-[0_0_24px_rgba(212,169,74,0.12)]"
                      : "border-star-white/10"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-xl font-bold text-star-white">
                        {pkg.name}
                      </h3>
                      {pkg.highlight && (
                        <span className="text-[10px] uppercase font-bold tracking-wider text-ember">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-silver/60 leading-relaxed">
                      {pkg.tagline}
                    </p>

                    <ul className="mt-8 space-y-2.5 text-xs text-silver/85 leading-relaxed">
                      {pkg.features.map((feat) => (
                        <li key={feat} className="border-b border-star-white/5 pb-2">
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-star-white/10">
                    <button
                      type="button"
                      onClick={() => setShowCallModal(true)}
                      className={`w-full rounded-md py-2.5 text-xs font-bold transition-colors ${
                        pkg.highlight
                          ? "liquid-glass-interactive text-star-white border-b-2 border-b-ember"
                          : "border border-star-white/20 text-silver hover:text-star-white hover:border-star-white/40"
                      }`}
                    >
                      Inquire About Scope
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Booking Modal */}
      {showCallModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-void/80 backdrop-blur-md p-4"
        >
          <div className="w-full max-w-md rounded-xl liquid-glass p-7 text-star-white shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-star-white/15 pb-4">
              <div>
                <h4 className="font-display text-lg font-bold text-star-white">
                  Schedule Brand Consultation
                </h4>
                <p className="text-xs text-silver/60 mt-0.5">
                  Direct 20 minute category roadmap
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowCallModal(false)}
                className="p-1 text-silver/60 hover:text-star-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-5 space-y-3 text-xs sm:text-sm text-silver leading-relaxed">
              <p>
                Brand consultations are hosted personally by our founding team to understand your aesthetic targets and cohort needs.
              </p>
              <div className="rounded-md bg-space-deep/80 p-4 border border-star-white/10 text-xs text-silver">
                <span className="font-semibold text-star-white">Direct contact:</span> Reach us directly at{" "}
                <a
                  href="mailto:hello@clouterry.com"
                  className="font-semibold text-ember underline hover:text-ember/80"
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
                className="rounded-md liquid-glass-interactive py-3 text-center text-xs sm:text-sm font-semibold text-star-white border-b-2 border-b-ember"
              >
                Open Calendly Scheduler
              </a>
              <button
                type="button"
                onClick={() => setShowCallModal(false)}
                className="py-2 text-center text-xs font-semibold text-silver/50 hover:text-silver"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
