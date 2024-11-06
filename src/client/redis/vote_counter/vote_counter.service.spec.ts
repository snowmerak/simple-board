import { Test, TestingModule } from '@nestjs/testing';
import { VoteCounterService } from './vote_counter.service';

describe('VoteCounterService', () => {
  let service: VoteCounterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoteCounterService],
    }).compile();

    service = module.get<VoteCounterService>(VoteCounterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
