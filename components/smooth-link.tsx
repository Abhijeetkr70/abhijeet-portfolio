"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

type SmoothLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

/**
 * Section-route navigation. Always navigates to the given path using Next
 * router (instant client-side transition, no full reload). Falls back to
 * native anchor navigation if the click was modified (cmd/ctrl/shift/middle-click)
 * so recruiters can open a section in a new tab normally.
 */
export function SmoothLink({
  href,
  className,
  children,
  onClick,
}: SmoothLinkProps) {
  const router = useRouter();

  // Normalize href: accept "about", "/about", "#about", "/".
  const normalized = href.startsWith("#")
    ? href.slice(1)
    : href.startsWith("/")
      ? href
      : `/${href}`;
  const targetHref = normalized === "" ? "/" : normalized;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.();

    // Let the browser handle modified clicks (new tab, new window, etc.)
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }

    e.preventDefault();
    router.push(targetHref);
  };

  return (
    <a href={targetHref} className={cn(className)} onClick={handleClick}>
      {children}
    </a>
  );
}
