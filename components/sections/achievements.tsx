import { TrendingUp } from "lucide-react";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section
      aria-labelledby="achievements-heading"
      className="py-16 sm:py-24"
    >
      <div className="container max-w-5xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block h-px w-8 bg-primary" />
          <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-primary">
            Highlights
          </span>
        </div>
        <h2
          id="achievements-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance"
        >
          Numbers that{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            speak for themselves
          </span>
          .
        </h2>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {achievements.map((a) => (
            <div
              key={a.label}
              className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur p-5 sm:p-6 hover:border-primary/40 transition-all hover:-translate-y-0.5"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <div className="flex items-start justify-between">
                <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                  {a.value}
                </span>
                <TrendingUp className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="mt-3 text-sm sm:text-base font-medium text-foreground">
                {a.label}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {a.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
