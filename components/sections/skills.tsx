"use client";

import { Sparkles, Wrench } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { featuredStack, skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-16 sm:py-24 scroll-mt-20 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent"
    >
      <div className="container">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block h-px w-8 bg-primary" />
          <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-primary">
            Skills
          </span>
        </div>

        {/* Heading */}
        <h2
          id="skills-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance max-w-3xl leading-[1.1]"
        >
          A full-stack toolkit with a growing{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            AI integration
          </span>{" "}
          focus.
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl text-pretty leading-relaxed">
          Everything I use to design, build, and ship production web apps —
          grouped so recruiters can scan in seconds.
        </p>

        {/* Featured stack — "currently shipping with" */}
        <div className="mt-8 sm:mt-10 rounded-2xl border border-primary/20 bg-primary/[0.04] p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="size-3.5 text-primary" />
            <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-primary">
              Currently shipping with
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {featuredStack.map((s) => (
              <Badge
                key={s}
                variant="default"
                className="text-xs sm:text-sm px-2.5 sm:px-3 py-1 sm:py-1.5 font-medium"
              >
                {s}
              </Badge>
            ))}
          </div>
        </div>

        {/* Tabbed groups */}
        <Tabs defaultValue={skillGroups[0].id} className="mt-8 sm:mt-10">
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 scrollbar-hide">
            <TabsList>
              {skillGroups.map((g) => (
                <TabsTrigger key={g.id} value={g.id} className="gap-1.5">
                  <span>{g.label}</span>
                  <span className="text-[10px] text-muted-foreground font-normal">
                    {g.skills.length}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillGroups.map((g) => (
            <TabsContent key={g.id} value={g.id} className="mt-4 sm:mt-6">
              <div className="rounded-2xl border border-border bg-card/40 backdrop-blur p-5 sm:p-7 lg:p-8">
                <div className="flex items-start gap-2 mb-4 sm:mb-5">
                  <Wrench className="size-3.5 sm:size-4 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm sm:text-base text-muted-foreground text-pretty leading-relaxed">
                    {g.description}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                  {g.skills.map((skill) => (
                    <li key={skill}>
                      <Badge
                        variant="muted"
                        className="text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 font-medium hover:bg-primary/15 hover:text-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 sm:mt-6 text-xs text-muted-foreground">
                  {g.skills.length}{" "}
                  {g.skills.length === 1 ? "tool" : "tools"} in this group
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Bottom helper line */}
        <p className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-muted-foreground text-pretty">
          New to a tool? I ramp up fast — most of these I picked up mid-project.
        </p>
      </div>
    </section>
  );
}
