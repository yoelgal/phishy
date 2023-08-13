import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PhishingModule} from "./phishing/phishing.module";
import {MorganMiddleware} from "./middlewear/log.middlewear";

@Module({
  imports: [PhishingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(MorganMiddleware).forRoutes('*')
  }
}
