/**
 * Telegram Bot API Utility
 * Optimized for Vercel Serverless and Edge runtimes with native fetch.
 */

interface SendMessageOptions {
  chatId?: string | number;
  parse_mode?: "HTML" | "Markdown" | "MarkdownV2";
  disable_web_page_preview?: boolean;
}

export interface VisitorInfo {
  page: string;
  referrer?: string;
  ip?: string;
  city?: string;
  region?: string;
  country?: string;
  countryCode?: string;
  userAgent?: string;
  action?: string;
}

/**
 * Sends a message via Telegram Bot API
 */
export async function sendTelegramMessage(
  text: string,
  options: SendMessageOptions = {}
): Promise<{ success: boolean; error?: string }> {
  const token = process.env.BOT_TOKEN;
  const chatId = options.chatId || process.env.TELEGRAM_CHAT_ID;

  if (!token) {
    console.warn("[Telegram] BOT_TOKEN is not configured.");
    return { success: false, error: "BOT_TOKEN missing" };
  }

  if (!chatId) {
    console.warn(
      "[Telegram] TELEGRAM_CHAT_ID is not configured. Set it in .env.local to receive notifications."
    );
    return { success: false, error: "TELEGRAM_CHAT_ID missing" };
  }

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: options.parse_mode ?? "HTML",
        disable_web_page_preview: options.disable_web_page_preview ?? true,
      }),
    });

    const data = await res.json();
    if (!res.ok || !data.ok) {
      console.error("[Telegram] API error:", data);
      return {
        success: false,
        error: data.description || "Failed to send Telegram message",
      };
    }

    return { success: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[Telegram] Network error:", message);
    return { success: false, error: message };
  }
}

/**
 * Format and send a visitor notification alert
 */
export async function sendVisitorAlert(
  info: VisitorInfo
): Promise<{ success: boolean; error?: string }> {
  const time = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const locationParts: string[] = [];
  if (info.city && info.city !== "Unknown") locationParts.push(info.city);
  if (info.region && info.region !== "Unknown") locationParts.push(info.region);
  if (info.country && info.country !== "Unknown") locationParts.push(info.country);

  const flag = getCountryFlagEmoji(info.countryCode);
  const locationStr =
    locationParts.length > 0
      ? `${locationParts.join(", ")} ${flag}`
      : "Unknown Location 🌐";

  const device = parseUserAgent(info.userAgent || "");
  const isAction = Boolean(info.action);

  const title = isAction
    ? `⚡ <b>Action: ${escapeHtml(info.action || "")}</b>`
    : `🚀 <b>New Portfolio Visitor!</b>`;

  const message = [
    title,
    `━━━━━━━━━━━━━━━━━━━`,
    `📍 <b>Location:</b> ${locationStr}`,
    `📱 <b>Device:</b> ${device.deviceCategory} (${device.os})`,
    `🌐 <b>Browser:</b> ${device.browser}`,
    `🔗 <b>Page:</b> <code>${escapeHtml(info.page || "/")}</code>`,
    info.referrer && info.referrer !== "Direct"
      ? `🌐 <b>Referrer:</b> ${escapeHtml(info.referrer)}`
      : `🌐 <b>Referrer:</b> Direct / Organic`,
    info.ip ? `🖥️ <b>IP:</b> <code>${escapeHtml(info.ip)}</code>` : "",
    `⏱️ <b>Time:</b> ${time} IST`,
    `━━━━━━━━━━━━━━━━━━━`,
  ]
    .filter(Boolean)
    .join("\n");

  return sendTelegramMessage(message, { parse_mode: "HTML" });
}

/**
 * Helper to escape HTML tags for Telegram HTML parse_mode
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Convert 2-letter ISO country code to Emoji Flag
 */
function getCountryFlagEmoji(countryCode?: string): string {
  if (!countryCode || countryCode.length !== 2) return "";
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

/**
 * Comprehensive user agent parser for device, brand, OS & browser detection
 */
function parseUserAgent(ua: string): {
  type: "Mobile" | "Tablet" | "Desktop" | "Bot";
  deviceCategory: string;
  os: string;
  browser: string;
} {
  if (!ua) {
    return {
      type: "Desktop",
      deviceCategory: "Computer / System 💻",
      os: "Unknown OS",
      browser: "Unknown Browser",
    };
  }

  const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(ua);
  if (isBot) {
    return {
      type: "Bot",
      deviceCategory: "Web Crawler / Bot 🤖",
      os: "Crawler",
      browser: "Bot",
    };
  }

  const isIpad = /ipad/i.test(ua) || (navigatorUaIsIpad(ua));
  const isIphone = /iphone|ipod/i.test(ua);
  const isAndroidTablet = /android(?!.*mobile)/i.test(ua);
  const isAndroidMobile = /android.*mobile/i.test(ua);
  const isMobile = isIphone || isAndroidMobile || /windows phone/i.test(ua);
  const isTablet = isIpad || isAndroidTablet || /tablet/i.test(ua);

  let type: "Mobile" | "Tablet" | "Desktop" = "Desktop";
  let deviceCategory = "Computer / Laptop 💻";

  if (isTablet) {
    type = "Tablet";
    deviceCategory = "Tablet 📟";
  } else if (isMobile) {
    type = "Mobile";
    deviceCategory = "Mobile Phone 📱";
  }

  // Detect brand / model hint
  let brand = "";
  if (isIphone) brand = "Apple iPhone";
  else if (isIpad) brand = "Apple iPad";
  else if (/samsung|sm-[a-z0-9]+/i.test(ua)) brand = "Samsung";
  else if (/pixel/i.test(ua)) brand = "Google Pixel";
  else if (/oneplus/i.test(ua)) brand = "OnePlus";
  else if (/xiaomi|mi |redmi|poco/i.test(ua)) brand = "Xiaomi / Redmi";
  else if (/vivo/i.test(ua)) brand = "Vivo";
  else if (/oppo/i.test(ua)) brand = "Oppo";
  else if (/realme/i.test(ua)) brand = "Realme";
  else if (/motorola|moto/i.test(ua)) brand = "Motorola";
  else if (/macintosh|mac os x/i.test(ua)) brand = "Apple Mac";

  // Detect OS
  let os = "Unknown OS";
  if (isIphone) os = "iOS (iPhone)";
  else if (isIpad) os = "iPadOS (iPad)";
  else if (/android/i.test(ua)) os = brand ? `Android (${brand})` : "Android";
  else if (/windows nt 10\.0/i.test(ua)) os = "Windows 10/11";
  else if (/windows nt 6\.3/i.test(ua)) os = "Windows 8.1";
  else if (/windows nt 6\.1/i.test(ua)) os = "Windows 7";
  else if (/windows/i.test(ua)) os = "Windows PC";
  else if (/macintosh|mac os x/i.test(ua)) os = "macOS (MacBook/iMac)";
  else if (/cros/i.test(ua)) os = "ChromeOS";
  else if (/linux/i.test(ua)) os = "Linux";

  // Detect In-App or Browser
  let browser = "Browser";
  if (/whatsapp/i.test(ua)) browser = "WhatsApp In-App";
  else if (/instagram/i.test(ua)) browser = "Instagram In-App";
  else if (/linkedinapp/i.test(ua)) browser = "LinkedIn In-App";
  else if (/telegram/i.test(ua)) browser = "Telegram In-App";
  else if (/fbav|fban|facebook/i.test(ua)) browser = "Facebook In-App";
  else if (/samsungbrowser/i.test(ua)) browser = "Samsung Internet";
  else if (/brave/i.test(ua)) browser = "Brave";
  else if (/edg\//i.test(ua)) browser = "Microsoft Edge";
  else if (/chrome|crios/i.test(ua)) browser = "Google Chrome";
  else if (/firefox|fxios/i.test(ua)) browser = "Mozilla Firefox";
  else if (/safari/i.test(ua)) browser = "Apple Safari";
  else if (/opera|opr\//i.test(ua)) browser = "Opera";
  else if (/ucbrowser/i.test(ua)) browser = "UC Browser";

  return { type, deviceCategory, os, browser };
}

function navigatorUaIsIpad(ua: string): boolean {
  return /macintosh/i.test(ua) && "ontouchend" in {};
}
