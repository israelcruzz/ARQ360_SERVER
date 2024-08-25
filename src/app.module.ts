import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './application/users/users.module';
import { MailModule } from './application/mail/mail.module';
import { MailService } from './application/mail/mail.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV === 'prod' ? 'prod' : 'dev'}`,
    }),
    // UsersModule,
    MailModule,
  ],
  providers: [MailService],
  controllers: [],
})
export class AppModule { }
