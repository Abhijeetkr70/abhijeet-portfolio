import { Context, Telegraf } from 'telegraf'
import { fetchSkills } from '../utils/portfolio'

export function setupSkillsHandler(bot: Telegraf) {
  const handler = async (ctx: Context) => {
    const skills = await fetchSkills()

    if (!skills.length) {
      return ctx.reply('No skills data available.')
    }

    const categorized = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = []
      acc[skill.category].push(skill.name)
      return acc
    }, {} as Record<string, string[]>)

    const msg = [
      '🛠 *Skills & Technologies*',
      '',
      ...Object.entries(categorized).map(
        ([category, names]) => `*${category}*\n${names.map((n) => `• ${n}`).join('\n')}`
      ),
    ].join('\n\n')

    await ctx.reply(msg, { parse_mode: 'Markdown' })
  }

  bot.hears('🛠 Skills', handler)
  bot.command('skills', handler)
}