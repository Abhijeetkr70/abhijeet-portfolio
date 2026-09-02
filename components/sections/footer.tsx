import { siteConfig } from "@/lib/data";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 py-10 sm:py-12">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent text-xs font-bold text-primary-foreground">
                {siteConfig.initials}
              </span>
              <span className="font-semibold tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs leading-relaxed">
              {siteConfig.role}. Building production-grade web apps with
              MERN + AI.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
              Sitemap
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <a href="#about" className="hover:text-foreground text-muted-foreground">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-foreground text-muted-foreground">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-foreground text-muted-foreground">
                  Experience
                </a>
              </li>
              <li>
                <a href="/resume" className="hover:text-foreground text-muted-foreground">
                  Resume
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-foreground text-muted-foreground">
                  sitemap.xml
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
              Resources
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <a href="/llms.txt" className="hover:text-foreground text-muted-foreground">
                  llms.txt
                </a>
              </li>
              <li>
                <a href="/llms-full.txt" className="hover:text-foreground text-muted-foreground">
                  llms-full.txt
                </a>
              </li>
              <li>
                <a href="/agents.txt" className="hover:text-foreground text-muted-foreground">
                  agents.txt
                </a>
              </li>
              <li>
                <a href="/humans.txt" className="hover:text-foreground text-muted-foreground">
                  humans.txt
                </a>
              </li>
              <li>
                <a href="/robots.txt" className="hover:text-foreground text-muted-foreground">
                  robots.txt
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {year} {siteConfig.name}. Built with Next.js, Tailwind CSS & shadcn/ui.
          </p>
          <p>Last updated: {new Date().toISOString().slice(0, 10)}</p>
        </div>
      </div>
    </footer>
  );
}
