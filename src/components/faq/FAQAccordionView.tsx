"use client";

import React, { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import StickerMark from "@/components/illustrations/StickerMark";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";

interface FAQItem {
  category: string;
  q: string;
  a: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    category: "Engagement & Cadence",
    q: "How does FIRM differ from a traditional digital marketing agency?",
    a: "Traditional agencies bill monthly retainers for temporary ad buys and generic templates. We engineer owned digital platforms, living design tokens, documentary media, and technical SEO that compound in value over years.",
  },
  {
    category: "Engagement & Cadence",
    q: "What is a typical engagement timeline?",
    a: "A brand or web sprint takes 6 to 10 weeks from initial diagnostic to deployment. We work on a fixed 4-stage cadence with defined weekly milestones.",
  },
  {
    category: "Technical & Code",
    q: "Who owns the code, design assets, and intellectual property?",
    a: "You do. When the project finishes, we transfer the code repository, design tokens, typography licenses, and raw media assets to your organization.",
  },
  {
    category: "Technical & Code",
    q: "Why do you engineer in Next.js and React Server Components?",
    a: "Fast, predictable delivery drives conversion rates and organic search rankings. Server Components render clean semantic HTML on edge servers without bloated client-side JavaScript payloads.",
  },
  {
    category: "Institutional Education",
    q: "How do you work with schools and educational institutions?",
    a: "We separate public prospective family admissions journeys from current parent utility portals, and verify all layouts against WCAG 2.1 AA accessibility standards.",
  },
  {
    category: "Stewardship & IP",
    q: "Do you offer ongoing management and maintenance after launch?",
    a: "Yes. Our Digital Management practice handles platform updates, uptime monitoring, security patches, and seasonal content releases under a clear service agreement.",
  },
  {
    category: "Stewardship & IP",
    q: "How do you handle client confidentiality in professional services?",
    a: "For legal, financial, and clinical clients, we execute mutual non-disclosure agreements before discovery begins and anonymize sensitive matters in published concept studies.",
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
    <div className="flex flex-col min-h-screen bg-[#171717] text-[#F8F6EF]">
      <Container>
        <PageHeader
          badge="Operational FAQ"
          eyebrow="Commercial & Technical Clarity"
          title="Frequently addressed questions."
          description="Clear answers regarding our methodology, technical stack, intellectual property, and stewardship models."
        />
      </Container>

      <Section background="charcoal" padding="tight">
        <div className="max-w-4xl mx-auto text-left space-y-8">
          <div className="flex flex-wrap items-center gap-2 pb-5 border-b border-[#F8F6EF]/12">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs sm:text-sm font-display font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap border ${
                    active
                      ? "bg-[#F8F6EF] text-[#171717] border-[#F8F6EF] font-semibold"
                      : "bg-[#1E1E20] text-[#C4C1B8] border-[#F8F6EF]/12 hover:text-[#F8F6EF] hover:border-[#F8F6EF]/25"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="divide-y divide-[#F8F6EF]/12 border-y border-[#F8F6EF]/12">
            {filteredItems.map((item, idx) => {
              const isOpen = openIndices.includes(idx);
              return (
                <div key={item.q} className="transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    className="w-full py-6 text-left flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#F4CF55] block">
                        {item.category}
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-[#F8F6EF] group-hover:text-[#ED83A8] transition-colors">
                        {item.q}
                      </h3>
                    </div>
                    <div
                      className={`h-9 w-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isOpen
                          ? "rotate-180 bg-[#ED83A8] text-[#171717] border-[#ED83A8]"
                          : "bg-[#1E1E20] text-[#F8F6EF] border-[#F8F6EF]/15"
                      }`}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pb-6 pt-1 text-sm sm:text-base text-[#C4C1B8] leading-relaxed font-sans max-w-3xl">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 p-8 sm:p-10 rounded-2xl bg-[#1E1E20] border border-[#F8F6EF]/14 text-center space-y-4">
            <div className="flex justify-center">
              <StickerMark name="s09-17-lightbulb" size={32} />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8F6EF]">
              Have an institutional question not covered here?
            </h3>
            <p className="text-sm text-[#C4C1B8] max-w-md mx-auto">
              Initiate a confidential project briefing and a senior partner will address your technical and operational criteria directly.
            </p>
            <div className="pt-2">
              <Link href="/connect" className="firm-btn-primary text-sm">
                <span>Start a briefing</span>
                <ArrowUpRight size={15} className="stroke-[2.25]" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
