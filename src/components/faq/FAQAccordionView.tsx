"use client";

import React, { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Tag } from "lucide-react";

interface FAQItem {
  category: string;
  q: string;
  a: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    category: "Engagement & Cadence",
    q: "How does FIRM differ from a traditional digital marketing agency?",
    a: "Traditional agencies bill monthly retainers for temporary ad buys and generic campaigns. We engineer owned digital platforms, living design tokens, documentary media, and technical SEO that compound in value over years.",
  },
  {
    category: "Engagement & Cadence",
    q: "What is a typical engagement timeline?",
    a: "A brand or web sprint takes 6 to 10 weeks from initial diagnostic to deployment. We work on a fixed 4-stage cadence with defined weekly deliverables.",
  },
  {
    category: "Technical & Code",
    q: "Who owns the code, design assets, and intellectual property?",
    a: "You do. When the project finishes, we transfer the code repository, design tokens, typography licenses, and raw media assets to your organization.",
  },
  {
    category: "Technical & Code",
    q: "Why do you engineer in Next.js 16 and React 19 Server Components?",
    a: "Fast load times drive conversion rates and organic search rankings. Next.js 16 Server Components compile pages into static HTML on edge servers in under 600 milliseconds, eliminating runtime JavaScript overhead and scoring 100/100 on Core Web Vitals.",
  },
  {
    category: "Institutional Education",
    q: "How do you work with schools and educational institutions?",
    a: "We separate public prospective family admissions journeys from current parent utility portals, and verify all layouts against WCAG 2.1 AA accessibility standards.",
  },
  {
    category: "Stewardship & IP",
    q: "Do you offer ongoing management and maintenance after launch?",
    a: "Yes. Our Digital Management practice handles platform updates, uptime monitoring, security patches, and monthly content releases under an annual service agreement.",
  },
  {
    category: "Stewardship & IP",
    q: "How do you handle client confidentiality in professional services?",
    a: "For legal, financial, and clinical clients, we execute mutual non-disclosure agreements before discovery begins. We anonymize proprietary matters in published retrospectives.",
  },
];

const CATEGORIES = [
  "All Questions",
  "Engagement & Cadence",
  "Technical & Code",
  "Institutional Education",
  "Stewardship & IP",
];

export default function FAQAccordionView() {
  const [selectedCategory, setSelectedCategory] = useState("All Questions");
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleItem = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const filteredItems =
    selectedCategory === "All Questions"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-white">
      <Container>
        <PageHeader
          badge="OPERATIONAL FAQ"
          eyebrow="Commercial &amp; Technical Clarity"
          title="Frequently addressed questions."
          description="Clear answers regarding our methodology, technical stack, intellectual property, and commercial stewardship models."
        />
      </Container>

      <Section background="black" padding="tight">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-white/10">
            <span className="text-xs font-semibold text-white/50 mr-2 flex items-center gap-1.5">
              <Tag size={13} />
              <span>Topic:</span>
            </span>
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer ${
                    active
                      ? "bg-white text-black font-semibold shadow-sm"
                      : "bg-[#18181B] text-white/70 hover:text-white border border-white/10 hover:border-white/20"
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
                  className="gumroad-card overflow-hidden border-white/10"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none transition-colors"
                  >
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 text-[11px] font-semibold mb-2">
                        {item.category}
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                        {item.q}
                      </h3>
                    </div>
                    <div
                      className={`h-8 w-8 rounded-full bg-[#141416] border border-white/10 flex items-center justify-center text-white shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-[#FF90E8] text-black" : ""
                      }`}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-white/5 text-sm sm:text-base text-white/70 leading-relaxed font-sans">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Further Questions Box */}
          <div className="mt-12 p-8 gumroad-card text-center space-y-4 border-white/10">
            <h3 className="font-display text-2xl font-bold text-white">
              Have an institutional question not covered here?
            </h3>
            <p className="text-sm text-white/70 max-w-md mx-auto">
              Our partners are available for direct consultation regarding complex architectural requirements, RFPs, and timelines.
            </p>
            <div className="pt-2">
              <Link
                href="/connect"
                className="gumroad-btn-pink text-xs sm:text-sm font-bold !py-2.5 !px-5"
              >
                <span>Start a project</span>
                <ArrowUpRight size={14} className="stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
