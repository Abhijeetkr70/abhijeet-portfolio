# Abhijeet Kumar — Portfolio

Production-grade personal portfolio for Abhijeet Kumar, Full-Stack Developer | AI Integration.

- **Live:** [abhijeet-kr.vercel.app](https://abhijeet-kr.vercel.app)
- **Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · shadcn/ui · Framer Motion
- **Deployment:** Vercel

## Local Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run lint
npm run typecheck
```

No environment variables are required. The site URL is hardcoded in `lib/data.ts` (`siteConfig.url`).

## Project Structure

```
app/
  layout.tsx            Root layout, fonts, metadata, JSON-LD
  page.tsx              Home (all sections)
  projects/[slug]/      Case study pages (smartnotes, utility-suite)
  sitemap.ts            sitemap.xml
  robots.ts             robots.txt
  llms.txt/route.ts     LLM-readable short profile
  llms-full.txt/        LLM-readable extended profile
  opengraph-image.tsx   Dynamic OG card
  not-found.tsx         404

components/
  nav.tsx               Sticky header + mobile sheet
  back-to-top.tsx
  ui/                   shadcn primitives (button, badge, sheet, tabs, accordion, tooltip)
  sections/             Hero, About, Skills, Experience, Projects, Education, Achievements, FAQ, Contact, Footer
  seo/                  JSON-LD components

lib/
  data.ts               Single source of truth for all content
  utils.ts

public/
  profile.webp          Optimized portrait
  profile.png           Source portrait
  resume.pdf            Resume (opens directly in default browser)
  agents.txt            Agentic browsing manifest
  humans.txt            Credits
```

## SEO / AEO / GEO / LLMO / AISEO

- `Person`, `WebSite`, `BreadcrumbList`, `SoftwareApplication` (ItemList), `FAQPage` JSON-LD.
- `llms.txt` + `llms-full.txt` for LLM/AI ingestion.
- `agents.txt` for agentic browsers.
- `sitemap.xml`, `robots.txt`, `humans.txt`.
- Open Graph + Twitter card with dynamic image.

## Recruiter Notes

- Phone number is intentionally absent from every page.
- Certificates are embedded inside each Experience card (ApexPlanet + YHills).
- All metrics on the site come from real shipped work.
