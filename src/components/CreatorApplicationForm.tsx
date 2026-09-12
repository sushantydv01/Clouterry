"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  SpinnerGap,
  Sparkle,
  InstagramLogo,
  TiktokLogo,
  YoutubeLogo,
  LinkSimple,
  ShieldCheck,
  Check,
} from "@phosphor-icons/react";

const PLATFORMS = [
  { id: "instagram", label: "Instagram", icon: InstagramLogo },
  { id: "tiktok", label: "TikTok", icon: TiktokLogo },
  { id: "youtube", label: "YouTube Shorts", icon: YoutubeLogo },
];

const NICHES = [
  { id: "beauty", label: "Beauty & Rituals", badge: "Acoustic / Macro" },
  { id: "culinary", label: "Artisanal Culinary", badge: "Cast-Iron / Terroir" },
  { id: "workspaces", label: "Workspaces & Tech", badge: "Mechanical / EDC" },
  { id: "movement", label: "Movement & Form", badge: "Kinetic / Mobility" },
  { id: "design", label: "Fashion & Design", badge: "Capsule / Editorial" },
];

const AUDIENCE_TIERS = [
  { id: "1k-10k", range: "1k to 10k", label: "Micro / High Retention", rateEstimate: "Sprint Ready" },
  { id: "10k-50k", range: "10k to 50k", label: "Core Cohort Tier", rateEstimate: "High Demand" },
  { id: "50k-100k", range: "50k to 100k", label: "Established Voice", rateEstimate: "Anchor Squad" },
  { id: "100k+", range: "100k+", label: "Authority Scale", rateEstimate: "Lead Creator" },
];

export default function CreatorApplicationForm() {
  const [platform, setPlatform] = useState("tiktok");
  const [handle, setHandle] = useState("");
  const [niche, setNiche] = useState("Beauty & Rituals");
  const [followers, setFollowers] = useState("10k to 50k");
  const [sampleLink, setSampleLink] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState("CLT-782419");
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
    if (!email.trim() || !isValidEmail(email)) {
      setErrorMessage("Please provide a valid contact email.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          platform,
          handle: handle.replace(/^@/, ""),
          niche,
          followers,
          sampleLink,
          email,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Submission failed");
      }

      setRefCode(`CLT-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setHandle("");
    setSampleLink("");
    setEmail("");
    setSubmitted(false);
    setErrorMessage(null);
    setTouched({});
  };

  return (
    <div className="w-full max-w-xl text-cream">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key="application-card"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-cream/25 bg-red-deep/75 p-6 sm:p-8 backdrop-blur-md shadow-xl"
          >
            {/* Header with status badge */}
            <div className="flex items-center justify-between border-b border-cream/15 pb-5">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-gold">
                  <Sparkle size={13} weight="fill" />
                  <span>Cohort Talent Intake</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-cream mt-1">
                  Apply for the Next Cycle
                </h3>
              </div>
              <span className="rounded-md border border-cream/20 bg-cream/10 px-2.5 py-1 text-[11px] font-mono text-cream/80">
                14-Day Wire
              </span>
            </div>

            {errorMessage && (
              <div
                role="alert"
                className="mt-4 rounded-md border border-cream/30 bg-cream/15 p-3 text-xs font-semibold text-cream"
              >
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-6">
              {/* 01. Platform Selection */}
              <div>
                <label className="text-xs font-mono font-semibold uppercase tracking-wider text-cream/70 block mb-2">
                  01 / Primary Platform
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {PLATFORMS.map((p) => {
                    const Icon = p.icon;
                    const isSelected = platform === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPlatform(p.id)}
                        className={`btn-press flex items-center justify-center gap-2 rounded-lg border py-2.5 px-3 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "border-cream bg-cream text-red shadow-sm"
                            : "border-cream/20 bg-red/30 text-cream/80 hover:border-cream/50 hover:text-cream"
                        }`}
                      >
                        <Icon size={16} weight="bold" />
                        <span>{p.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 02. Handle Input with Live Preview Card */}
              <div>
                <label htmlFor="creator-handle" className="text-xs font-mono font-semibold uppercase tracking-wider text-cream/70 block mb-2">
                  02 / Creator Handle
                </label>
                <div
                  className={`flex items-center rounded-lg border bg-red/40 px-3.5 py-2.5 transition-all duration-200 focus-within:border-gold focus-within:ring-1 focus-within:ring-gold ${
                    touched.handle && !handle.trim()
                      ? "border-cream ring-1 ring-cream"
                      : "border-cream/25"
                  }`}
                >
                  <span className="mr-1.5 select-none font-mono text-sm text-cream/50">@</span>
                  <input
                    id="creator-handle"
                    name="handle"
                    type="text"
                    required
                    value={handle.replace(/^@/, "")}
                    onChange={(e) => setHandle(e.target.value)}
                    onBlur={() => markTouched("handle")}
                    placeholder="e.g. alex.visuals"
                    className="w-full bg-transparent text-sm font-semibold text-cream placeholder:text-cream/35 outline-none font-body"
                  />
                  {handle.trim().length > 2 && (
                    <CheckCircle size={16} weight="fill" className="text-gold shrink-0" />
                  )}
                </div>

                {/* Real-time preview badge */}
                {handle.trim().length > 1 && (
                  <div className="mt-2 flex items-center gap-2 text-[11px] font-mono text-cream/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    <span>Selected: @{handle.replace(/^@/, "")} on {platform.toUpperCase()}</span>
                  </div>
                )}
              </div>

              {/* 03. Primary Vertical Chips */}
              <div>
                <label className="text-xs font-mono font-semibold uppercase tracking-wider text-cream/70 block mb-2">
                  03 / Cultural Vertical
                </label>
                <div className="flex flex-wrap gap-2">
                  {NICHES.map((n) => {
                    const isSelected = niche === n.label;
                    return (
                      <button
                        key={n.id}
                        type="button"
                        onClick={() => setNiche(n.label)}
                        className={`btn-press inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "border-gold bg-gold/20 text-cream font-bold"
                            : "border-cream/20 bg-red/20 text-cream/75 hover:border-cream/50 hover:text-cream"
                        }`}
                      >
                        {isSelected && <Check size={12} weight="bold" className="text-gold" />}
                        <span>{n.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 04. Audience Scale Tiles */}
              <div>
                <label className="text-xs font-mono font-semibold uppercase tracking-wider text-cream/70 block mb-2">
                  04 / Audience Reach
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {AUDIENCE_TIERS.map((tier) => {
                    const isSelected = followers === tier.range;
                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setFollowers(tier.range)}
                        className={`btn-press flex flex-col p-2.5 rounded-lg border text-left transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "border-cream bg-cream text-red font-bold shadow-sm"
                            : "border-cream/20 bg-red/20 text-cream/75 hover:border-cream/50 hover:text-cream"
                        }`}
                      >
                        <span className="font-display text-xs font-bold">{tier.range}</span>
                        <span className={`text-[10px] mt-0.5 ${isSelected ? "text-red/80" : "text-cream/50"}`}>
                          {tier.rateEstimate}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 05. Sample Video or Reel URL (Optional but High-Craft) */}
              <div>
                <label htmlFor="creator-sample" className="text-xs font-mono font-semibold uppercase tracking-wider text-cream/70 block mb-2">
                  05 / Best Sample Video or Reel Link <span className="text-cream/40 normal-case">(optional)</span>
                </label>
                <div className="flex items-center rounded-lg border border-cream/25 bg-red/40 px-3.5 py-2.5 focus-within:border-gold focus-within:ring-1 focus-within:ring-gold">
                  <LinkSimple size={15} className="mr-2 text-cream/50 shrink-0" />
                  <input
                    id="creator-sample"
                    name="sampleLink"
                    type="url"
                    value={sampleLink}
                    onChange={(e) => setSampleLink(e.target.value)}
                    placeholder="https://tiktok.com/@... or instagram.com/reel/..."
                    className="w-full bg-transparent text-xs text-cream placeholder:text-cream/35 outline-none font-body"
                  />
                </div>
              </div>

              {/* 06. Contact Email */}
              <div>
                <label htmlFor="creator-email" className="text-xs font-mono font-semibold uppercase tracking-wider text-cream/70 block mb-2">
                  06 / Contact Email <span className="text-cream/40 normal-case">(for brief notifications)</span>
                </label>
                <div
                  className={`flex items-center rounded-lg border bg-red/40 px-3.5 py-2.5 transition-all duration-200 focus-within:border-gold focus-within:ring-1 focus-within:ring-gold ${
                    touched.email && email && !isValidEmail(email)
                      ? "border-cream ring-1 ring-cream"
                      : "border-cream/25"
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
                    placeholder="creator@studio.com"
                    className="w-full bg-transparent text-sm font-semibold text-cream placeholder:text-cream/35 outline-none font-body"
                  />
                  {isValidEmail(email) && (
                    <CheckCircle size={16} weight="fill" className="text-gold shrink-0" />
                  )}
                </div>
              </div>

              {/* Submit CTA with Guarantees */}
              <div className="pt-2 border-t border-cream/15">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-press group flex w-full items-center justify-center gap-2 rounded-md bg-cream py-4 px-6 text-xs font-bold uppercase tracking-wider text-red hover:bg-cream-dim disabled:opacity-60 transition-all duration-200 cursor-pointer shadow-md"
                >
                  {submitting ? (
                    <span className="inline-flex items-center gap-2">
                      <SpinnerGap size={16} className="animate-spin" />
                      <span>Transmitting Dossier</span>
                    </span>
                  ) : (
                    <span>Submit Application for Cohort Review</span>
                  )}
                </button>

                <div className="mt-3 flex items-center justify-between text-[11px] text-cream/60 font-mono">
                  <span>Weekly Founder Review</span>
                  <span>Direct Reply Within 7 Days</span>
                </div>
              </div>
            </form>
          </motion.div>
        ) : (
          /* Confirmation State */
          <motion.div
            key="confirmed"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-gold/40 bg-red-deep/90 p-8 sm:p-10 shadow-2xl space-y-6"
          >
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gold/20 text-gold mb-2">
              <CheckCircle size={28} weight="fill" />
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-gold font-bold">
                Application Received // In Queue
              </span>
              <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold leading-tight text-cream">
                We received your dossier for @{handle.replace(/^@/, "")}.
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-cream/85 font-body">
              Our creative team is evaluating cohort fit for the <strong className="text-cream">{niche}</strong> vertical.
              We will send your cohort invitation and campaign terms to <strong className="text-cream">{email}</strong>.
            </p>

            <div className="rounded-lg border border-cream/20 bg-red/40 p-4 space-y-2 text-xs text-cream/80 font-body">
              <div className="flex items-center gap-2 text-gold font-bold font-mono">
                <ShieldCheck size={14} weight="bold" />
                <span>WHAT TO EXPECT NEXT</span>
              </div>
              <ul className="space-y-1 pl-4 list-disc text-cream/75">
                <li>Review takes place this Friday by our founding partners.</li>
                <li>When an aligned brand brief opens, you receive a direct invitation with fixed upfront compensation.</li>
                <li>14-day guaranteed payment upon deliverable signoff. Zero exclusive lock-ins.</li>
              </ul>
            </div>

            <div className="pt-2 border-t border-cream/15 flex items-center justify-between">
              <button
                type="button"
                onClick={resetForm}
                className="btn-press text-xs font-mono text-cream/60 hover:text-cream underline underline-offset-4 cursor-pointer"
              >
                Submit another handle
              </button>

              <span className="font-mono text-[10px] text-cream/40 uppercase">
                Ref: {refCode}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
