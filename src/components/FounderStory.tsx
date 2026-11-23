import React from "react";

export default function FounderStory() {
  return (
    <section id="story" className="px-6 py-20 sm:py-24 border-t border-[var(--border-hairline)] bg-[var(--bg-subtle)]">
      <div className="mx-auto max-w-3xl text-left">
        <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
          Editorial Note
        </p>
        <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl">
          Why we stopped chasing follower counts
        </h2>

        <div className="mt-8 space-y-5 text-sm text-[var(--text-secondary)] leading-relaxed">
          <p>
            Influencer marketing broke when follower counts became detached from real cultural pull. A macro account with 700,000 passive followers often generates less genuine intent than a dedicated creator with 18,000 peers who watch every frame of their morning routine.
          </p>

          <p>
            Yet the creator economy was structured to punish small creators. If you have under 50,000 followers, brands treat you as an afterthought — lowballing rates, demanding multiple unpaid revisions, and taking 90 days to settle invoices. At the same time, growth marketers are exhausted by impersonal talent databases that dump 2,000 unvetted usernames into a spreadsheet, leaving internal teams to manage forty distinct agreements.
          </p>

          <p>
            Clouterry was built to bridge this disconnect through curated cohorts. We organize six to eight vetted creators by genuine aesthetic category and cultural affinity. Small creators get collective rate protection and zero operational drag, while brands get a coordinated, high-retention media campaign delivered under a single master contract.
          </p>

          <p>
            When creative alignment precedes the contract, content resonates naturally.
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border-hairline)] flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-[var(--text-primary)]">
              The Founding Team
            </p>
            <p className="font-mono text-xs text-[var(--text-muted)]">
              Clouterry Collective • 2026/27 Roster
            </p>
          </div>
          <span className="font-mono text-xs text-[var(--text-muted)]">
            NYC & Remote
          </span>
        </div>
      </div>
    </section>
  );
}
