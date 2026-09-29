import { NextRequest, NextResponse } from "next/server";
import { getBot } from "@/bot/index";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    // Optional secret token verification for extra security
    const secretHeader = req.headers.get("x-telegram-bot-api-secret-token");
    const expectedSecret = process.env.TELEGRAM_WEBHOOK_SECRET;

    if (expectedSecret && secretHeader !== expectedSecret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const bot = getBot();

    // Process incoming webhook update
    await bot.handleUpdate(body);

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("[Telegram Webhook] Error:", message);
    // Return 200 so Telegram does not get stuck retrying the same payload
    return NextResponse.json({ ok: false, error: message }, { status: 200 });
  }
}

export async function GET() {
  const hasToken = Boolean(process.env.BOT_TOKEN);

  return NextResponse.json({
    status: "active",
    type: "Telegram Serverless Webhook Endpoint",
    botConfigured: hasToken,
    url: "/api/telegram",
    tip: "Use /api/telegram/setup to automatically register this webhook with Telegram",
  });
}
