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
 * Hybrid navigation:
 *  - On the home page: scrolls smoothly to the section id, URL stays clean (/).
 *  - On any other page: navigates to the corresponding /<id> route.
 * No `#` fragments are ever written to the URL.
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
    if (!id) return;

    // On home, try to scroll to the in-page section.
    if (pathname === "/") {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    // Off home (or home without a matching id) — go to the route.
    router.push(`/${id}`);
  };

  return (
    <a href={`/${href.startsWith("#") ? href.slice(1) : href}`} className={cn(className)} onClick={handleClick}>
      {children}
    </a>
  );
}
