import type { Metadata } from "next";
import { Experience } from "@/components/sections/experience";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections/footer";
import { BackToTop } from "@/components/back-to-top";
import { SmoothLink } from "@/components/smooth-link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Two remote internships — Web Development Intern at ApexPlanet Software and Full-Stack Intern at YHills — with embedded certificates.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Experience — Abhijeet Kumar",
    description:
      "Two remote internships with ApexPlanet and YHills, both with production deliverables and embedded certificates.",
    url: "/experience",
  },
};

export default function ExperiencePage() {
  return (
    <>
      <Nav />
      <main id="main" className="pt-20 sm:pt-24">
        <div className="container max-w-4xl pt-4 sm:pt-6">
          <SmoothLink
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" />
            All sections
          </SmoothLink>
        </div>
        <Experience />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
