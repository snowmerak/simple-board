import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot(), ClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
