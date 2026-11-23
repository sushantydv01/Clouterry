import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights — Field Perspectives & Publications | FIRM",
  description:
    "Read FIRM's perspectives on web architecture, school digital strategy, brand positioning, and digital presence engineering.",
};

const ESSAYS = [
  {
    title: "Why Most School Websites Leak Admissions Inquiries",
    date: "November 2026",
    readingTime: "6 min read",
    category: "Education Architecture",
    excerpt:
      "Most school websites are built as chaotic 400-page internal bulletin boards rather than high-performance admissions gateways. Here is how to fix the student recruitment funnel.",
  },
  {
    title: "The Architecture of Presence: Why Coherence Outperforms Tactics",
    date: "October 2026",
    readingTime: "8 min read",
    category: "Brand Strategy",
    excerpt:
      "A fragmented digital presence creates customer friction at every seam. Examining how unified typography, App Router speed, and content cadence compound enterprise value.",
  },
  {
    title: "Next.js App Router for Commercial Brands: The Performance Mandate",
    date: "October 2026",
    readingTime: "5 min read",
    category: "Engineering",
    excerpt:
      "Why legacy WordPress setups are costing organizations organic search visibility and how server components solve Core Web Vitals once and for all.",
  },
];

export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Container>
        <PageHeader
          badge="INSIGHTS"
          eyebrow="Field Publications"
          title="Perspectives on presence & craft."
          description="Essays, architectural breakdowns, and field guides on building enduring digital systems for modern organizations."
        />
      </Container>

      <Section background="subtle">
        <div className="space-y-6 max-w-3xl mx-auto">
          {ESSAYS.map((e) => (
            <article
              key={e.title}
              className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 sm:p-8 text-left transition-colors hover:border-[var(--border-strong)]"
            >
              <div className="flex items-center gap-3 font-mono text-[11px] text-[var(--text-muted)]">
                <span className="text-[var(--accent)] font-medium">{e.category}</span>
                <span>•</span>
                <span>{e.date}</span>
                <span>•</span>
                <span>{e.readingTime}</span>
              </div>

              <h2 className="mt-3 font-display text-xl sm:text-2xl font-medium text-[var(--text-primary)]">
                {e.title}
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {e.excerpt}
              </p>

              <div className="mt-6 pt-4 border-t border-[var(--border-hairline)]">
                <Link
                  href="/connect"
                  className="text-xs font-medium text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                >
                  <span>Discuss this topic with FIRM</span>
                  <ArrowUpRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
