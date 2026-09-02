import { siteConfig, projects } from "@/lib/data";

export function BreadcrumbJsonLd() {
  const siteUrl = siteConfig.url;
  const base = [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Projects", item: `${siteUrl}/projects` },
    { "@type": "ListItem", position: 3, name: "Experience", item: `${siteUrl}/experience` },
    { "@type": "ListItem", position: 4, name: "Resume", item: `${siteUrl}/resume` },
  ];
  const projectItems = projects.map((p, i) => ({
    "@type": "ListItem",
    position: base.length + i + 1,
    name: p.name,
    item: `${siteUrl}/projects/${p.id}`,
  }));
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [...base, ...projectItems],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
