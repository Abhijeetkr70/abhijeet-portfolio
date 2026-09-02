import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections/footer";
import { BackToTop } from "@/components/back-to-top";
import { projects } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.id }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const project = projects.find((p) => p.id === params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — Case Study`,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      title: `${project.name} — Case Study`,
      description: project.tagline,
      url: `/projects/${project.id}`,
      type: "article",
    },
  };
}

export default function CaseStudyPage({ params }: { params: Params }) {
  const index = projects.findIndex((p) => p.id === params.slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Nav />
      <main id="main" className="pt-24 sm:pt-28 pb-16 sm:pb-24">
        <article className="container max-w-4xl">
          <Link
            href="/?scroll=projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="size-4" />
            All projects
          </Link>

          <header className="rounded-2xl border border-border bg-gradient-to-br from-card/80 via-card/50 to-card/30 backdrop-blur p-6 sm:p-10 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
            />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-2">
                {project.highlights.map((h) => (
                  <Badge key={h} variant="default" className="text-xs">
                    {h}
                  </Badge>
                ))}
              </div>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                {project.name}
              </h1>
              <p className="mt-3 text-base sm:text-lg text-muted-foreground text-pretty max-w-2xl">
                {project.tagline}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <Button asChild size="sm" variant="gradient">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <ExternalLink className="size-3.5" />
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="size-3.5" />
                    Source
                  </a>
                </Button>
              </div>
            </div>
          </header>

          <section className="mt-12">
            <SectionHeading icon={<Sparkles className="size-3.5" />}>
              Overview
            </SectionHeading>
            <p className="mt-4 text-base sm:text-lg text-foreground/85 leading-relaxed text-pretty">
              {project.overview}
            </p>
          </section>

          <section className="mt-12">
            <SectionHeading icon={<Wrench className="size-3.5" />}>
              Architecture & Tech Stack
            </SectionHeading>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <Badge key={s} variant="outline" className="text-sm">
                  {s}
                </Badge>
              ))}
            </div>
            <ul className="mt-6 space-y-3">
              {project.architecture.map((a, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm sm:text-base text-foreground/85 leading-relaxed"
                >
                  <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-pretty">{a}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <SectionHeading icon={<Layers className="size-3.5" />}>
              Key Features
            </SectionHeading>
            <ul className="mt-4 space-y-2.5">
              {project.features.map((f, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm sm:text-base text-foreground/85 leading-relaxed"
                >
                  <span className="mt-2 size-1.5 rounded-full bg-accent shrink-0" />
                  <span className="text-pretty">{f}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <SectionHeading>Implementation Deep Dive</SectionHeading>
            <div className="mt-6 space-y-8">
              {project.deepDive.map((d, i) => (
                <div key={i}>
                  <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">
                    {d.heading}
                  </h3>
                  <p className="mt-2 text-base text-foreground/80 leading-relaxed text-pretty">
                    {d.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <SectionHeading>Results & Impact</SectionHeading>
            <ul className="mt-4 space-y-2.5">
              {project.impact.map((m, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm sm:text-base text-foreground/85 leading-relaxed"
                >
                  <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-pretty">{m}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            <Link
              href="/?scroll=contact"
              className="group flex items-center justify-between rounded-xl border border-border bg-card/60 p-5 hover:border-primary/40 transition-colors"
            >
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Want to chat?
                </p>
                <p className="mt-1 font-semibold">Get in touch</p>
              </div>
              <ArrowRight className="size-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all" />
            </Link>
            <Link
              href={`/projects/${next.id}`}
              className="group flex items-center justify-between rounded-xl border border-border bg-card/60 p-5 hover:border-primary/40 transition-colors"
            >
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Next case study
                </p>
                <p className="mt-1 font-semibold">{next.name}</p>
              </div>
              <ArrowRight className="size-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all" />
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

function SectionHeading({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-block h-px w-8 bg-primary" />
      <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-primary flex items-center gap-1.5">
        {icon}
        {children}
      </span>
    </div>
  );
}
