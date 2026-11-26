import React from "react";
import type { Metadata } from "next";
import SectorDetailTemplate from "@/components/industries/SectorDetailTemplate";
import { INDUSTRIES } from "@/data/industries";

export const metadata: Metadata = {
  title: "Retail & E-commerce | Headless Commerce & Editorial Storytelling | FIRM",
  description:
    "Headless Next.js storefronts and editorial brand storytelling for boutique consumer brands that refuse to look like generic templates.",
};

export default function RetailIndustryPage() {
  const sector = INDUSTRIES.find((i) => i.slug === "retail") || INDUSTRIES[3];

  return (
    <SectorDetailTemplate
      sector={sector}
      kicker="Boutique & Consumer Brands · Commerce"
      imageSrc="/images/studio/s06-editorial-media.webp"
      imageAlt="Open tactile folio book paired beside an editorial studio camera linked by a rose pink ribbon"
      secondaryLinkHref="/capabilities/web-technology"
      secondaryLinkLabel="Explore Web Engineering"
      challengesHeading="Escaping templated marketplace fatigue"
      scopeHeading="Headless retail deliverables"
      ctaHeading="Build a storefront that honors physical craft"
      ctaCopy="Headless Next.js speed paired seamlessly with tactile editorial product storytelling."
      accentColor="#ED83A8"
    />
  );
}
