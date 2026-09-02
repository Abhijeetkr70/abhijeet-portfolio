import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections/footer";
import { BackToTop } from "@/components/back-to-top";
import { SmoothLink } from "@/components/smooth-link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Abhijeet Kumar — email, LinkedIn, GitHub. Open to internships and full-time roles.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Abhijeet Kumar",
    description:
      "Get in touch — email is the fastest way. Open to internships and full-time roles.",
    url: "/contact",
  },
};

export default function ContactPage() {
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
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
