import { IsString, IsArray, IsObject, ValidateNested } from 'class-validator';

import { Type } from 'class-transformer';

import { RequestCreateDto } from './request-create.dto';

export class TestCreateDto {
  @IsString()
  name: string;
  @IsArray()
  @IsObject({ each: true })
  @ValidateNested({ each: true })
  @Type(() => RequestCreateDto)
  requests: RequestCreateDto[];
}
