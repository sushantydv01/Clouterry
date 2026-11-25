"use client";

import React, { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import StickerMark from "@/components/illustrations/StickerMark";
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
    <div className="flex flex-col min-h-screen bg-[#171717] text-[#F8F6EF]">
      <Container>
        <PageHeader
          badge="Connect"
          eyebrow="Initiate an Engagement"
          title="Start a project briefing."
          description="We partner with a limited roster each quarter. Share your organization, timeline, and current digital presence challenges."
        />
      </Container>

      <Section background="charcoal" padding="tight">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start max-w-5xl mx-auto">
          {/* Left Column: Authentic Studio Presence & Engagement Info */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden border border-[#F8F6EF]/14 bg-[#1E1E20]">
              <Image
                src="/images/editorial/atelier-hero.webp"
                alt="Architectural floorplans and drafting instruments on sunlit studio desk"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-2xl font-bold text-[#F8F6EF] tracking-tight">
                  Senior Partner Review
                </h2>
                <StickerMark name="s09-09-paper-plane" size={24} />
              </div>
              <p className="text-sm text-[#C4C1B8] leading-relaxed font-sans">
                For institutional RFP invitations, consultations, or digital presence diagnostics, initiate a direct briefing using the gateway.
              </p>
            </div>

            <div className="divide-y divide-[#F8F6EF]/10 border-y border-[#F8F6EF]/10 text-xs">
              <div className="py-3 flex justify-between gap-4">
                <span className="text-[#9C9990] font-mono uppercase">Routing</span>
                <span className="text-[#F8F6EF] font-medium">Direct Partner Review</span>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <span className="text-[#9C9990] font-mono uppercase">Model</span>
                <span className="text-[#F8F6EF] font-medium">Fixed 4-Stage Sprint Cadence</span>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-[#F8F6EF]/12 bg-[#1E1E20] text-left">
              <div className="flex items-start gap-2.5">
                <Info size={16} className="text-[#F4CF55] shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed text-[#C4C1B8]">
                  <strong className="text-[#F8F6EF]">Status Notice:</strong> The direct outbound mail relay is undergoing configuration. Submitting verifies validation and preserves your briefing safely.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Briefing Form */}
          <div className="lg:col-span-7">
            {status === "delivered" ? (
              <div
                role="status"
                aria-live="polite"
                className="atelier-surface p-8 sm:p-10 text-center space-y-4"
              >
                <div className="h-12 w-12 rounded-full bg-[#A6D8A1] text-[#171717] flex items-center justify-center mx-auto mb-2 font-bold">
                  <Check size={24} className="stroke-[3]" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8F6EF]">
                  Briefing Received
                </h3>
                <p className="text-sm text-[#C4C1B8] leading-relaxed max-w-md mx-auto">
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
                  className="mt-4 firm-btn-secondary text-xs px-5 py-2.5"
                >
                  Submit another briefing
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="atelier-surface p-6 sm:p-8 text-left space-y-5"
              >
                {status === "unconfigured" && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="p-4 rounded-xl border border-[#F4CF55]/40 bg-[#F4CF55]/10 flex items-start gap-3"
                  >
                    <Info size={18} className="text-[#F4CF55] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display text-sm font-bold text-[#F8F6EF]">
                        Briefing Service Notice
                      </h4>
                      <p className="mt-1 text-xs text-[#C4C1B8] font-sans leading-relaxed">
                        {statusMessage}
                      </p>
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="p-4 rounded-xl border border-[#ED83A8]/45 bg-[#ED83A8]/10 flex items-start gap-3"
                  >
                    <AlertCircle size={18} className="text-[#ED83A8] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display text-sm font-bold text-[#F8F6EF]">
                        Submission Incomplete
                      </h4>
                      <p className="mt-1 text-xs text-[#C4C1B8] font-sans leading-relaxed">
                        {statusMessage}
                      </p>
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#F8F6EF] mb-1.5">
                    Your Name <span className="text-[#ED83A8]">*</span>
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
                      if (fieldErrors.name) setFieldErrors((prev) => ({ ...prev, name: "" }));
                    }}
                    placeholder="Jane Doe"
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={fieldErrors.name ? "name-error" : undefined}
                    className={`w-full min-h-[46px] rounded-xl border ${
                      fieldErrors.name ? "border-[#ED83A8] bg-[#ED83A8]/10" : "border-[#F8F6EF]/15 bg-[#121214]"
                    } px-4 py-3 text-base sm:text-sm text-[#F8F6EF] placeholder:text-[#9C9990] focus:border-[#ED83A8] focus:outline-none transition-colors disabled:opacity-50`}
                  />
                  {fieldErrors.name && (
                    <p id="name-error" className="mt-1 text-xs text-[#ED83A8]">
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#F8F6EF] mb-1.5">
                    Official Email <span className="text-[#ED83A8]">*</span>
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
                      if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: "" }));
                    }}
                    placeholder="jane@organization.com"
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={fieldErrors.email ? "email-error" : undefined}
                    className={`w-full min-h-[46px] rounded-xl border ${
                      fieldErrors.email ? "border-[#ED83A8] bg-[#ED83A8]/10" : "border-[#F8F6EF]/15 bg-[#121214]"
                    } px-4 py-3 text-base sm:text-sm text-[#F8F6EF] placeholder:text-[#9C9990] focus:border-[#ED83A8] focus:outline-none transition-colors disabled:opacity-50`}
                  />
                  {fieldErrors.email && (
                    <p id="email-error" className="mt-1 text-xs text-[#ED83A8]">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="organization" className="block text-xs font-semibold text-[#F8F6EF] mb-1.5">
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
                    className="w-full min-h-[46px] rounded-xl border border-[#F8F6EF]/15 bg-[#121214] px-4 py-3 text-base sm:text-sm text-[#F8F6EF] placeholder:text-[#9C9990] focus:border-[#ED83A8] focus:outline-none transition-colors disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="division" className="block text-xs font-semibold text-[#F8F6EF] mb-1.5">
                    Primary Service Focus
                  </label>
                  <select
                    id="division"
                    name="division"
                    disabled={status === "submitting"}
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                    className="w-full min-h-[46px] rounded-xl border border-[#F8F6EF]/15 bg-[#121214] px-4 py-3 text-base sm:text-sm text-[#F8F6EF] focus:border-[#ED83A8] focus:outline-none transition-colors disabled:opacity-50"
                  >
                    {DIVISIONS.map((d) => (
                      <option key={d} value={d} className="bg-[#1E1E20] text-[#F8F6EF]">
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#F8F6EF] mb-1.5">
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
                    className="w-full rounded-xl border border-[#F8F6EF]/15 bg-[#121214] p-4 text-base sm:text-sm text-[#F8F6EF] placeholder:text-[#9C9990] focus:border-[#ED83A8] focus:outline-none transition-colors disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="firm-btn-primary w-full py-3.5 text-sm sm:text-base flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Transmitting briefing...</span>
                    </>
                  ) : (
                    <>
                      <span>Start a project</span>
                      <ArrowUpRight size={15} className="stroke-[2.25]" />
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
