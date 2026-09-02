import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections/footer";
import { BackToTop } from "@/components/back-to-top";
import { SmoothLink } from "@/components/smooth-link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "B.Tech CSE student at Jagannath University, Jaipur — building production-grade web apps with the MERN stack and AI integration.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Abhijeet Kumar",
    description:
      "B.Tech CSE student at Jagannath University, Jaipur — MERN stack + AI integration.",
    url: "/about",
  },
};

export default function AboutPage() {
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
        <About />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
