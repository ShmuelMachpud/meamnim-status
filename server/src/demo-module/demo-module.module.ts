import { Module } from '@nestjs/common';
import { DemoModuleService } from './demo-module.service';
import { DemoModuleController } from './demo-module.controller';

@Module({
  controllers: [DemoModuleController],
  providers: [DemoModuleService],
})
export class DemoModuleModule {}
