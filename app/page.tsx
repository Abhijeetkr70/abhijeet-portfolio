import { Suspense } from "react";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Achievements } from "@/components/sections/achievements";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { BackToTop } from "@/components/back-to-top";
import { ScrollToQuery } from "@/components/scroll-to-query";
import { PersonJsonLd } from "@/components/seo/person-jsonld";
import { WebsiteJsonLd } from "@/components/seo/website-jsonld";
import { FaqJsonLd } from "@/components/seo/faq-jsonld";
import { ProjectsJsonLd } from "@/components/seo/projects-jsonld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";

export default function HomePage() {
  return (
    <>
      <PersonJsonLd />
      <WebsiteJsonLd />
      <BreadcrumbJsonLd />
      <ProjectsJsonLd />
      <FaqJsonLd />

      <Nav />
      <Suspense fallback={null}>
        <ScrollToQuery />
      </Suspense>
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
