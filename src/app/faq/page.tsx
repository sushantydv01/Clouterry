import type { Metadata } from "next";
import FAQAccordionView from "@/components/faq/FAQAccordionView";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Frequently Addressed Questions — Operations & Code | ${siteConfig.workingName}`,
  description:
    "Operational, contractual, and technical clarity regarding FIRM methodology, 4-stage cadence, intellectual property transfer, and Next.js 16 Server Components architecture.",
  openGraph: {
    title: `Frequently Addressed Questions — Operations & Code | ${siteConfig.workingName}`,
    description:
      "Operational and technical clarity regarding FIRM methodology, cadence, and architectural standards.",
  },
};

export default function FAQPage() {
  return <FAQAccordionView />;
}
