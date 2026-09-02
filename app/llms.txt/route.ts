import { siteConfig, projects, experiences, skillGroups, faqs } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abhijeet-kr.vercel.app";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${siteConfig.name} — ${siteConfig.role}

> ${siteConfig.description}

## Contact
- Email: ${siteConfig.email}
- LinkedIn: ${siteConfig.linkedin}
- GitHub: ${siteConfig.github}
- Location: ${siteConfig.location.current} (from ${siteConfig.location.origin})
- University: ${siteConfig.university.name} — ${siteConfig.university.degree} (CGPA ${siteConfig.university.cgpa})

## Core Stack
${skillGroups.map((g) => `- **${g.label}**: ${g.skills.join(", ")}`).join("\n")}

## Experience
${experiences
  .map(
    (e) => `- **${e.role}** @ ${e.company} (${e.mode}) — ${e.duration}
  - ${e.bullets.join("\n  - ")}
  - Certificate: ${e.certificate?.url ?? "N/A"}`
  )
  .join("\n")}

## Projects
${projects
  .map(
    (p) => `- **${p.name}** — ${p.tagline}
  - Live: ${p.live}
  - Source: ${p.github}
  - Stack: ${p.stack.join(", ")}
  - Highlights: ${p.features.slice(0, 4).join("; ")}`
  )
  .join("\n")}

## FAQ
${faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}

## Site
- URL: ${siteUrl}
- Resume: ${siteUrl}/resume
- Built with Next.js, Tailwind CSS, shadcn/ui.
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
