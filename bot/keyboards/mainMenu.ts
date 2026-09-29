import { Markup } from 'telegraf'

export const mainMenuKeyboard = Markup.keyboard([
  ['📂 Projects', '🛠 Skills'],
  ['📞 Contact', 'ℹ️ About']
]).resize().oneTime()