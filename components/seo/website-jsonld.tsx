import { siteConfig } from "@/lib/data";

export function WebsiteJsonLd() {
  const siteUrl = siteConfig.url;
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} — Portfolio`,
    url: siteUrl,
    description: siteConfig.description,
    inLanguage: "en-US",
    author: { "@type": "Person", name: siteConfig.name },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
