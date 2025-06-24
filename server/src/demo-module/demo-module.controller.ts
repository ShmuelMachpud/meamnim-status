import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DemoModuleService } from './demo-module.service';
import { CreateDemoModuleDto } from './dto/create-demo-module.dto';
import { UpdateDemoModuleDto } from './dto/update-demo-module.dto';

@Controller('demo-module')
export class DemoModuleController {
  constructor(private readonly demoModuleService: DemoModuleService) {}

  @Post()
  create(@Body() createDemoModuleDto: CreateDemoModuleDto) {
    return this.demoModuleService.create(createDemoModuleDto);
  }

  @Get()
  findAll() {
    return this.demoModuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demoModuleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemoModuleDto: UpdateDemoModuleDto) {
    return this.demoModuleService.update(+id, updateDemoModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demoModuleService.remove(+id);
  }
}
