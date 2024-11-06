import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { ConfigService } from '../config/config.service';

@Injectable()
export class VoteCounterService {
  private readonly configService: ConfigService;
  private readonly redis_client: Redis;

  constructor(configService: ConfigService) {
    this.configService = configService;
    this.redis_client = new Redis({
      host: configService.getRedisHost(),
      port: configService.getRedisPort(),
    });
  }
}
