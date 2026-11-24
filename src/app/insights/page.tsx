import type { Metadata } from "next";
import InsightsFilterView from "@/components/insights/InsightsFilterView";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Insights & Field Monographs | ${siteConfig.workingName}`,
  description:
    "Engineering analyses, architectural monographs, and institutional field perspectives on digital presence, performance engineering, and living design systems.",
  openGraph: {
    title: `Insights & Field Monographs | ${siteConfig.workingName}`,
    description:
      "Perspectives on digital presence architecture, independent school technology, and high-performance web engineering.",
  },
};

export default function InsightsPage() {
  return <InsightsFilterView />;
}
