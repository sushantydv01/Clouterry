import type { Metadata } from "next";
import ConnectFormView from "@/components/connect/ConnectFormView";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Start a Project Briefing — Executive Office | ${siteConfig.workingName}`,
  description:
    "Initiate a confidential project briefing with FIRM. Direct executive consultations regarding institutional web platforms, brand architecture, and digital presence systems.",
  openGraph: {
    title: `Start a Project Briefing — Executive Office | ${siteConfig.workingName}`,
    description:
      "Initiate a confidential project briefing with FIRM. Direct partner consultations regarding institutional digital presence.",
  },
};

export default function ConnectPage() {
  return <ConnectFormView />;
}
