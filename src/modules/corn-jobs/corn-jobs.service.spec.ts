import { Test, TestingModule } from '@nestjs/testing';
import { CornJobsService } from './corn-jobs.service';

describe('CornJobsService', () => {
  let service: CornJobsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CornJobsService],
    }).compile();

    service = module.get<CornJobsService>(CornJobsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
