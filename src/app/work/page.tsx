import type { Metadata } from "next";
import WorkFilterView from "@/components/work/WorkFilterView";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Case Studies & Architecture Portfolios | ${siteConfig.workingName}`,
  description:
    "Explore architectural case studies, technical stack decisions, and digital presence frameworks across education, healthcare, and professional services under our 3-tier credibility framework.",
  openGraph: {
    title: `Case Studies & Architecture Portfolios | ${siteConfig.workingName}`,
    description:
      "Explore architectural case studies and digital presence frameworks with transparent categorization.",
  },
};

export default function WorkPage() {
  return <WorkFilterView />;
}
