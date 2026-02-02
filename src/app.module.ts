import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TelegramService } from './telegram/telegram.service';
import { AppService } from './app.service';
import { TopicService } from './topics/topic.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [],
  providers: [TelegramService, AppService, TopicService],
})
export class AppModule {}
