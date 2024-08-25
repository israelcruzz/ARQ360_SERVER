import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MailModule } from '../mail/mail.module';
import { PrismaModule } from '../prisma/prisma.module';
import { HashPasswordModule } from '../hash-password/hash-password.module';

@Module({
  imports: [MailModule, PrismaModule, HashPasswordModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
