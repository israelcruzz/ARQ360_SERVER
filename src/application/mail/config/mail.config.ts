import { MailerOptions } from "@nestjs-modules/mailer";

export const mailConfig: MailerOptions = {
  transport: {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_EMAIL,
      pass: process.env.MAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  },
  defaults: {
    from: '"No Reply" <no-reply@arq360.com>',
  },
}