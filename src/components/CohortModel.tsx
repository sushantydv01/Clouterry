import React from "react";

export default function CohortModel() {
  return (
    <section id="how-it-works" className="px-6 py-20 sm:py-24 border-t border-[var(--border-hairline)] bg-[var(--bg-subtle)]">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            The Cohort Model
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Why one cohort of six creators outperforms fifty cold DMs
          </h2>
          <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed">
            Individual influencer outreach is an operational swamp of chasing deliverables and negotiating conflicting licensing terms. By grouping six to eight vetted micro-creators into synchronized cohorts, we turn chaotic influencer marketing into a predictable media product.
          </p>
        </div>

        {/* Structured comparison cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Traditional Outreach */}
          <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border-hairline)]">
              <span className="text-xs font-mono font-medium text-[var(--text-muted)]">
                TRADITIONAL APPROACH
              </span>
              <span className="rounded-md bg-[var(--bg-raised)] px-2 py-0.5 text-[11px] text-[var(--text-muted)]">
                Fragmented
              </span>
            </div>
            <h3 className="mt-4 text-base font-medium text-[var(--text-primary)]">
              Direct outreach & talent directories
            </h3>
            <ul className="mt-4 space-y-3 text-xs text-[var(--text-secondary)] leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-[var(--text-muted)] font-mono text-[11px] mt-0.5">—</span>
                <span>Chasing 10 different creators across Instagram DMs and personal email inboxes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[var(--text-muted)] font-mono text-[11px] mt-0.5">—</span>
                <span>10 separate master service agreements, varying usage restrictions, and distinct invoicing schedules.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[var(--text-muted)] font-mono text-[11px] mt-0.5">—</span>
                <span>Unvetted vanity follower counts with low authentic comment engagement.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[var(--text-muted)] font-mono text-[11px] mt-0.5">—</span>
                <span>Posts drop randomly over three months, killing any concentrated algorithmic momentum.</span>
              </li>
            </ul>
          </div>

          {/* Clouterry Cohort Approach */}
          <div className="rounded-2xl border border-[var(--accent)]/30 bg-[var(--bg-surface)] p-6 sm:p-8 relative">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border-hairline)]">
              <span className="text-xs font-mono font-medium text-[var(--accent)]">
                CLOUTERRY COHORT
              </span>
              <span className="rounded-md bg-[var(--accent-subtle)] px-2 py-0.5 text-[11px] font-medium text-[var(--accent)]">
                Synchronized
              </span>
            </div>
            <h3 className="mt-4 text-base font-medium text-[var(--text-primary)]">
              Curated collective delivery
            </h3>
            <ul className="mt-4 space-y-3 text-xs text-[var(--text-secondary)] leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-[var(--accent)] font-mono text-[11px] mt-0.5">•</span>
                <span>1 creative brief shared with a curated bench of 6–8 pre-vetted aesthetic creators.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[var(--accent)] font-mono text-[11px] mt-0.5">•</span>
                <span>1 consolidated contract and single payment covering all creators with 12-month paid media whitelist rights.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[var(--accent)] font-mono text-[11px] mt-0.5">•</span>
                <span>Strict 4.5%+ engagement floor with verified organic retention and real audience affinity.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[var(--accent)] font-mono text-[11px] mt-0.5">•</span>
                <span>Synchronized 5-day release window creates genuine cultural presence in niche feeds.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3 Metric proof points */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 text-left">
            <p className="font-mono text-2xl font-medium text-[var(--text-primary)] tabular-nums sm:text-3xl">
              4.8%
            </p>
            <p className="mt-1 text-xs font-medium text-[var(--text-primary)]">
              Average verified engagement
            </p>
            <p className="mt-1.5 text-xs text-[var(--text-muted)] leading-relaxed">
              Industry baseline for macro accounts sits below 1.6%. Micro-cohorts drive genuine comment conversations.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 text-left">
            <p className="font-mono text-2xl font-medium text-[var(--text-primary)] tabular-nums sm:text-3xl">
              10 days
            </p>
            <p className="mt-1 text-xs font-medium text-[var(--text-primary)]">
              Brief to delivery turnaround
            </p>
            <p className="mt-1.5 text-xs text-[var(--text-muted)] leading-relaxed">
              Fast production sprint from creative sign-off to full cohort drop, with standardized review windows.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 text-left">
            <p className="font-mono text-2xl font-medium text-[var(--text-primary)] tabular-nums sm:text-3xl">
              1 agreement
            </p>
            <p className="mt-1 text-xs font-medium text-[var(--text-primary)]">
              Unified rights & billing
            </p>
            <p className="mt-1.5 text-xs text-[var(--text-muted)] leading-relaxed">
              Full commercial usage, organic posting, and digital ad whitelisting bundled into one clear invoice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
