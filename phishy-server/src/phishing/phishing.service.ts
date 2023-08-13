import { Injectable } from '@nestjs/common';
import { ConfigService} from "@nestjs/config";
import { Twilio } from "twilio"


@Injectable()
export class PhishingService {
  private client: any
  constructor(private configService: ConfigService) {
    const accountSid:string = this.configService.get<string>('TWILIO_ACCOUNT_SID')
    const authToken:string = this.configService.get<string>('TWILIO_AUTH_TOKEN')

    this.client = new Twilio(accountSid, authToken)
  }
  getHello(): string {
    return 'Hello World!';
  }

  postEmail(number:string, name:string, user:string, platform:string) {
    this.client.messages.create({
      body: `Dear ${name},\nAs a result of a recent data breach, all accounts are locked. Please log into your ${platform} account ,${user}, using the link below to reactivate your account.\nThe ${platform} Team`,
      from: '+447888865290',
      to: number
    }).then(() => console.log(`Message sent to ${number} - ${name}, for User: ${user} on ${platform}`))
  }
}
