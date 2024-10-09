import { Module } from "@nestjs/common";
import { EnvModule } from "@/infra/env/env.module";
import { RedisService } from "@/infra/cache/redis/redis.service";
import { CacheRepository } from "./cache.repository";

@Module({
  imports: [EnvModule],
  providers: [
    RedisService,
    {
      provide: CacheRepository,
      useClass: RedisService,
    }
  ],
})
export class CacheModule { }