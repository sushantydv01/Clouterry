"use client";

import { useState } from "react";
import { Check, X } from "@phosphor-icons/react";

const CREATOR_COMMITMENTS = [
  {
    title: "0% Predatory Lock-in",
    desc: "We operate on a non-exclusive cohort model. You remain fully independent and keep all your existing channels.",
  },
  {
    title: "14-Day Payout Guarantee",
    desc: "Never wait 90 or 120 days for corporate invoices to clear. We pay cohort creators within 14 days of deliverable signoff.",
  },
  {
    title: "Aesthetic Sovereignty",
    desc: "You always have veto power. If a product or brief does not fit your natural lifestyle, you decline with zero penalty.",
  },
  {
    title: "Collective Rate Leverage",
    desc: "Stop accepting $100 product-trade lowballs. Cohort members benefit from institutional agency pricing.",
  },
];

const BRAND_COMMITMENTS = [
  {
    title: "Turnaround SLA Guarantee",
    desc: "Every cohort package has locked delivery dates (14-day standard turnaround from brief signoff).",
  },
  {
    title: "Full 90-Day Paid & Spark Rights",
    desc: "All deliverables come with standardized commercial usage rights and ready-to-run Spark Ads codes.",
  },
  {
    title: "Single Invoice & Point of Contact",
    desc: "No chasing 30 separate creator invoices or tax forms. One consolidated agency invoice.",
  },
  {
    title: "Strict Talent Vetting",
    desc: "Every creator must demonstrate >4.5% organic engagement, native hook writing, and proven retention.",
  },
];

const COMPARISON_ROWS = [
  {
    feature: "Creator Relationship",
    clouterry: "Curated cohorts with collective leverage",
    agency: "Predatory 20–40% exclusive locks",
    software: "Unvetted email list scrape (cold DMs)",
  },
  {
    feature: "Production Turnaround",
    clouterry: "14 Days standard from brief",
    agency: "6–10 Weeks of bloated corporate loops",
    software: "Unpredictable (creators often ghost)",
  },
  {
    feature: "Commercial & Spark Rights",
    clouterry: "Pre-cleared 90-day rights & Spark codes",
    agency: "Expensive add-on licensing fees",
    software: "Manual negotiation with each handle",
  },
  {
    feature: "Content Aesthetic",
    clouterry: "100% native, authentic short-form video",
    agency: "Stiff corporate copy & scripted reads",
    software: "Hit-or-miss UGC quality",
  },
  {
    feature: "Operational Overhead",
    clouterry: "Single invoice, dedicated lead coordinator",
    agency: "High monthly retainers regardless of output",
    software: "Your internal team manages all logistics",
  },
];

export default function WhatToExpectSection() {
  const [activeTab, setActiveTab] = useState<"creators" | "brands">("creators");

  return (
    <section className="relative border-t border-ink/15 bg-cream px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink leading-[1.05]">
            What to expect from us.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-ink/70 leading-relaxed">
            Clear standards, zero corporate fluff, and guaranteed commitments whether you make content or commission it.
          </p>
        </div>

        {/* Perspective Switcher: Sharp cut tabs */}
        <div className="mt-10 flex items-center gap-4 border-b border-ink/15 pb-4">
          <button
            type="button"
            onClick={() => setActiveTab("creators")}
            className={`text-xs sm:text-sm font-bold pb-2 transition-colors ${
              activeTab === "creators"
                ? "border-b-2 border-red text-ink"
                : "text-ink/50 hover:text-ink"
            }`}
          >
            For Creators
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("brands")}
            className={`text-xs sm:text-sm font-bold pb-2 transition-colors ${
              activeTab === "brands"
                ? "border-b-2 border-ink text-ink"
                : "text-ink/50 hover:text-ink"
            }`}
          >
            For Brands
          </button>
        </div>

        {/* Commitments Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {(activeTab === "creators" ? CREATOR_COMMITMENTS : BRAND_COMMITMENTS).map((item) => (
            <div
              key={item.title}
              className="border-b border-ink/15 pb-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display text-lg font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-ink/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table: Clean hairline borders */}
        <div className="mt-20 border-t border-ink/15 pt-16">
          <div className="mb-8">
            <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Structural Comparison
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-ink/60">
              The structural difference between cohorts, traditional agencies, and SaaS directories
            </p>
          </div>

          <div className="overflow-x-auto border-t border-ink/15">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-ink/15 text-ink/50">
                  <th className="py-4 pr-6 font-semibold">Model Metric</th>
                  <th className="py-4 px-6 font-bold text-red">
                    Clouterry Cohorts
                  </th>
                  <th className="py-4 px-6 font-semibold">Traditional Agency</th>
                  <th className="py-4 pl-6 font-semibold">Influencer SaaS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10 text-ink/80">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature}>
                    <td className="py-4 pr-6 font-bold text-ink">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 font-semibold text-ink">
                      <div className="flex items-center gap-2 text-red font-bold">
                        <Check size={14} weight="bold" className="shrink-0" />
                        <span>{row.clouterry}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-ink/60">
                      <div className="flex items-center gap-2 text-ink/50">
                        <X size={14} className="shrink-0" />
                        <span>{row.agency}</span>
                      </div>
                    </td>
                    <td className="py-4 pl-6 text-ink/60">
                      <div className="flex items-center gap-2 text-ink/50">
                        <X size={14} className="shrink-0" />
                        <span>{row.software}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
