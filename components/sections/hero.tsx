"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroStats, siteConfig } from "@/lib/data";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="top"
      className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 mask-radial-fade bg-grid opacity-50"
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 -z-10 h-[28rem] w-[60rem] max-w-full rounded-full bg-gradient-to-tr from-primary/30 via-accent/20 to-transparent blur-3xl animate-pulse-glow"
      />

      <div className="container">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <div
            className={`order-2 lg:order-1 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <Badge variant="default" className="mb-5 gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {siteConfig.status}
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance leading-[1.05]">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
              .
            </h1>

            <p className="mt-5 text-lg sm:text-xl lg:text-2xl font-medium text-foreground/90 text-balance">
              {siteConfig.role}
            </p>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl text-pretty leading-relaxed">
              {siteConfig.tagline} Open to internships and full-time roles
              where I can ship real product with MERN + AI.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4 text-primary" />
                {siteConfig.location.current}
              </span>
              <span aria-hidden className="text-border">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="size-4 text-accent" />
                From {siteConfig.location.origin}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" variant="gradient">
                <a href="#projects">
                  View Projects
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={siteConfig.resumeUrl} download="Abhijeet-Kumar-Resume.pdf">
                  <Download className="size-4" />
                  Download Resume
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail className="size-4" />
                  Email
                </a>
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm">
              <span className="text-muted-foreground mr-1">Find me on</span>
              <Button asChild size="icon" variant="outline" className="size-10">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="size-4" />
                </a>
              </Button>
              <Button asChild size="icon" variant="outline" className="size-10">
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          <div
            className={`order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-700 delay-150 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-2 sm:-inset-4 rounded-full bg-gradient-to-tr from-primary/40 via-accent/30 to-primary/10 blur-2xl"
              />
              <div className="relative h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80 rounded-full overflow-hidden border-2 border-border ring-4 ring-primary/20 shadow-2xl shadow-primary/20">
                <Image
                  src="/profile.webp"
                  alt={`Portrait of ${siteConfig.name}, Full-Stack Developer`}
                  fill
                  priority
                  sizes="(max-width: 640px) 12rem, (max-width: 1024px) 16rem, 20rem"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABAAEADAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AL+AAAAAAAAAAAAAAAA//9k="
                />
              </div>

              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 hidden sm:flex items-center gap-2 rounded-xl border border-border bg-card/90 backdrop-blur px-3 py-2 shadow-lg">
                <span className="text-2xl font-bold text-primary">90+</span>
                <span className="text-xs text-muted-foreground leading-tight">
                  Lighthouse
                  <br />
                  Score
                </span>
              </div>
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 hidden sm:flex items-center gap-2 rounded-xl border border-border bg-card/90 backdrop-blur px-3 py-2 shadow-lg">
                <span className="text-2xl font-bold text-accent">2</span>
                <span className="text-xs text-muted-foreground leading-tight">
                  Internships
                  <br />
                  Completed
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {heroStats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-card/50 backdrop-blur p-4 sm:p-5 text-center hover:border-primary/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
