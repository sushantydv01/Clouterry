"use client";

import Link from "next/link";
import { Sparkle, ArrowUpRight, Clock, Check } from "@phosphor-icons/react";

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

const APPLICATION_TIMELINE = [
  { step: "01", title: "Apply Online", text: "Submit your handle, niche, and audience tier in 30 seconds." },
  { step: "02", title: "Friday Evaluation", text: "Founders review engagement quality and aesthetic discipline weekly." },
  { step: "03", title: "Direct Brief Invite", text: "When a campaign matches your vertical, receive a brief with fixed upfront pay." },
];

export default function CreatorSection() {
  return (
    <section id="creators" className="relative bg-red px-6 py-20 text-cream sm:px-10 sm:py-28 lg:px-16 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          {/* Left Column: bold, loose, confident creator pitch & charter */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cream/70 mb-3">
                <Sparkle size={14} weight="fill" className="text-gold" />
                <span>The Creator Infrastructure</span>
              </div>

              <h2 className="font-display text-3xl font-extrabold leading-[1.0] tracking-[-0.035em] text-cream sm:text-4xl md:text-5xl">
                Join a cohort.
                <br />
                Get matched.
                <br />
                Keep your voice.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/85 sm:mt-7 sm:text-lg font-body">
                Stop guessing what corporate buyers want and getting ghosted in dry DMs. We organize independent
                creators by genuine cultural vertical, giving you collective leverage and transparent rates.
              </p>

              <div className="mt-8 max-w-lg border-t border-cream/20 pt-4 text-xs font-semibold uppercase tracking-wider text-cream/70 font-mono">
                Active Verticals: {CATEGORIES.join(" / ")}
              </div>
            </div>

            {/* Core Perks */}
            <div className="mt-10 max-w-lg divide-y divide-cream/15 border-t border-cream/20">
              {PERKS.map((perk, idx) => (
                <div key={perk.title} className="py-4.5 first:pt-5 last:pb-0">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-xs font-bold text-gold tabular-nums">0{idx + 1}</span>
                    <h3 className="font-display text-base font-bold text-cream sm:text-lg">{perk.title}</h3>
                  </div>
                  <p className="mt-1 pl-6 text-sm leading-relaxed text-cream/80 font-body">{perk.desc}</p>
                </div>
              ))}
            </div>

            {/* Transparent "What Happens After You Apply" Timeline */}
            <div className="mt-10 max-w-lg rounded-md border border-cream/20 bg-red-deep/40 p-5">
              <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-3">
                What happens after you apply
              </span>
              <div className="space-y-3">
                {APPLICATION_TIMELINE.map((item) => (
                  <div key={item.step} className="flex items-start gap-3 text-xs">
                    <span className="font-mono font-bold text-cream/50 mt-0.5">{item.step}</span>
                    <div>
                      <span className="font-semibold text-cream block">{item.title}</span>
                      <span className="text-cream/75 font-body">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Gateway Card routing to /creators#apply */}
          <div className="lg:col-span-6 flex justify-start lg:justify-end">
            <div className="w-full max-w-lg rounded-xl border border-cream/25 bg-red-deep/60 p-7 sm:p-9 shadow-lg backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-cream/20 pb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-gold font-bold">
                    Cohort Intake // Cycle 03
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-cream/80 font-mono">
                    <Clock size={13} className="text-cream" />
                    <span>Review: This Friday</span>
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-cream">
                  Ready to stop cold emailing brands?
                </h3>

                <p className="mt-3 text-sm text-cream/85 font-body leading-relaxed">
                  Join a vetted squad of micro-creators. Receive direct brand briefs with fixed upfront pay,
                  guaranteed 14-day turnaround wires, and 100% creative sovereignty.
                </p>

                {/* 4 Guarantees Checklist */}
                <div className="mt-6 space-y-2.5 rounded-lg border border-cream/15 bg-red/40 p-4 text-xs font-body">
                  <div className="flex items-center gap-2 text-cream">
                    <Check size={14} weight="bold" className="text-gold shrink-0" />
                    <span><strong>14-Day Wire Guarantee:</strong> Payment within 14 days of signoff</span>
                  </div>
                  <div className="flex items-center gap-2 text-cream">
                    <Check size={14} weight="bold" className="text-gold shrink-0" />
                    <span><strong>100% Creative Sovereignty:</strong> Zero scripted teleprompter reads</span>
                  </div>
                  <div className="flex items-center gap-2 text-cream">
                    <Check size={14} weight="bold" className="text-gold shrink-0" />
                    <span><strong>Zero Exclusive Locks:</strong> You own your channel and independent deals</span>
                  </div>
                  <div className="flex items-center gap-2 text-cream">
                    <Check size={14} weight="bold" className="text-gold shrink-0" />
                    <span><strong>Keep All Product:</strong> Shipped gear is 100% yours forever</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 border-t border-cream/20 pt-6">
                <Link
                  href="/creators#apply"
                  className="btn-press group flex w-full items-center justify-center gap-2.5 rounded-md bg-cream py-4 px-6 text-xs font-bold uppercase tracking-wider text-red hover:bg-cream-dim transition-all duration-200 shadow-sm"
                >
                  <span>Apply to Join a Cohort</span>
                  <ArrowUpRight
                    size={16}
                    weight="bold"
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <p className="mt-3 text-center text-xs text-cream/60 font-body">
                  Takes 60 seconds. Direct founder evaluation within 7 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
