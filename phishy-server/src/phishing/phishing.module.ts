import { Module } from '@nestjs/common';
import { PhishingController } from './phishing.controller';
import { PhishingService } from './phishing.service';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
      ConfigModule.forRoot({
        envFilePath: ['.env.local'],
        isGlobal: true
      })
  ],
  controllers: [PhishingController],
  providers: [PhishingService],
})
export class PhishingModule {}
