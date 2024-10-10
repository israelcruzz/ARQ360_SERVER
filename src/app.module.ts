import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configPath } from '@/core/config/config-path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${configPath[process.env.NODE_ENV]}`,
      isGlobal: true
    }),
  ],
  providers: [],
  controllers: [],
})
export class AppModule { }