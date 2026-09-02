import { siteConfig, projects, experiences, skillGroups, faqs, achievements } from "@/lib/data";

const siteUrl = siteConfig.url;

export const dynamic = "force-static";

export function GET() {
  const body = `# ${siteConfig.name} — ${siteConfig.role} (Extended Profile for LLMs)

> ${siteConfig.description}

## Identity
- Name: ${siteConfig.name}
- Role: ${siteConfig.role}
- Tagline: ${siteConfig.tagline}
- Status: ${siteConfig.status}
- Location: ${siteConfig.location.current}
- Origin: ${siteConfig.location.origin}

## Education
- University: ${siteConfig.university.name} (${siteConfig.university.url})
- Degree: ${siteConfig.university.degree}
- CGPA: ${siteConfig.university.cgpa}
- Duration: ${siteConfig.university.duration}
- Coursework: ${siteConfig.university.coursework.join(", ")}

## Skills (grouped)
${skillGroups
  .map((g) => `### ${g.label}\n- ${g.skills.map((s) => `\`${s}\``).join(" · ")}`)
  .join("\n\n")}

## Experience (with embedded certificates)
${experiences
  .map(
    (e) => `### ${e.role} @ ${e.company} (${e.mode}) — ${e.duration}
- Stack: ${e.stack.join(", ")}
- ${e.bullets.join("\n- ")}
- Certificate: [${e.certificate?.label}](${e.certificate?.url}) — ${e.certificate?.issuer}`
  )
  .join("\n\n")}

## Projects (full breakdown)
${projects
  .map(
    (p) => `### ${p.name}
- Tagline: ${p.tagline}
- Problem: ${p.problem}
- Role: ${p.role}
- Stack: ${p.stack.join(", ")}
- Features:
${p.features.map((f) => `  - ${f}`).join("\n")}
- Impact:
${p.impact.map((m) => `  - ${m}`).join("\n")}
- Live: ${p.live}
- Source: ${p.github}`
  )
  .join("\n\n")}

## Achievements
${achievements.map((a) => `- **${a.value}** ${a.label} — ${a.sub}`).join("\n")}

## FAQ
${faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Contact
- Email: ${siteConfig.email}
- LinkedIn: ${siteConfig.linkedin}
- GitHub: ${siteConfig.github}
- Resume: ${siteUrl}/resume

## Meta
- Site URL: ${siteUrl}
- Last updated: ${new Date().toISOString().slice(0, 10)}
- Built with Next.js ${"14"}, Tailwind CSS, shadcn/ui.
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
