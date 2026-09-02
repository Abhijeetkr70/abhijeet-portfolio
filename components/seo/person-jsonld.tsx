import { siteConfig, projects } from "@/lib/data";

export function PersonJsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abhijeet-kr.vercel.app";
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
      url: p.live,
      codeRepository: p.github,
      keywords: p.stack.join(", "),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
