import React from "react";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { ArrowUpRight, Layers, Globe, Share2, TrendingUp, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── 01. Hero Section: Asymmetric Editorial Lockup ── */}
      <section
        className="relative pt-32 pb-20 sm:pt-40 sm:pb-28"
        aria-label="FIRM Introduction"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              {/* Eyebrow Status Marker */}
              <div className="inline-flex items-center gap-2 rounded-md border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-2.5 py-1 text-xs mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--positive)]" />
                <span className="font-mono text-[11px] text-[var(--text-secondary)]">
                  DIGITAL PRESENCE & GROWTH FIRM // EST. 2026
                </span>
              </div>

              {/* Massive Newsreader Headline */}
              <h1 className="font-display text-4xl font-normal tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.06]">
                We engineer enduring digital presence for ambitious organizations.
              </h1>

              {/* Thesis Statement */}
              <p className="mt-6 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                From brand identity and bespoke web infrastructure to editorial content and systematic visibility. We eliminate digital fragmentation, unifying your complete digital surface under one disciplined standard.
              </p>

              {/* Dual Action CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/connect"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)] shadow-xs"
                >
                  <span>Start a project</span>
                  <ArrowUpRight size={14} />
                </Link>
                <Link
                  href="/capabilities"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-6 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)]"
                >
                  Explore capabilities
                </Link>
              </div>
            </div>

            {/* Right Column: Strategic Metric Ribbon */}
            <div className="lg:col-span-4 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 shadow-xs">
              <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-tight block">
                ATELIER BLUEPRINT // 01
              </span>
              <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">
                Unified Presence Architecture
              </p>
              <p className="mt-1 text-xs text-[var(--text-secondary)] leading-relaxed">
                Five connected capabilities working as one continuous system to compound long-term brand equity.
              </p>

              <div className="mt-5 space-y-2.5 pt-4 border-t border-[var(--border-hairline)] text-xs text-[var(--text-secondary)]">
                <div className="flex items-center justify-between">
                  <span>Brand & Identity</span>
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">Division 01</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Web & Technology</span>
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">Division 02</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Social & Content</span>
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">Division 03</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Marketing & Growth</span>
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">Division 04</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Digital Management</span>
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">Division 05</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 02. The Firm Thesis: Ruled Narrow Measure ── */}
      <Section background="subtle" withRuledBaseline={true}>
        <div className="mx-auto max-w-3xl text-left">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
            The Problem of Fragmentation
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Modern organizations do not lack digital tools. They lack cohesion.
          </h2>

          <div className="mt-6 space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
            <p>
              Most organizations manage digital presence as an accidental collection of disconnected vendors. A graphic designer builds the logo; a development contractor writes the website; a social media agency posts generic clips; a growth specialist runs ads to pages that fail to convert.
            </p>
            <p>
              When an organization’s digital surface is fractured, customer trust leaks at every seam. FIRM was built to provide an integrated alternative: senior design craft, modern software engineering, and disciplined visibility executed under a single, accountable stewardship.
            </p>
          </div>
        </div>
      </Section>

      {/* ── 03. Capabilities Grid: The 5 Core Divisions ── */}
      <Section id="capabilities" background="page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
              Core Capabilities
            </p>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Five connected disciplines
            </h2>
          </div>
          <Link
            href="/capabilities"
            className="text-xs font-medium text-[var(--accent)] hover:underline inline-flex items-center gap-1"
          >
            <span>View all capability specifications</span>
            <ArrowUpRight size={12} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Capability 01 */}
          <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 flex flex-col justify-between">
            <div>
              <div className="h-9 w-9 rounded-lg bg-[var(--bg-raised)] flex items-center justify-center text-[var(--text-primary)] mb-4">
                <Layers size={18} />
              </div>
              <span className="font-mono text-[11px] text-[var(--accent)] font-semibold">01 // IDENTITY</span>
              <h3 className="mt-2 font-display text-xl font-medium text-[var(--text-primary)]">
                Brand & Identity
              </h3>
              <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                Strategic positioning, typography systems, comprehensive design tokens, and digital-first brand guidelines.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
              <span>Sprint: 4–6 Weeks</span>
              <Link href="/capabilities#brand" className="text-[var(--text-primary)] hover:text-[var(--accent)]">
                Explore →
              </Link>
            </div>
          </div>

          {/* Capability 02 */}
          <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 flex flex-col justify-between">
            <div>
              <div className="h-9 w-9 rounded-lg bg-[var(--bg-raised)] flex items-center justify-center text-[var(--text-primary)] mb-4">
                <Globe size={18} />
              </div>
              <span className="font-mono text-[11px] text-[var(--accent)] font-semibold">02 // ENGINEERING</span>
              <h3 className="mt-2 font-display text-xl font-medium text-[var(--text-primary)]">
                Web & Technology
              </h3>
              <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                High-performance Next.js App Router platforms, WCAG 2.1 AA accessibility, and bespoke admissions & client portals.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
              <span>Sprint: 6–10 Weeks</span>
              <Link href="/capabilities#web" className="text-[var(--text-primary)] hover:text-[var(--accent)]">
                Explore →
              </Link>
            </div>
          </div>

          {/* Capability 03 */}
          <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 flex flex-col justify-between">
            <div>
              <div className="h-9 w-9 rounded-lg bg-[var(--bg-raised)] flex items-center justify-center text-[var(--text-primary)] mb-4">
                <Share2 size={18} />
              </div>
              <span className="font-mono text-[11px] text-[var(--accent)] font-semibold">03 // MEDIA</span>
              <h3 className="mt-2 font-display text-xl font-medium text-[var(--text-primary)]">
                Social & Content
              </h3>
              <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                Disciplined editorial video production, photography art direction, and high-retention narrative content.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
              <span>Cadence: Monthly</span>
              <Link href="/capabilities#social" className="text-[var(--text-primary)] hover:text-[var(--accent)]">
                Explore →
              </Link>
            </div>
          </div>

          {/* Capability 04 */}
          <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 flex flex-col justify-between">
            <div>
              <div className="h-9 w-9 rounded-lg bg-[var(--bg-raised)] flex items-center justify-center text-[var(--text-primary)] mb-4">
                <TrendingUp size={18} />
              </div>
              <span className="font-mono text-[11px] text-[var(--accent)] font-semibold">04 // INBOUND</span>
              <h3 className="mt-2 font-display text-xl font-medium text-[var(--text-primary)]">
                Marketing & Growth
              </h3>
              <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                Technical SEO infrastructure, high-intent search acquisition, and high-converting inquiry funnels.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
              <span>Sprint: 12 Weeks</span>
              <Link href="/capabilities#marketing" className="text-[var(--text-primary)] hover:text-[var(--accent)]">
                Explore →
              </Link>
            </div>
          </div>

          {/* Capability 05 */}
          <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 flex flex-col justify-between md:col-span-2 lg:col-span-2">
            <div>
              <div className="h-9 w-9 rounded-lg bg-[var(--bg-raised)] flex items-center justify-center text-[var(--text-primary)] mb-4">
                <ShieldCheck size={18} />
              </div>
              <span className="font-mono text-[11px] text-[var(--accent)] font-semibold">05 // STEWARDSHIP</span>
              <h3 className="mt-2 font-display text-xl font-medium text-[var(--text-primary)]">
                Digital Management & Consulting
              </h3>
              <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed max-w-xl">
                Fractional digital leadership, continuous platform governance, monthly security and uptime monitoring, and senior executive advisory.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
              <span>Retainer: Annual SLA</span>
              <Link href="/capabilities#management" className="text-[var(--text-primary)] hover:text-[var(--accent)]">
                Explore →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 04. Institutional Focus: Education & Schools ── */}
      <Section id="education" background="subtle">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
              Institutional Specialization
            </span>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Digital presence engineered for schools & educational academies
            </h2>
            <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed">
              Schools face a unique digital tension: they must inspire prospective parents to inquire and enroll, while serving existing families with daily calendars, athletics, and portal resources.
            </p>
            <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
              We design specialized school architectures that decouple the admissions conversion funnel from internal community utilities—delivering high-speed mobile tour booking, documentary photography standards, and full WCAG 2.1 AA accessibility.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-4 text-left">
                <p className="text-xs font-semibold text-[var(--text-primary)]">The Admissions Engine</p>
                <p className="mt-1 text-[11px] text-[var(--text-muted)] leading-relaxed">
                  Virtual viewbooks, automated open house booking, and friction-free mobile inquiry flows.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-4 text-left">
                <p className="text-xs font-semibold text-[var(--text-primary)]">Institutional Trust</p>
                <p className="mt-1 text-[11px] text-[var(--text-muted)] leading-relaxed">
                  Faculty prestige, university matriculation records, and authentic classroom documentary assets.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/industries#education"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] hover:underline"
              >
                <span>Read the complete Education Digital Blueprint</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 shadow-xs">
            <span className="font-mono text-xs font-semibold text-[var(--accent)]">
              EDUCATION FRAMEWORK // THREE LAYERS
            </span>
            <div className="mt-4 space-y-4 text-left">
              <div className="p-3.5 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-hairline)]">
                <span className="font-mono text-[10px] text-[var(--accent)] font-semibold block uppercase">
                  Layer 01 // Public Inbound
                </span>
                <p className="text-xs font-medium text-[var(--text-primary)] mt-0.5">Admissions & Tour Gateway</p>
                <p className="text-[11px] text-[var(--text-muted)] mt-1">High-speed mobile experience for prospective families.</p>
              </div>

              <div className="p-3.5 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-hairline)]">
                <span className="font-mono text-[10px] text-[var(--text-muted)] font-semibold block uppercase">
                  Layer 02 // Community Hub
                </span>
                <p className="text-xs font-medium text-[var(--text-primary)] mt-0.5">Parent & Campus Portal</p>
                <p className="text-[11px] text-[var(--text-muted)] mt-1">Cleanly separated utility bar for daily calendars and forms.</p>
              </div>

              <div className="p-3.5 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-hairline)]">
                <span className="font-mono text-[10px] text-[var(--text-muted)] font-semibold block uppercase">
                  Layer 03 // Reputation
                </span>
                <p className="text-xs font-medium text-[var(--text-primary)] mt-0.5">Academic & Alumni Stature</p>
                <p className="text-[11px] text-[var(--text-muted)] mt-1">Endowment storytelling, board governance, and accreditation.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 05. Call to Action: Direct Intake ── */}
      <Section background="page">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-8 sm:p-12 text-center shadow-xs">
          <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-tight">
            COMMISSION BRIEFING // 2026
          </span>
          <h2 className="mt-3 font-display text-3xl font-normal tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Ready to unify your digital presence?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto">
            We work with a limited roster of organizations each quarter to ensure senior, unhurried execution on every engagement.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/connect"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <span>Submit a project brief</span>
              <ArrowUpRight size={14} />
            </Link>
            <a
              href="mailto:inquiries@firm.agency"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-6 text-sm font-medium text-[var(--text-primary)] hover:border-[var(--border-strong)]"
            >
              inquiries@firm.agency
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
