import { aboutParagraphs, siteConfig } from "@/lib/data";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 sm:py-24"
    >
      <div className="container max-w-4xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block h-px w-8 bg-primary" />
          <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-primary">
            About
          </span>
        </div>
        <h2
          id="about-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance"
        >
          A full-stack developer focused on{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            real product, not tutorials
          </span>
          .
        </h2>
        <div className="mt-8 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
          {aboutParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={siteConfig.university.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm hover:border-primary/50 transition-colors"
          >
            <span className="text-foreground font-medium">
              {siteConfig.university.name}
            </span>
            <span className="text-muted-foreground">↗</span>
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm hover:border-primary/50 transition-colors"
          >
            <span className="text-foreground font-medium">Open Source on GitHub</span>
            <span className="text-muted-foreground">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
