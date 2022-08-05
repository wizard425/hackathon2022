import { IsDefined, IsString, Validate } from 'class-validator';

import { BlueprintResponse } from '../interfaces';
import { BlueprintResponseValidator } from './blueprint-response.validator';

export class BlueprintOutputCreateDto {
  @IsDefined()
  payload: unknown;
  @Validate(BlueprintResponseValidator)
  response: BlueprintResponse;
  @IsString()
  request: string;
}
