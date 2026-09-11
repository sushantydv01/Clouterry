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

const FOLLOWER_TIERS = ["1k to 10k", "10k to 50k", "50k to 100k", "100k+"];

export default function CreatorApplicationForm() {
  const [handle, setHandle] = useState("");
  const [niche, setNiche] = useState("");
  const [followers, setFollowers] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const markTouched = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

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
    if (!email.trim() || !isValidEmail(email)) {
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
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
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
    setTouched({});
  };

  return (
    <div className="w-full max-w-xl text-cream">
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
              <h3 className="font-display text-2xl font-bold tracking-tight text-cream sm:text-3xl">
                Apply to join a cohort
              </h3>
              <p className="mt-1.5 text-sm text-cream/75">
                Reviewed weekly by our founding team. No spam, no exclusive locks.
              </p>
            </div>

            {errorMessage && (
              <div role="alert" className="border-l-2 border-cream pl-4 text-sm text-cream">
                {errorMessage}
              </div>
            )}

            {/* Field 1: Handle */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="creator-handle" className="text-sm text-cream/80">
                Your handle
              </label>
              <div
                className={`flex items-center border-b transition-colors duration-200 ${
                  touched.handle && !handle.trim() ? "border-cream" : "border-cream/35 focus-within:border-cream"
                }`}
              >
                <span className="mr-2 select-none text-base text-cream/50">@</span>
                <input
                  id="creator-handle"
                  name="handle"
                  type="text"
                  required
                  value={handle.replace(/^@/, "")}
                  onChange={(e) => setHandle(e.target.value)}
                  onBlur={() => markTouched("handle")}
                  placeholder="instagram or tiktok handle"
                  className="w-full bg-transparent py-2.5 text-base text-cream placeholder:text-cream/35 outline-none"
                />
                {handle.trim().length > 2 && <CheckCircle size={16} weight="bold" className="text-cream" />}
              </div>
            </div>

            {/* Field 2: Content Niche */}
            <div className="flex flex-col gap-2">
              <label htmlFor="creator-niche" className="text-sm text-cream/80">
                Primary vertical
              </label>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm">
                {NICHES.map((item, idx) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setNiche(item)}
                    className={`transition-colors duration-200 ${
                      niche === item ? "font-semibold text-cream underline underline-offset-4" : "text-cream/60 hover:text-cream"
                    }`}
                  >
                    {item}
                    {idx < NICHES.length - 1 ? <span className="ml-3 text-cream/25 select-none">/</span> : null}
                  </button>
                ))}
              </div>

              <div className="mt-1 border-b border-cream/35 transition-colors duration-200 focus-within:border-cream">
                <input
                  id="creator-niche"
                  name="niche"
                  type="text"
                  required
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  placeholder="Or enter your own"
                  className="w-full bg-transparent py-2 text-sm text-cream placeholder:text-cream/35 outline-none"
                />
              </div>
            </div>

            {/* Field 3: Follower Range */}
            <div className="flex flex-col gap-2">
              <span className="text-sm text-cream/80">Audience scale</span>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {FOLLOWER_TIERS.map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setFollowers(tier)}
                    className={`btn-press rounded-md border py-2 px-3 text-center text-sm font-medium transition-colors duration-200 cursor-pointer ${
                      followers === tier
                        ? "border-cream bg-cream text-red font-semibold"
                        : "border-cream/30 text-cream/70 hover:border-cream/60 hover:text-cream"
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            {/* Field 4: Contact Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="creator-email" className="text-sm text-cream/80">
                Direct email
              </label>
              <div
                className={`flex items-center border-b transition-colors duration-200 ${
                  touched.email && email && !isValidEmail(email) ? "border-cream" : "border-cream/35 focus-within:border-cream"
                }`}
              >
                <input
                  id="creator-email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => markTouched("email")}
                  placeholder="you@domain.com"
                  className="w-full bg-transparent py-2.5 text-base text-cream placeholder:text-cream/35 outline-none"
                />
                {isValidEmail(email) && <CheckCircle size={16} weight="bold" className="text-cream" />}
              </div>
              {touched.email && email && !isValidEmail(email) && (
                <span className="mt-1 text-sm text-cream/80">Please enter a valid email address.</span>
              )}
            </div>

            {/* Submit CTA */}
            <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={submitting}
                className="btn-press rounded-md bg-cream px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-red transition-colors duration-200 hover:bg-yellow hover:text-ink disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-yellow cursor-pointer shadow-sm"
              >
                {submitting ? (
                  <span className="inline-flex items-center gap-2">
                    <SpinnerGap size={16} className="animate-spin" />
                    <span>Submitting</span>
                  </span>
                ) : (
                  "Submit for cohort review"
                )}
              </button>

              <span className="text-sm text-cream/60">Weekly review, direct response</span>
            </div>
          </motion.form>
        ) : (
          /* Success State */
          <motion.div
            key="confirmed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-5 py-4"
          >
            <CheckCircle size={32} weight="bold" className="text-cream" />

            <h3 className="font-display text-2xl font-bold leading-tight text-cream sm:text-3xl">
              We received your submission for @{handle.replace(/^@/, "")}.
            </h3>

            <p className="max-w-lg text-base leading-relaxed text-cream/80">
              Our team evaluates cohort fit weekly for the {niche} category. We will reach out to{" "}
              <span className="font-semibold text-cream">{email}</span> as soon as your vertical opens.
            </p>

            <button
              type="button"
              onClick={resetForm}
              className="block pt-2 text-sm font-medium text-cream/70 hover:text-cream hover:underline hover:underline-offset-4"
            >
              Submit another handle
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
