import { PartialType } from '@nestjs/mapped-types';
import { CreateDemoModuleDto } from './create-demo-module.dto';

export class UpdateDemoModuleDto extends PartialType(CreateDemoModuleDto) {}
