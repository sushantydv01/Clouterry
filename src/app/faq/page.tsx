"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import AgencyTicker from "@/components/AgencyTicker";
import { CaretDown, Sparkle, ArrowUpRight } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { accordionMotion } from "@/lib/motion";
import Link from "next/link";

interface FAQItem {
  category: "brands" | "creators" | "rights";
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  // Brands
  {
    category: "brands",
    question: "How does the 14-day delivery sprint actually work?",
    answer:
      "Once your master brief is approved on Day 01, Clouterry activates your curated cohort within 48 hours. Creators receive products and shoot autonomously Days 05 to 09. We conduct unified agency review and sound mixing Days 10 to 11, finalize commercial rights clearance Days 12 to 13, and deliver your full asset package on Day 14. If we miss Day 14, you receive a 100% refund.",
  },
  {
    category: "brands",
    question: "Do we get Spark Ads codes and paid whitelisting rights?",
    answer:
      "Yes. Every standard Clouterry campaign includes pre-cleared 90-day organic and paid amplification rights (TikTok Spark Ads authorization codes and Meta partnership whitelisting). You receive codes ready to paste directly into TikTok Ads Manager or Meta Ads Manager.",
  },
  {
    category: "brands",
    question: "Can we request revisions on the delivered creator videos?",
    answer:
      "Yes. We include one structured round of editorial revision per asset (pacing, caption corrections, color grading adjustments, or alternate audio stems). Because creators are sourced specifically for their authentic voice, we do not allow forced teleprompter re-shoots that destroy native engagement.",
  },
  {
    category: "brands",
    question: "What files land in our delivery folder?",
    answer:
      "Your Frame.io / Google Drive delivery folder contains 4K ProRes 9:16 vertical video masters, separate clean isolated vocal and Foley audio stems, raw B-roll cutdowns, SRT caption files, and signed commercial clearance certificates.",
  },

  // Creators
  {
    category: "creators",
    question: "What follower count is required to join a cohort?",
    answer:
      "We prioritize hook retention rate, audio craft, and aesthetic consistency over vanity follower counts. Our cohorts include micro-creators with 2k to 10k engaged followers up to 100k+ authority creators. If your community pays attention and leaves thoughtful comments, your application will be reviewed seriously.",
  },
  {
    category: "creators",
    question: "Do I have to sign an exclusive management contract?",
    answer:
      "Absolutely not. Clouterry operates strictly on a non-exclusive cohort basis. You remain 100% independent and retain full ownership of your channel, direct sponsor relationships, and incoming brand inquiries. We take zero commission on deals you source yourself.",
  },
  {
    category: "creators",
    question: "When and how do I get paid for campaigns?",
    answer:
      "We guarantee payment via direct bank wire within 14 business days of your deliverable signoff. You will never wait 60 or 90 days for corporate accounts payable departments.",
  },
  {
    category: "creators",
    question: "Do I have to read corporate scripts or canned copy?",
    answer:
      "Never. The core rule of the Clouterry Creator Charter is 100% Creative Sovereignty. We match you only with brands that want your genuine perspective. If a talking point feels unnatural to your cadence, you can decline or adjust it without penalty.",
  },
  {
    category: "creators",
    question: "Do I keep the campaign products sent to my studio?",
    answer:
      "Yes. All products, samples, and equipment sent to your studio for a campaign remain your personal property forever. They are never returned and never deducted from your payout.",
  },

  // Rights & Legal
  {
    category: "rights",
    question: "Who owns the raw footage and intellectual property?",
    answer:
      "Creators retain underlying copyright to their likeness and channel persona. The brand receives an exclusive 90-day worldwide commercial license to run paid ads, post organically, and repurpose cuts across their digital marketing channels.",
  },
  {
    category: "rights",
    question: "How are music and sound effects cleared for commercial ads?",
    answer:
      "All delivered videos utilize either clean organic room acoustics/Foley, original sound design, or pre-cleared royalty-free commercial tracks licensed for paid digital advertising. Brands face zero risk of audio takedowns or copyright strikes.",
  },
];

const FILTER_TABS = [
  { id: "all", label: "All Questions" },
  { id: "brands", label: "For Brands" },
  { id: "creators", label: "For Creators" },
  { id: "rights", label: "Turnaround & Rights" },
];

export default function FAQPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs =
    activeFilter === "all"
      ? FAQ_DATA
      : FAQ_DATA.filter((item) => item.category === activeFilter);

  return (
    <div className="flex min-h-screen flex-col bg-cream text-ink selection:bg-gold selection:text-ink">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-6 pt-24 pb-14 sm:px-10 sm:pt-28 sm:pb-20 lg:px-16 border-b border-ink/10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream-dim/80 px-3.5 py-1 text-xs font-semibold text-ink mb-5">
              <Sparkle size={13} weight="fill" className="text-red" />
              <span>Commercial & Creative Transparency</span>
            </div>

            <h1 className="font-display text-4xl font-extrabold tracking-[-0.04em] text-ink sm:text-6xl md:text-7xl">
              Frequently Asked
              <br />
              Questions.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-ink/75 font-body leading-relaxed">
              Clear, honest answers about our cohort model, 14-day turnaround guarantee, commercial rights,
              and creator payment standards.
            </p>

            {/* Filter Tabs */}
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {FILTER_TABS.map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setActiveFilter(tab.id);
                      setOpenIndex(null);
                    }}
                    className={`btn-press rounded-md px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-red text-cream shadow-xs"
                        : "border border-ink/20 bg-cream-dim/60 text-ink/70 hover:border-ink/50 hover:text-ink"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Accordion List */}
        <section className="px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-3xl divide-y divide-ink/10 border-y border-ink/10">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={faq.question} className="py-5">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="btn-press flex w-full items-center justify-between text-left font-display text-lg sm:text-xl font-bold tracking-tight text-ink transition-colors hover:text-red cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4">{faq.question}</span>
                    <CaretDown
                      size={18}
                      weight="bold"
                      className={`shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-red" : "text-ink/40"
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
                        <div className="pt-3 pb-2 text-sm sm:text-base leading-relaxed text-ink/80 font-body">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Unanswered Question Card */}
          <div className="mx-auto mt-16 max-w-3xl rounded-xl border border-ink/15 bg-cream-dim/80 p-8 text-center sm:p-10">
            <span className="font-mono text-xs uppercase tracking-widest text-red font-bold block mb-2">
              Need Specific Advice?
            </span>
            <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Have a question not covered here?
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm text-ink/75 font-body leading-relaxed">
              Our founding team personally responds to brand campaign inquiries and creator cohort questions within 4 hours.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="btn-press inline-flex items-center gap-2 rounded-md bg-red px-6 py-3 text-xs font-bold uppercase tracking-wider text-cream hover:bg-red-deep transition-colors shadow-xs"
              >
                <span>Contact Studio Inquiries</span>
                <ArrowUpRight size={13} weight="bold" />
              </Link>
              <a
                href="mailto:hello@clouterry.com"
                className="btn-press rounded-md border border-ink/30 px-6 py-3 text-xs font-bold uppercase tracking-wider text-ink hover:bg-ink hover:text-cream transition-colors"
              >
                hello@clouterry.com
              </a>
            </div>
          </div>
        </section>

        {/* Agency Ticker */}
        <AgencyTicker tone="cream" />
      </main>

      <Footer />
    </div>
  );
}
