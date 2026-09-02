"use client";

import { useState } from "react";
import {
  Check,
  Copy,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowUpRight,
  Clock,
  PhoneOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks, siteConfig } from "@/lib/data";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  resume: FileText,
} as const;

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: no-op
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 sm:py-24 scroll-mt-20"
    >
      <div className="container max-w-4xl">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-card/80 via-card/50 to-card/30 backdrop-blur p-5 sm:p-8 lg:p-12 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/15 blur-3xl pointer-events-none"
          />

          <div className="relative">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block h-px w-8 bg-primary" />
              <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-primary">
                Contact
              </span>
            </div>

            {/* Heading */}
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.1]"
            >
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                worth shipping
              </span>
              .
            </h2>

            {/* Subheading */}
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl text-pretty leading-relaxed">
              Open to internships, full-time roles, and freelance work —
              especially full-stack product engineering with an AI angle.
              Email is the fastest way to reach me.
            </p>

            {/* Status chips */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs sm:text-sm font-medium text-primary">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                Open to opportunities
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1 text-xs sm:text-sm text-muted-foreground">
                <MapPin className="size-3.5 text-primary" />
                {siteConfig.location.current}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1 text-xs sm:text-sm text-muted-foreground">
                <Clock className="size-3.5 text-primary" />
                Replies within 24h
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1 text-xs sm:text-sm text-muted-foreground">
                <PhoneOff className="size-3.5 text-primary" />
                Email-only (no phone)
              </span>
            </div>

            {/* Primary CTA — email + copy */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
              <Button
                asChild
                size="lg"
                variant="gradient"
                className="w-full sm:w-auto justify-center min-w-0"
              >
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="min-w-0"
                >
                  <Mail className="size-4 shrink-0" />
                  <span className="truncate">{siteConfig.email}</span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={copyEmail}
                className="w-full sm:w-auto justify-center"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="size-4 text-primary" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="size-4" />
                    Copy email
                  </>
                )}
              </Button>
            </div>

            {/* Social cards */}
            <ul className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {socialLinks.map((s) => {
                const Icon = iconMap[s.id as keyof typeof iconMap];
                return (
                  <li key={s.id}>
                    <a
                      href={s.url}
                      target={s.id === "email" ? undefined : "_blank"}
                      rel={s.id === "email" ? undefined : "noopener noreferrer"}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-background/50 p-3.5 sm:p-4 hover:border-primary/40 hover:bg-accent/5 transition-colors min-h-[64px] sm:min-h-[72px]"
                    >
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary group-hover:bg-primary/25 transition-colors">
                        <Icon className="size-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground font-medium">
                          {s.label}
                        </p>
                        <p className="text-sm font-medium text-foreground truncate">
                          {s.handle}
                        </p>
                      </div>
                      <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Recruiter foot note */}
            <p className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-muted-foreground text-pretty">
              For recruiters: include the role, company, and a brief on the
              stack — I respond same-day to any serious inquiry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
