import { siteConfig, projects } from "@/lib/data";

export function PersonJsonLd() {
  const siteUrl = siteConfig.url;
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    url: siteUrl,
    image: `${siteUrl}/profile.webp`,
    email: siteConfig.email,
    sameAs: [siteConfig.linkedin, siteConfig.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    homeLocation: {
      "@type": "Place",
      name: siteConfig.location.current,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: siteConfig.university.name,
      sameAs: siteConfig.university.url,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
    },
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MERN Stack",
      "Tailwind CSS",
      "REST APIs",
      "JWT",
      "Redis",
      "Docker",
      "AI Integration",
      "Large Language Models",
      "Prompt Engineering",
      "Full-Stack Development",
    ],
    knowsLanguage: ["en", "hi"],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full-Stack Developer",
      occupationLocation: { "@type": "City", name: "Jaipur" },
      skills: "MERN Stack, TypeScript, Next.js, AI Integration, LLMs, REST APIs",
    },
    workExample: projects.map((p) => ({
      "@type": "CreativeWork",
      name: p.name,
      description: p.tagline,
      url: `${siteUrl}/projects/${p.id}`,
      sameAs: [p.github, p.live],
      keywords: p.stack.join(", "),
    })),
    significantLink: [
      `${siteUrl}/projects/smartnotes`,
      `${siteUrl}/projects/utility-suite`,
      siteConfig.github,
      siteConfig.linkedin,
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
