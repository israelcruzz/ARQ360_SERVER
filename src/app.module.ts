import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV === 'prod' ? 'prod' : 'dev'}`,
    }),
  ],
  providers: [],
  controllers: [],
})
export class AppModule { }