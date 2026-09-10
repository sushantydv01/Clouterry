"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CreatorApplicationForm from "@/components/CreatorApplicationForm";
import { CaretDown } from "@phosphor-icons/react";

const CATEGORIES = [
  "Beauty & Morning Rituals",
  "Artisanal Culinary & Regional Food",
  "Mindful Movement & Athletic Conditioning",
  "Minimalist Workspaces & Hardware EDC",
  "Capsule Wardrobe & Design Aesthetics",
];

const CREATOR_PERKS = [
  {
    title: "Zero Cold Pitching",
    desc: "Stop sending unsolicited pitches with single-digit read rates. We deliver verified brand campaigns straight to your cohort.",
  },
  {
    title: "100% Creative Sovereignty",
    desc: "No stiff corporate copy or forced script reads. We partner you only with brands eager for your genuine aesthetic.",
  },
  {
    title: "Fair Collective Rates",
    desc: "Cohort members benefit from collective agency leverage, securing guaranteed compensation without lowballing.",
  },
  {
    title: "Contract Protection & 14-Day Pay",
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
      "Brands collaborate with Clouterry to choose focused verticals. We handpick cohort members whose organic visual style naturally matches the campaign brief without forcing unnatural product placement.",
  },
  {
    question: "When do I hear back after applying?",
    answer:
      "Our founding team reviews applications weekly. Once your handle is vetted and a matching cohort brief opens, we contact you directly via email.",
  },
];

export default function CreatorsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-silver antialiased selection:bg-star-white selection:text-void relative z-10">
      <Navigation />

      <main className="flex-1 pt-32 pb-24 sm:pt-44 sm:pb-32">
        {/* Top Header: Star-white typography */}
        <section className="px-6 text-center sm:px-8">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-star-white leading-[1.02]">
              Make what you love.
              <br />
              Let cohorts bring the deals.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-silver/85 leading-relaxed max-w-2xl mx-auto">
              No cold emailing marketing teams or getting ghosted by corporate procurement. Join a curated cohort of like-minded creators and receive briefs matching your authentic voice.
            </p>

            {/* Plainly set category list */}
            <div className="mt-8 pt-6 border-t border-star-white/10 max-w-2xl mx-auto text-xs sm:text-sm text-silver/70">
              <span className="font-semibold text-star-white">Active cohort verticals:</span>{" "}
              {CATEGORIES.join(" • ")}
            </div>
          </div>
        </section>

        {/* The Centerpiece: Space-Deep section with subtle ember backlight */}
        <section className="relative mt-16 bg-space-deep/80 backdrop-blur-xs px-6 py-20 sm:py-28 text-star-white border-y border-star-white/10 overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -left-20 w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,_rgba(212,169,74,0.12),_transparent_70%)] blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
              {/* Left Column: Perks */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-star-white leading-tight">
                  Everything an agency should do, minus the predatory cut.
                </h2>

                <p className="mt-6 text-base text-silver/85 leading-relaxed max-w-lg">
                  Traditional agencies demand 20% to 40% exclusive locks and manage you through spreadsheets. Clouterry builds focused cohorts, giving you collective negotiating leverage and transparent, guaranteed project fees.
                </p>

                {/* Perk List */}
                <div className="mt-12 space-y-6 border-t border-star-white/10 pt-8">
                  {CREATOR_PERKS.map((perk) => (
                    <div key={perk.title}>
                      <h3 className="font-display text-base font-bold text-star-white">
                        {perk.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-silver/75 leading-relaxed">
                        {perk.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Liquid Glass Panel */}
              <div className="lg:col-span-6 flex justify-start lg:justify-end">
                <CreatorApplicationForm />
              </div>
            </div>
          </div>
        </section>

        {/* Creator FAQ Accordion */}
        <section className="mt-28 px-6 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-star-white sm:text-4xl text-center">
              Creator Questions & Answers
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-silver/60 text-center">
              Clear commitments. Zero hidden exclusive clauses.
            </p>

            <div className="mt-12 space-y-4">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.question}
                    className="border-b border-star-white/10 pb-4 transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between text-left py-2 text-base font-bold text-star-white"
                    >
                      <span>{faq.question}</span>
                      <CaretDown
                        size={16}
                        weight="bold"
                        className={`shrink-0 ml-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-ember" : "text-silver/50"
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="pt-2 pb-2 text-xs sm:text-sm text-silver/80 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
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
