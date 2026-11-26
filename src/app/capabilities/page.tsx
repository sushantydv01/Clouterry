import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import PresenceMatrix from "@/components/interactive/PresenceMatrix";
import { CAPABILITY_NODES } from "@/lib/threadTheme";
import { SERVICES } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Capabilities | Five Connected Digital Presence Disciplines | FIRM",
  description:
    "Explore FIRM's five core divisions: Brand & Identity, Web & Technology, Social Media & Content, Marketing & Growth, and Digital Management.",
};

/**
 * `/capabilities` — Eliminates duplicate stacked visual cards beneath PresenceMatrix
 * in favor of an open, scannable Architectural Capability Ledger.
 */
export default function CapabilitiesDirectoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#171717] text-[#F8F6EF]">
      {/* 01. Asymmetric Studio Header */}
      <Container size="wide">
        <PageHeader
          kicker="Five Connected Practices"
          title="Disciplines compiled under one roof."
          description="We engineer, design, and steward five connected digital capabilities so brand craft, Next.js software, editorial media, and organic discovery never fracture across external contractors."
          aside={
            <div className="grid grid-cols-5 gap-2 pt-4 lg:pt-0">
              {CAPABILITY_NODES.map((node) => (
                <Link
                  key={node.slug}
                  href={`/capabilities/${node.slug}`}
                  className="p-3 rounded-xl bg-[#1D1D20] border border-[#F8F6EF]/12 hover:border-[#ED83A8]/55 transition-colors flex flex-col justify-between gap-3 group"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: node.color }}
                    aria-hidden="true"
                  />
                  <div>
                    <span className="font-mono text-xs text-[#ACA89E] block tabular-nums">
                      {node.num}
                    </span>
                    <span className="font-display text-xs font-medium text-[#F8F6EF] group-hover:text-[#ED83A8] transition-colors block truncate">
                      {node.shortName}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          }
        />
      </Container>

      {/* 02. Warm Cream Interactive Practice Atlas */}
      <Section background="warm-paper" containerSize="wide" padding="normal">
        <PresenceMatrix />
      </Section>

      {/* 03. Condensed Hairline Discipline Ledger on Midnight Charcoal (No repetitive image cloning) */}
      <Section background="charcoal" containerSize="wide" padding="spacious">
        <div className="w-full space-y-10 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#F8F6EF]/12">
            <div className="space-y-2 max-w-2xl">
              <h2 className="font-display text-3xl sm:text-5xl font-medium text-[#F8F6EF] tracking-[-0.025em]">
                Complete discipline ledger
              </h2>
              <p className="text-base text-[#D5D2C7] font-sans">
                Direct entry points into deliverable scope, cadence windows, and methodology specifications across each practice.
              </p>
            </div>
            <Link href="/connect" className="firm-btn-primary text-sm self-start sm:self-auto">
              <span>Start a project</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="divide-y divide-[#F8F6EF]/14 border-y border-[#F8F6EF]/14">
            {SERVICES.map((service, idx) => {
              const node = CAPABILITY_NODES[idx] || CAPABILITY_NODES[0];

              return (
                <article
                  key={service.slug}
                  id={`division-${service.slug}`}
                  className="py-7 sm:py-8 grid gap-6 lg:grid-cols-12 items-start lg:items-center scroll-mt-24 group"
                >
                  <div className="lg:col-span-4 space-y-1.5">
                    <div className="flex items-center gap-2.5 text-xs font-mono text-[#ACA89E]">
                      <span
                        className="h-2.5 w-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: node.color }}
                        aria-hidden="true"
                      />
                      <span className="text-[#F8F6EF]">{node.num}</span>
                      <span>·</span>
                      <span>{service.timeframe}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#F8F6EF] tracking-tight">
                      <Link
                        href={`/capabilities/${service.slug}`}
                        className="group-hover:text-[#ED83A8] transition-colors"
                      >
                        {service.title}
                      </Link>
                    </h3>
                  </div>

                  <div className="lg:col-span-5 text-sm sm:text-base text-[#D5D2C7] font-sans leading-relaxed">
                    <p>{service.subtitle}</p>
                    <p className="text-xs text-[#ACA89E] font-mono pt-1.5">
                      Core artifacts: {service.deliverables.map((d) => d.category).join(" · ")}
                    </p>
                  </div>

                  <div className="lg:col-span-3 flex lg:justify-end">
                    <Link
                      href={`/capabilities/${service.slug}`}
                      className="firm-btn-secondary text-sm"
                    >
                      <span>Open {node.shortName}</span>
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
}
