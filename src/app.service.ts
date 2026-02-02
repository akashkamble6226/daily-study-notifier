import { Injectable } from '@nestjs/common';
import { TelegramService } from './telegram/telegram.service';
import { Cron } from '@nestjs/schedule';
import { TopicService } from './topics/topic.service';

@Injectable()
export class AppService {
  constructor(
    private telegramService: TelegramService,
    private topicService: TopicService,
  ) {}

  @Cron('*/1 * * * *')
  async handleCron() {
    const topic = this.topicService.getTodaysTopic();

    if (!topic) {
      console.log('All topics have been sent message sent to Telegram');
      return;
    }

    await this.telegramService.sendMessage(
      process.env.TELEGRAM_CHAT_ID,
      `👋 Today's topic: ${topic}`,
    );

    this.topicService.markTopicAsSent();
  }
}
