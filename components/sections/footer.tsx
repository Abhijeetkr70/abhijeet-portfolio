import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { SmoothLink } from "@/components/smooth-link";

const year = new Date().getFullYear();

const navLinks = [
  { label: "Projects", href: "projects" },
  { label: "Experience", href: "experience" },
  { label: "About", href: "about" },
  { label: "Education", href: "education" },
  { label: "Contact", href: "contact" },
];

const connectLinks = [
  {
    label: "Email",
    handle: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "LinkedIn",
    handle: "abhijeetkr62",
    href: siteConfig.linkedin,
  },
  {
    label: "GitHub",
    handle: "Abhijeetkr70",
    href: siteConfig.github,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 py-10 sm:py-14">
      <div className="container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent text-xs font-bold text-primary-foreground">
                {siteConfig.initials}
              </span>
              <span className="font-semibold tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs leading-relaxed">
              {siteConfig.role}. Building production-grade web apps with MERN
              + AI.
            </p>
            <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="size-3.5 text-primary" />
              {siteConfig.location.current}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
              Navigate
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <SmoothLink
                    href={l.href}
                    className="hover:text-foreground text-muted-foreground transition-colors"
                  >
                    {l.label}
                  </SmoothLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
              Connect
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {connectLinks.map((l) => {
                const Icon =
                  l.label === "Email"
                    ? Mail
                    : l.label === "LinkedIn"
                      ? Linkedin
                      : Github;
                return (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.label === "Email" ? undefined : "_blank"}
                      rel={l.label === "Email" ? undefined : "noopener noreferrer"}
                      className="group flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon className="size-4 text-primary shrink-0" />
                      <span className="truncate">{l.handle}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 text-center text-xs text-muted-foreground">
          © {year} {siteConfig.name}. Built for recruiters.
        </div>
      </div>
    </footer>
  );
}
