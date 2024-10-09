import { mailConfig } from "@/core/config/mail.config";
import { MailerModule } from "@nestjs-modules/mailer";
import { Module } from "@nestjs/common";
import { MailService } from "./mail/mail.service";
import { HashPasswordService } from "@/application/services/hash-password/hash-password.service";

@Module({
  imports: [MailerModule.forRoot(mailConfig)],
  controllers: [],
  providers: [MailService, HashPasswordService],
  exports: [MailService, HashPasswordService],
})
export class ServicesModule {}