import TelegramBot from 'node-telegram-bot-api';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TelegramService {
  private bot: TelegramBot;
  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    this.bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {
      polling: false,
    });
  }

  async sendMessage(chatId: any, message: string): Promise<void> {
    if (!chatId) {
      throw new Error('Chat ID is undefined');
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    await this.bot.sendMessage(chatId, message);
  }
}
