import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { IndustrySector } from "@/data/industries";
import { ArrowUpRight, Check } from "lucide-react";

interface SectorDetailTemplateProps {
  sector: IndustrySector;
  kicker: string;
  imageSrc: string;
  imageAlt: string;
  secondaryLinkHref: string;
  secondaryLinkLabel: string;
  challengesHeading: string;
  scopeHeading: string;
  ctaHeading: string;
  ctaCopy: string;
  accentColor?: string;
}

export default function SectorDetailTemplate({
  sector,
  kicker,
  imageSrc,
  imageAlt,
  secondaryLinkHref,
  secondaryLinkLabel,
  challengesHeading,
  scopeHeading,
  ctaHeading,
  ctaCopy,
  accentColor = "#A6D8A1",
}: SectorDetailTemplateProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#171717] text-[#F8F6EF]">
      <Container size="wide">
        <PageHeader
          kicker={kicker}
          title={sector.title}
          description={sector.description}
          aside={
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#F8F6EF]/14 bg-[#121214]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          }
        >
          <div className="flex flex-wrap items-center gap-3.5">
            <Link href="/connect" className="firm-btn-primary text-sm">
              <span>Start a project</span>
              <ArrowUpRight size={15} className="stroke-[2]" />
            </Link>
            <Link href={secondaryLinkHref} className="firm-btn-secondary text-sm">
              <span>{secondaryLinkLabel}</span>
            </Link>
          </div>
        </PageHeader>
      </Container>

      {/* Warm Cream Sector Challenges vs Solutions */}
      <Section background="warm-paper" containerSize="wide" padding="spacious">
        <div className="grid gap-12 lg:grid-cols-12 items-start text-left">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-[-0.025em] text-[#171717] leading-tight">
              {challengesHeading}
            </h2>
            <p className="text-base text-[#3F3D38] leading-relaxed font-sans">
              {sector.tagline}
            </p>
            <div className="pt-4 border-t border-[#171717]/14 space-y-2">
              <span className="font-sans text-xs font-semibold text-[#171717] block">
                Organizations served
              </span>
              <ul className="space-y-1.5 text-sm text-[#3F3D38]">
                {sector.audiences.map((aud) => (
                  <li key={aud}>· {aud}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-8 sm:grid-cols-2 border-t border-[#171717]/15 pt-6 lg:border-t-0 lg:pt-0 lg:border-l lg:border-[#171717]/15 lg:pl-10">
            <div className="space-y-4">
              <span className="font-sans text-xs font-semibold text-[#171717] block pb-2 border-b border-[#171717]/15">
                Common friction points
              </span>
              <div className="space-y-5">
                {sector.challenges.map((c) => (
                  <div key={c.title} className="space-y-1">
                    <h3 className="font-display text-base font-medium text-[#171717]">
                      {c.title}
                    </h3>
                    <p className="text-sm text-[#3F3D38] leading-relaxed font-sans">
                      {c.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <span className="font-sans text-xs font-semibold text-[#171717] block pb-2 border-b border-[#171717]/15">
                FIRM architectural response
              </span>
              <div className="space-y-5">
                {sector.solutions.map((s) => (
                  <div key={s.title} className="space-y-1">
                    <h3 className="font-display text-base font-medium text-[#171717]">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[#3F3D38] leading-relaxed font-sans">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Charcoal Deliverables & Practice FAQ */}
      <Section background="charcoal" containerSize="wide" padding="normal">
        <div className="grid gap-12 lg:grid-cols-12 items-start text-left">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#F8F6EF]">
              {scopeHeading}
            </h2>

            <div className="divide-y divide-[#F8F6EF]/12 border-y border-[#F8F6EF]/12">
              {sector.deliverables.map((d) => (
                <div
                  key={d}
                  className="py-3.5 flex items-start gap-3 text-sm sm:text-base text-[#F8F6EF]"
                >
                  <span
                    className="mt-1 h-4 w-4 rounded-full text-[#171717] inline-flex items-center justify-center shrink-0"
                    style={{ backgroundColor: accentColor }}
                  >
                    <Check size={11} className="stroke-[2.5]" />
                  </span>
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#F8F6EF]">
              Practice questions
            </h2>
            <div className="divide-y divide-[#F8F6EF]/12 border-y border-[#F8F6EF]/12">
              {sector.faqs.map((faq) => (
                <div key={faq.question} className="py-4 space-y-1.5">
                  <h3 className="font-display text-base font-medium text-[#F8F6EF]">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-[#D5D2C7] leading-relaxed font-sans">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section background="charcoal-subtle" containerSize="wide" padding="normal">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 text-left">
          <div className="space-y-2.5 max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.025em] text-[#F8F6EF] leading-tight">
              {ctaHeading}
            </h2>
            <p className="text-base sm:text-lg text-[#D5D2C7] leading-relaxed font-sans">
              {ctaCopy}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0">
            <Link href="/connect" className="firm-btn-primary text-sm sm:text-base">
              <span>Start a project</span>
              <ArrowUpRight size={16} className="stroke-[2]" />
            </Link>
            <Link href="/industries" className="firm-btn-secondary text-sm sm:text-base">
              <span>All industry practices</span>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
