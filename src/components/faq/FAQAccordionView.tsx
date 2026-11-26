"use client";

import React, { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import StickerMark from "@/components/illustrations/StickerMark";
import Link from "next/link";
import { ArrowUpRight, Minus, Plus, Search } from "lucide-react";

interface FAQItem {
  category: string;
  q: string;
  a: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    category: "Engagement & Cadence",
    q: "How does FIRM differ from a traditional digital marketing agency?",
    a: "Traditional agencies bill monthly retainers for temporary ad campaigns and generic themes. We engineer owned digital platforms, living CSS design tokens, documentary media, and technical SEO that compound in institutional value over years.",
  },
  {
    category: "Engagement & Cadence",
    q: "What is a typical engagement timeline?",
    a: "A brand and web sprint spans 6 to 10 weeks from forensic diagnostic audit to deployment. We operate in fixed weekly stages rather than open-ended hour billing.",
  },
  {
    category: "Technical & Code",
    q: "Who owns the code, design assets, and intellectual property?",
    a: "You do. Upon completion we transfer full custody of the Git repository codebase, design tokens, custom marks, typography license guidance, and documentary media without proprietary CMS lock-in.",
  },
  {
    category: "Technical & Code",
    q: "Why do you engineer in Next.js and React Server Components?",
    a: "Sub-second page speed directly raises conversion completion and organic search indexing. React Server Components render clean semantic HTML directly at the edge without heavy client-side plugin bloat.",
  },
  {
    category: "Institutional Education",
    q: "How do you work with schools and educational institutions?",
    a: "We cleanly separate prospective family admissions conversion gateways from internal parent utility hubs, and test every screen for WCAG 2.1 AA screen-reader and keyboard compliance.",
  },
  {
    category: "Stewardship & IP",
    q: "Do you offer ongoing management and maintenance after launch?",
    a: "Yes. Our Digital Management practice handles framework security patches, 24/7 uptime telemetry, accessibility regression checks, and seasonal landing page sprints under clear SLA governance.",
  },
  {
    category: "Stewardship & IP",
    q: "How do you handle client confidentiality in professional services?",
    a: "For legal, medical, and executive advisory engagements, mutual non-disclosure terms govern discovery and any public work remains anonymized or framed as transparent architectural studies.",
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
  const [query, setQuery] = useState("");
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleItem = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const normalizedQuery = query.trim().toLowerCase();
  const filteredItems = FAQ_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === "All Questions" || item.category === selectedCategory;
    const matchesSearch =
      !normalizedQuery ||
      item.q.toLowerCase().includes(normalizedQuery) ||
      item.a.toLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#171717] text-[#F8F6EF]">
      <Container size="wide">
        <PageHeader
          kicker="Commercial & Technical Clarity"
          title="Frequently addressed questions."
          description="Straightforward operational answers regarding weekly sprint cadence, client repository ownership, React architecture, and long-term stewardship."
        />
      </Container>

      {/* Warm Cream Open Asymmetric FAQ Dossier with Search & Topic Filtering */}
      <Section background="warm-paper" containerSize="wide" padding="spacious">
        <div className="grid gap-12 lg:grid-cols-12 items-start text-left">
          {/* Left Category Sticky Index (4 cols) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Keyword Search Box */}
            <div className="space-y-2">
              <label htmlFor="faq-search" className="text-xs font-sans font-semibold text-[#171717] block">
                Search topics or keywords
              </label>
              <div className="relative">
                <Search
                  size={15}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#3F3D38]"
                  aria-hidden="true"
                />
                <input
                  id="faq-search"
                  type="search"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setOpenIndices([0]);
                  }}
                  placeholder="Search timelines, IP, Next.js…"
                  className="w-full min-h-[44px] rounded-xl bg-[#FFFFFF] border border-[#171717]/18 pl-10 pr-4 text-sm text-[#171717] placeholder:text-[#3F3D38]/65 focus:border-[#171717]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <span className="font-sans text-xs font-semibold text-[#3F3D38] block">
                Filter topic
              </span>
              <div className="flex flex-col gap-1.5">
                {CATEGORIES.map((cat) => {
                  const active = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat);
                        setOpenIndices([0]);
                      }}
                      className={`text-left px-4 py-2.5 rounded-xl text-sm font-display font-medium transition-colors cursor-pointer border ${
                        active
                          ? "bg-[#171717] text-[#F8F6EF] border-[#171717]"
                          : "bg-transparent text-[#3F3D38] border-transparent hover:bg-[#EFECE3] hover:text-[#171717]"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#171717]/12 space-y-4">
              <StickerMark name="s09-17-lightbulb" size={30} />
              <h3 className="font-display text-xl font-medium text-[#171717]">
                Specific institutional requirement?
              </h3>
              <p className="text-sm text-[#3F3D38] leading-relaxed font-sans">
                Share your scope directly and a senior studio partner reviews your architecture criteria personally.
              </p>
              <Link href="/connect" className="firm-btn-dark text-sm w-full justify-center">
                <span>Start a project</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </aside>

          {/* Right Open Accordion List (8 cols) */}
          <div className="lg:col-span-8">
            {filteredItems.length === 0 ? (
              <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#171717]/14 space-y-4">
                <p className="font-display text-xl font-medium text-[#171717]">
                  No questions match &ldquo;{query}&rdquo; inside {selectedCategory}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setSelectedCategory("All Questions");
                    setOpenIndices([0]);
                  }}
                  className="firm-btn-outline-dark text-sm"
                >
                  Reset search filters
                </button>
              </div>
            ) : (
              <div className="divide-y divide-[#171717]/15 border-y border-[#171717]/15">
                {filteredItems.map((item, idx) => {
                  const isOpen = openIndices.includes(idx);
                  return (
                    <div key={item.q}>
                      <button
                        type="button"
                        onClick={() => toggleItem(idx)}
                        aria-expanded={isOpen}
                        className="w-full py-6 sm:py-7 text-left flex items-start justify-between gap-6 cursor-pointer group"
                      >
                        <div className="space-y-1.5">
                          <span className="font-sans text-xs font-medium text-[#3F3D38] block">
                            {item.category}
                          </span>
                          <h2 className="font-display text-xl sm:text-2xl font-medium text-[#171717] group-hover:text-[#3F3D38] transition-colors leading-snug">
                            {item.q}
                          </h2>
                        </div>

                        <span
                          className={`mt-1 h-9 w-9 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                            isOpen
                              ? "bg-[#ED83A8] text-[#171717] border-[#171717]/20"
                              : "bg-[#FFFFFF] text-[#171717] border-[#171717]/18 group-hover:border-[#171717]/40"
                          }`}
                        >
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="animate-paper-enter pb-7 pr-8 text-base text-[#3F3D38] leading-relaxed font-sans max-w-[65ch]">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
