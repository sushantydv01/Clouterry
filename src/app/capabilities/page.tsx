import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import PresenceMatrix from "@/components/interactive/PresenceMatrix";
import { SERVICES } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Capabilities — Five Connected Digital Presence Disciplines | FIRM",
  description:
    "Explore FIRM's five core service divisions: Brand & Identity, Web & Technology, Social Media & Content, Marketing & Growth, and Digital Management.",
};

export default function CapabilitiesDirectoryPage() {
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

      {/* Signature Interactive Tool: The Presence Matrix */}
      <Section background="subtle">
        <PresenceMatrix />
      </Section>

      {/* Division Directory Cards */}
      <Section background="page">
        <div className="max-w-5xl mx-auto text-left">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
                Detailed Division Guides
              </span>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl font-medium text-[var(--text-primary)]">
                Explore individual capability specifications
              </h2>
            </div>
            <span className="font-mono text-xs text-[var(--text-muted)]">
              5 Dedicated Practices
            </span>
          </div>

          <div className="space-y-4">
            {SERVICES.map((s) => (
              <div
                key={s.slug}
                className="p-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition-colors hover:border-[var(--border-strong)]"
              >
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-[var(--accent)]">
                      {s.code}
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">•</span>
                    <span className="font-mono text-xs text-[var(--text-secondary)]">
                      {s.timeframe}
                    </span>
                  </div>
                  <h3 className="mt-1 font-display text-xl sm:text-2xl font-medium text-[var(--text-primary)]">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-[var(--text-secondary)] leading-relaxed">
                    {s.subtitle}
                  </p>
                </div>

                <Link
                  href={`/capabilities/${s.slug}`}
                  className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-4 text-xs font-medium text-[var(--text-primary)] hover:border-[var(--border-strong)] shrink-0 self-start md:self-auto"
                >
                  <span>Read specifications</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
