import { projects } from "@/lib/data";
import { siteConfig } from "@/lib/data";

export function ProjectsJsonLd() {
  const siteUrl = siteConfig.url;
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SoftwareApplication",
        name: p.name,
        description: p.tagline,
        url: `${siteUrl}/projects/${p.id}`,
        sameAs: [p.github, p.live],
        applicationCategory: "WebApplication",
        operatingSystem: "Any",
        programmingLanguage: p.stack,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        author: { "@type": "Person", name: "Abhijeet Kumar", url: siteUrl },
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
