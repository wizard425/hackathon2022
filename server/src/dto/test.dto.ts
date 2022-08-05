import { IsString, IsArray, IsObject, ValidateNested } from 'class-validator';

import { Type } from 'class-transformer';

import { RequestDto } from './request.dto';

export class TestDto {
  @IsString()
  name: string;
  @IsArray()
  @IsObject({ each: true })
  @ValidateNested({ each: true })
  @Type(() => RequestDto)
  requests: Array<Request>;
}
