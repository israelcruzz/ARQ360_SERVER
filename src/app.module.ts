import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.resolve(
        __dirname,
        '../config',
        `.env.${process.env.NODE_ENV === 'prod' ? 'prod' : 'dev'}`,
      ),
    }),
    UsersModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
