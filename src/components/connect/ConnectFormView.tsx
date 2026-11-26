"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import StickerMark from "@/components/illustrations/StickerMark";
import { ArrowUpRight, Check, AlertCircle, Info, Loader2 } from "lucide-react";

const DIVISIONS = [
  "All Five Practices (Integrated)",
  "Brand & Identity System",
  "Web & Technology Platform",
  "Social Media & Editorial Content",
  "Marketing & Inbound Visibility",
  "School / Academy Architecture",
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

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

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

    if (errors.name) {
      nameRef.current?.focus();
    } else if (errors.email) {
      emailRef.current?.focus();
    }

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
      <Container size="wide">
        <PageHeader
          kicker="Initiate an Engagement"
          title="Start a project briefing."
          description="We work with a focused roster of organizations each quarter so founding designers and engineers stay directly responsible for your build."
        />
      </Container>

      <Section background="charcoal" containerSize="wide" padding="normal">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Studio Column (5 cols) */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#F8F6EF]/14 bg-[#1D1D20]">
              <Image
                src="/images/editorial/atelier-hero.webp"
                alt="Architectural floorplans and drafting instruments on sunlit FIRM studio desk"
                fill
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#F8F6EF] tracking-tight">
                  Senior Partner Review
                </h2>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F6EF]">
                  <StickerMark name="s09-09-paper-plane" size={20} />
                </span>
              </div>
              <p className="text-base text-[#D5D2C7] leading-relaxed font-sans">
                Share institutional RFPs, redesign diagnostics, or multi-discipline launch criteria directly through this intake form.
              </p>
            </div>

            <div className="divide-y divide-[#F8F6EF]/12 border-y border-[#F8F6EF]/12 text-sm">
              <div className="py-3.5 flex justify-between gap-4">
                <span className="text-[#ACA89E] font-sans">Reviewing partner</span>
                <span className="text-[#F8F6EF] font-medium">Direct Studio Partner</span>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <span className="text-[#ACA89E] font-sans">Sprint structure</span>
                <span className="text-[#F8F6EF] font-medium">Fixed 4-Stage Cadence</span>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <span className="text-[#ACA89E] font-sans">Repository ownership</span>
                <span className="text-[#F8F6EF] font-medium">100% Client Custody</span>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-[#F8F6EF]/14 bg-[#1D1D20] text-left">
              <div className="flex items-start gap-2.5">
                <Info size={17} className="text-[#F4CF55] shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed text-[#D5D2C7]">
                  <strong className="text-[#F8F6EF]">Status Notice:</strong> The direct outbound mail relay is currently undergoing environment configuration. Submitting verifies validation and preserves your briefing safely.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Surface (7 cols) */}
          <div className="lg:col-span-7">
            {status === "delivered" ? (
              <div
                role="status"
                aria-live="polite"
                className="atelier-surface p-8 sm:p-12 text-center space-y-5"
              >
                <div className="h-12 w-12 rounded-full bg-[#A6D8A1] text-[#171717] flex items-center justify-center mx-auto font-bold">
                  <Check size={24} className="stroke-[3]" />
                </div>
                <h2 className="font-display text-3xl font-medium text-[#F8F6EF]">
                  Briefing Received
                </h2>
                <p className="text-base text-[#D5D2C7] leading-relaxed max-w-md mx-auto">
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
                  className="firm-btn-secondary text-sm"
                >
                  Submit another briefing
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="atelier-surface p-6 sm:p-10 text-left space-y-6"
              >
                {status === "unconfigured" && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="p-4 rounded-xl border border-[#F4CF55]/45 bg-[#F4CF55]/12 flex items-start gap-3"
                  >
                    <Info size={18} className="text-[#F4CF55] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display text-sm font-medium text-[#F8F6EF]">
                        Briefing Service Notice
                      </h3>
                      <p className="mt-1 text-xs text-[#D5D2C7] font-sans leading-relaxed">
                        {statusMessage}
                      </p>
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="p-4 rounded-xl border border-[#ED83A8]/50 bg-[#ED83A8]/12 flex items-start gap-3"
                  >
                    <AlertCircle size={18} className="text-[#ED83A8] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display text-sm font-medium text-[#F8F6EF]">
                        Submission Incomplete
                      </h3>
                      <p className="mt-1 text-xs text-[#D5D2C7] font-sans leading-relaxed">
                        {statusMessage}
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#F8F6EF] mb-2">
                      Your Name <span className="text-[#ED83A8]">*</span>
                    </label>
                    <input
                      ref={nameRef}
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={100}
                      disabled={status === "submitting"}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (fieldErrors.name) setFieldErrors((prev) => ({ ...prev, name: "" }));
                      }}
                      placeholder="Hannah Lin…"
                      aria-invalid={!!fieldErrors.name}
                      aria-describedby={fieldErrors.name ? "name-error" : undefined}
                      className={`w-full min-h-[48px] rounded-xl border ${
                        fieldErrors.name ? "border-[#ED83A8] bg-[#ED83A8]/10" : "border-[#F8F6EF]/20 bg-[#121214]"
                      } px-4 py-3 text-base text-[#F8F6EF] placeholder:text-[#ACA89E] focus:border-[#ED83A8] transition-colors disabled:opacity-50`}
                    />
                    {fieldErrors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-[#ED83A8]">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#F8F6EF] mb-2">
                      Official Email <span className="text-[#ED83A8]">*</span>
                    </label>
                    <input
                      ref={emailRef}
                      id="email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      spellCheck={false}
                      required
                      maxLength={100}
                      disabled={status === "submitting"}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: "" }));
                      }}
                      placeholder="name@organization.org…"
                      aria-invalid={!!fieldErrors.email}
                      aria-describedby={fieldErrors.email ? "email-error" : undefined}
                      className={`w-full min-h-[48px] rounded-xl border ${
                        fieldErrors.email ? "border-[#ED83A8] bg-[#ED83A8]/10" : "border-[#F8F6EF]/20 bg-[#121214]"
                      } px-4 py-3 text-base text-[#F8F6EF] placeholder:text-[#ACA89E] focus:border-[#ED83A8] transition-colors disabled:opacity-50`}
                    />
                    {fieldErrors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-[#ED83A8]">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-[#F8F6EF] mb-2">
                      Organization / Institution
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      autoComplete="organization"
                      maxLength={120}
                      disabled={status === "submitting"}
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="School, clinic, firm, or venture…"
                      className="w-full min-h-[48px] rounded-xl border border-[#F8F6EF]/20 bg-[#121214] px-4 py-3 text-base text-[#F8F6EF] placeholder:text-[#ACA89E] focus:border-[#ED83A8] transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="division" className="block text-sm font-medium text-[#F8F6EF] mb-2">
                      Primary Focus
                    </label>
                    <select
                      id="division"
                      name="division"
                      disabled={status === "submitting"}
                      value={division}
                      onChange={(e) => setDivision(e.target.value)}
                      className="w-full min-h-[48px] rounded-xl border border-[#F8F6EF]/20 bg-[#121214] pl-4 pr-10 py-3 text-base text-[#F8F6EF] focus:border-[#ED83A8] transition-colors disabled:opacity-50 truncate"
                    >
                      {DIVISIONS.map((d) => (
                        <option key={d} value={d} className="bg-[#171717] text-[#F8F6EF]">
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#F8F6EF] mb-2">
                    Project Scope &amp; Objectives
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={2000}
                    disabled={status === "submitting"}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Outline your current digital presence challenges, target stakeholders, and preferred launch timeframe…"
                    className="w-full rounded-xl border border-[#F8F6EF]/20 bg-[#121214] p-4 text-base text-[#F8F6EF] placeholder:text-[#ACA89E] focus:border-[#ED83A8] transition-colors disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="firm-btn-primary w-full py-3.5 text-base flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={17} className="animate-spin" />
                      <span>Transmitting briefing…</span>
                    </>
                  ) : (
                    <>
                      <span>Start a project</span>
                      <ArrowUpRight size={16} className="stroke-[2]" />
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
