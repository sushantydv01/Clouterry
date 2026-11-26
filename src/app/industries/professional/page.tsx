import React from "react";
import type { Metadata } from "next";
import SectorDetailTemplate from "@/components/industries/SectorDetailTemplate";
import { INDUSTRIES } from "@/data/industries";

export const metadata: Metadata = {
  title: "Professional Services | Legal & Advisory Digital Presence | FIRM",
  description:
    "Intellectual prestige, editorial thought leadership publishing, and practice area architecture for law firms, accounting practices, and consultancies.",
};

export default function ProfessionalServicesIndustryPage() {
  const sector = INDUSTRIES.find((i) => i.slug === "professional") || INDUSTRIES[2];

  return (
    <SectorDetailTemplate
      sector={sector}
      kicker="Legal & Financial Partnerships · Advisory"
      imageSrc="/images/studio/w03-vance-legal.webp"
      imageAlt="Classical fluted cream limestone column fragment beside stacked linen monograph folios"
      secondaryLinkHref="/work/vance-legal"
      secondaryLinkLabel="Vance & Partners study"
      challengesHeading="Commanding institutional credibility with decision-makers"
      scopeHeading="Advisory practice deliverables"
      ctaHeading="Elevate your partnership's digital stature"
      ctaCopy="Editorial publication publishing, partner dossiers, and confidential client inquiry channels."
      accentColor="#F4CF55"
    />
  );
}
