"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    trackTelegramEvent?: (action: string) => void;
  }
}

export function TelegramTracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    // Expose global helper for custom action tracking
    window.trackTelegramEvent = (action: string) => {
      try {
        fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            page: window.location.pathname,
            referrer: document.referrer || "Direct",
            action,
          }),
          keepalive: true,
        }).catch(() => {
          // ignore tracking errors on client
        });
      } catch {
        // no-op
      }
    };
  }, []);

  useEffect(() => {
    if (!pathname || pathname === lastTrackedPath.current) return;

    // Session-based deduplication to avoid spamming on F5 refresh
    const sessionKey = `tg_track_${pathname}`;
    const alreadyTrackedInSession = sessionStorage.getItem(sessionKey);

    if (!alreadyTrackedInSession) {
      sessionStorage.setItem(sessionKey, "1");
      lastTrackedPath.current = pathname;

      try {
        fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            page: pathname,
            referrer: document.referrer || "Direct",
          }),
          keepalive: true,
        }).catch(() => {});
      } catch {
        // no-op
      }
    }
  }, [pathname]);

  return null;
}
