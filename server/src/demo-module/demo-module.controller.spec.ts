import { Test, TestingModule } from '@nestjs/testing';
import { DemoModuleController } from './demo-module.controller';
import { DemoModuleService } from './demo-module.service';

describe('DemoModuleController', () => {
  let controller: DemoModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemoModuleController],
      providers: [DemoModuleService],
    }).compile();

    controller = module.get<DemoModuleController>(DemoModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
