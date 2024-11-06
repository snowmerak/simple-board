import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  private readonly redisHost: string;
  private readonly redisPort: number;

  constructor() {
    this.redisHost = process.env.REDIS_HOST || 'localhost';
    try {
      this.redisPort = parseInt(process.env.REDIS_PORT ?? '6379');
    } catch (e) {
      this.redisPort = 6379;
    }
  }

  getRedisHost(): string {
    return this.redisHost;
  }

  getRedisPort(): number {
    return this.redisPort;
  }
}
