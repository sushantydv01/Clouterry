import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-hairline)] bg-[var(--bg-page)] px-6 pt-16 pb-12 text-[var(--text-primary)]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-12 pb-12 border-b border-[var(--border-hairline)]">
          {/* Col 1: Wordmark & Purpose Statement */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <Logo withDescriptor={true} />
            <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed max-w-sm">
              FIRM is a digital presence and growth consultancy. We engineer cohesive brand identities, modern web infrastructure, and systematic visibility for organizations where reputation matters.
            </p>
            <div className="mt-2 inline-flex items-center gap-2 rounded-md border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-2.5 py-1 text-[11px] font-mono text-[var(--text-secondary)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--positive)]" />
              <span>Studio Open for Q1/Q2 Engagements</span>
            </div>
          </div>

          {/* Col 2: The Firm */}
          <div className="md:col-span-2 flex flex-col gap-2.5 text-xs">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-medium mb-1">
              The Firm
            </p>
            <Link href="/firm" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Overview
            </Link>
            <Link href="/firm#philosophy" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Philosophy
            </Link>
            <Link href="/firm#approach" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Our Approach
            </Link>
            <Link href="/firm#team" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Leadership & Team
            </Link>
          </div>

          {/* Col 3: Capabilities */}
          <div className="md:col-span-2 flex flex-col gap-2.5 text-xs">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-medium mb-1">
              Capabilities
            </p>
            <Link href="/capabilities#brand" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Brand & Identity
            </Link>
            <Link href="/capabilities#web" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Web & Technology
            </Link>
            <Link href="/capabilities#social" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Social Media & Content
            </Link>
            <Link href="/capabilities#marketing" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Marketing & Growth
            </Link>
            <Link href="/capabilities#management" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Digital Management
            </Link>
          </div>

          {/* Col 4: Industries */}
          <div className="md:col-span-2 flex flex-col gap-2.5 text-xs">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-medium mb-1">
              Industries
            </p>
            <Link href="/industries#education" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Education & Schools
            </Link>
            <Link href="/industries#healthcare" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Healthcare & Medical
            </Link>
            <Link href="/industries#professional" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Professional Services
            </Link>
            <Link href="/industries#retail" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Retail & E-commerce
            </Link>
            <Link href="/industries#startups" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Startups & Ventures
            </Link>
          </div>

          {/* Col 5: Connect & Legal */}
          <div className="md:col-span-2 flex flex-col gap-2.5 text-xs">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-medium mb-1">
              Connect
            </p>
            <Link href="/connect" className="text-[var(--accent)] font-medium hover:underline">
              Start a Project
            </Link>
            <Link href="/work" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Our Work
            </Link>
            <Link href="/insights" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Field Insights
            </Link>
            <Link href="/faq" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Operational FAQ
            </Link>
            <a
              href="mailto:inquiries@firm.agency"
              className="mt-2 text-[var(--text-primary)] font-mono text-[11px] hover:text-[var(--accent)] transition-colors"
            >
              inquiries@firm.agency
            </a>
          </div>
        </div>

        {/* Sub-footer: Copyright & Standards */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-[11px] font-mono text-[var(--text-muted)] sm:flex-row sm:items-center">
          <p>© {currentYear} FIRM. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Next.js 16 App Router</span>
            <span>•</span>
            <span>Atelier Blueprint v1.0</span>
            <span>•</span>
            <span className="text-[var(--text-secondary)]">WCAG 2.1 AA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
