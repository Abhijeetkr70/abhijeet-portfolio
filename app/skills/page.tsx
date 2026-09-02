import type { Metadata } from "next";
import { Skills } from "@/components/sections/skills";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections/footer";
import { BackToTop } from "@/components/back-to-top";
import { SmoothLink } from "@/components/smooth-link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Full-stack toolkit with AI integration focus: React, Next.js, TypeScript, Node.js, MongoDB, OpenAI/Claude APIs, and more.",
  alternates: { canonical: "/skills" },
  openGraph: {
    title: "Skills — Abhijeet Kumar",
    description:
      "Full-stack toolkit with AI integration focus: React, Next.js, TypeScript, Node.js, MongoDB.",
    url: "/skills",
  },
};

export default function SkillsPage() {
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
        <Skills />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
