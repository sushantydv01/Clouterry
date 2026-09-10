"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";
import RevealOnScroll from "./RevealOnScroll";

interface FaqItem {
  q: string;
  a: string;
  category: "all" | "creators" | "brands";
}

const FAQS: FaqItem[] = [
  {
    q: "How are creators selected for active cohorts?",
    a: "We evaluate creators based on authentic storytelling style, video completion rate, comment sentiment, and visual consistency. Rather than vanity metrics like raw follower counts, we focus on genuine audience engagement (typically >4.5% ER).",
    category: "creators",
  },
  {
    q: "Do creators have to sign exclusive talent contracts?",
    a: "Absolutely not. Clouterry operates on a non-exclusive cohort model. You remain completely independent, retain total ownership over your channel and likeness, and can accept personal deals at any time.",
    category: "creators",
  },
  {
    q: "What is the typical campaign turnaround for brands?",
    a: "From the moment the creative brief is approved, our standard cohort delivery is 14 days. This includes creator matching, product delivery, script angle approval, raw 4K footage shooting, and final quality review.",
    category: "brands",
  },
  {
    q: "What usage rights and whitelisting permissions are included?",
    a: "Every cohort package includes standard 90-day organic and paid commercial usage rights, along with direct Spark Ads authorization codes (TikTok) and Meta Partnership Ads permissions so brands can scale winning creative.",
    category: "brands",
  },
  {
    q: "How does payment work for creators?",
    a: "We provide guaranteed 14-day payment from client sign-off. Cohort members are paid directly via direct deposit or wire, backed by our agency guarantee so creators never have to wait on delayed corporate accounting cycles.",
    category: "creators",
  },
  {
    q: "Can brands request custom creator cohorts?",
    a: "Yes. In addition to our active cohorts (Beauty & Lifestyle, Food & Culture, Fitness & Movement, Tech & Workspaces), our Bespoke tier allows enterprise brands to scout custom cohorts in hyper-specific sub-genres.",
    category: "brands",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filter, setFilter] = useState<"all" | "creators" | "brands">("all");

  const filtered = filter === "all" ? FAQS : FAQS.filter((f) => f.category === filter || f.category === "all");

  return (
    <section className="relative border-t border-star-white/8 bg-void/35 backdrop-blur-xs px-6 py-28 sm:py-36 text-silver">
      <div className="mx-auto max-w-4xl">
        <RevealOnScroll>
          <div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-star-white leading-[1.05]">
              Answers to common questions.
            </h2>

            <p className="mt-4 text-base text-silver/70">
              Everything you need to know about joining or partnering with Clouterry cohorts.
            </p>

            <div className="mt-8 flex items-center gap-6 text-xs font-semibold border-b border-star-white/8 pb-4">
              {(["all", "creators", "brands"] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setFilter(cat);
                    setOpenIndex(null);
                  }}
                  className={`relative transition-colors duration-300 pb-1 capitalize ${
                    filter === cat
                      ? "text-star-white font-bold"
                      : "text-silver/40 hover:text-silver"
                  }`}
                >
                  {cat === "all" ? "All Questions" : `For ${cat}`}
                  {filter === cat && (
                    <motion.span
                      layoutId="faqFilter"
                      className="absolute -bottom-[5px] left-0 right-0 h-[2px] bg-vermillion rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <div className="mt-10 space-y-0">
          {filtered.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`border-b border-star-white/8 transition-colors duration-300 ${
                  isOpen ? "border-vermillion/20" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between text-left py-5 text-base sm:text-lg font-bold text-star-white group"
                >
                  <span className="flex items-center gap-3">
                    {/* Vermillion accent bar on open */}
                    <span
                      className={`w-[2px] h-5 rounded-full transition-all duration-300 ${
                        isOpen ? "bg-vermillion" : "bg-transparent"
                      }`}
                    />
                    <span className="group-hover:text-vermillion transition-colors duration-300">
                      {faq.q}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="shrink-0 ml-4"
                  >
                    <CaretDown
                      size={16}
                      weight="bold"
                      className={`transition-colors duration-300 ${
                        isOpen ? "text-vermillion" : "text-silver/30"
                      }`}
                    />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-5 pb-5 text-xs sm:text-sm text-silver/70 leading-relaxed max-w-2xl">
                        {faq.a}
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
  );
}
