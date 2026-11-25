import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { INDUSTRIES } from "@/data/industries";
import { ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare & Medical | Clinical Digital Presence | FIRM",
  description:
    "Calm, patient-first digital presence architecture for specialty medical clinics, surgical centers, and healthcare providers.",
};

export default function HealthcareIndustryPage() {
  const sector = INDUSTRIES.find((i) => i.slug === "healthcare") || INDUSTRIES[1];

  return (
    <div className="flex flex-col min-h-screen bg-[#171717] text-[#F8F6EF]">
      <Container>
        <PageHeader
          badge={sector.eyebrow}
          eyebrow="Specialty Medical Practices"
          title={sector.title}
          description={sector.description}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/connect"
              className="gumroad-btn-pink text-xs sm:text-sm font-bold !py-2.5 !px-5"
            >
              <span>Start a project</span>
              <ArrowUpRight size={14} className="stroke-[2.5]" />
            </Link>
            <Link
              href="/work/aether-health"
              className="gumroad-btn-secondary text-xs sm:text-sm !py-2.5 !px-5"
            >
              View Aether Health Case Study
            </Link>
          </div>
        </PageHeader>
      </Container>

      {/* Challenges & Solutions */}
      <Section background="charcoal" padding="tight">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div className="gumroad-card p-6 sm:p-10 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[#A6D8A1]/20 border border-[#A6D8A1]/30 text-xs font-semibold text-[#A6D8A1]">
              Clinical Dilemmas Solved
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F8F6EF] tracking-tight">
              Anxiety reduction through clinical clarity
            </h2>
            <div className="space-y-4 pt-2">
              {sector.challenges.map((c) => (
                <div key={c.title} className="p-4 rounded-xl bg-[#1E1E20] border border-[#F8F6EF]/5 space-y-1">
                  <h4 className="text-sm font-bold text-[#F8F6EF]">{c.title}</h4>
                  <p className="text-xs sm:text-sm text-[#F8F6EF]/70 leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Deliverables */}
      <Section background="charcoal" padding="normal">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F8F6EF]">
              Clinical digital practice scope
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {sector.deliverables.map((d) => (
              <div key={d} className="p-4 rounded-xl bg-[#1E1E20] border border-[#F8F6EF]/10 flex items-center gap-3 text-xs sm:text-sm text-[#F8F6EF]/80">
                <div className="w-5 h-5 rounded-full bg-[#A6D8A1] text-[#171717] flex items-center justify-center shrink-0 font-bold">
                  <Check size={12} className="stroke-[3]" />
                </div>
                <span>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section background="charcoal" padding="spacious">
        <div className="max-w-3xl mx-auto text-center space-y-6 gumroad-card p-8 sm:p-14 border-[#F8F6EF]/10">
          <span className="inline-block px-3 py-1 rounded-full bg-[#F8F6EF]/10 text-[#F8F6EF] text-xs font-semibold">
            CLINICAL CONSULTATION INTAKE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#F8F6EF] leading-tight">
            Schedule a digital diagnostic for your medical practice
          </h2>
          <p className="text-sm sm:text-base text-[#F8F6EF]/70 max-w-lg mx-auto leading-relaxed">
            HIPAA-conscious architecture, patient conversion funnels, and calm design systems.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/connect"
              className="gumroad-btn-pink text-xs sm:text-sm font-bold !py-3 !px-6 w-full sm:w-auto"
            >
              <span>Start a project</span>
              <ArrowUpRight size={14} className="stroke-[2.5]" />
            </Link>
            <Link
              href="/industries"
              className="gumroad-btn-secondary text-xs sm:text-sm !py-3 !px-6 w-full sm:w-auto"
            >
              View all industry practices
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
