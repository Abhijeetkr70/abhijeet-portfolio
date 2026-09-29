import { NextRequest, NextResponse } from "next/server";
import { getBotToken } from "@/lib/telegram";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const token = getBotToken();
  if (!token) {
    return NextResponse.json(
      { error: "BOT_TOKEN is missing" },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(req.url);
  const action = searchParams.get("action") || "status";

  // Determine base site URL
  const baseUrl =
    process.env.PORTFOLIO_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    (req.headers.get("host") ? `https://${req.headers.get("host")}` : "https://abhijeet-kr.vercel.app");

  const webhookUrl = `${baseUrl.replace(/\/$/, "")}/api/telegram`;
  const secretToken = process.env.TELEGRAM_WEBHOOK_SECRET;

  try {
    if (action === "set") {
      // Register webhook with Telegram
      const setUrl = new URL(`https://api.telegram.org/bot${token}/setWebhook`);
      setUrl.searchParams.set("url", webhookUrl);
      if (secretToken) {
        setUrl.searchParams.set("secret_token", secretToken);
      }
      setUrl.searchParams.set(
        "allowed_updates",
        JSON.stringify(["message", "callback_query"])
      );

      const res = await fetch(setUrl.toString());
      const data = await res.json();

      return NextResponse.json({
        action: "setWebhook",
        webhookUrl,
        telegramResponse: data,
        success: data.ok,
        message: data.ok
          ? "🎉 Telegram Webhook successfully connected to Vercel!"
          : "⚠️ Telegram rejected the webhook URL. Ensure your domain is public (https).",
      });
    }

    if (action === "delete") {
      // Remove webhook (switch back to polling for local testing)
      const res = await fetch(
        `https://api.telegram.org/bot${token}/deleteWebhook`
      );
      const data = await res.json();
      return NextResponse.json({
        action: "deleteWebhook",
        telegramResponse: data,
        message: "Webhook deleted. You can now run local bot polling.",
      });
    }

    // Default: Check current webhook status
    const res = await fetch(`https://api.telegram.org/bot${token}/getWebhookInfo`);
    const data = await res.json();

    return NextResponse.json({
      action: "getWebhookInfo",
      targetWebhookUrl: webhookUrl,
      currentWebhook: data.result,
      isConfigured: data.result?.url === webhookUrl,
      help: {
        toSetWebhook: `${baseUrl}/api/telegram/setup?action=set`,
        toDeleteWebhook: `${baseUrl}/api/telegram/setup?action=delete`,
      },
    });
  } catch (error: unknown) {
    const err = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
