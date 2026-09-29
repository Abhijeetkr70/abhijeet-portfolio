import { NextRequest, NextResponse } from "next/server";
import { sendVisitorAlert, getBotToken, getTelegramChatId } from "@/lib/telegram";

const BOT_PATTERNS = [
  /googlebot/i,
  /bingbot/i,
  /yandex/i,
  /duckduckbot/i,
  /baiduspider/i,
  /slurp/i,
  /facebot/i,
  /facebookexternalhit/i,
  /twitterbot/i,
  /linkedinbot/i,
  /embedly/i,
  /quora link preview/i,
  /outbrain/i,
  /pinterest/i,
  /semrushbot/i,
  /ahrefsbot/i,
  /mj12bot/i,
  /bot\b/i,
  /spider\b/i,
  /crawl\b/i,
  /headlesschrome/i,
  /vercel-screenshot/i,
];

function isCrawler(userAgent: string): boolean {
  if (!userAgent) return false;
  return BOT_PATTERNS.some((pattern) => pattern.test(userAgent));
}

export async function POST(req: NextRequest) {
  try {
    const userAgent = req.headers.get("user-agent") || "";

    // Ignore automated search engine crawlers to avoid spam
    if (isCrawler(userAgent)) {
      return NextResponse.json({ skipped: true, reason: "bot" });
    }

    let body: { page?: string; referrer?: string; action?: string } = {};
    try {
      body = await req.json();
    } catch {
      // Body may be empty
    }

    // Extract headers (Vercel provides geo headers automatically on production)
    const countryCode = req.headers.get("x-vercel-ip-country") || "";
    const country = countryCode ? getCountryName(countryCode) : "";
    const city = req.headers.get("x-vercel-ip-city") || "";
    const region = req.headers.get("x-vercel-ip-country-region") || "";
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "";

    const page = body.page || "/";
    const referrer = body.referrer || req.headers.get("referer") || "Direct";
    const action = body.action;

    // Send alert asynchronously (won't block response)
    const alertResult = await sendVisitorAlert({
      page,
      referrer,
      ip,
      city: city ? decodeURIComponent(city) : undefined,
      region,
      country,
      countryCode,
      userAgent,
      action,
    });

    return NextResponse.json({
      success: true,
      alertSent: alertResult.success,
      error: alertResult.error,
    });
  } catch (error: unknown) {
    const err = error instanceof Error ? error.message : String(error);
    console.error("[Track API] Error:", err);
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}

export async function GET() {
  // Test endpoint to check tracking configuration
  const hasToken = Boolean(getBotToken());
  const hasChatId = Boolean(getTelegramChatId());

  return NextResponse.json({
    status: "online",
    botConfigured: hasToken,
    chatIdConfigured: hasChatId,
    timestamp: new Date().toISOString(),
    tip: "Telegram tracker is active for all devices and visitors",
  });
}

function getCountryName(code: string): string {
  try {
    const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    return regionNames.of(code.toUpperCase()) || code;
  } catch {
    return code;
  }
}
