import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

interface SendMail {
  to: string;
  subject: string;
  template: string
}

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) { }

  public async sendMail({ to, subject, template }: SendMail) {
    try {
      await this.mailerService.sendMail({
        to,
        subject,
        template
      })
    } catch (error) {
      console.log({ message: 'Error in Send Message', error });
    }
  }
}
