import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class TopicService {
  private filePath = path.join(
    process.cwd(),
    'src',
    'temp-data',
    'topic-store.json',
  );

  getTodaysTopic(): string {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data: any = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const topic = data.topics[data.currentIndex];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return topic;
  }

  markTopicAsSent(): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data: any = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    data.currentIndex = data.currentIndex + 1;
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }
}
