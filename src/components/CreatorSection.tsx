import React from "react";
import CreatorApplicationForm from "./CreatorApplicationForm";

const BENEFITS = [
  {
    title: "Curated briefs, zero cold DMs",
    description: "Stop sending outbound messages to brand marketing managers. When a brand books your cohort, the brief arrives with pre-cleared compensation.",
  },
  {
    title: "Collective rate protection",
    description: "Small creators frequently get lowballed. By grouping into cohorts, we establish transparent, fair tier floors that respect the craft.",
  },
  {
    title: "Preserved aesthetic voice",
    description: "Brands select cohorts specifically for your existing visual style. No artificial scripts or disconnected corporate bullet points.",
  },
  {
    title: "Prompt, guaranteed settlements",
    description: "All client funds are held in escrow before production begins. Payouts clear within 5 business days of synchronized drop date.",
  },
];

export default function CreatorSection() {
  return (
    <section id="creators" className="px-6 py-20 sm:py-24 border-t border-[var(--border-hairline)] bg-[var(--bg-page)]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Creator Principles */}
          <div className="lg:col-span-6">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
              For Creators
            </p>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Focus on making. We bring the briefs that fit your feed.
            </h2>
            <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed">
              You built your audience through genuine taste and consistency. Clouterry lets you monetize that trust through curated cohorts alongside peers who share your standards.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {BENEFITS.map((b) => (
                <div
                  key={b.title}
                  className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-5 text-left"
                >
                  <h3 className="text-sm font-medium text-[var(--text-primary)]">
                    {b.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-[var(--text-secondary)] leading-relaxed">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)] p-4 text-left">
              <span className="font-mono text-xs font-semibold text-[var(--text-primary)] block">
                COHORT CRITERIA
              </span>
              <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
                We accept accounts between 5,000 and 100,000 followers with consistent video quality, distinct visual identity, and verified 4%+ organic engagement.
              </p>
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-6">
            <CreatorApplicationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
