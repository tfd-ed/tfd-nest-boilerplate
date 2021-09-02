import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GeetestService } from './geetest.service';
import { GeetestController } from './geetest.controller';
import * as redisStore from 'cache-manager-redis-store';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule,
    HttpModule,
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        if (process.env.NODE_ENV === 'development') {
          return {
            ttl: configService.get<string>('CACHE_TTL'), // seconds
            max: configService.get<string>('CACHE_MAX'), // maximum number of items in cache
            store: redisStore,
            host: configService.get<string>('CACHE_HOST'),
            port: configService.get<string>('CACHE_PORT'),
          };
        }
        if (process.env.NODE_ENV === 'production') {
          /**
           * Use redis url in production instead
           */
          return {
            ttl: configService.get<string>('CACHE_TTL'), // seconds
            max: configService.get<string>('CACHE_MAX'), // maximum number of items in cache
            store: redisStore,
            url: configService.get<string>('REDIS_URL'),
          };
        }
      },
    }),
  ],
  controllers: [GeetestController],
  providers: [GeetestService],
})
export class GeetestModule {}
