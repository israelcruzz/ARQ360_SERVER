import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MailModule } from '../services/mail/mail.module';
import { PrismaModule } from '../../infra/database/prisma/prisma.module';
import { HashPasswordModule } from '../hash-password/hash-password.module';

@Module({
  imports: [MailModule, PrismaModule, HashPasswordModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule { }
