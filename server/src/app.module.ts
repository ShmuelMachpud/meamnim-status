import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoModuleModule } from './demo-module/demo-module.module';

@Module({
  imports: [DemoModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
