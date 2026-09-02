import type { Metadata } from "next";
import { Education } from "@/components/sections/education";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections/footer";
import { BackToTop } from "@/components/back-to-top";
import { SmoothLink } from "@/components/smooth-link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Education",
  description:
    "B.Tech in Computer Science & Engineering at Jagannath University, Jaipur — CGPA 7.0.",
  alternates: { canonical: "/education" },
  openGraph: {
    title: "Education — Abhijeet Kumar",
    description:
      "B.Tech in Computer Science & Engineering at Jagannath University, Jaipur.",
    url: "/education",
  },
};

export default function EducationPage() {
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
        <Education />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
