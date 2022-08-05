import { IsDefined, Validate } from 'class-validator';

import { BlueprintResponse } from '../interfaces';
import { Request } from '../../tests/interfaces';
import { BlueprintResponseValidator } from './blueprint-response.validator';

export class BlueprintOutputDto {
  @IsDefined()
  payload: unknown;
  @Validate(BlueprintResponseValidator)
  response: BlueprintResponse;
  request: Request;
}
