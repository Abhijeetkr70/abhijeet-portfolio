import type { Metadata } from "next";
import { Faq } from "@/components/sections/faq";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections/footer";
import { BackToTop } from "@/components/back-to-top";
import { SmoothLink } from "@/components/smooth-link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Abhijeet Kumar — background, stack, internships, location, and contact.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ — Abhijeet Kumar",
    description: "Quick answers for recruiters.",
    url: "/faq",
  },
};

export default function FaqPage() {
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
        <Faq />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
