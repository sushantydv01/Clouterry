"use client";

import React, { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { ArrowUpRight, Check } from "lucide-react";

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
    <div className="flex flex-col min-h-screen bg-[#F4F4F0]">
      <Container>
        <PageHeader
          badge="CONNECT"
          eyebrow="Initiate an Engagement"
          title="Start a project briefing."
          description="We work with a limited client roster each quarter. Tell us about your organization, timeline, and current presence challenges."
        />
      </Container>

      <Section background="surface">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 text-left">
            <span className="inline-block border border-black bg-[#FF90E8] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-black font-bold shadow-[2px_2px_0_0_#000]">
              Direct Contact
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-black">
              Executive Office
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#2D2A26] leading-relaxed">
              For direct partner inquiries, press correspondence, or institutional RFP invitations, contact our executive office directly.
            </p>

            <div className="mt-6 p-5 border border-black bg-white shadow-[4px_4px_0_0_#000] space-y-3 text-xs">
              <div>
                <span className="font-mono text-[10px] font-bold text-black block uppercase tracking-wider">Direct Email</span>
                <a
                  href="mailto:inquiries@firm.agency"
                  className="font-mono text-sm font-bold text-black hover:underline"
                >
                  inquiries@firm.agency
                </a>
              </div>
              <div className="pt-3 border-t border-black">
                <span className="font-mono text-[10px] font-bold text-black block uppercase tracking-wider">Location</span>
                <span className="text-black font-medium">New York Studio &amp; Remote Delivery</span>
              </div>
              <div className="pt-3 border-t border-black">
                <span className="font-mono text-[10px] font-bold text-black block uppercase tracking-wider">Turnaround</span>
                <span className="text-black font-medium">Partner review within 24 business hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Briefing Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-black bg-[#55D6BE] p-8 sm:p-10 text-center shadow-[6px_6px_0_0_#000]">
                <div className="h-12 w-12 rounded-none border border-black bg-white text-black flex items-center justify-center mx-auto mb-4 shadow-[2px_2px_0_0_#000]">
                  <Check size={24} className="text-black stroke-[3]" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-black">
                  Briefing Received
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-black font-medium leading-relaxed max-w-md mx-auto">
                  Thank you, {name}. We have logged your briefing for <span className="font-bold underline">{organization || "your organization"}</span>. A senior partner will review your inquiry and follow up at <span className="font-mono font-bold">{email}</span> within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 neo-btn text-xs px-5 py-2.5"
                >
                  Submit another briefing
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-black bg-white p-6 sm:p-8 shadow-[6px_6px_0_0_#000] text-left space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block font-mono text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full border border-black bg-[#F4F4F0] px-3.5 py-2.5 text-sm text-black placeholder:text-neutral-500 font-sans focus:bg-white focus:outline-none focus:shadow-[2px_2px_0_0_#000]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                    Official Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@organization.com"
                    className="w-full border border-black bg-[#F4F4F0] px-3.5 py-2.5 text-sm text-black placeholder:text-neutral-500 font-sans focus:bg-white focus:outline-none focus:shadow-[2px_2px_0_0_#000]"
                  />
                </div>

                <div>
                  <label htmlFor="org" className="block font-mono text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                    Organization / Institution
                  </label>
                  <input
                    id="org"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Saint Jude Academy or Acme Labs"
                    className="w-full border border-black bg-[#F4F4F0] px-3.5 py-2.5 text-sm text-black placeholder:text-neutral-500 font-sans focus:bg-white focus:outline-none focus:shadow-[2px_2px_0_0_#000]"
                  />
                </div>

                <div>
                  <label htmlFor="division" className="block font-mono text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                    Primary Service Focus
                  </label>
                  <select
                    id="division"
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                    className="w-full border border-black bg-[#F4F4F0] px-3.5 py-2.5 text-sm text-black font-medium focus:bg-white focus:outline-none focus:shadow-[2px_2px_0_0_#000]"
                  >
                    {DIVISIONS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                    Project Summary &amp; Objectives
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe your current digital presence, goals, and target launch timeframe..."
                    className="w-full border border-black bg-[#F4F4F0] p-3 text-sm text-black placeholder:text-neutral-500 font-sans focus:bg-white focus:outline-none focus:shadow-[2px_2px_0_0_#000]"
                  />
                </div>

                <button
                  type="submit"
                  className="neo-btn text-xs px-6 py-3 w-full shadow-[4px_4px_0_0_#000]"
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
