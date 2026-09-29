import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
dotenv.config()

import { getBot } from './bot/index'

const bot = getBot()

bot.launch()
console.log('🤖 Abhijeet Portfolio Telegram Bot started (local polling mode)...')

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))