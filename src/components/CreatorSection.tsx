"use client";

import CreatorApplicationForm from "./CreatorApplicationForm";

const CATEGORIES = [
  "Beauty & Daily Rituals",
  "Food & Regional Culture",
  "Movement & Conditioning",
  "Workspaces & Tech EDC",
];

const PERKS = [
  {
    title: "Direct brand briefs",
    desc: "No cold pitches into overflowing marketing inboxes. Curated campaign briefs flow straight to your cohort.",
  },
  {
    title: "100% creative sovereignty",
    desc: "Zero scripted corporate talking points. We partner you only with brands that want your genuine aesthetic.",
  },
  {
    title: "Fair terms and rapid payout",
    desc: "14-day guaranteed payment from signoff. Collective cohort leverage with zero predatory exclusive lock-ins.",
  },
];

export default function CreatorSection() {
  return (
    <section id="creators" className="relative bg-red px-6 py-20 text-cream sm:px-10 sm:py-28 lg:px-16 overflow-hidden">
      {/* Background Micro-Grid Line Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          {/* Left Column: bold, loose, confident creator pitch */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-block h-2 w-2 rounded-full bg-cream animate-pulse-subtle" />
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-cream/70">
                  Creator Lab · Cohort Applications Open
                </span>
              </div>

              <h2 className="mt-4 font-display text-4xl font-extrabold leading-[0.96] tracking-[-0.035em] text-cream sm:text-6xl md:text-7xl">
                Join a cohort.
                <br />
                Get matched.
                <br />
                <span className="font-serif italic font-normal text-yellow">Keep your voice.</span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/85 sm:mt-7 sm:text-lg font-body">
                Stop guessing what corporate buyers want and getting ghosted in dry DMs. We organize independent
                creators by genuine cultural vertical, giving you collective leverage and transparent rates.
              </p>

              <div className="mt-8 max-w-lg border-t border-cream/20 pt-5 text-xs font-mono tracking-wider text-cream/70">
                {CATEGORIES.join(" / ")}
              </div>
            </div>

            <div className="mt-12 max-w-lg divide-y divide-cream/15 border-t border-cream/20">
              {PERKS.map((perk, idx) => (
                <div key={perk.title} className="py-5 first:pt-6 last:pb-0">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs font-bold text-yellow">0{idx + 1}</span>
                    <h3 className="font-display text-base font-bold text-cream sm:text-lg">{perk.title}</h3>
                  </div>
                  <p className="mt-1 pl-7 text-sm leading-relaxed text-cream/80 font-body">{perk.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: application form, directly on the red */}
          <div className="lg:col-span-6 flex justify-start lg:justify-end">
            <CreatorApplicationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
