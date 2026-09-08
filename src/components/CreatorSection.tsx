"use client";

import { motion } from "framer-motion";
import CreatorApplicationForm from "./CreatorApplicationForm";

const PERKS = [
  {
    title: "No cold pitching",
    desc: "Stop DMing brands with zero replies. We bring curated briefs directly into your cohort.",
  },
  {
    title: "Make what fits you",
    desc: "No forced corporate scripts. We match you with brands who want your authentic aesthetic.",
  },
  {
    title: "Managed & protected",
    desc: "Clear timelines, fair rates, and zero contract headaches. We handle the logistics.",
  },
];

export default function CreatorSection() {
  return (
    <section
      id="creators"
      className="relative overflow-hidden bg-red px-6 py-24 sm:py-32 text-cream"
    >
      {/* Decorative subtle ambient circles */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-red-deep/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-red-deep/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left: Pitch & Value Props */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-3.5 py-1 text-xs font-semibold text-cream">
                <span className="h-1.5 w-1.5 rounded-full bg-cream animate-pulse" />
                For Creators
              </div>

              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-cream sm:text-5xl leading-[1.1]">
                Join a cohort.
                <br />
                Get matched.
                <br />
                Make what you actually make.
              </h2>

              <p className="mt-5 text-base sm:text-lg text-cream/90 leading-relaxed max-w-lg">
                No cold-pitching brands, no guessing what they want. You show us your niche, and we bring the opportunities that fit your style.
              </p>

              <div className="mt-4 inline-flex items-center rounded-2xl bg-red-deep/40 border border-cream/15 px-4 py-2.5 text-xs text-cream/90">
                ⚡ <span className="font-semibold ml-1.5">Founding cohort urgency:</span>
                <span className="ml-1 text-cream/80">Early creators get first pick of brand briefs as cohorts unlock.</span>
              </div>
            </motion.div>

            {/* Micro perks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              {PERKS.map((perk) => (
                <div
                  key={perk.title}
                  className="rounded-2xl border border-cream/15 bg-cream/5 p-4 backdrop-blur-xs"
                >
                  <h3 className="font-display text-sm font-semibold text-cream">
                    {perk.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-cream/75 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: The 4-field application form */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <CreatorApplicationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
