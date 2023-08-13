import {Body, Controller, Get, Post} from '@nestjs/common';
import { PhishingService } from './phishing.service';

@Controller('phishing')
export class PhishingController {
  constructor(private readonly phishingService: PhishingService) {}

  @Get()
  getHello(): string {
    return this.phishingService.getHello();
  }

  @Post()
  postEmail(@Body('number') number:string,@Body('name') name:string, @Body('user') user:string, @Body('platform') platform:string){
    return this.phishingService.postEmail(number, name, user, platform)
  }
}
