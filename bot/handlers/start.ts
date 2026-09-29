import { Context, Telegraf } from 'telegraf'
import { mainMenuKeyboard } from '../keyboards/mainMenu'

export function setupStartHandler(bot: Telegraf) {
  bot.start(async (ctx: Context) => {
    const name = ctx.from?.first_name || 'there'
    await ctx.reply(
      `Hey ${name}! 👋 Welcome to Abhijeet Kumar's Portfolio Bot.\n\nUse the menu buttons below to explore my projects, skills, and contact info, or use /myid to get your Chat ID for visitor tracking.`,
      mainMenuKeyboard
    )
  })

  bot.command('myid', async (ctx: Context) => {
    const chatId = ctx.chat?.id
    await ctx.reply(
      `🆔 *Your Telegram Chat ID:* \`${chatId}\`\n\nTo receive real-time portfolio visitor alerts on this chat, set this value in your environment variables:\n\`TELEGRAM_CHAT_ID=${chatId}\``,
      { parse_mode: 'Markdown' }
    )
  })

  bot.command('track', async (ctx: Context) => {
    const chatId = ctx.chat?.id
    await ctx.reply(
      `🔔 *Telegram Tracker Status*\n\nYour Chat ID: \`${chatId}\`\nUse this ID in your \`.env.local\` and Vercel environment variables as \`TELEGRAM_CHAT_ID\` to receive real-time notifications when someone views your portfolio or resume.`,
      { parse_mode: 'Markdown' }
    )
  })

  bot.help((ctx) =>
    ctx.reply(
      [
        '🤖 *Available Commands:*',
        '/start - Welcome message and main menu',
        '/projects - View featured projects',
        '/skills - View technical skills & stack',
        '/about - About Abhijeet Kumar',
        '/contact - Contact info & social links',
        '/myid - Get your Telegram Chat ID',
        '/help - Show this help message',
      ].join('\n'),
      { parse_mode: 'Markdown' }
    )
  )
}