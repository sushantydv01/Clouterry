"use client";

import { useState } from "react";

const NICHES = [
  "Living, Ceramics & Spaces",
  "Table, Pantry & Coffee",
  "Workspace & Quiet Tech",
  "Mindful Movement & Rituals",
  "Editorial Beauty & Skin",
  "Other Niche",
];

const FOLLOWER_TIERS = ["5k — 15k", "15k — 50k", "50k — 100k", "100k+"];

export default function CreatorApplicationForm() {
  const [handle, setHandle] = useState("");
  const [niche, setNiche] = useState(NICHES[0]);
  const [followers, setFollowers] = useState(FOLLOWER_TIERS[1]);
  const [email, setEmail] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          handle,
          niche,
          followers,
          email,
          portfolio,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("Something went wrong. Please check your connection.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setHandle("");
    setEmail("");
    setPortfolio("");
    setErrorMsg("");
  };

  return (
    <div className="w-full">
      {submitted ? (
        <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 sm:p-8 text-center shadow-xs">
          <span className="font-mono text-xs font-semibold text-[var(--positive)]">
            APPLICATION RECEIVED // ROSTER REVIEW
          </span>
          <h3 className="mt-3 font-display text-2xl font-medium text-[var(--text-primary)]">
            You are on the review queue
          </h3>
          <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed max-w-md mx-auto">
            We received your submission for <span className="font-mono font-medium text-[var(--text-primary)]">@{handle.replace(/^@/, "")}</span>. We review creator feeds manually for authentic community engagement and aesthetic fit.
          </p>
          <div className="mt-6 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-subtle)] p-4 text-xs text-[var(--text-secondary)] max-w-sm mx-auto">
            Confirmation sent to <span className="font-mono text-[var(--text-primary)]">{email}</span>. If matched to an active cohort, our curation team will schedule a 15-minute intro.
          </div>
          <button
            type="button"
            onClick={resetForm}
            className="mt-6 text-xs font-medium text-[var(--accent)] hover:underline"
          >
            Submit another profile
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-xs text-left"
        >
          <div className="pb-4 border-b border-[var(--border-hairline)]">
            <span className="font-mono text-xs font-semibold text-[var(--accent)]">
              CREATOR APPLICATION
            </span>
            <h3 className="mt-1 font-display text-xl font-medium text-[var(--text-primary)]">
              Apply for cohort representation
            </h3>
            <p className="mt-1.5 text-xs text-[var(--text-secondary)] leading-relaxed">
              Open to micro-creators (5k–100k) with high-retention content and authentic communities. No exclusivity lock-in.
            </p>
          </div>

          {errorMsg && (
            <div className="mt-4 rounded-lg bg-red-50 p-3 text-xs text-red-700 border border-red-200">
              {errorMsg}
            </div>
          )}

          <div className="mt-6 space-y-4">
            {/* Field: Primary Social Handle */}
            <div>
              <label
                htmlFor="creator-handle"
                className="block font-mono text-[11px] text-[var(--text-muted)]"
              >
                Social handle (Instagram / TikTok)
              </label>
              <div className="relative mt-1.5 flex items-center">
                <span className="pointer-events-none absolute left-3 font-mono text-xs text-[var(--text-muted)]">
                  @
                </span>
                <input
                  id="creator-handle"
                  name="handle"
                  type="text"
                  required
                  value={handle}
                  onChange={(e) => setHandle(e.target.value.replace(/^@/, ""))}
                  placeholder="yourusername"
                  className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] pl-7 pr-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:bg-[var(--bg-surface)] focus:outline-none"
                />
              </div>
            </div>

            {/* Field: Content Category */}
            <div>
              <label
                htmlFor="creator-niche"
                className="block font-mono text-[11px] text-[var(--text-muted)]"
              >
                Aesthetic vertical
              </label>
              <select
                id="creator-niche"
                name="niche"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3 py-2 text-sm text-[var(--text-primary)] focus:border-[var(--accent)] focus:bg-[var(--bg-surface)] focus:outline-none"
              >
                {NICHES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Field: Follower Range */}
            <div>
              <span className="block font-mono text-[11px] text-[var(--text-muted)]">
                Community size
              </span>
              <div className="mt-1.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {FOLLOWER_TIERS.map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setFollowers(tier)}
                    className={`rounded-lg border py-2 px-2 text-center font-mono text-xs transition-colors ${
                      followers === tier
                        ? "border-[var(--text-primary)] bg-[var(--text-primary)] text-white"
                        : "border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]"
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            {/* Field: Best Recent Reel or Portfolio link */}
            <div>
              <label
                htmlFor="creator-portfolio"
                className="block font-mono text-[11px] text-[var(--text-muted)]"
              >
                Link to sample reel or portfolio (optional)
              </label>
              <input
                id="creator-portfolio"
                name="portfolio"
                type="url"
                value={portfolio}
                onChange={(e) => setPortfolio(e.target.value)}
                placeholder="https://instagram.com/reel/..."
                className="mt-1.5 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:bg-[var(--bg-surface)] focus:outline-none"
              />
            </div>

            {/* Field: Contact Email */}
            <div>
              <label
                htmlFor="creator-email"
                className="block font-mono text-[11px] text-[var(--text-muted)]"
              >
                Contact email
              </label>
              <input
                id="creator-email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="mt-1.5 w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:bg-[var(--bg-surface)] focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="mt-3 flex h-10 w-full items-center justify-center rounded-lg bg-[var(--accent)] px-4 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-hover)] disabled:opacity-60"
            >
              {submitting ? "Submitting application..." : "Apply to join a cohort"}
            </button>

            <p className="text-center font-mono text-[10px] text-[var(--text-muted)]">
              No fee to apply. Cohort members receive direct brand compensation with zero commission cut on base fees.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
