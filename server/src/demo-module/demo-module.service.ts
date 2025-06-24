import { Injectable } from '@nestjs/common';
import { CreateDemoModuleDto } from './dto/create-demo-module.dto';
import { UpdateDemoModuleDto } from './dto/update-demo-module.dto';

@Injectable()
export class DemoModuleService {
  create(createDemoModuleDto: CreateDemoModuleDto) {
    return 'This action adds a new demoModule';
  }

  findAll() {
    return `This action returns all demoModule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demoModule`;
  }

  update(id: number, updateDemoModuleDto: UpdateDemoModuleDto) {
    return `This action updates a #${id} demoModule`;
  }

  remove(id: number) {
    return `This action removes a #${id} demoModule`;
  }
}
