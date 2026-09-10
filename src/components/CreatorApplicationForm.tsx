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

  // Field-level validation state
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
    setTouched({});
  };

  return (
    <div className="w-full max-w-xl rounded-2xl liquid-glass p-8 sm:p-10 text-star-white relative overflow-hidden">
      {/* Subtle vermillion glow top corner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[radial-gradient(circle,_rgba(255,61,46,0.08),_transparent_70%)] blur-2xl"
      />

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 relative z-10"
          >
            <div>
              <div className="text-xs uppercase tracking-widest text-silver/60 font-semibold">
                Direct Cohort Application
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-star-white mt-1">
                Apply to Join a Cohort
              </h3>
              <p className="text-xs sm:text-sm text-silver/70 mt-1.5 leading-relaxed">
                Reviewed weekly by our founding team. No spam, zero exclusive talent locks.
              </p>
            </div>

            {/* Error message with shake animation */}
            <AnimatePresence>
              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: [0, -4, 4, -2, 2, 0] }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.4 }}
                  role="alert"
                  className="border-l-2 border-vermillion bg-space-deep/90 px-4 py-2.5 text-xs font-medium text-star-white"
                >
                  {errorMessage}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Field 1: Handle */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="creator-handle"
                className="text-xs font-semibold uppercase tracking-wider text-silver"
              >
                Your Handle
              </label>
              <div className={`relative flex items-center border-b transition-colors duration-300 ${
                touched.handle && !handle.trim()
                  ? "border-vermillion/60"
                  : "border-star-white/15 focus-within:border-vermillion"
              }`}>
                <span className="text-silver/40 font-medium text-base mr-2 select-none">
                  @
                </span>
                <input
                  id="creator-handle"
                  name="handle"
                  type="text"
                  required
                  value={handle.replace(/^@/, "")}
                  onChange={(e) => setHandle(e.target.value)}
                  onBlur={() => markTouched("handle")}
                  placeholder="instagram or tiktok handle"
                  className="w-full bg-transparent py-2.5 text-base text-star-white placeholder:text-silver/30 outline-none"
                />
                {/* Inline valid check */}
                {handle.trim().length > 2 && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-vermillion"
                  >
                    <CheckCircle size={16} weight="bold" />
                  </motion.span>
                )}
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
                <span className="text-[11px] text-silver/40">Select or enter below</span>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs">
                {NICHES.map((item, idx) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setNiche(item)}
                    className={`transition-all duration-300 text-left ${
                      niche === item
                        ? "text-vermillion font-bold underline underline-offset-4"
                        : "text-silver/60 hover:text-star-white"
                    }`}
                  >
                    {item}
                    {idx < NICHES.length - 1 ? (
                      <span className="ml-3 text-silver/20 select-none">/</span>
                    ) : null}
                  </button>
                ))}
              </div>

              <div className="border-b border-star-white/15 focus-within:border-vermillion transition-colors duration-300 mt-1">
                <input
                  id="creator-niche"
                  name="niche"
                  type="text"
                  required
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  placeholder="Or enter custom niche..."
                  className="w-full bg-transparent py-2 text-sm text-star-white placeholder:text-silver/30 outline-none"
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
                    className={`rounded-md border py-2 px-3 text-center text-xs font-medium transition-all duration-300 ${
                      followers === tier
                        ? "border-vermillion bg-vermillion/10 text-vermillion font-bold shadow-[0_0_12px_rgba(255,61,46,0.1)]"
                        : "border-star-white/10 text-silver/60 hover:border-star-white/30 hover:text-star-white"
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
              <div className={`relative flex items-center border-b transition-colors duration-300 ${
                touched.email && email && !isValidEmail(email)
                  ? "border-vermillion/60"
                  : "border-star-white/15 focus-within:border-vermillion"
              }`}>
                <input
                  id="creator-email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => markTouched("email")}
                  placeholder="you@domain.com"
                  className="w-full bg-transparent py-2.5 text-base text-star-white placeholder:text-silver/30 outline-none"
                />
                {/* Inline valid check */}
                {isValidEmail(email) && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-vermillion"
                  >
                    <CheckCircle size={16} weight="bold" />
                  </motion.span>
                )}
              </div>
              {/* Inline validation error */}
              {touched.email && email && !isValidEmail(email) && (
                <motion.span
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[11px] text-vermillion/80 mt-1"
                >
                  Please enter a valid email address
                </motion.span>
              )}
            </div>

            {/* Submit CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <button
                type="submit"
                data-cursor="cta"
                disabled={submitting}
                className="rounded-md bg-vermillion px-8 py-3.5 text-xs sm:text-sm font-bold text-star-white transition-all duration-300 hover:bg-vermillion-deep hover:shadow-[0_0_24px_rgba(255,61,46,0.3)] disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-vermillion"
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

              <span className="text-[11px] text-silver/50">
                Weekly review • Direct response
              </span>
            </div>
          </motion.form>
        ) : (
          /* ── Success State ── */
          <motion.div
            key="confirmed"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="py-4 space-y-5 relative z-10"
          >
            {/* Success check animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
              className="w-16 h-16 rounded-full bg-vermillion/10 border border-vermillion/30 flex items-center justify-center"
            >
              <CheckCircle size={32} weight="bold" className="text-vermillion" />
            </motion.div>

            <div>
              <div className="flex items-center gap-2 text-star-white mb-2">
                <span className="text-xs uppercase tracking-widest font-bold text-vermillion">
                  Application Received
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-star-white leading-tight">
                We received your submission for @{handle.replace(/^@/, "")}.
              </h3>
            </div>

            <p className="text-sm text-silver/70 leading-relaxed max-w-lg">
              Our team evaluates cohort fit weekly for the{" "}
              <span className="text-vermillion font-bold">{niche}</span> category. We
              will reach out to{" "}
              <span className="text-star-white font-bold">{email}</span> as soon as
              your vertical opens.
            </p>

            <button
              type="button"
              onClick={resetForm}
              className="text-xs font-semibold text-silver/60 hover:text-star-white transition-colors duration-300 pt-2 block group"
            >
              <span className="relative">
                Submit another handle
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-vermillion group-hover:w-full transition-all duration-300" />
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
