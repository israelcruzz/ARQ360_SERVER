import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './application/users/users.module';
import { MailModule } from './application/mail/mail.module';
import { MailService } from './application/mail/mail.service';
import { HashPasswordModule } from './application/hash-password/hash-password.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV === 'prod' ? 'prod' : 'dev'}`,
    }),
    // UsersModule,
    MailModule,
    HashPasswordModule,
  ],
  providers: [MailService],
  controllers: [],
})
export class AppModule { }
