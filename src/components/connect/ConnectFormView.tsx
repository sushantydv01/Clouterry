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
            "Your project briefing has been successfully transmitted and logged. A senior partner will review your requirements within 24 business hours."
        );
      } else if (response.status === 503 || data.status === "UNCONFIGURED") {
        // Honest response when backend destination is not yet configured
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
    <div className="flex flex-col min-h-screen bg-[#F8F6EF]">
      <Container>
        <PageHeader
          badge="CONNECT"
          eyebrow="Initiate an Engagement"
          title="Start a project briefing."
          description="We work with a limited client roster each quarter. Tell us about your organization, timeline, and current presence challenges."
        />
      </Container>

      <Section background="cream">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 text-left">
            <span className="inline-block border border-[#171717] bg-[#ED83A8] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-[#171717] font-bold shadow-[2px_2px_0_0_#171717]">
              Direct Contact
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[#171717]">
              Executive Office
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#404040] leading-relaxed">
              For partner inquiries, institutional RFP invitations, or architectural consultations, connect through our intake gateway.
            </p>

            <div className="mt-6 p-5 border border-[#171717] bg-[#FFFFFF] shadow-[4px_4px_0_0_#171717] space-y-3 text-xs">
              <div>
                <span className="font-mono text-[10px] font-bold text-[#171717] block uppercase tracking-wider">Inquiry Routing</span>
                <span className="font-mono text-xs font-semibold text-[#171717]">
                  Executive Partner Intake (Infrastructure Setup In Progress)
                </span>
              </div>
              <div className="pt-3 border-t border-[#171717]">
                <span className="font-mono text-[10px] font-bold text-[#171717] block uppercase tracking-wider">Location</span>
                <span className="text-[#171717] font-medium">New York Studio &amp; Remote Delivery</span>
              </div>
              <div className="pt-3 border-t border-[#171717]">
                <span className="font-mono text-[10px] font-bold text-[#171717] block uppercase tracking-wider">Service Cadence</span>
                <span className="text-[#171717] font-medium">Partner diagnostic review within 24 business hours</span>
              </div>
            </div>

            <div className="mt-6 p-4 border border-[#171717] bg-[#F4CF55] shadow-[3px_3px_0_0_#171717] text-left">
              <div className="flex items-start gap-2.5">
                <Info size={16} className="text-[#171717] shrink-0 stroke-[2.5] mt-0.5" />
                <p className="text-[11px] leading-relaxed text-[#171717] font-medium">
                  <strong>Notice:</strong> Commercial email and receiving inboxes are currently provisional. When submitting this form, the service will provide real-time notification regarding delivery readiness.
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
                className="border border-[#171717] bg-[#A6D8A1] p-8 sm:p-10 text-center shadow-[6px_6px_0_0_#171717]"
              >
                <div className="h-12 w-12 rounded-none border border-[#171717] bg-[#FFFFFF] text-[#171717] flex items-center justify-center mx-auto mb-4 shadow-[2px_2px_0_0_#171717]">
                  <Check size={24} className="text-[#171717] stroke-[3]" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#171717]">
                  Briefing Received
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#171717] font-medium leading-relaxed max-w-md mx-auto">
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
                  className="mt-6 neo-btn text-xs px-5 py-2.5"
                >
                  Submit another briefing
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="border border-[#171717] bg-[#FFFFFF] p-6 sm:p-8 shadow-[6px_6px_0_0_#171717] text-left space-y-5"
              >
                {/* Honest Notice for Unconfigured Service */}
                {status === "unconfigured" && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="p-4 border-2 border-[#171717] bg-[#F4CF55] shadow-[3px_3px_0_0_#171717] flex items-start gap-3"
                  >
                    <Info size={18} className="text-[#171717] shrink-0 stroke-[2.5] mt-0.5" />
                    <div>
                      <h4 className="font-display text-sm font-bold text-[#171717]">
                        Briefing Service Infrastructure Notice
                      </h4>
                      <p className="mt-1 text-xs text-[#171717] font-medium leading-relaxed">
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
                    className="p-4 border-2 border-[#171717] bg-[#ED83A8] shadow-[3px_3px_0_0_#171717] flex items-start gap-3"
                  >
                    <AlertCircle size={18} className="text-[#171717] shrink-0 stroke-[2.5] mt-0.5" />
                    <div>
                      <h4 className="font-display text-sm font-bold text-[#171717]">
                        Submission Incomplete
                      </h4>
                      <p className="mt-1 text-xs text-[#171717] font-medium leading-relaxed">
                        {statusMessage}
                      </p>
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block font-mono text-xs font-bold text-[#171717] uppercase tracking-wider mb-1.5">
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
                      if (fieldErrors.name) {
                        setFieldErrors((prev) => ({ ...prev, name: "" }));
                      }
                    }}
                    placeholder="Jane Doe"
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={fieldErrors.name ? "name-error" : undefined}
                    className={`w-full border ${
                      fieldErrors.name ? "border-red-600 bg-red-50" : "border-[#171717] bg-[#F8F6EF]"
                    } px-3.5 py-2.5 text-sm text-[#171717] placeholder:text-neutral-500 font-sans focus:bg-[#FFFFFF] focus:outline-none focus:shadow-[2px_2px_0_0_#171717] disabled:opacity-60`}
                  />
                  {fieldErrors.name && (
                    <p id="name-error" className="mt-1 font-mono text-[11px] font-bold text-red-600">
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-xs font-bold text-[#171717] uppercase tracking-wider mb-1.5">
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
                      if (fieldErrors.email) {
                        setFieldErrors((prev) => ({ ...prev, email: "" }));
                      }
                    }}
                    placeholder="jane@organization.com"
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={fieldErrors.email ? "email-error" : undefined}
                    className={`w-full border ${
                      fieldErrors.email ? "border-red-600 bg-red-50" : "border-[#171717] bg-[#F8F6EF]"
                    } px-3.5 py-2.5 text-sm text-[#171717] placeholder:text-neutral-500 font-sans focus:bg-[#FFFFFF] focus:outline-none focus:shadow-[2px_2px_0_0_#171717] disabled:opacity-60`}
                  />
                  {fieldErrors.email && (
                    <p id="email-error" className="mt-1 font-mono text-[11px] font-bold text-red-600">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="organization" className="block font-mono text-xs font-bold text-[#171717] uppercase tracking-wider mb-1.5">
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
                    placeholder="e.g. Saint Jude Academy or Acme Labs"
                    className="w-full border border-[#171717] bg-[#F8F6EF] px-3.5 py-2.5 text-sm text-[#171717] placeholder:text-neutral-500 font-sans focus:bg-[#FFFFFF] focus:outline-none focus:shadow-[2px_2px_0_0_#171717] disabled:opacity-60"
                  />
                </div>

                <div>
                  <label htmlFor="division" className="block font-mono text-xs font-bold text-[#171717] uppercase tracking-wider mb-1.5">
                    Primary Service Focus
                  </label>
                  <select
                    id="division"
                    name="division"
                    disabled={status === "submitting"}
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                    className="w-full border border-[#171717] bg-[#F8F6EF] px-3.5 py-2.5 text-sm text-[#171717] font-medium focus:bg-[#FFFFFF] focus:outline-none focus:shadow-[2px_2px_0_0_#171717] disabled:opacity-60"
                  >
                    {DIVISIONS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs font-bold text-[#171717] uppercase tracking-wider mb-1.5">
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
                    placeholder="Briefly describe your current digital presence, goals, and target launch timeframe..."
                    className="w-full border border-[#171717] bg-[#F8F6EF] p-3 text-sm text-[#171717] placeholder:text-neutral-500 font-sans focus:bg-[#FFFFFF] focus:outline-none focus:shadow-[2px_2px_0_0_#171717] disabled:opacity-60"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="neo-btn-pink text-xs px-6 py-3 w-full shadow-[4px_4px_0_0_#171717] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      <span>Transmitting briefing...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit project briefing</span>
                      <ArrowUpRight size={13} />
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
