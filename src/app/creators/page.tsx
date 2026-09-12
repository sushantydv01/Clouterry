"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import CreatorApplicationForm from "@/components/CreatorApplicationForm";
import AgencyTicker from "@/components/AgencyTicker";
import { CaretDown, Sparkle } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { accordionMotion } from "@/lib/motion";

const CATEGORIES = [
  "Beauty & Morning Rituals",
  "Artisanal Culinary & Regional Food",
  "Mindful Movement & Athletic Conditioning",
  "Minimalist Workspaces & Hardware EDC",
  "Capsule Wardrobe & Design Aesthetics",
];

const CREATOR_PERKS = [
  {
    num: "01",
    title: "Zero cold pitching",
    desc: "Stop sending unsolicited pitches with single-digit read rates. We deliver verified brand campaigns straight to your cohort.",
  },
  {
    num: "02",
    title: "100% creative sovereignty",
    desc: "No stiff corporate copy or forced script reads. We partner you only with brands eager for your genuine aesthetic.",
  },
  {
    num: "03",
    title: "Fair collective rates",
    desc: "Cohort members benefit from collective agency leverage, securing guaranteed compensation without lowballing.",
  },
  {
    num: "04",
    title: "Contract protection, 14-day pay",
    desc: "We clear usage rights, exclusivity terms, and timeline expectations. Payment clears within 14 days of asset signoff.",
  },
];

const VERTICAL_STANDARDS = [
  {
    num: "01",
    title: "Beauty & Daily Rituals",
    signature: "Natural luminescence, unhurried routines, tactile skin evaluations",
    retention: "46% avg hook retention",
    cadence: "14-Day Delivery",
  },
  {
    num: "02",
    title: "Artisanal Culinary",
    signature: "Cast-iron acoustics, regional terroir, farm-to-table technique",
    retention: "52% avg hook retention",
    cadence: "14-Day Delivery",
  },
  {
    num: "03",
    title: "Workspaces & Tech EDC",
    signature: "Mechanical acoustics, walnut workspaces, clean industrial finish",
    retention: "48% avg hook retention",
    cadence: "14-Day Delivery",
  },
  {
    num: "04",
    title: "Movement & Conditioning",
    signature: "Architectural conditioning, kinetic form, recovery science",
    retention: "44% avg hook retention",
    cadence: "14-Day Delivery",
  },
];

const FAQS = [
  {
    question: "What follower count do I need to join?",
    answer:
      "We focus on engagement quality and aesthetic discipline rather than vanity follower counts. Our cohorts range from micro-creators with 1k to 10k followers up to 100k+. If your content generates genuine reactions, you belong here.",
  },
  {
    question: "Do I have to sign an exclusive talent contract?",
    answer:
      "No. Clouterry operates strictly on a non-exclusive cohort basis. You remain completely independent and retain total control over your channel, existing sponsorships, and direct brand inquiries.",
  },
  {
    question: "How do brands select creators?",
    answer:
      "Brands collaborate with Clouterry to choose focused verticals. We handpick cohort members whose organic visual style naturally matches the campaign brief.",
  },
  {
    question: "When do I hear back after applying?",
    answer:
      "Our founding team reviews applications weekly. Once your handle is vetted and a matching cohort brief opens, we contact you directly by email.",
  },
];

export default function CreatorsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex min-h-screen flex-col bg-red text-cream selection:bg-gold selection:text-ink">
      <main className="flex-1">
        {/* Header + Application: Full bleed red register with high energy */}
        <section className="relative bg-red px-6 pb-20 pt-20 text-cream sm:px-10 sm:pb-28 sm:pt-28 lg:px-16 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 ambient-glow-crimson pointer-events-none opacity-60" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-cream/75 mb-4 font-mono">
              Creator Infrastructure
            </div>

            <h1 className="font-display text-4xl font-extrabold leading-[0.94] tracking-[-0.035em] text-cream sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Make what you love.
              <br />
              Let cohorts bring the deals.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg font-body">
              No cold emailing marketing teams or getting ghosted by corporate procurement. Join a curated
              cohort of like-minded creators and receive briefs matching your authentic voice.
            </p>

            <div className="mx-auto mt-6 max-w-2xl border-t border-cream/20 pt-5 text-sm text-cream/70 font-body">
              {CATEGORIES.join(", ")}
            </div>
          </div>

          <div id="apply" className="mx-auto mt-16 max-w-6xl relative z-10 scroll-mt-24">
            <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-6">
                <h2 className="font-display text-3xl font-bold leading-[1.02] tracking-[-0.03em] text-cream sm:text-4xl md:text-5xl">
                  Everything an agency should do, minus the predatory cut.
                </h2>

                <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/85 font-body">
                  Traditional agencies demand 20 to 40% exclusive locks and manage you through spreadsheets.
                  Clouterry builds focused cohorts, giving you collective negotiating leverage and
                  transparent, guaranteed project fees.
                </p>

                <div className="mt-10 max-w-lg divide-y divide-cream/15 border-t border-cream/20">
                  {CREATOR_PERKS.map((perk) => (
                    <div key={perk.title} className="py-4.5 first:pt-6 last:pb-0">
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-sm font-bold text-cream/60 tabular-nums">{perk.num}</span>
                        <h3 className="font-display text-base font-bold text-cream">{perk.title}</h3>
                      </div>
                      <p className="mt-1 pl-7 text-sm leading-relaxed text-cream/75 font-body">{perk.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-start lg:justify-end">
                <CreatorApplicationForm />
              </div>
            </div>
          </div>
        </section>

        {/* Kinetic Ticker */}
        <AgencyTicker
          tone="dark"
          items={[
            "100% CREATOR SOVEREIGNTY",
            "WEEKLY COHORT VETTING",
            "GUARANTEED 14-DAY PAYOUT",
            "NO EXCLUSIVE TALENT LOCKS",
            "AESTHETIC INTEGRITY FIRST",
          ]}
        />

        {/* Active Vertical Standards (Pure Graphic & Typographic Architecture, Zero Stock Photos) */}
        <section className="border-b border-cream/15 bg-red-deep/50 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 text-cream relative overflow-hidden">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-4 border-b border-cream/20 pb-6 sm:flex-row sm:items-end">
              <div>
                <h3 className="font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
                  Independent minds. Collective power.
                </h3>
                <p className="mt-2 text-sm text-cream/75 font-body">
                  Active standards across our primary cohort verticals.
                </p>
              </div>
              <span className="text-xs text-cream/60 font-mono uppercase">Vetted Weekly</span>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {VERTICAL_STANDARDS.map((v) => (
                <div
                  key={v.num}
                  className="rounded-xl glass-red-primary p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-lg border border-white/20"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between border-b border-cream/15 pb-3">
                      <span className="font-display text-xs font-bold uppercase tracking-widest text-cream/70 font-mono">
                        Vertical {v.num}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cream bg-black/20 px-2.5 py-1 rounded-md border border-white/20 font-mono">
                        <Sparkle size={12} weight="fill" className="text-gold" />
                        <span>{v.cadence}</span>
                      </span>
                    </div>

                    <h4 className="mt-4 font-display text-2xl font-bold text-cream">
                      {v.title}
                    </h4>

                    <p className="mt-3 text-sm leading-relaxed text-cream/85 font-body">
                      {v.signature}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-cream/15 pt-4 text-xs font-semibold text-cream/75 font-mono">
                    {v.retention}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Creator Charter */}
        <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 bg-red border-b border-cream/15 text-cream relative overflow-hidden">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl glass-red-primary p-8 sm:p-10 relative overflow-hidden shadow-xl border border-white/20">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

              <span className="font-display text-xs font-bold uppercase tracking-widest text-gold block mb-2 font-mono">
                The Clouterry Creator Charter
              </span>
              <h3 className="font-display text-2xl font-bold text-cream sm:text-3xl">
                Four rules we never break with talent.
              </h3>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 text-sm leading-relaxed text-cream/85 font-body">
                <div className="border-l-2 border-gold pl-4">
                  <span className="font-bold text-cream block text-base font-display">01. Creative Sovereignty</span>
                  If a brief or talking point doesn&apos;t feel natural to your channel, you decline it without penalty. We never force canned corporate copy.
                </div>
                <div className="border-l-2 border-gold pl-4">
                  <span className="font-bold text-cream block text-base font-display">02. 14-Day Direct Wire</span>
                  You are paid within 14 business days of deliverable signoff. No 60-day or 90-day accounting delays.
                </div>
                <div className="border-l-2 border-gold pl-4">
                  <span className="font-bold text-cream block text-base font-display">03. Zero Exclusive Lock-Ins</span>
                  You retain complete channel ownership. Clouterry takes zero commission on brand deals you source independently.
                </div>
                <div className="border-l-2 border-gold pl-4">
                  <span className="font-bold text-cream block text-base font-display">04. Keep 100% of Product</span>
                  All campaign items shipped to your studio remain your personal property. Never returned, never billed.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creator FAQ */}
        <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 bg-red text-cream">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
              Everything you need to know about joining a cohort.
            </h2>

            <div className="mt-10 space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={faq.question} className="border-b border-cream/20 pb-4">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="btn-press flex w-full items-center justify-between py-3 text-left font-display text-base font-bold text-cream transition-colors hover:text-cream cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <CaretDown
                        size={16}
                        weight="bold"
                        className={`ml-4 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isOpen ? "rotate-180 text-cream" : "text-cream/50"
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          variants={accordionMotion}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="overflow-hidden"
                        >
                          <div className="pb-3 pt-1 text-sm leading-relaxed text-cream/85 font-body">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
