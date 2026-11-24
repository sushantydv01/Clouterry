import type { MetadataRoute } from "next";
import { ARTICLES } from "@/data/articles";
import { SERVICES } from "@/data/services";
import { INDUSTRIES } from "@/data/industries";
import { PROJECTS } from "@/data/projects";
import { getSiteUrl } from "@/lib/siteConfig";

// Meaningful content modification timestamps reflecting actual editorial release dates
const CORE_PAGE_DATES: Record<string, string> = {
  "/": "2026-11-24T00:00:00.000Z",
  "/firm": "2026-11-23T18:00:00.000Z",
  "/capabilities": "2026-11-23T18:00:00.000Z",
  "/industries": "2026-11-23T18:44:00.000Z",
  "/work": "2026-11-23T19:21:00.000Z",
  "/insights": "2026-11-23T00:00:00.000Z",
  "/connect": "2026-11-24T00:00:00.000Z",
  "/faq": "2026-11-24T00:00:00.000Z",
};

const PROJECT_DATES: Record<string, string> = {
  "saint-jude-academy": "2026-11-15T00:00:00.000Z",
  "aether-health": "2026-11-10T00:00:00.000Z",
  "vance-legal": "2026-11-05T00:00:00.000Z",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  // Core Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(CORE_PAGE_DATES["/"]),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/firm`,
      lastModified: new Date(CORE_PAGE_DATES["/firm"]),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/capabilities`,
      lastModified: new Date(CORE_PAGE_DATES["/capabilities"]),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(CORE_PAGE_DATES["/industries"]),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(CORE_PAGE_DATES["/work"]),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(CORE_PAGE_DATES["/insights"]),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/connect`,
      lastModified: new Date(CORE_PAGE_DATES["/connect"]),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(CORE_PAGE_DATES["/faq"]),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // 5 Capabilities
  const capabilityRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${baseUrl}/capabilities/${s.slug}`,
    lastModified: new Date("2026-11-23T18:00:00.000Z"),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // 5 Industries
  const industryRoutes: MetadataRoute.Sitemap = INDUSTRIES.map((i) => ({
    url: `${baseUrl}/industries/${i.slug}`,
    lastModified: new Date("2026-11-23T18:44:00.000Z"),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // 3 Case Studies
  const workRoutes: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: new Date(PROJECT_DATES[p.slug] || "2026-11-15T00:00:00.000Z"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // 6 Editorial Articles
  const articleRoutes: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${baseUrl}/insights/${a.slug}`,
    lastModified: new Date(a.isoDate),
    changeFrequency: "never",
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...capabilityRoutes,
    ...industryRoutes,
    ...workRoutes,
    ...articleRoutes,
  ];
}
