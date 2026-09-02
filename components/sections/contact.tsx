import { FileText, Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks, siteConfig } from "@/lib/data";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  resume: FileText,
} as const;

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 sm:py-24"
    >
      <div className="container max-w-4xl">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-card/80 via-card/50 to-card/30 backdrop-blur p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
          />

          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block h-px w-8 bg-primary" />
              <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-primary">
                Contact
              </span>
            </div>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance"
            >
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                worth shipping
              </span>
              .
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl text-pretty">
              Open to internships, full-time roles, and freelance work —
              especially full-stack product engineering with an AI angle.
              Email is the fastest way to reach me.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" />
              {siteConfig.location.current}
              <span aria-hidden className="text-border">•</span>
              <span>From {siteConfig.location.origin}</span>
            </div>

            <div className="mt-8">
              <Button asChild size="lg" variant="gradient">
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail className="size-4" />
                  {siteConfig.email}
                </a>
              </Button>
            </div>

            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socialLinks.map((s) => {
                const Icon = iconMap[s.id as keyof typeof iconMap];
                return (
                  <li key={s.id}>
                    <a
                      href={s.url}
                      target={s.id === "email" ? undefined : "_blank"}
                      rel={s.id === "email" ? undefined : "noopener noreferrer"}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-background/50 p-4 hover:border-primary/40 hover:bg-accent/5 transition-colors"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary group-hover:bg-primary/25 transition-colors">
                        <Icon className="size-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          {s.label}
                        </p>
                        <p className="text-sm font-medium text-foreground truncate">
                          {s.handle}
                        </p>
                      </div>
                      <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
