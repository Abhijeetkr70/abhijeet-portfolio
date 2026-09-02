import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center container">
      <div className="text-center max-w-md">
        <p className="text-sm uppercase tracking-widest text-primary">404</p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
          Page not found
        </h1>
        <p className="mt-3 text-muted-foreground text-pretty">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to the portfolio.
        </p>
        <div className="mt-6">
          <Button asChild variant="gradient">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
