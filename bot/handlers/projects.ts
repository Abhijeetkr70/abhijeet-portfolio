import { Context, Telegraf } from 'telegraf'
import { fetchProjects } from '../utils/portfolio'

export function setupProjectsHandler(bot: Telegraf) {
  const handler = async (ctx: Context) => {
    const projects = await fetchProjects()

    if (!projects.length) {
      return ctx.reply('No projects found. Check the portfolio website for updates!')
    }

    const msg = [
      '🚀 *Featured Projects*',
      '',
      ...projects.map((p, i) =>
        `${i + 1}. *${p.title}*\n   ${p.description}\n   🔗 ${p.url}`
      ),
    ].join('\n\n')

    await ctx.reply(msg, { parse_mode: 'Markdown' })
  }

  bot.hears('📂 Projects', handler)
  bot.command('projects', handler)
}