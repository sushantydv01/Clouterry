"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CreatorApplicationForm from "@/components/CreatorApplicationForm";
import AgencyTicker from "@/components/AgencyTicker";
import { CaretDown, Check, Sparkle } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { accordionMotion, scrollReveal, staggerGroup, staggerChild, viewportOnce } from "@/lib/motion";

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
    <div className="flex min-h-screen flex-col bg-red text-cream selection:bg-yellow selection:text-ink">
      <Navigation tone="red" />

      <main className="flex-1">
        {/* Header + Application: Full bleed red register with high energy */}
        <section className="relative bg-red px-6 pb-20 pt-12 text-cream sm:px-10 sm:pb-28 sm:pt-20 lg:px-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.09),transparent_60%)] pointer-events-none" />

          <div className="mx-auto max-w-4xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-cream">
              <Sparkle size={12} weight="fill" className="text-yellow" />
              <span>Independent Creator Cohorts · 2026 Intake</span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[0.94] tracking-[-0.035em] text-cream sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Make what you love.
              <br />
              <span className="font-serif italic font-normal text-yellow">Let cohorts</span> bring the deals.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg font-body">
              No cold emailing marketing teams or getting ghosted by corporate procurement. Join a curated
              cohort of like-minded creators and receive briefs matching your authentic voice.
            </p>

            <div className="mx-auto mt-6 max-w-2xl border-t border-cream/20 pt-5 text-xs font-mono tracking-wider text-cream/70">
              {CATEGORIES.join(" · ")}
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-6xl relative z-10">
            <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-6">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-yellow">
                  Agency Disruption
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold leading-[1.02] tracking-[-0.03em] text-cream sm:text-4xl md:text-5xl">
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
                        <span className="font-mono text-xs font-bold text-yellow">{perk.num}</span>
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

        {/* Ticker between Red and Tonal Deep Red */}
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

        {/* Real Creator Spotlight Strip on Deep Crimson Canvas */}
        <section className="border-b border-cream/15 bg-red-deep/50 px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col justify-between gap-4 border-b border-cream/20 pb-6 sm:flex-row sm:items-end">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-cream/60">Current Cohort Voices</span>
                <h3 className="font-display text-2xl font-bold text-cream">Independent minds. Collective power.</h3>
              </div>
              <span className="font-mono text-xs text-cream/60">Selected Active Members</span>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="group border border-cream/20 bg-red-deep/70 p-4 transition-all hover:border-cream/40">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src="/creators/maya.jpg"
                    alt="Maya Lin"
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 rounded-sm bg-yellow px-2 py-0.5 font-mono text-[10px] font-bold text-ink">
                    Beauty & Rituals
                  </span>
                </div>
                <div className="mt-3 font-display font-bold text-cream">Maya Lin</div>
                <div className="font-mono text-xs text-cream/60">@mayaskinritual · 48k</div>
              </div>

              <div className="group border border-cream/20 bg-red-deep/70 p-4 transition-all hover:border-cream/40">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src="/creators/kai.jpg"
                    alt="Kai Tanaka"
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 rounded-sm bg-cream px-2 py-0.5 font-mono text-[10px] font-bold text-ink">
                    Workspaces & EDC
                  </span>
                </div>
                <div className="mt-3 font-display font-bold text-cream">Kai Tanaka</div>
                <div className="font-mono text-xs text-cream/60">@kaicrafts · 72k</div>
              </div>

              <div className="group border border-cream/20 bg-red-deep/70 p-4 transition-all hover:border-cream/40">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src="/creators/elena.jpg"
                    alt="Elena Rostova"
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 rounded-sm bg-yellow px-2 py-0.5 font-mono text-[10px] font-bold text-ink">
                    Movement & Form
                  </span>
                </div>
                <div className="mt-3 font-display font-bold text-cream">Elena Rostova</div>
                <div className="font-mono text-xs text-cream/60">@elenamovement · 34k</div>
              </div>
            </div>
          </div>
        </section>

        {/* Creator FAQ: Full Red & Warm Beige register */}
        <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 bg-red text-cream">
          <div className="mx-auto max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-yellow">Questions & Answers</span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
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
                      className="btn-press flex w-full items-center justify-between py-3 text-left font-display text-base font-bold text-cream transition-colors hover:text-yellow cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <CaretDown
                        size={16}
                        weight="bold"
                        className={`ml-4 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isOpen ? "rotate-180 text-yellow" : "text-cream/50"
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
