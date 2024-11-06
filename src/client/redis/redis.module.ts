import { Module } from '@nestjs/common';
import { VoteCounterService } from './vote_counter/vote_counter.service';
import { ConfigService } from './config/config.service';

@Module({
  providers: [VoteCounterService, ConfigService],
  exports: [VoteCounterService, ConfigService],
})
export class RedisModule {}
