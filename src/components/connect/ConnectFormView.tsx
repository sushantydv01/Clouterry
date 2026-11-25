"use client";

import React, { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { ArrowUpRight, Check, AlertCircle, Info, Loader2 } from "lucide-react";

const DIVISIONS = [
  "Complete Digital Presence (All Divisions)",
  "Brand & Identity System",
  "Web & Technology Platform",
  "Social Media & Editorial Content",
  "Marketing & Inbound Visibility",
  "School / Academy Presence Architecture",
  "Digital Management & Advisory",
];

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export default function ConnectFormView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [division, setDivision] = useState(DIVISIONS[0]);
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<"idle" | "submitting" | "delivered" | "unconfigured" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validateFrontend = (): boolean => {
    const errors: Record<string, string> = {};
    if (!name.trim()) {
      errors.name = "Please provide your full name.";
    }
    if (!email.trim()) {
      errors.email = "Please provide your official email address.";
    } else if (!EMAIL_REGEX.test(email.trim())) {
      errors.email = "Please provide a valid, well-formed email address.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    if (!validateFrontend()) {
      setStatus("error");
      setStatusMessage("Please correct the highlighted validation errors.");
      return;
    }

    setStatus("submitting");
    setStatusMessage("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          organization: organization.trim(),
          division,
          message: message.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.status === 200 && data.success) {
        setStatus("delivered");
        setStatusMessage(
          data.message ||
            "Your project briefing has been successfully transmitted and logged. A senior partner will review your requirements."
        );
      } else if (response.status === 503 || data.status === "UNCONFIGURED") {
        setStatus("unconfigured");
        setStatusMessage(
          data.message ||
            "The online project briefing service is currently undergoing infrastructure configuration. Direct online transmission is not yet active. Your briefing details have been preserved below so no information is lost."
        );
      } else if (response.status === 400 && data.fieldErrors) {
        setStatus("error");
        setFieldErrors(data.fieldErrors);
        setStatusMessage(data.message || "Please correct the highlighted fields.");
      } else {
        setStatus("error");
        setStatusMessage(
          data.message || "Unable to process briefing submission at this time. Please try again shortly."
        );
      }
    } catch {
      setStatus("error");
      setStatusMessage(
        "A network communication error occurred while connecting to the briefing gateway. Your entries have been preserved below. Please try again."
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-white">
      <Container>
        <PageHeader
          badge="CONNECT"
          eyebrow="Initiate an Engagement"
          title="Start a project briefing."
          description="We partner with a limited client roster each quarter. Tell us about your organization, timeline, and current digital presence challenges."
        />
      </Container>

      <Section background="black" padding="tight">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Executive Partner Office
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                For institutional RFP invitations, executive consultations, or digital transformation diagnostics, initiate a briefing through our gateway.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-white/10 bg-[#18181B] space-y-3 text-xs">
              <div>
                <span className="text-xs text-white/50 block font-medium">Inquiry Routing</span>
                <span className="font-medium text-white/90">
                  Senior Partner Review
                </span>
              </div>
              <div className="pt-3 border-t border-white/10">
                <span className="text-xs text-white/50 block font-medium">Practice Scope</span>
                <span className="text-white/80 font-medium">Independent Practice · Global Delivery</span>
              </div>
              <div className="pt-3 border-t border-white/10">
                <span className="text-xs text-white/50 block font-medium">Engagement Model</span>
                <span className="text-white/80 font-medium">Fixed 4-Stage Cadence · Zero Billable Hour Overruns</span>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-[#141416] text-left">
              <div className="flex items-start gap-2.5">
                <Info size={16} className="text-[#FF90E8] shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed text-white/70">
                  <strong>Status Notice:</strong> The direct email gateway is currently undergoing production configuration. Submitting this form tests real-time connection status and preserves your entries safely.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Briefing Form */}
          <div className="lg:col-span-7">
            {status === "delivered" ? (
              <div
                role="status"
                aria-live="polite"
                className="gumroad-card p-8 sm:p-10 text-center border-white/10 space-y-4"
              >
                <div className="h-12 w-12 rounded-full bg-[#10B981] text-black flex items-center justify-center mx-auto mb-2 font-bold shadow-lg">
                  <Check size={24} className="stroke-[3]" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Briefing Received
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-md mx-auto">
                  Thank you, {name}. {statusMessage}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setName("");
                    setEmail("");
                    setOrganization("");
                    setMessage("");
                  }}
                  className="mt-4 gumroad-btn-secondary text-xs px-5 py-2.5"
                >
                  Submit another briefing
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="gumroad-card p-6 sm:p-8 border-white/10 text-left space-y-5"
              >
                {/* Honest Notice for Unconfigured Service */}
                {status === "unconfigured" && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="p-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 flex items-start gap-3"
                  >
                    <Info size={18} className="text-yellow-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display text-sm font-bold text-white">
                        Briefing Service Notice
                      </h4>
                      <p className="mt-1 text-xs text-white/80 font-sans leading-relaxed">
                        {statusMessage}
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Banner */}
                {status === "error" && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="p-4 rounded-xl border border-red-500/30 bg-red-500/10 flex items-start gap-3"
                  >
                    <AlertCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display text-sm font-bold text-white">
                        Submission Incomplete
                      </h4>
                      <p className="mt-1 text-xs text-white/80 font-sans leading-relaxed">
                        {statusMessage}
                      </p>
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-white/80 mb-1.5">
                    Your Name <span className="text-[#FF90E8]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    disabled={status === "submitting"}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (fieldErrors.name) {
                        setFieldErrors((prev) => ({ ...prev, name: "" }));
                      }
                    }}
                    placeholder="Jane Doe"
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={fieldErrors.name ? "name-error" : undefined}
                    className={`w-full rounded-xl border ${
                      fieldErrors.name ? "border-red-500 bg-red-500/10" : "border-white/15 bg-[#141416]"
                    } px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#FF90E8] focus:outline-none transition-colors disabled:opacity-50`}
                  />
                  {fieldErrors.name && (
                    <p id="name-error" className="mt-1 text-[11px] text-red-400">
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-white/80 mb-1.5">
                    Official Email <span className="text-[#FF90E8]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={100}
                    disabled={status === "submitting"}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (fieldErrors.email) {
                        setFieldErrors((prev) => ({ ...prev, email: "" }));
                      }
                    }}
                    placeholder="jane@organization.com"
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={fieldErrors.email ? "email-error" : undefined}
                    className={`w-full rounded-xl border ${
                      fieldErrors.email ? "border-red-500 bg-red-500/10" : "border-white/15 bg-[#141416]"
                    } px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#FF90E8] focus:outline-none transition-colors disabled:opacity-50`}
                  />
                  {fieldErrors.email && (
                    <p id="email-error" className="mt-1 text-[11px] text-red-400">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="organization" className="block text-xs font-semibold text-white/80 mb-1.5">
                    Organization / Institution
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    maxLength={120}
                    disabled={status === "submitting"}
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Saint Jude Academy or Vance Legal"
                    className="w-full rounded-xl border border-white/15 bg-[#141416] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#FF90E8] focus:outline-none transition-colors disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="division" className="block text-xs font-semibold text-white/80 mb-1.5">
                    Primary Service Focus
                  </label>
                  <select
                    id="division"
                    name="division"
                    disabled={status === "submitting"}
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-[#141416] px-4 py-3 text-sm text-white focus:border-[#FF90E8] focus:outline-none transition-colors disabled:opacity-50"
                  >
                    {DIVISIONS.map((d) => (
                      <option key={d} value={d} className="bg-[#18181B] text-white">
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-white/80 mb-1.5">
                    Project Summary &amp; Objectives
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={2000}
                    disabled={status === "submitting"}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe your current digital presence, objectives, and target launch timeframe..."
                    className="w-full rounded-xl border border-white/15 bg-[#141416] p-4 text-sm text-white placeholder:text-white/40 focus:border-[#FF90E8] focus:outline-none transition-colors disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="gumroad-btn-pink w-full py-3.5 font-bold text-sm sm:text-base flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Transmitting briefing...</span>
                    </>
                  ) : (
                    <>
                      <span>Start a project</span>
                      <ArrowUpRight size={15} className="stroke-[2.5]" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
