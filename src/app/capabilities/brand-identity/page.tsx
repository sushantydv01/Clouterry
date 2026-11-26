import React from "react";
import type { Metadata } from "next";
import CapabilityDetailTemplate from "@/components/capabilities/CapabilityDetailTemplate";
import LivingSpecimenBand from "@/components/capabilities/LivingSpecimenBand";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Brand & Identity | Strategic Positioning & Visual Systems | FIRM",
  description:
    "We engineer enduring brand platforms, typographic systems, and digital design tokens that establish immediate market authority.",
};

export default function BrandIdentityPage() {
  const service = SERVICES.find((s) => s.slug === "brand-identity") || SERVICES[0];

  return (
    <CapabilityDetailTemplate
      service={service}
      nodeIndex={0}
      propositionTitle="A brand is the visual standard governing every organizational touchpoint."
      problemsTitle="The cost of visual fragmentation"
      ctaTitle="Ready to establish an enduring brand standard?"
      ctaCopy="Senior design leadership crafting coherent visual identity systems compiled straight into digital code."
      specialtyBand={<LivingSpecimenBand />}
    />
  );
}
