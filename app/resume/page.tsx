import type { Metadata } from "next";
import { Download, ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/nav";
import { siteConfig } from "@/lib/data";
import { BackToTop } from "@/components/back-to-top";

export const metadata: Metadata = {
  title: "Resume",
  description: `View and download the resume of ${siteConfig.name} — Full-Stack Developer | AI Integration. MERN stack, two internships, shipped projects.`,
  alternates: { canonical: "/resume" },
  openGraph: {
    title: `Resume — ${siteConfig.name}`,
    description: `View and download the resume of ${siteConfig.name}.`,
    url: "/resume",
  },
};

export default function ResumePage() {
  return (
    <>
      <Nav />
      <main id="main" className="pt-24 pb-12 sm:pt-28 sm:pb-16 min-h-screen">
        <div className="container max-w-5xl">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Portfolio
          </a>

          <header className="rounded-2xl border border-border bg-card/50 backdrop-blur p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
                {siteConfig.name} — Resume
              </h1>
              <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                {siteConfig.role}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button asChild variant="gradient" size="sm">
                <a href={siteConfig.resumeUrl} download="Abhijeet-Kumar-Resume.pdf">
                  <Download className="size-4" />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in new tab
                  <ExternalLink className="size-3.5" />
                </a>
              </Button>
            </div>
          </header>

          <div className="mt-6 rounded-2xl border border-border overflow-hidden bg-card/30">
            <div className="aspect-[1/1.414] w-full bg-background relative">
              <object
                data={`${siteConfig.resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                type="application/pdf"
                aria-label={`${siteConfig.name} — Resume PDF`}
                className="absolute inset-0 w-full h-full"
              >
                <iframe
                  src={siteConfig.resumeUrl}
                  title={`${siteConfig.name} — Resume PDF`}
                  className="absolute inset-0 w-full h-full border-0"
                />
              </object>
            </div>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-muted-foreground text-center">
            If the preview doesn&apos;t load,{" "}
            <a
              href={siteConfig.resumeUrl}
              download="Abhijeet-Kumar-Resume.pdf"
              className="text-primary hover:underline"
            >
              click here to download
            </a>
            .
          </p>
        </div>
      </main>
      <BackToTop />
    </>
  );
}
