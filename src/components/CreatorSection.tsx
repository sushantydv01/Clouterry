"use client";

import CreatorApplicationForm from "./CreatorApplicationForm";
import RevealOnScroll from "./RevealOnScroll";

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
    title: "Fair terms & rapid payout",
    desc: "14-day guaranteed payment from signoff. Collective cohort leverage with zero predatory exclusive lock-ins.",
  },
];

export default function CreatorSection() {
  return (
    <section
      id="creators"
      className="relative bg-space-deep/75 backdrop-blur-xs text-star-white px-6 py-24 sm:py-28 text-left border-y border-star-white/8 overflow-hidden"
    >
      {/* Vermillion atmospheric glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,_rgba(255,61,46,0.08),_transparent_68%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-0 w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,_rgba(255,61,46,0.04),_transparent_70%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Bold, Loose Creator Pitch */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <RevealOnScroll>
              <div>
                <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-star-white leading-[1.02]">
                  Join a cohort.
                  <br />
                  Get matched.
                  <br />
                  Keep your voice.
                </h2>

                <p className="mt-8 text-base sm:text-lg text-silver leading-relaxed max-w-lg">
                  Stop guessing what corporate buyers want and getting ghosted in dry DMs. We organize independent creators by genuine cultural vertical, giving you collective leverage and transparent rates.
                </p>
              </div>
            </RevealOnScroll>

            {/* Stark, unhedged perks list */}
            <div className="mt-14 space-y-8 border-t border-star-white/8 pt-8 max-w-lg">
              {PERKS.map((perk, i) => (
                <RevealOnScroll key={perk.title} delay={i * 0.08}>
                  <div>
                    <h3 className="font-display text-lg font-bold text-star-white">
                      {perk.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-silver/70 leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Right Column: Creator Application Panel */}
          <div className="lg:col-span-6 flex justify-start lg:justify-end">
            <RevealOnScroll direction="right">
              <CreatorApplicationForm />
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
