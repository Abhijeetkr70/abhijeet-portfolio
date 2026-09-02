import type { Metadata } from "next";
import { ArrowLeft, FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/nav";
import { siteConfig } from "@/lib/data";

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
      <main
        id="main"
        className="pt-24 pb-16 sm:pt-28 sm:pb-20 min-h-[80vh] flex items-center"
      >
        <div className="container max-w-3xl">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Portfolio
          </a>

          <div className="rounded-3xl border border-border bg-gradient-to-br from-card/80 via-card/50 to-card/30 backdrop-blur p-8 sm:p-12 text-center relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
            />

            <div className="relative">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20 mx-auto">
                <FileText className="size-6" />
              </span>

              <h1 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
                {siteConfig.name} — Resume
              </h1>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                {siteConfig.role}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {siteConfig.location.current}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild size="lg" variant="gradient">
                  <a
                    href={siteConfig.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="size-4" />
                    View Resume
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={siteConfig.resumeUrl} download="Abhijeet-Kumar-Resume.pdf">
                    <Download className="size-4" />
                    Download
                  </a>
                </Button>
              </div>

              <p className="mt-6 text-xs sm:text-sm text-muted-foreground max-w-md mx-auto text-pretty">
                <strong className="text-foreground/80">View Resume</strong>{" "}
                opens the PDF in your default browser, where Chrome, Edge,
                Firefox and Safari all show a built-in download button.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
