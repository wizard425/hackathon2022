import { IsInt, IsUrl, IsObject, IsEnum, Min, Max, Validate } from 'class-validator';

import { HeaderValidator } from './header.validator';
import { HttpMethods } from '../interfaces';

export class RequestCreateDto {
  @IsUrl()
  url: string;
  @IsEnum(HttpMethods)
  method: HttpMethods;
  @Validate(HeaderValidator)
  headers: { [key: string]: string };
  @IsObject()
  payload: object;
  @IsObject()
  response: object;
  @IsInt()
  @Min(100)
  @Max(599)
  statusCode: number;
}
