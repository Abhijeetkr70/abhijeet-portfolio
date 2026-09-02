import { siteConfig, projects } from "@/lib/data";

export function BreadcrumbJsonLd() {
  const siteUrl = siteConfig.url;
  const base = [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Projects", item: `${siteUrl}/projects` },
    { "@type": "ListItem", position: 3, name: "Experience", item: `${siteUrl}/experience` },
    { "@type": "ListItem", position: 4, name: "About", item: `${siteUrl}/about` },
    { "@type": "ListItem", position: 5, name: "Skills", item: `${siteUrl}/skills` },
    { "@type": "ListItem", position: 6, name: "Education", item: `${siteUrl}/education` },
    { "@type": "ListItem", position: 7, name: "FAQ", item: `${siteUrl}/faq` },
    { "@type": "ListItem", position: 8, name: "Contact", item: `${siteUrl}/contact` },
    { "@type": "ListItem", position: 9, name: "Resume", item: `${siteUrl}/resume.pdf` },
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
