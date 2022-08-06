import { IsInt, IsUrl, IsDefined, IsEnum, Min, Max, Validate } from 'class-validator';

import { HeaderValidator } from './header.validator';
import { HttpMethods } from '../interfaces';

export class RequestCreateDto {
  @IsUrl()
  url: string;
  @IsEnum(HttpMethods)
  method: HttpMethods;
  @Validate(HeaderValidator)
  headers: { [key: string]: string };
  @IsDefined()
  payload: unknown;
  @IsDefined()
  response: unknown;
  @IsInt()
  @Min(100)
  @Max(599)
  statusCode: number;
}
