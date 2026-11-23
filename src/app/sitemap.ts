import type { MetadataRoute } from "next";
import { ARTICLES } from "@/data/articles";
import { SERVICES } from "@/data/services";
import { INDUSTRIES } from "@/data/industries";
import { PROJECTS } from "@/data/projects";

const BASE_URL = "https://firm.agency";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Core Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/firm`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/capabilities`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/industries`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/work`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/insights`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/connect`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // 5 Capabilities
  const capabilityRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE_URL}/capabilities/${s.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // 5 Industries
  const industryRoutes: MetadataRoute.Sitemap = INDUSTRIES.map((i) => ({
    url: `${BASE_URL}/industries/${i.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // 3 Case Studies
  const workRoutes: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
    url: `${BASE_URL}/work/${p.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // 6 Editorial Articles
  const articleRoutes: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${BASE_URL}/insights/${a.slug}`,
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
