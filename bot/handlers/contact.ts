import { Context, Telegraf } from 'telegraf'
import { getContactInfo } from '../utils/portfolio'

export function setupContactHandler(bot: Telegraf) {
  const handler = async (ctx: Context) => {
    const contact = getContactInfo()

    const msg = [
      `📬 *Get in touch with ${contact.name}*`,
      '',
      `📧 *Email:* ${contact.email}`,
      `💼 *LinkedIn:* ${contact.linkedin}`,
      `🐙 *GitHub:* ${contact.github}`,
      `🌐 *Portfolio:* ${contact.portfolio}`,
      '',
      'Feel free to reach out for internships, roles, or collaborations!',
    ].join('\n')

    await ctx.reply(msg, { parse_mode: 'Markdown' })
  }

  bot.hears('📞 Contact', handler)
  bot.command('contact', handler)
}