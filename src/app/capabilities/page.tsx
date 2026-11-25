import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import PresenceMatrix from "@/components/interactive/PresenceMatrix";
import TheThreadMini from "@/components/thread/TheThreadMini";
import { CAPABILITY_NODES } from "@/lib/threadTheme";
import { SERVICES } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Capabilities | Five Connected Digital Presence Disciplines | FIRM",
  description:
    "Explore FIRM's five core divisions: Brand & Identity, Web & Technology, Social Media & Content, Marketing & Growth, and Digital Management.",
};

export default function CapabilitiesDirectoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#171717] text-[#F8F6EF]">
      <Container>
        <PageHeader
          badge="Capabilities"
          eyebrow="Continuous Architecture"
          title="Five connected disciplines."
          description="We engineer, deploy, and steward five unified practices that transform fragmented digital touchpoints into one compounding system."
        >
          <div className="pt-2 max-w-md">
            <TheThreadMini showLabels={true} size="md" />
          </div>
        </PageHeader>
      </Container>

      {/* Interactive Presence Matrix */}
      <Section background="charcoal" padding="tight">
        <PresenceMatrix />
      </Section>

      {/* Alternating Division Exhibition Splits Featuring S04-S08 Studio Specimens */}
      <Section background="charcoal-subtle" padding="spacious">
        <div className="max-w-6xl mx-auto text-left space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#F8F6EF]/12">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#F4CF55] block">
                Practice Specifications
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#F8F6EF] tracking-tight">
                Inspect each discipline in depth
              </h2>
            </div>
            <span className="text-xs font-mono text-[#9C9990]">
              01 through 05 · Integrated Syllabus
            </span>
          </div>

          <div className="space-y-8">
            {SERVICES.map((service, idx) => {
              const node = CAPABILITY_NODES[idx] || CAPABILITY_NODES[0];
              const isReversed = idx % 2 === 1;

              return (
                <article
                  key={service.slug}
                  className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#1E1E20] border border-[#F8F6EF]/12 hover:border-[#F8F6EF]/24 transition-colors"
                >
                  <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                    <div
                      className={`lg:col-span-6 space-y-5 ${
                        isReversed ? "lg:order-2" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: node.color }}
                          aria-hidden="true"
                        />
                        <span className="text-xs font-mono uppercase tracking-[0.12em] text-[#9C9990]">
                          {service.code} · {service.timeframe}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8F6EF] tracking-tight">
                        {service.title}
                      </h3>

                      <p className="text-sm sm:text-base text-[#C4C1B8] leading-relaxed font-sans">
                        {service.subtitle}
                      </p>

                      <div className="pt-2 border-t border-[#F8F6EF]/10 flex flex-wrap items-center justify-between gap-4">
                        <span className="text-xs font-mono text-[#9C9990]">
                          {service.eyebrow}
                        </span>
                        <Link
                          href={`/capabilities/${service.slug}`}
                          className="firm-btn-primary text-xs sm:text-sm !py-2.5 !px-5"
                        >
                          <span>Explore division</span>
                          <ArrowUpRight size={14} className="stroke-[2.25]" />
                        </Link>
                      </div>
                    </div>

                    <div
                      className={`lg:col-span-6 ${
                        isReversed ? "lg:order-1" : ""
                      }`}
                    >
                      <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-[#F8F6EF]/12 bg-[#171717]">
                        <Image
                          src={node.image}
                          alt={`${service.title} editorial paper-cut specimen`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 48vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
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
