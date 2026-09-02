import { GraduationCap, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/data";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-16 sm:py-24"
    >
      <div className="container max-w-4xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block h-px w-8 bg-primary" />
          <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-primary">
            Education
          </span>
        </div>
        <h2
          id="education-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance"
        >
          B.Tech, Computer Science & Engineering.
        </h2>

        <article className="mt-10 rounded-2xl border border-border bg-card/60 backdrop-blur p-6 sm:p-8 hover:border-primary/40 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary shrink-0">
                <GraduationCap className="size-6" />
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                  {siteConfig.university.degree}
                </h3>
                <a
                  href={siteConfig.university.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 text-sm sm:text-base text-primary hover:underline"
                >
                  {siteConfig.university.name}
                  <ExternalLink className="size-3.5" />
                </a>
                <p className="mt-1 text-sm text-muted-foreground">
                  {siteConfig.university.location}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-2">
              <Badge variant="default" className="text-sm font-semibold">
                CGPA: {siteConfig.university.cgpa}
              </Badge>
              <Badge variant="muted" className="text-xs">
                {siteConfig.university.duration}
              </Badge>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border/60">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Relevant Coursework
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {siteConfig.university.coursework.map((c) => (
                <Badge key={c} variant="outline" className="text-xs">
                  {c}
                </Badge>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
