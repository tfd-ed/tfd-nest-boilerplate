import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GeetestService } from './geetest.service';
import { GeetestController } from './geetest.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ConfigModule, HttpModule, CacheModule.register()],
  controllers: [GeetestController],
  providers: [GeetestService],
})
export class GeetestModule {}
