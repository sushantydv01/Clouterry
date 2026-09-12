"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AgencyTicker from "@/components/AgencyTicker";
import {
  Sparkle,
  CheckCircle,
  SpinnerGap,
  Clock,
  EnvelopeSimple,
  CalendarCheck,
  ArrowUpRight,
} from "@phosphor-icons/react";

const INQUIRY_TYPES = [
  { id: "brand", label: "Brand Campaign Sprint", desc: "Launch a 14-day cohort campaign" },
  { id: "creator", label: "Creator Cohort Support", desc: "Questions about applications or payouts" },
  { id: "press", label: "Press & Strategic", desc: "Interviews, speaking, or platform partnerships" },
];

const BUDGET_RANGES = [
  "Sprint Pilot ($3,500 - $7,500)",
  "Multi-Cohort Campaign ($8,000 - $15,000)",
  "Always-On Retainer ($15,000+)",
  "Just Exploring / Custom",
];

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState("brand");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState(BUDGET_RANGES[0]);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate brief submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="flex min-h-screen flex-col bg-cream text-ink selection:bg-gold selection:text-ink">
      <Navigation tone="cream" />

      <main className="flex-1">
        {/* Header */}
        <section className="px-6 pt-16 pb-12 sm:px-10 sm:pt-24 sm:pb-16 lg:px-16 border-b border-ink/10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream-dim/80 px-3.5 py-1 text-xs font-semibold text-ink mb-5">
              <Sparkle size={13} weight="fill" className="text-red" />
              <span>Direct Studio Access</span>
            </div>

            <h1 className="font-display text-4xl font-extrabold tracking-[-0.04em] text-ink sm:text-6xl md:text-7xl">
              Initiate a brief.
              <br />
              Or just say hello.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-ink/75 font-body leading-relaxed">
              We respond to every qualified brand and creator inquiry within 4 business hours. No gatekeeping,
              no endless agency discovery loops.
            </p>
          </div>
        </section>

        {/* Main Content Grid: Form + Studio Details */}
        <section className="px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-6xl grid gap-16 lg:grid-cols-12 lg:items-start">
            {/* Left Column: Direct Studio Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-red font-bold block mb-2">
                  Operating Protocol
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                  Direct founder communication.
                </h2>
                <p className="mt-3 text-sm sm:text-base text-ink/80 font-body leading-relaxed">
                  When you message Clouterry, your inquiry goes directly to the creative directors and founding
                  partners managing active cohorts, not an offshore junior coordinator.
                </p>
              </div>

              {/* Service Level Guarantees */}
              <div className="rounded-xl border border-ink/15 bg-cream-dim/70 p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-red/10 text-red shrink-0">
                    <Clock size={20} weight="bold" />
                  </div>
                  <div>
                    <span className="font-display text-sm font-bold text-ink block">4-Hour Response SLA</span>
                    <span className="text-xs text-ink/70 font-body">During active London & New York market hours</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-t border-ink/10 pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-red/10 text-red shrink-0">
                    <EnvelopeSimple size={20} weight="bold" />
                  </div>
                  <div>
                    <span className="font-display text-sm font-bold text-ink block">Direct Studio Inbox</span>
                    <a
                      href="mailto:hello@clouterry.com"
                      className="text-xs font-mono font-semibold text-red hover:underline"
                    >
                      hello@clouterry.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-t border-ink/10 pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-red/10 text-red shrink-0">
                    <CalendarCheck size={20} weight="bold" />
                  </div>
                  <div>
                    <span className="font-display text-sm font-bold text-ink block">Prefer a 15-Min Call?</span>
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-red hover:underline"
                    >
                      <span>Open Live Founder Calendar</span>
                      <ArrowUpRight size={11} weight="bold" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Studio Coordinates */}
              <div className="space-y-2 text-xs font-mono text-ink/70">
                <div className="font-bold text-ink uppercase tracking-wider text-[11px]">
                  Studio Coordinates
                </div>
                <p>Distributed Studio // London (Soho) &bull; New York (Manhattan) &bull; Remote</p>
                <p className="text-ink/50">All campaigns executed on guaranteed 14-day turnaround.</p>
              </div>
            </div>

            {/* Right Column: Interactive Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-ink/20 bg-cream-dim/60 p-7 sm:p-10 shadow-sm backdrop-blur-xs">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Inquiry Type Radio / Segmented buttons */}
                    <div>
                      <label className="font-mono text-xs font-semibold uppercase tracking-wider text-ink/70 block mb-2">
                        01 / Select Inquiry Nature
                      </label>
                      <div className="grid gap-2 sm:grid-cols-3">
                        {INQUIRY_TYPES.map((type) => {
                          const isSelected = inquiryType === type.id;
                          return (
                            <button
                              key={type.id}
                              type="button"
                              onClick={() => setInquiryType(type.id)}
                              className={`btn-press flex flex-col p-3 rounded-lg border text-left transition-all duration-200 cursor-pointer ${
                                isSelected
                                  ? "border-red bg-red text-cream shadow-xs"
                                  : "border-ink/20 bg-cream text-ink hover:border-ink/50"
                              }`}
                            >
                              <span className="font-display text-xs font-bold">{type.label}</span>
                              <span className={`text-[10px] mt-0.5 ${isSelected ? "text-cream/80" : "text-ink/60"}`}>
                                {type.desc}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-name" className="font-mono text-xs font-semibold uppercase tracking-wider text-ink/70 block mb-1.5">
                          Your Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Jordan Hayes"
                          className="w-full rounded-md border border-ink/25 bg-cream px-3.5 py-2.5 text-sm font-body text-ink outline-none focus:border-red focus:ring-1 focus:ring-red"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="font-mono text-xs font-semibold uppercase tracking-wider text-ink/70 block mb-1.5">
                          Business Email
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="jordan@brand.com"
                          className="w-full rounded-md border border-ink/25 bg-cream px-3.5 py-2.5 text-sm font-body text-ink outline-none focus:border-red focus:ring-1 focus:ring-red"
                        />
                      </div>
                    </div>

                    {/* Company / Brand Name */}
                    {inquiryType === "brand" && (
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="contact-company" className="font-mono text-xs font-semibold uppercase tracking-wider text-ink/70 block mb-1.5">
                            Company or Brand
                          </label>
                          <input
                            id="contact-company"
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="e.g. Ritual Skincare"
                            className="w-full rounded-md border border-ink/25 bg-cream px-3.5 py-2.5 text-sm font-body text-ink outline-none focus:border-red focus:ring-1 focus:ring-red"
                          />
                        </div>

                        <div>
                          <label htmlFor="contact-budget" className="font-mono text-xs font-semibold uppercase tracking-wider text-ink/70 block mb-1.5">
                            Target Campaign Budget
                          </label>
                          <select
                            id="contact-budget"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            className="w-full rounded-md border border-ink/25 bg-cream px-3.5 py-2.5 text-sm font-body text-ink outline-none focus:border-red focus:ring-1 focus:ring-red"
                          >
                            {BUDGET_RANGES.map((b) => (
                              <option key={b} value={b}>
                                {b}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Message / Brief Details */}
                    <div>
                      <label htmlFor="contact-message" className="font-mono text-xs font-semibold uppercase tracking-wider text-ink/70 block mb-1.5">
                        Campaign Goals or Questions
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us what you want to create, target deliverables, or specific cohort verticals..."
                        className="w-full rounded-md border border-ink/25 bg-cream px-3.5 py-2.5 text-sm font-body text-ink outline-none focus:border-red focus:ring-1 focus:ring-red resize-none"
                      />
                    </div>

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-press group flex w-full items-center justify-center gap-2 rounded-md bg-red py-4 px-6 text-xs font-bold uppercase tracking-wider text-cream hover:bg-red-deep disabled:opacity-60 transition-all duration-200 cursor-pointer shadow-sm"
                    >
                      {submitting ? (
                        <span className="inline-flex items-center gap-2">
                          <SpinnerGap size={16} className="animate-spin" />
                          <span>Sending Inquiry</span>
                        </span>
                      ) : (
                        <span>Transmit Studio Inquiry</span>
                      )}
                    </button>

                    <p className="text-center text-xs text-ink/60 font-body">
                      We never share client data. Direct reply within 4 business hours.
                    </p>
                  </form>
                ) : (
                  /* Success State */
                  <div className="py-8 text-center space-y-5">
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-red/10 text-red mb-2">
                      <CheckCircle size={32} weight="fill" />
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                      Inquiry received. Thank you, {name || "there"}.
                    </h3>

                    <p className="max-w-md mx-auto text-sm text-ink/80 font-body leading-relaxed">
                      Our founding partners have received your message and will reply to{" "}
                      <strong className="text-ink">{email}</strong> within 4 business hours.
                    </p>

                    <div className="pt-4 border-t border-ink/10">
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setMessage("");
                        }}
                        className="btn-press text-xs font-mono text-red font-bold uppercase tracking-wider hover:underline"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <AgencyTicker tone="cream" />
      </main>

      <Footer />
    </div>
  );
}
