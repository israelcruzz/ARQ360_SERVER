import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from 'config/configuration';
import * as path from 'path';

const envPath = path.resolve(
  __dirname,
  '../config',
  `.env.${process.env.NODE_ENV || 'dev'}`,
);

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: envPath,
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
