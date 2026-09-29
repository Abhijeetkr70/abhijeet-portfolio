import { Telegraf } from 'telegraf'
import { setupStartHandler } from './handlers/start'
import { setupProjectsHandler } from './handlers/projects'
import { setupContactHandler } from './handlers/contact'
import { setupSkillsHandler } from './handlers/skills'
import { setupAboutHandler } from './handlers/about'
import { mainMenuKeyboard } from './keyboards/mainMenu'

let botInstance: Telegraf | null = null

export function getBot(): Telegraf {
  if (botInstance) {
    return botInstance
  }

  const token = process.env.BOT_TOKEN
  if (!token) {
    throw new Error('BOT_TOKEN environment variable is missing')
  }

  const bot = new Telegraf(token)

  setupStartHandler(bot)
  setupProjectsHandler(bot)
  setupContactHandler(bot)
  setupSkillsHandler(bot)
  setupAboutHandler(bot)

  bot.on('message', (ctx) =>
    ctx.reply('Use the menu buttons below 👇 or type /help for commands', mainMenuKeyboard)
  )

  botInstance = bot
  return bot
}
