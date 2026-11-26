import React from "react";
import type { Metadata } from "next";
import SectorDetailTemplate from "@/components/industries/SectorDetailTemplate";
import { INDUSTRIES } from "@/data/industries";

export const metadata: Metadata = {
  title: "Startups & Ventures | Rapid Launch-Cadence Platforms | FIRM",
  description:
    "Investor-grade brand identity, high-conversion landing pages, and rapid-launch Next.js web platforms for high-growth ventures.",
};

export default function StartupsIndustryPage() {
  const sector = INDUSTRIES.find((i) => i.slug === "startups") || INDUSTRIES[4];

  return (
    <SectorDetailTemplate
      sector={sector}
      kicker="Venture-Backed & Emerging Companies"
      imageSrc="/images/studio/sec-startups.webp"
      imageAlt="Ascending tactile paper architectural stairs with yellow building blocks unified by a rose pink thread reaching an open archway"
      secondaryLinkHref="/capabilities/brand-identity"
      secondaryLinkLabel="Explore Brand Identity"
      challengesHeading="Enterprise credibility at launch-sprint velocity"
      scopeHeading="Venture launch deliverables"
      ctaHeading="Launch in focused sprints with lasting foundations"
      ctaCopy="Unified brand tokens and React Server Component engineering built to grow from Seed through scale."
      accentColor="#ED83A8"
    />
  );
}
