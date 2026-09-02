"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-16 sm:py-24 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent"
    >
      <div className="container max-w-3xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block h-px w-8 bg-primary" />
          <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-primary">
            FAQ
          </span>
        </div>
        <h2
          id="faq-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance"
        >
          Quick answers for{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            recruiters
          </span>
          .
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground text-pretty">
          The most common questions I get — answered in one place.
        </p>

        <Accordion type="single" collapsible className="mt-10 w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="last:border-b-0">
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
