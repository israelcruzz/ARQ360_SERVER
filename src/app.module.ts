import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.resolve(
        __dirname,
        '../config',
        `.env.${process.env.NODE_ENV || 'dev'}`,
      ),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
