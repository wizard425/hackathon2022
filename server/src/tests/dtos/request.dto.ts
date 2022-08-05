import { IsInt, IsUrl, IsEnum, IsString, Min, Max, Validate } from 'class-validator';

import { HeaderValidator } from './header.validator';
import { HttpMethods } from '../interfaces';

export class RequestDto {
  @IsUrl()
  url: string;
  @IsEnum(HttpMethods)
  method: HttpMethods;
  @Validate(HeaderValidator)
  headers: { [key: string]: string };
  @IsString()
  payload: string;
  @IsString()
  response: string;
  @IsInt()
  @Min(100)
  @Max(599)
  statusCode: number;
}
