"use client";

import { useEffect, useState } from "react";
import { Menu, FileText, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { navItems, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="container flex h-16 items-center justify-between gap-4"
      >
        <a
          href="#top"
          className="flex items-center gap-2 group"
          aria-label={`${siteConfig.name} — Home`}
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20">
            {siteConfig.initials}
          </span>
          <span className="hidden sm:inline-block font-semibold tracking-tight text-foreground">
            {siteConfig.name}
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="outline" className="hidden sm:inline-flex">
            <a href="/resume" target="_blank" rel="noopener">
              <FileText className="size-4" />
              Resume
            </a>
          </Button>
          <Button asChild size="sm" variant="gradient" className="hidden sm:inline-flex">
            <a href="#contact">
              <Mail className="size-4" />
              Hire Me
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 mb-8">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground">
                    {siteConfig.initials}
                  </span>
                  <span className="font-semibold tracking-tight">
                    {siteConfig.name}
                  </span>
                </div>
                <ul className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <a
                          href={item.href}
                          className="block px-3 py-3 text-base font-medium text-foreground/90 hover:text-foreground rounded-md hover:bg-accent/10 transition-colors"
                        >
                          {item.label}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6 flex flex-col gap-3">
                  <Button asChild variant="outline" className="w-full">
                    <a href="/resume" target="_blank" rel="noopener">
                      <FileText className="size-4" />
                      View Resume
                    </a>
                  </Button>
                  <Button asChild variant="gradient" className="w-full">
                    <a href="#contact">
                      <Mail className="size-4" />
                      Hire Me
                    </a>
                  </Button>
                  <div className="flex items-center justify-center gap-3 pt-4 text-muted-foreground">
                    <a
                      href={siteConfig.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="hover:text-foreground transition-colors"
                    >
                      <Github className="size-5" />
                    </a>
                    <a
                      href={siteConfig.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="hover:text-foreground transition-colors"
                    >
                      <Linkedin className="size-5" />
                    </a>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      aria-label="Email"
                      className="hover:text-foreground transition-colors"
                    >
                      <Mail className="size-5" />
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
