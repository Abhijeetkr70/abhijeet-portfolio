"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type SmoothLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

/**
 * Anchor that scrolls smoothly to a section id without putting a `#fragment`
 * in the URL bar. If the target id is not on the current page, navigates
 * to `/?scroll=<id>` and the home page scrolls on mount.
 */
export function SmoothLink({
  href,
  className,
  children,
  onClick,
}: SmoothLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.();

    const id = href.startsWith("#") ? href.slice(1) : href;
    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (pathname === "/") {
      // home but no target found — fallback to top
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // navigate to home with scroll query
    router.push(`/?scroll=${id}`);
  };

  return (
    <a href={href} className={cn(className)} onClick={handleClick}>
      {children}
    </a>
  );
}
