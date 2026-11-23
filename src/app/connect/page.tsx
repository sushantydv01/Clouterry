"use client";

import React, { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const DIVISIONS = [
  "Complete Digital Presence (All Divisions)",
  "Brand & Identity System",
  "Web & Technology Platform",
  "Social Media & Editorial Content",
  "Marketing & Inbound Visibility",
  "School / Academy Presence Architecture",
  "Digital Management & Advisory",
];

export default function ConnectPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [division, setDivision] = useState(DIVISIONS[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Container>
        <PageHeader
          badge="CONNECT"
          eyebrow="Initiate an Engagement"
          title="Start a project briefing."
          description="We work with a limited client roster each quarter. Tell us about your organization, timeline, and current presence challenges."
        />
      </Container>

      <Section background="subtle">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 text-left">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
              Direct Contact
            </span>
            <h2 className="mt-2 font-display text-2xl font-medium text-[var(--text-primary)]">
              Executive Office
            </h2>
            <p className="mt-3 text-xs text-[var(--text-secondary)] leading-relaxed">
              For direct partner inquiries, press correspondence, or institutional RFP invitations, contact our executive office directly.
            </p>

            <div className="mt-6 p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] space-y-2 text-xs">
              <div>
                <span className="font-mono text-[10px] text-[var(--text-muted)] block uppercase">Direct Email</span>
                <a
                  href="mailto:inquiries@firm.agency"
                  className="font-mono text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent)]"
                >
                  inquiries@firm.agency
                </a>
              </div>
              <div className="pt-2 border-t border-[var(--border-hairline)]">
                <span className="font-mono text-[10px] text-[var(--text-muted)] block uppercase">Location</span>
                <span className="text-[var(--text-secondary)]">New York Studio & Remote Delivery</span>
              </div>
              <div className="pt-2 border-t border-[var(--border-hairline)]">
                <span className="font-mono text-[10px] text-[var(--text-muted)] block uppercase">Turnaround</span>
                <span className="text-[var(--text-secondary)]">Partner review within 24 business hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Briefing Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-8 text-center shadow-xs">
                <div className="h-10 w-10 rounded-full bg-[var(--positive-subtle)] text-[var(--positive)] flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="font-display text-2xl font-medium text-[var(--text-primary)]">
                  Briefing Received
                </h3>
                <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed max-w-md mx-auto">
                  Thank you, {name}. We have logged your briefing for <span className="font-medium text-[var(--text-primary)]">{organization || "your organization"}</span>. A senior partner will review your inquiry and follow up at <span className="font-mono font-medium text-[var(--text-primary)]">{email}</span> within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs font-medium text-[var(--accent)] hover:underline"
                >
                  Submit another briefing
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-xs text-left space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:bg-[var(--bg-surface)] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider mb-1">
                    Official Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@organization.com"
                    className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:bg-[var(--bg-surface)] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="org" className="block font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider mb-1">
                    Organization / Institution
                  </label>
                  <input
                    id="org"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Saint Jude Academy or Acme Labs"
                    className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:bg-[var(--bg-surface)] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="division" className="block font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider mb-1">
                    Primary Service Focus
                  </label>
                  <select
                    id="division"
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                    className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3.5 py-2.5 text-sm text-[var(--text-primary)] focus:border-[var(--accent)] focus:bg-[var(--bg-surface)] focus:outline-none"
                  >
                    {DIVISIONS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider mb-1">
                    Project Summary & Objectives
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe your current digital presence, goals, and target launch timeframe..."
                    className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:bg-[var(--bg-surface)] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-4 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
                >
                  <span>Submit project briefing</span>
                  <ArrowUpRight size={13} />
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
