"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import CreatorSection from "@/components/CreatorSection";
import BrandSection from "@/components/BrandSection";
import FounderStory from "@/components/FounderStory";
import Footer from "@/components/Footer";

// Dynamically import the 3D Planet component with no SSR
const Planet = dynamic(() => import("@/components/Planet"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-44 w-44 rounded-full bg-red/10 animate-pulse" />
    </div>
  ),
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink antialiased selection:bg-red selection:text-cream">
      {/* Pinned / Glass Header */}
      <Navigation />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section
          className="relative flex min-h-[96vh] flex-col items-center justify-center px-6 pt-24 pb-16 text-center sm:px-8"
          aria-label="Clouterry Introduction"
        >
          {/* Subtle atmospheric ambient glow */}
          <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-red/5 blur-3xl" />

          {/* Centered, oversized 3D Planet Mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] cursor-grab active:cursor-grabbing"
          >
            <Planet className="h-full w-full" />
          </motion.div>

          {/* Hero Content Revealed Together */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mt-6 max-w-2xl"
          >
            <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl leading-[1.1]">
              Real creators. Real content. Built into cohorts brands can trust.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-ink/75 leading-relaxed max-w-xl mx-auto">
              Clouterry sources small creators into curated cohorts and connects them with brands who want authentic content that actually lands.
            </p>

            {/* The Two-Way Fork Within One Scroll */}
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href="#creators"
                className="w-full sm:w-auto rounded-full bg-red px-8 py-3.5 text-sm font-semibold text-cream shadow-md transition-all hover:bg-red-deep hover:scale-[1.03] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-red focus-visible:outline-none"
              >
                I&apos;m a creator
              </a>
              <a
                href="#brands"
                className="w-full sm:w-auto rounded-full border border-ink/20 bg-cream/60 px-8 py-3.5 text-sm font-semibold text-ink backdrop-blur-xs transition-all hover:border-ink/50 hover:bg-ink/5 hover:scale-[1.03] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ink focus-visible:outline-none"
              >
                I&apos;m a brand
              </a>
            </div>

            {/* Subtle scroll hint */}
            <div className="mt-12 flex justify-center text-ink/35">
              <a
                href="#creators"
                aria-label="Scroll to content"
                className="p-2 transition-transform hover:translate-y-1"
              >
                <svg
                  className="h-5 w-5 animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </section>

        {/* FOR CREATORS SECTION (Red Register) */}
        <CreatorSection />

        {/* FOR BRANDS SECTION (Cream/Ink Register) */}
        <BrandSection />

        {/* FOUNDER STORY SECTION */}
        <FounderStory />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
