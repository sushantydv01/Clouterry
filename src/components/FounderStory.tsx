"use client";

import { motion } from "framer-motion";

export default function FounderStory() {
  return (
    <section
      id="story"
      className="relative bg-cream-dim/50 px-6 py-24 sm:py-32 text-ink border-t border-ink/8"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center sm:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream px-3.5 py-1 text-xs font-semibold text-ink/70">
            Our Conviction
          </div>

          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl leading-[1.2]">
            Why Clouterry exists, and why cohorts change the game.
          </h2>

          <div className="mt-8 space-y-5 text-base sm:text-lg text-ink/75 leading-relaxed">
            <p>
              The content economy has a structural matching problem. Millions of talented micro and small creators produce genuinely magnetic, high-converting video every week, yet spend hours cold-pitching brands with little leverage.
            </p>
            <p>
              On the other side, growth marketers and brands are exhausted by impersonal software directories that dump thousands of unvetted handles into a spreadsheet, leaving them to manage 40 distinct contracts, creative briefs, and payout cycles.
            </p>
            <p>
              Clouterry was built to bridge this disconnect through curated cohorts. We organize creators by genuine aesthetic category and cultural fit, giving small creators collective negotiating power while offering brands a streamlined, managed roster they can trust. When alignment comes first, content actually lands.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-ink/10 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-red text-cream font-display font-bold flex items-center justify-center text-sm shadow-xs">
              C
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">The Founding Team</p>
              <p className="text-xs text-ink/55">Clouterry • Built in public</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
