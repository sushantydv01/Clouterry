"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Planet = dynamic(() => import("@/components/Planet"), { ssr: false });

const creatorCategories = [
  "Beauty & lifestyle",
  "Food & travel",
  "Fitness & wellness",
  "Tech & gaming",
];

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* HERO */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="h-[280px] w-[280px] sm:h-[380px] sm:w-[380px]"
        >
          <Planet className="h-full w-full cursor-grab active:cursor-grabbing" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl"
        >
          Real creators. Real content. Built into cohorts brands can trust.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-md text-balance text-ink/70"
        >
          Clouterry sources small creators into curated cohorts and connects
          them with brands who want content that actually lands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#creators"
            className="rounded-full bg-red px-7 py-3 font-medium text-cream transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            I&apos;m a creator
          </a>
          <a
            href="#brands"
            className="rounded-full border border-ink/15 px-7 py-3 font-medium text-ink transition-colors hover:border-ink/30"
          >
            I&apos;m a brand
          </a>
        </motion.div>
      </section>

      {/* CREATORS — loose, playful register */}
      <section id="creators" className="bg-red px-6 py-24 text-cream sm:py-32">
        <div className="mx-auto max-w-xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Join a cohort. Get matched. Make what you actually make.
          </h2>
          <p className="mt-4 text-cream/85">
            No cold-pitching brands, no guessing what they want. You show us
            your niche, we bring the opportunities that fit it.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {creatorCategories.map((c) => (
              <li
                key={c}
                className="rounded-full border border-cream/30 px-4 py-1.5 text-sm text-cream/90"
              >
                {c}
              </li>
            ))}
          </ul>

          <form className="mt-10 flex flex-col gap-4 rounded-3xl bg-cream p-6 text-ink sm:p-8">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="handle" className="text-sm font-medium">
                Instagram or TikTok handle
              </label>
              <input
                id="handle"
                name="handle"
                placeholder="@yourhandle"
                className="rounded-xl border border-ink/15 bg-transparent px-4 py-2.5 outline-none focus:border-red"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="niche" className="text-sm font-medium">
                Content niche
              </label>
              <input
                id="niche"
                name="niche"
                placeholder="e.g. food & travel"
                className="rounded-xl border border-ink/15 bg-transparent px-4 py-2.5 outline-none focus:border-red"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="followers" className="text-sm font-medium">
                Follower count
              </label>
              <input
                id="followers"
                name="followers"
                placeholder="10,000"
                className="rounded-xl border border-ink/15 bg-transparent px-4 py-2.5 outline-none focus:border-red"
              />
            </div>
            <button
              type="submit"
              className="mt-2 rounded-full bg-red px-6 py-3 font-medium text-cream transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Apply to a cohort
            </button>
          </form>
        </div>
      </section>

      {/* BRANDS — quieter, more confident register */}
      <section id="brands" className="px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-4xl gap-12 sm:grid-cols-2 sm:items-start">
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              A curated bench of creators, managed end to end.
            </h2>
            <p className="mt-4 max-w-sm text-ink/70">
              We build cohorts around your category and manage the
              relationship from brief to delivery, so you get content, not
              logistics.
            </p>
            <a
              href="mailto:hello@clouterry.com"
              className="mt-8 inline-block rounded-full bg-ink px-7 py-3 font-medium text-cream transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Book a call
            </a>
          </div>

          <div className="border-t border-ink/10 pt-6 sm:border-t-0 sm:border-l sm:pl-12 sm:pt-0">
            <p className="text-sm font-medium text-ink/50">
              Categories we&apos;re building cohorts around
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {creatorCategories.map((c) => (
                <li key={c} className="text-ink/80">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-t border-ink/10 px-6 py-24">
        <div className="mx-auto max-w-xl">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Why Clouterry
          </h2>
          <p className="mt-4 text-ink/70">
            We started Clouterry because the content economy has a matching
            problem: small creators with real audiences struggle to find
            brands, and brands struggle to find creators who fit their
            category without wading through a database. Cohorts solve both —
            curated groups, matched on fit, managed by us.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-ink/10 px-6 py-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 text-sm text-ink/60 sm:flex-row">
          <span>© {new Date().getFullYear()} Clouterry</span>
          <div className="flex gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink"
            >
              Instagram
            </a>
            <a href="mailto:hello@clouterry.com" className="hover:text-ink">
              hello@clouterry.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
