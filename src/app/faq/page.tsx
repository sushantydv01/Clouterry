"use client";

import React, { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, HelpCircle, Tag } from "lucide-react";

interface FAQItem {
  category: string;
  q: string;
  a: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    category: "Engagement & Cadence",
    q: "How does FIRM differ from a traditional digital marketing agency?",
    a: "Traditional agencies bill high monthly retainers to run temporary media buys or post disconnected social clips that evaporate when ad spend stops. FIRM engineers owned, high-performing digital infrastructure—bespoke Next.js platforms, living design tokens, documentary content, and technical SEO—that compounds in institutional value over years.",
  },
  {
    category: "Engagement & Cadence",
    q: "What is a typical engagement timeline?",
    a: "A dedicated brand or web sprint typically ranges from 6 to 10 weeks from initial diagnostic to live deployment. We work on a fixed 4-stage cadence with defined weekly deliverables rather than open-ended hourly billing.",
  },
  {
    category: "Technical & Code",
    q: "Who owns the code, design assets, and intellectual property?",
    a: "You do completely. Upon project completion and settlement, all bespoke code, design tokens, typography licenses, and raw creative assets are transferred to the client with zero vendor lock-in or proprietary dependencies.",
  },
  {
    category: "Technical & Code",
    q: "Why do you engineer in Next.js 16 and React 19 Server Components?",
    a: "Because performance is a non-negotiable business requirement. Next.js 16 App Router Server Components allow us to compile pages into pure static HTML on edge servers in under 600ms. This produces straight 100/100 Core Web Vitals scores, eliminates runtime JavaScript overhead, and delivers sub-second page loads worldwide.",
  },
  {
    category: "Institutional Education",
    q: "How do you work with schools and educational institutions?",
    a: "Schools have unique stakeholder ecosystems. We separate the prospective family admissions journey (virtual viewbooks, tour booking) from existing community utilities (calendars, portals), while ensuring full WCAG 2.1 AA accessibility and documentary photography standards.",
  },
  {
    category: "Stewardship & IP",
    q: "Do you offer ongoing management and maintenance after launch?",
    a: "Yes. Our Digital Management & Consulting division provides fractional digital stewardship—handling continuous platform updates, performance monitoring, security patching, and ongoing editorial enhancements under a clear annual SLA.",
  },
  {
    category: "Stewardship & IP",
    q: "How do you handle client confidentiality in professional services?",
    a: "For legal, financial, and specialty clinical practices, we sign strict non-disclosure agreements prior to discovery. When showcasing case studies, we anonymize proprietary matters or categorize speculative architecture transparently under our 3-tier credibility framework.",
  },
];

const CATEGORIES = [
  "All Questions",
  "Engagement & Cadence",
  "Technical & Code",
  "Institutional Education",
  "Stewardship & IP",
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Questions");
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleItem = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const filteredItems = selectedCategory === "All Questions"
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Container>
        <PageHeader
          badge="OPERATIONAL FAQ"
          eyebrow="Commercial & Technical Clarity"
          title="Frequently addressed questions."
          description="Clear answers regarding our methodology, technical stack, intellectual property, and commercial stewardship models."
        />
      </Container>

      <Section background="subtle">
        <div className="max-w-4xl mx-auto text-left">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-[var(--border-hairline)]">
            <span className="font-mono text-xs text-[var(--text-muted)] mr-2 flex items-center gap-1">
              <Tag size={12} />
              <span>Topic:</span>
            </span>
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    active
                      ? "bg-[var(--accent)] text-white shadow-2xs"
                      : "border border-[var(--border-hairline)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Interactive Accordion List */}
          <div className="space-y-4">
            {filteredItems.map((item, idx) => {
              const isOpen = openIndices.includes(idx);
              return (
                <div
                  key={item.q}
                  className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] overflow-hidden transition-colors hover:border-[var(--border-strong)]"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  >
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)] font-semibold block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-medium text-[var(--text-primary)]">
                        {item.q}
                      </h3>
                    </div>
                    <div
                      className={`h-8 w-8 rounded-full bg-[var(--bg-subtle)] flex items-center justify-center text-[var(--text-secondary)] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[var(--accent)]" : ""
                      }`}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-hairline)] bg-[var(--bg-subtle)]">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Executive Contact Prompt */}
          <div className="mt-14 p-8 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] text-center shadow-xs">
            <HelpCircle size={24} className="text-[var(--accent)] mx-auto mb-3" />
            <h4 className="font-display text-xl font-medium text-[var(--text-primary)]">
              Have a specific institutional question?
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] max-w-md mx-auto">
              Our partners are available for confidential consultations regarding admissions systems, brand architecture, or digital stewardship.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/connect"
                className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-[var(--accent)] px-5 text-xs font-medium text-white hover:bg-[var(--accent-hover)] transition-colors"
              >
                <span>Initiate a project briefing</span>
                <ArrowUpRight size={13} />
              </Link>
              <a
                href="mailto:inquiries@firm.agency"
                className="inline-flex h-10 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-5 text-xs font-medium text-[var(--text-primary)] hover:border-[var(--border-strong)]"
              >
                inquiries@firm.agency
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
