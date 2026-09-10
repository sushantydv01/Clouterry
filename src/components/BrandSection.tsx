"use client";

import { useState } from "react";
import { X } from "@phosphor-icons/react";

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
      className="relative bg-void/85 backdrop-blur-xs px-6 py-16 sm:py-20 text-star-white border-t border-star-white/10 text-left"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Main narrative: One clean paragraph, confident headline, single CTA */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-star-white leading-snug">
              A curated bench of creators,
              <br />
              managed end to end.
            </h2>

            <p className="mt-5 text-sm sm:text-base text-silver leading-relaxed max-w-xl">
              We build specialized creator cohorts around your vertical and coordinate the entire relationship from brief to delivered short-form assets. You receive high-converting, rights-cleared video on a guaranteed 14-day turnaround without wrangling 30 independent contracts or chasing revisions.
            </p>

            {/* Liquid Glass "Book a call" CTA with the rare ember signature edge */}
            <div className="mt-8">
              <button
                type="button"
                onClick={() => setShowCallModal(true)}
                className="rounded-md liquid-glass-interactive px-6 py-2.5 text-xs sm:text-sm font-semibold text-star-white border-b-2 border-b-ember/80 hover:border-b-ember focus-visible:ring-2 focus-visible:ring-ember"
              >
                Book a call
              </button>
            </div>
          </div>

          {/* Categories: Simple, quiet list beside the copy */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-star-white/10 pt-8 lg:pt-0 lg:pl-10">
            <div className="text-xs uppercase tracking-wider text-silver/60 font-semibold mb-4">
              Active Cohort Verticals
            </div>
            <div className="space-y-3 text-sm text-silver/85">
              {CATEGORIES.map((cat) => (
                <div key={cat} className="border-b border-star-white/10 pb-2.5">
                  {cat}
                </div>
              ))}
            </div>
            <div className="mt-6 text-xs text-silver/50 leading-relaxed">
              Standard 14-day turnaround. Pre-cleared 90-day Spark Ads and organic commercial rights included.
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal in Liquid Glass */}
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
                  Direct 20 minute category strategy
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
                Brand consultations are conducted directly by our founding team to understand your aesthetic targets and cohort requirements.
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
    </section>
  );
}
