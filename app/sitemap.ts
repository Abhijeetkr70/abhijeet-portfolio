import type { MetadataRoute } from "next";
import { siteConfig, projects } from "@/lib/data";

const siteUrl = siteConfig.url;

const sectionRoutes = [
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "faq",
  "contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { "en-US": siteUrl } },
    },
    ...sectionRoutes.map((r) => ({
      url: `${siteUrl}/${r}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...projects.map((p) => ({
      url: `${siteUrl}/projects/${p.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${siteUrl}/resume.pdf`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
