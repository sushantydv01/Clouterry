"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, SpinnerGap } from "@phosphor-icons/react";

const NICHES = [
  "Beauty & Lifestyle",
  "Food & Culture",
  "Fitness & Wellness",
  "Tech & Design",
  "Fashion & Style",
];

const FOLLOWER_TIERS = [
  "1k to 10k",
  "10k to 50k",
  "50k to 100k",
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
      setErrorMessage("Please provide your social handle.");
      return;
    }
    if (!niche.trim()) {
      setErrorMessage("Please select or specify your content niche.");
      return;
    }
    if (!followers.trim()) {
      setErrorMessage("Please select your follower tier.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMessage("Please provide a valid contact email.");
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
    /* Liquid Glass UI Panel: translucent, refractive, top-edge specular highlight */
    <div className="w-full max-w-xl rounded-2xl liquid-glass p-8 sm:p-10 text-star-white relative">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >
            <div>
              <div className="text-xs uppercase tracking-widest text-silver/70 font-semibold">
                Direct Cohort Application
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-star-white mt-1">
                Apply to Join a Cohort
              </h3>
              <p className="text-xs sm:text-sm text-silver/80 mt-1.5 leading-relaxed">
                Reviewed weekly by our founding team. No spam, zero exclusive talent locks.
              </p>
            </div>

            {errorMessage && (
              <div
                role="alert"
                className="border-l-2 border-ember bg-space-deep/90 px-4 py-2.5 text-xs font-medium text-star-white"
              >
                {errorMessage}
              </div>
            )}

            {/* Field 1: Handle */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="creator-handle"
                className="text-xs font-semibold uppercase tracking-wider text-silver"
              >
                Your Handle
              </label>
              <div className="relative flex items-center border-b border-star-white/20 focus-within:border-star-white transition-colors">
                <span className="text-silver/50 font-medium text-base mr-2 select-none">
                  @
                </span>
                <input
                  id="creator-handle"
                  name="handle"
                  type="text"
                  required
                  value={handle.replace(/^@/, "")}
                  onChange={(e) => setHandle(e.target.value)}
                  placeholder="instagram or tiktok handle"
                  className="w-full bg-transparent py-2.5 text-base text-star-white placeholder:text-silver/40 outline-none"
                />
              </div>
            </div>

            {/* Field 2: Content Niche */}
            <div className="flex flex-col gap-2">
              <div className="flex items-baseline justify-between">
                <label
                  htmlFor="creator-niche"
                  className="text-xs font-semibold uppercase tracking-wider text-silver"
                >
                  Primary Vertical
                </label>
                <span className="text-[11px] text-silver/50">Select or enter below</span>
              </div>

              {/* Plainly-set text list */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs">
                {NICHES.map((item, idx) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setNiche(item)}
                    className={`transition-colors text-left ${
                      niche === item
                        ? "text-star-white font-bold underline underline-offset-4"
                        : "text-silver/70 hover:text-star-white"
                    }`}
                  >
                    {item}
                    {idx < NICHES.length - 1 ? (
                      <span className="ml-3 text-silver/30 select-none">/</span>
                    ) : null}
                  </button>
                ))}
              </div>

              <div className="border-b border-star-white/20 focus-within:border-star-white transition-colors mt-1">
                <input
                  id="creator-niche"
                  name="niche"
                  type="text"
                  required
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  placeholder="Or enter custom niche..."
                  className="w-full bg-transparent py-2 text-sm text-star-white placeholder:text-silver/40 outline-none"
                />
              </div>
            </div>

            {/* Field 3: Follower Range */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-silver">
                Audience Scale
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {FOLLOWER_TIERS.map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setFollowers(tier)}
                    className={`rounded-md border py-2 px-3 text-center text-xs font-medium transition-colors ${
                      followers === tier
                        ? "border-star-white bg-star-white text-void font-bold"
                        : "border-star-white/15 text-silver hover:border-star-white/40 hover:text-star-white"
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
                className="text-xs font-semibold uppercase tracking-wider text-silver"
              >
                Direct Email
              </label>
              <div className="border-b border-star-white/20 focus-within:border-star-white transition-colors">
                <input
                  id="creator-email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full bg-transparent py-2.5 text-base text-star-white placeholder:text-silver/40 outline-none"
                />
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="rounded-md bg-star-white px-8 py-3.5 text-xs sm:text-sm font-bold text-void transition-colors hover:bg-star-white/90 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-star-white"
              >
                {submitting ? (
                  <span className="inline-flex items-center gap-2">
                    <SpinnerGap size={16} className="animate-spin" />
                    <span>Submitting Profile...</span>
                  </span>
                ) : (
                  "Submit Profile for Cohort Review"
                )}
              </button>

              <span className="text-[11px] text-silver/60">
                Weekly review • Direct response
              </span>
            </div>
          </motion.form>
        ) : (
          /* Confirmation State */
          <motion.div
            key="confirmed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-l-2 border-star-white pl-6 py-4 space-y-4"
          >
            <div className="flex items-center gap-2 text-star-white">
              <CheckCircle size={22} weight="bold" />
              <span className="text-xs uppercase tracking-widest font-bold">
                Application Received
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-star-white leading-tight">
              We received your submission for @{handle.replace(/^@/, "")}.
            </h3>

            <p className="text-sm text-silver leading-relaxed max-w-lg">
              Our team evaluates cohort fit weekly for the{" "}
              <span className="text-star-white font-bold">{niche}</span> category. We
              will reach out to{" "}
              <span className="text-star-white font-bold">{email}</span> as soon as
              your vertical opens.
            </p>

            <button
              type="button"
              onClick={resetForm}
              className="text-xs font-semibold text-star-white underline underline-offset-4 hover:text-silver pt-2 block"
            >
              Submit another handle
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
