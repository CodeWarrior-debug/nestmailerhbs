import { MailerService } from '@nest-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) {}

  sendMail(): void {
    this.mailerService.sendMail({
      to: 'jimijordan@gmail.com',
      from: 'jpjordan1987@gmail.com',
      subject: 'Testing Nest Module',
      text: 'hello',
      html: '<p>welcome to nest email js</p>',
    });
  }
}
