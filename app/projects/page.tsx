import type { Metadata } from "next";
import { Projects } from "@/components/sections/projects";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections/footer";
import { BackToTop } from "@/components/back-to-top";
import { SmoothLink } from "@/components/smooth-link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Two flagship projects — SmartNotes Application (MERN + Clerk) and Frontend Utility Suite (vanilla JS SPA). Tap any card for the full case study.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Abhijeet Kumar",
    description:
      "Two flagship projects with full case studies: SmartNotes Application and Frontend Utility Suite.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
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
        <Projects />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
