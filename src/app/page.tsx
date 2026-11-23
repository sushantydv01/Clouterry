import Navigation from "@/components/Navigation";
import CohortDossier from "@/components/CohortDossier";
import CohortModel from "@/components/CohortModel";
import CohortSchedule from "@/components/CohortSchedule";
import BrandSection from "@/components/BrandSection";
import CreatorSection from "@/components/CreatorSection";
import FounderStory from "@/components/FounderStory";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-page)] text-[var(--text-primary)] antialiased">
      <Navigation />

      <main className="flex-1">
        {/* Editorial Hero Section */}
        <section
          className="relative px-6 pt-28 pb-16 sm:px-8 sm:pt-36 sm:pb-24"
          aria-label="Clouterry Introduction"
        >
          <div className="mx-auto max-w-6xl">
            {/* Headline Block */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-md border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-2.5 py-1 text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span className="font-mono text-[11px] text-[var(--text-secondary)]">
                  COHORTS 04 — 07 ENROLLING NOW
                </span>
              </div>

              <h1 className="mt-4 font-display text-4xl font-normal tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl leading-[1.08]">
                Real creators. Real content. Built into cohorts brands can trust.
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                Clouterry organizes vetted micro-creators into themed cohorts of six to eight. Brands get synchronized drops, authentic content, and a single invoice without chasing individual DMs.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#creators"
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-[var(--accent)] px-6 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
                >
                  Join as creator
                </a>
                <a
                  href="#brands"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-6 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)]"
                >
                  Reserve a cohort for brands
                </a>
              </div>
            </div>

            {/* Core Product Moment: Interactive Cohort Dossier */}
            <div className="mt-14 sm:mt-16">
              <CohortDossier />
            </div>
          </div>
        </section>

        {/* The Cohort Model / Advantage */}
        <CohortModel />

        {/* Live Cohort Schedule & Open Seats */}
        <CohortSchedule />

        {/* Brand Operations & Booking */}
        <BrandSection />

        {/* Creator Collective & Application */}
        <CreatorSection />

        {/* Editorial Founder Note */}
        <FounderStory />
      </main>

      <Footer />
    </div>
  );
}
