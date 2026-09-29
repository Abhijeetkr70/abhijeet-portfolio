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
    if (!pathname) return;

    // 10-minute cooldown per page to prevent spamming on rapid F5 reloads,
    // while ensuring every new visitor or returning visitor is tracked.
    const sessionKey = `tg_track_${pathname}`;
    const lastTrackTime = sessionStorage.getItem(sessionKey);
    const now = Date.now();
    const COOLDOWN_MS = 10 * 60 * 1000; // 10 minutes

    if (!lastTrackTime || now - Number(lastTrackTime) > COOLDOWN_MS) {
      sessionStorage.setItem(sessionKey, String(now));
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
