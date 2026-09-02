import { Award, Briefcase, CheckCircle2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-16 sm:py-24"
    >
      <div className="container max-w-5xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block h-px w-8 bg-primary" />
          <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-primary">
            Experience
          </span>
        </div>
        <h2
          id="experience-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance"
        >
          Two internships.{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Real production code.
          </span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl text-pretty">
          Both remote, both with shipped deliverables. Certificates are linked
          directly under each role.
        </p>

        <ol className="mt-12 relative">
          <span
            aria-hidden
            className="hidden sm:block absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-border via-border to-transparent"
          />
          {experiences.map((exp) => (
            <li key={exp.id} className="relative pl-0 sm:pl-12 pb-10 last:pb-0">
              <span
                aria-hidden
                className="hidden sm:flex absolute left-0 top-3 h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-card shadow-md"
              >
                <Briefcase className="size-4 text-primary" />
              </span>

              <article className="rounded-2xl border border-border bg-card/50 backdrop-blur p-5 sm:p-7 hover:border-primary/40 transition-colors">
                <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                      <span className="font-medium text-foreground/90">
                        {exp.company}
                      </span>
                      <span className="mx-2 text-border">•</span>
                      <span>{exp.mode}</span>
                    </p>
                  </div>
                  <Badge variant="muted" className="self-start whitespace-nowrap">
                    {exp.duration}
                  </Badge>
                </header>

                <ul className="mt-5 space-y-2.5">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2.5 text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="size-4 sm:size-5 mt-0.5 shrink-0 text-primary" />
                      <span className="text-pretty">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {exp.stack.map((s) => (
                    <Badge key={s} variant="outline" className="text-xs">
                      {s}
                    </Badge>
                  ))}
                </div>

                {exp.certificate && (
                  <div className="mt-6 pt-5 border-t border-border/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent/15 text-accent">
                        <Award className="size-4" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          Certificate
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {exp.certificate.issuer}
                        </p>
                      </div>
                    </div>
                    <Button asChild size="sm" variant="outline" className="self-start sm:self-auto">
                      <a
                        href={exp.certificate.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {exp.certificate.label}
                        <ExternalLink className="size-3.5" />
                      </a>
                    </Button>
                  </div>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
