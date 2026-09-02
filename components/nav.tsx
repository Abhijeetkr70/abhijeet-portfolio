"use client";

import { useEffect, useState } from "react";
import { Menu, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { SmoothLink } from "@/components/smooth-link";
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
          href="/"
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
              <SmoothLink
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md transition-colors"
              >
                {item.label}
              </SmoothLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="outline" className="hidden sm:inline-flex">
            <a href="/resume.pdf" target="_blank" rel="noopener">
              <FileText className="size-4" />
              Resume
            </a>
          </Button>
          <Button asChild size="sm" variant="gradient" className="hidden sm:inline-flex">
            <SmoothLink href="contact">
              <Mail className="size-4" />
              Hire Me
            </SmoothLink>
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
            <SheetContent
              side="right"
              className="w-[220px] max-w-[220px] bg-black border-l border-white/10 p-5 text-white [&>button]:text-white [&>button]:opacity-80 [&>button:hover]:opacity-100"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 mb-6">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent text-xs font-bold text-white">
                    {siteConfig.initials}
                  </span>
                  <span className="font-semibold tracking-tight text-sm text-white">
                    {siteConfig.name}
                  </span>
                </div>
                <ul className="flex flex-col gap-0.5">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <SmoothLink
                          href={item.href}
                          className="block px-2.5 py-2.5 text-sm font-medium text-white/85 hover:text-white rounded-md hover:bg-white/10 transition-colors"
                        >
                          {item.label}
                        </SmoothLink>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 flex flex-col gap-2">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="w-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  >
                    <a href="/resume.pdf" target="_blank" rel="noopener">
                      <FileText className="size-4" />
                      Resume
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="gradient" className="w-full">
                    <SmoothLink href="contact">
                      <Mail className="size-4" />
                      Hire Me
                    </SmoothLink>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
