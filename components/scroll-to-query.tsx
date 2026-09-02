"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

/**
 * Reads `?scroll=<id>` from the URL and scrolls to the element after mount.
 * Used when navigating from another page (e.g. case study "back to projects")
 * without using a hash fragment in the URL.
 */
export function ScrollToQuery() {
  const params = useSearchParams();
  useEffect(() => {
    const target = params.get("scroll");
    if (!target) return;
    const el = document.getElementById(target);
    if (el) {
      // small delay to let sections render
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [params]);
  return null;
}
