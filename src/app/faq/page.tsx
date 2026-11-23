import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Addressed Questions — Operational Details | FIRM",
  description:
    "Common questions regarding FIRM's engagement models, turnaround cadences, intellectual property, and stewardship retainers.",
};

const FAQS = [
  {
    q: "How does FIRM differ from a traditional digital marketing agency?",
    a: "Traditional agencies bill high monthly retainers to run temporary media buys or post disconnected social clips. FIRM engineers owned, high-performing digital infrastructure (bespoke Next.js platforms, brand design tokens, documentary content, and technical SEO) that compounds in institutional value over years.",
  },
  {
    q: "What is a typical engagement timeline?",
    a: "A dedicated brand or web sprint typically ranges from 6 to 10 weeks from initial diagnostic to live deployment. We work on a fixed 4-stage cadence with defined weekly deliverables rather than open-ended hourly billing.",
  },
  {
    q: "Who owns the code, design assets, and intellectual property?",
    a: "You do. Upon project completion and settlement, all bespoke code, design tokens, typography licenses, and raw creative assets are transferred completely to the client with zero vendor lock-in.",
  },
  {
    q: "Do you offer ongoing management and maintenance after launch?",
    a: "Yes. Our Digital Management & Consulting division provides fractional digital stewardship—handling continuous platform updates, performance monitoring, security patching, and ongoing editorial enhancements under a clear annual SLA.",
  },
  {
    q: "How do you work with schools and educational institutions?",
    a: "Schools have unique stakeholder ecosystems. We separate the prospective family admissions journey (virtual viewbooks, tour booking) from existing community utilities (calendars, portals), while ensuring full WCAG 2.1 AA accessibility and documentary photography standards.",
  },
];

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Container>
        <PageHeader
          badge="FAQ"
          eyebrow="Operational Clarity"
          title="Frequently addressed questions."
          description="Clear answers regarding our methodology, scopes, technology stack, and commercial models."
        />
      </Container>

      <Section background="subtle">
        <div className="space-y-4 max-w-3xl mx-auto text-left">
          {FAQS.map((faq) => (
            <div
              key={faq.q}
              className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6"
            >
              <h3 className="text-base font-medium text-[var(--text-primary)]">
                {faq.q}
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-[var(--text-muted)] mb-3">
            Have a specific institutional question not answered here?
          </p>
          <Link
            href="/connect"
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-[var(--accent)] px-5 text-xs font-medium text-white hover:bg-[var(--accent-hover)]"
          >
            <span>Connect with our executive office</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </Section>
    </div>
  );
}
