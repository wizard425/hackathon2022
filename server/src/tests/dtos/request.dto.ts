import { IsInt, IsUrl, IsEnum, IsString, Min, Max, Validate } from 'class-validator';

import { HeaderValidator } from './header.validator';

enum Method {
  GET,
  POST,
  PUT,
  DELETE,
}

export class RequestDto {
  @IsUrl()
  url: string;
  @IsEnum(Method)
  method: Method;
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
