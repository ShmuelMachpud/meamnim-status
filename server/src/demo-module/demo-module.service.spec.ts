import { Test, TestingModule } from '@nestjs/testing';
import { DemoModuleService } from './demo-module.service';

describe('DemoModuleService', () => {
  let service: DemoModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemoModuleService],
    }).compile();

    service = module.get<DemoModuleService>(DemoModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
