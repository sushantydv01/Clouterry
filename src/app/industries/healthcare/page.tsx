import React from "react";
import type { Metadata } from "next";
import SectorDetailTemplate from "@/components/industries/SectorDetailTemplate";
import { INDUSTRIES } from "@/data/industries";

export const metadata: Metadata = {
  title: "Healthcare & Medical | Clinical Digital Presence | FIRM",
  description:
    "Calm, patient-first digital presence architecture for specialty medical clinics, surgical centers, and healthcare providers.",
};

export default function HealthcareIndustryPage() {
  const sector = INDUSTRIES.find((i) => i.slug === "healthcare") || INDUSTRIES[1];

  return (
    <SectorDetailTemplate
      sector={sector}
      kicker="Specialty Medical Practice · Healthcare & Clinics"
      imageSrc="/images/studio/w02-aether-health.webp"
      imageAlt="Serene multi-layered garden green paper sanctuary arch representing patient-first clinical web architecture"
      secondaryLinkHref="/work/aether-health"
      secondaryLinkLabel="Aether Health study"
      challengesHeading="Reducing patient anxiety through clinical clarity"
      scopeHeading="Clinical practice deliverables"
      ctaHeading="Schedule a digital diagnostic for your medical practice"
      ctaCopy="Privacy-conscious patient intake pathways, clear specialist profiles, and calm responsive interfaces."
      accentColor="#A6D8A1"
    />
  );
}
