import { siteConfig } from "@/lib/data";

export function BreadcrumbJsonLd() {
  const siteUrl = siteConfig.url;
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "About", item: `${siteUrl}/#about` },
      { "@type": "ListItem", position: 3, name: "Projects", item: `${siteUrl}/#projects` },
      { "@type": "ListItem", position: 4, name: "Resume", item: `${siteUrl}/resume` },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
