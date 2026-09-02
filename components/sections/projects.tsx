import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-16 sm:py-24 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent"
    >
      <div className="container max-w-6xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block h-px w-8 bg-primary" />
          <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-primary">
            Projects
          </span>
        </div>
        <h2
          id="projects-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance max-w-3xl"
        >
          Shipped work that demonstrates{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            full-stack thinking
          </span>
          .
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl text-pretty">
          Two flagship projects — one in React + Node, one in vanilla JS. Tap
          any card to read the full case study.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group relative flex flex-col rounded-2xl border border-border bg-card/60 backdrop-blur overflow-hidden hover:border-primary/40 transition-all hover:shadow-2xl hover:shadow-primary/10"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"
              />

              <header className="p-6 sm:p-7 pb-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    {p.name}
                  </h3>
                  <div className="flex flex-wrap gap-1 justify-end shrink-0">
                    {p.highlights.slice(0, 2).map((h) => (
                      <Badge key={h} variant="default" className="text-[10px]">
                        {h}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground text-pretty">
                  {p.tagline}
                </p>
              </header>

              <div className="px-6 sm:px-7 space-y-4 text-sm sm:text-[15px]">
                <ul className="space-y-2">
                  {p.summaryFeatures.map((f, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-foreground/85 leading-relaxed"
                    >
                      <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-pretty">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {p.stack.slice(0, 5).map((s) => (
                    <Badge key={s} variant="outline" className="text-xs">
                      {s}
                    </Badge>
                  ))}
                  {p.stack.length > 5 && (
                    <Badge variant="muted" className="text-xs">
                      +{p.stack.length - 5}
                    </Badge>
                  )}
                </div>
              </div>

              <footer className="mt-5 p-6 sm:p-7 pt-4 border-t border-border/60 flex flex-wrap items-center gap-2">
                <Button asChild variant="gradient" size="sm">
                  <Link href={`/projects/${p.id}`}>
                    View Case Study
                    <ArrowRight className="size-3.5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href={p.live} target="_blank" rel="noopener noreferrer">
                    Live
                    <ExternalLink className="size-3.5" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <Github className="size-3.5" />
                    Source
                  </a>
                </Button>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
