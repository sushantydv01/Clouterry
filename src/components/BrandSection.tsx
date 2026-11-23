"use client";

import { useState } from "react";

const WORKFLOW = [
  {
    step: "01",
    title: "Brief definition",
    cadence: "Day 1 — 2",
    description: "You provide your product focus, visual aesthetic guidelines, and preferred cohort theme. We define the deliverable scope without bloated discovery decks.",
  },
  {
    step: "02",
    title: "Cohort roster sign-off",
    cadence: "Day 3",
    description: "We present a confirmed roster of 6 to 8 matching creators with verified engagement, retention curves, and authentic community affinity.",
  },
  {
    step: "03",
    title: "Synchronized production",
    cadence: "Days 4 — 9",
    description: "Product shipment and content creation. Clouterry reviews drafts for adherence to brief while safeguarding creators' authentic voices.",
  },
  {
    step: "04",
    title: "Drop & asset delivery",
    cadence: "Day 10",
    description: "Coordinated posting across creator feeds within a 5-day window. Full raw 4K source files and 12-month paid whitelist rights delivered in one central vault.",
  },
];

export default function BrandSection() {
  const [inquirySent, setInquirySent] = useState(false);
  const [brandEmail, setBrandEmail] = useState("");
  const [brandName, setBrandName] = useState("");
  const [brandCategory, setBrandCategory] = useState("Living & Home");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandEmail) return;
    setInquirySent(true);
  };

  return (
    <section id="brands" className="px-6 py-20 sm:py-24 border-t border-[var(--border-hairline)] bg-[var(--bg-subtle)]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Sprint Pipeline */}
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
              For Brands
            </p>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Turnkey creator campaigns under one clear agreement
            </h2>
            <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed max-w-xl">
              Eliminate the operational friction of individual sourcing, onboarding, contract negotiation, and deliverable chasing. We curate the creators, structure the delivery window, and handle all talent logistics.
            </p>

            {/* Connected Sprint Timeline */}
            <div className="relative mt-10 space-y-4 before:absolute before:left-6 before:top-4 before:bottom-4 before:w-[1px] before:bg-[var(--border-subtle)]">
              {WORKFLOW.map((item) => (
                <div
                  key={item.step}
                  className="relative flex items-start gap-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-5 text-left shadow-xs transition-colors hover:border-[var(--border-strong)]"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--bg-raised)] font-mono text-xs font-semibold text-[var(--text-primary)]">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pb-2 border-b border-[var(--border-hairline)]">
                      <h3 className="text-sm font-medium text-[var(--text-primary)]">
                        {item.title}
                      </h3>
                      <span className="font-mono text-[11px] text-[var(--accent)] font-medium">
                        {item.cadence}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Brand Inquiry Dossier */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-xs">
              <div className="pb-4 border-b border-[var(--border-hairline)]">
                <span className="font-mono text-xs text-[var(--accent)] font-medium">
                  PARTNER BRIEFING
                </span>
                <h3 className="mt-1 font-display text-xl font-medium text-[var(--text-primary)]">
                  Reserve a cohort briefing
                </h3>
                <p className="mt-1.5 text-xs text-[var(--text-secondary)] leading-relaxed">
                  Discuss upcoming cohort themes, target demographics, and unified pricing with our curation directors.
                </p>
              </div>

              {inquirySent ? (
                <div className="mt-6 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)] p-6 text-center">
                  <span className="font-mono text-xs text-[var(--positive)] font-medium block">
                    BRIEFING REQUEST NOTED
                  </span>
                  <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">
                    Thank you, {brandName || "there"}.
                  </p>
                  <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
                    We will email you at <span className="font-mono font-medium text-[var(--text-primary)]">{brandEmail}</span> within 24 hours with the roster deck for {brandCategory}.
                  </p>
                  <button
                    type="button"
                    onClick={() => setInquirySent(false)}
                    className="mt-4 text-xs font-medium text-[var(--accent)] hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
                  <div>
                    <label
                      htmlFor="brand-name"
                      className="block font-mono text-[11px] text-[var(--text-muted)]"
                    >
                      Brand / Company name
                    </label>
                    <input
                      id="brand-name"
                      type="text"
                      required
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      placeholder="e.g. Kanso Studio"
                      className="mt-1.5 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:bg-[var(--bg-surface)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="brand-email"
                      className="block font-mono text-[11px] text-[var(--text-muted)]"
                    >
                      Work email
                    </label>
                    <input
                      id="brand-email"
                      type="email"
                      required
                      value={brandEmail}
                      onChange={(e) => setBrandEmail(e.target.value)}
                      placeholder="partnership@brand.com"
                      className="mt-1.5 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:bg-[var(--bg-surface)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="brand-category"
                      className="block font-mono text-[11px] text-[var(--text-muted)]"
                    >
                      Preferred cohort vertical
                    </label>
                    <select
                      id="brand-category"
                      value={brandCategory}
                      onChange={(e) => setBrandCategory(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3 py-2 text-sm text-[var(--text-primary)] focus:border-[var(--accent)] focus:bg-[var(--bg-surface)] focus:outline-none"
                    >
                      <option value="Living & Home">Living, Spaces & Routine (Cohort 04)</option>
                      <option value="Culinary & Dining">Table, Pantry & Coffee (Cohort 05)</option>
                      <option value="Hardware & Desk">Workspace & Creator Tools (Cohort 06)</option>
                      <option value="Wellness & Rituals">Mindful Rituals & Daily Movement (Cohort 07)</option>
                      <option value="Custom Cohort">Custom Dedicated Vertical</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 flex h-10 w-full items-center justify-center rounded-lg bg-[var(--text-primary)] px-4 text-xs font-medium text-white transition-colors hover:bg-black"
                  >
                    Request cohort roster & rates
                  </button>

                  <p className="text-center font-mono text-[10px] text-[var(--text-muted)]">
                    Direct reply from our founding partnership director within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
