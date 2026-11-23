import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Capabilities — Five Connected Digital Disciplines | FIRM",
  description:
    "Explore FIRM's five core service divisions: Brand & Identity, Web & Technology, Social Media & Content, Marketing & Growth, and Digital Management.",
};

export default function CapabilitiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Container>
        <PageHeader
          badge="CAPABILITIES"
          eyebrow="Service Directory"
          title="Five connected disciplines."
          description="We do not sell piecemeal agency hours. We engineer, deploy, and steward five connected capabilities that turn your digital surface into an enduring competitive asset."
        />
      </Container>

      {/* Division 01 */}
      <Section id="brand" background="surface">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs font-semibold text-[var(--accent)]">01 // DIVISION</span>
            <h2 className="mt-2 font-display text-2xl font-medium text-[var(--text-primary)] sm:text-3xl">
              Brand & Identity
            </h2>
            <p className="mt-3 text-xs text-[var(--text-secondary)] leading-relaxed">
              Establishing the strategic positioning, typographic dignity, and visual standards that command market respect.
            </p>
          </div>
          <div className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]">
              <p className="text-xs font-medium text-[var(--text-primary)]">Brand Platform & Positioning</p>
              <p className="mt-1 text-[11px] text-[var(--text-muted)]">Core narrative, value propositions, and differentiation thesis.</p>
            </div>
            <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]">
              <p className="text-xs font-medium text-[var(--text-primary)]">Visual Identity System</p>
              <p className="mt-1 text-[11px] text-[var(--text-muted)]">Wordmarks, keystone symbols, and editorial color palettes.</p>
            </div>
            <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]">
              <p className="text-xs font-medium text-[var(--text-primary)]">Digital Design Tokens</p>
              <p className="mt-1 text-[11px] text-[var(--text-muted)]">Tailwind CSS v4 tokens, spacing scales, and type hierarchies.</p>
            </div>
            <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]">
              <p className="text-xs font-medium text-[var(--text-primary)]">Brand Guidelines Manual</p>
              <p className="mt-1 text-[11px] text-[var(--text-muted)]">Living digital documentation for internal teams and vendors.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Division 02 */}
      <Section id="web" background="subtle">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs font-semibold text-[var(--accent)]">02 // DIVISION</span>
            <h2 className="mt-2 font-display text-2xl font-medium text-[var(--text-primary)] sm:text-3xl">
              Web & Technology
            </h2>
            <p className="mt-3 text-xs text-[var(--text-secondary)] leading-relaxed">
              Engineering bespoke, high-performance web platforms using Next.js 16, React 19, and Tailwind CSS.
            </p>
          </div>
          <div className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
              <p className="text-xs font-medium text-[var(--text-primary)]">Next.js App Router Engineering</p>
              <p className="mt-1 text-[11px] text-[var(--text-muted)]">Ultra-fast static and dynamic rendering with Turbopack.</p>
            </div>
            <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
              <p className="text-xs font-medium text-[var(--text-primary)]">WCAG 2.1 AA Accessibility</p>
              <p className="mt-1 text-[11px] text-[var(--text-muted)]">Full compliance for schools, healthcare, and public institutions.</p>
            </div>
            <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
              <p className="text-xs font-medium text-[var(--text-primary)]">Technical SEO Architecture</p>
              <p className="mt-1 text-[11px] text-[var(--text-muted)]">Dynamic sitemaps, JSON-LD schemas, and Core Web Vitals perfection.</p>
            </div>
            <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
              <p className="text-xs font-medium text-[var(--text-primary)]">Bespoke Portals & Gateways</p>
              <p className="mt-1 text-[11px] text-[var(--text-muted)]">Admissions systems, patient intake, and client onboarding funnels.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Division 03 */}
      <Section id="social" background="surface">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs font-semibold text-[var(--accent)]">03 // DIVISION</span>
            <h2 className="mt-2 font-display text-2xl font-medium text-[var(--text-primary)] sm:text-3xl">
              Social Media & Content
            </h2>
            <p className="mt-3 text-xs text-[var(--text-secondary)] leading-relaxed">
              Producing disciplined, editorial media that captures real institutional life and drives organic affinity.
            </p>
          </div>
          <div className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]">
              <p className="text-xs font-medium text-[var(--text-primary)]">Short-Form Editorial Video</p>
              <p className="mt-1 text-[11px] text-[var(--text-muted)]">High-retention Reels & TikToks without cheap corporate scripts.</p>
            </div>
            <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]">
              <p className="text-xs font-medium text-[var(--text-primary)]">Documentary Art Direction</p>
              <p className="mt-1 text-[11px] text-[var(--text-muted)]">Campus, clinical, and office photography that builds genuine trust.</p>
            </div>
            <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]">
              <p className="text-xs font-medium text-[var(--text-primary)]">Content Governance Calendars</p>
              <p className="mt-1 text-[11px] text-[var(--text-muted)]">Quarterly narrative arcs aligned with commercial & admissions cycles.</p>
            </div>
            <div className="p-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]">
              <p className="text-xs font-medium text-[var(--text-primary)]">Brand Safe Engagement</p>
              <p className="mt-1 text-[11px] text-[var(--text-muted)]">Protocols that protect reputation while fostering community dialog.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Division 04 & 05 */}
      <Section id="growth-mgmt" background="subtle">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Division 04 */}
          <div className="p-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
            <span className="font-mono text-xs font-semibold text-[var(--accent)]">04 // DIVISION</span>
            <h3 className="mt-2 font-display text-2xl font-medium text-[var(--text-primary)]">
              Marketing & Growth
            </h3>
            <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
              Connecting brand presence to high-intent audiences via targeted search visibility and conversion funnels.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-[var(--text-secondary)]">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span>Editorial & Technical Search Engine Optimization</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span>High-Intent Search Campaign Infrastructure</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span>Conversion Rate Optimization & Funnel Analytics</span>
              </li>
            </ul>
          </div>

          {/* Division 05 */}
          <div className="p-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)]">
            <span className="font-mono text-xs font-semibold text-[var(--accent)]">05 // DIVISION</span>
            <h3 className="mt-2 font-display text-2xl font-medium text-[var(--text-primary)]">
              Digital Management & Consulting
            </h3>
            <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
              Fractional digital leadership and continuous platform governance under an annual service standard.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-[var(--text-secondary)]">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span>Continuous Software Updates & Dependency Patching</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span>Monthly Uptime, Speed & Accessibility Audits</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span>Executive Advisory on Digital Vendor Procurement</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/connect"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-sm font-medium text-white hover:bg-[var(--accent-hover)]"
          >
            <span>Request a capability consultation</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </Section>
    </div>
  );
}
