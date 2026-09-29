import { Context, Telegraf } from 'telegraf'
import { getContactInfo } from '../utils/portfolio'

export function setupAboutHandler(bot: Telegraf) {
  const handler = async (ctx: Context) => {
    const contact = getContactInfo()
    const msg = [
      `👨‍💻 *About ${contact.name}*`,
      '',
      'Full-Stack Developer focused on MERN stack and AI integration.',
      `📍 Based in ${contact.location}.`,
      '2 completed internships (ApexPlanet & YHills).',
      '',
      `🌐 *Portfolio:* ${contact.portfolio}`,
      `📧 *Email:* ${contact.email}`,
      `🐙 *GitHub:* ${contact.github}`,
      `💼 *LinkedIn:* ${contact.linkedin}`,
    ].join('\n')

    await ctx.reply(msg, { parse_mode: 'Markdown' })
  }

  bot.hears('ℹ️ About', handler)
  bot.command('about', handler)
}