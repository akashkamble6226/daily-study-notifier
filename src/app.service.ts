import { Injectable } from '@nestjs/common';
import { TelegramService } from './telegram/telegram.service';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {
  constructor(private telegramService: TelegramService) {}

  @Cron('*/1 * * * *')
  async handleCron() {
    await this.telegramService.sendMessage(
      process.env.TELEGRAM_CHAT_ID,
      '👋 Hello from NestJS (every 1 minute)',
    );
    console.log('Message sent to Telegram');
  }
}
