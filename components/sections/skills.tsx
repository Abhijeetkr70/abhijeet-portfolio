"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-16 sm:py-24 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent"
    >
      <div className="container">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block h-px w-8 bg-primary" />
          <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-primary">
            Skills
          </span>
        </div>
        <h2
          id="skills-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance max-w-3xl"
        >
          A full-stack toolkit with a growing{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            AI integration
          </span>{" "}
          focus.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl text-pretty">
          Everything I use to design, build, and ship production web apps —
          grouped so recruiters can scan quickly.
        </p>

        <Tabs defaultValue={skillGroups[0].id} className="mt-10">
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 pb-2">
            <TabsList>
              {skillGroups.map((g) => (
                <TabsTrigger key={g.id} value={g.id}>
                  {g.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {skillGroups.map((g) => (
            <TabsContent key={g.id} value={g.id}>
              <div className="rounded-xl border border-border bg-card/40 backdrop-blur p-5 sm:p-7">
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="muted"
                      className="text-sm px-3 py-1.5 font-medium hover:bg-primary/15 hover:text-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
