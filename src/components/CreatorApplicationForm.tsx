"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NICHES = [
  "Beauty & lifestyle",
  "Food & travel",
  "Fitness & wellness",
  "Tech & gaming",
  "Fashion & culture",
];

const FOLLOWER_TIERS = [
  "1k – 10k",
  "10k – 50k",
  "50k – 100k",
  "100k+",
];

export default function CreatorApplicationForm() {
  const [handle, setHandle] = useState("");
  const [niche, setNiche] = useState("");
  const [followers, setFollowers] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!handle.trim()) {
      setErrorMessage("Please enter your Instagram or TikTok handle.");
      return;
    }
    if (!niche.trim()) {
      setErrorMessage("Please choose or specify your content niche.");
      return;
    }
    if (!followers.trim()) {
      setErrorMessage("Please select your follower count tier.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMessage("Please provide a valid email address so we can reach you.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ handle, niche, followers, email }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Submission failed");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setHandle("");
    setNiche("");
    setFollowers("");
    setEmail("");
    setSubmitted(false);
    setErrorMessage(null);
  };

  return (
    <div className="w-full max-w-xl">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="rounded-3xl bg-cream p-6 sm:p-9 text-ink shadow-lg"
          >
            <div className="mb-6 flex items-center justify-between border-b border-ink/10 pb-4">
              <div>
                <span className="font-display text-lg font-semibold text-ink">
                  Founding Cohort Application
                </span>
                <p className="text-xs text-ink/60 mt-0.5">
                  4 quick fields • Cohorts filling now
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red/10 px-3 py-1 text-xs font-semibold text-red">
                <span className="h-2 w-2 rounded-full bg-red animate-pulse" />
                Open
              </span>
            </div>

            {errorMessage && (
              <div
                role="alert"
                className="mb-5 rounded-xl bg-red/10 border border-red/20 px-4 py-2.5 text-sm font-medium text-red"
              >
                {errorMessage}
              </div>
            )}

            <div className="flex flex-col gap-5">
              {/* Field 1: Handle */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="creator-handle"
                  className="text-sm font-medium text-ink"
                >
                  Instagram or TikTok handle
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-ink/40 font-medium">
                    @
                  </span>
                  <input
                    id="creator-handle"
                    name="handle"
                    type="text"
                    required
                    value={handle.replace(/^@/, "")}
                    onChange={(e) => setHandle(e.target.value)}
                    placeholder="yourhandle"
                    className="w-full rounded-xl border border-ink/15 bg-white/70 py-3 pr-4 pl-8 text-sm text-ink placeholder:text-ink/40 outline-none transition-all focus:border-red focus:bg-white focus:ring-2 focus:ring-red/20"
                  />
                </div>
              </div>

              {/* Field 2: Content Niche */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="creator-niche"
                    className="text-sm font-medium text-ink"
                  >
                    Content niche
                  </label>
                  <span className="text-xs text-ink/40">Select or type</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {NICHES.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setNiche(item)}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                        niche === item
                          ? "bg-red text-cream shadow-xs"
                          : "border border-ink/15 bg-white/50 text-ink/80 hover:border-ink/30 hover:bg-white"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <input
                  id="creator-niche"
                  name="niche"
                  type="text"
                  required
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  placeholder="Or enter your custom niche..."
                  className="mt-1 w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 outline-none transition-all focus:border-red focus:bg-white focus:ring-2 focus:ring-red/20"
                />
              </div>

              {/* Field 3: Follower Count */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-ink">
                  Follower count
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {FOLLOWER_TIERS.map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setFollowers(tier)}
                      className={`rounded-xl border py-2.5 px-3 text-center text-xs font-semibold transition-all ${
                        followers === tier
                          ? "border-red bg-red text-cream shadow-xs"
                          : "border-ink/15 bg-white/70 text-ink/80 hover:border-ink/30 hover:bg-white"
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Field 4: Contact Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="creator-email"
                  className="text-sm font-medium text-ink"
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
                  className="w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none transition-all focus:border-red focus:bg-white focus:ring-2 focus:ring-red/20"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={submitting}
                className="mt-2 flex w-full items-center justify-center rounded-full bg-red py-3.5 px-6 font-semibold text-cream shadow-md transition-all hover:bg-red-deep hover:scale-[1.01] active:scale-[0.98] disabled:opacity-70 focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2"
              >
                {submitting ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Apply to a cohort"
                )}
              </button>

              <p className="text-center text-xs text-ink/50 mt-1">
                No spam. Early cohorts get first pick of brand briefs.
              </p>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="confirmed"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl bg-cream p-8 sm:p-10 text-center text-ink shadow-xl border border-ink/5"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red text-cream shadow-md">
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              You&apos;re on the list — cohorts are filling now
            </h3>

            <p className="mt-3 text-sm text-ink/75 leading-relaxed">
              We received your application for <strong className="text-red">@{handle.replace(/^@/, "")}</strong> in the <strong className="text-ink">{niche}</strong> cohort. Founding creators get first access to brand briefs as opportunities match your style.
            </p>

            <div className="mt-6 rounded-2xl bg-cream-dim/60 border border-ink/8 p-4 text-xs text-ink/70">
              Check your inbox at <span className="font-semibold text-ink">{email}</span>. We review each application personally to ensure authentic cohort fit.
            </div>

            <button
              type="button"
              onClick={resetForm}
              className="mt-6 inline-block text-xs font-semibold text-red hover:underline"
            >
              Submit another profile
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
