"use client";

import Image from "next/image";
import Link from "next/link";

export default function FounderStory() {
  return (
    <section
      id="story"
      className="relative bg-void/50 backdrop-blur-xs px-6 py-20 sm:py-28 text-silver border-t border-star-white/10 text-left"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-star-white leading-tight">
          The content economy has
          <br />
          a matching problem.
        </h2>

        <div className="mt-8 space-y-6 text-base text-silver/90 leading-relaxed border-t border-star-white/10 pt-8">
          <p>
            Every week, millions of talented micro-creators produce magnetic short-form video. Yet most spend 70% of their creative energy cold-pitching brands through overflowing DMs, getting ghosted or pressured into lowball trade deals with zero creative sovereignty.
          </p>
          <p>
            On the brand side, growth leaders are exhausted by SaaS directories that sell spreadsheets of 50,000 unvetted handles. Marketing teams end up acting as full-time logistics coordinators, wrangling dozens of one-off contracts, endless revision loops, and delayed payouts.
          </p>
          <p className="font-bold text-star-white">
            Clouterry fixes this through cohort-based talent infrastructure.
          </p>
          <p>
            We organize creators by genuine cultural category, giving independent voices collective bargaining power while providing brands with an operational roster they can trust on a guaranteed 14-day delivery cycle.
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-star-white/10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md liquid-glass p-1.5 border border-star-white/15">
              <Image
                src="/clouterry-mark-white.png"
                alt="Clouterry emblem"
                fill
                sizes="40px"
                className="object-contain p-1"
              />
            </div>
            <div>
              <div className="font-display text-xs font-bold text-star-white">
                The Founding Team
              </div>
              <div className="text-[11px] text-silver/60">
                Clouterry Agency, building the future of creator cohorts
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className="text-xs font-bold text-silver underline hover:text-star-white transition-colors"
          >
            Read full story
          </Link>
        </div>
      </div>
    </section>
  );
}
