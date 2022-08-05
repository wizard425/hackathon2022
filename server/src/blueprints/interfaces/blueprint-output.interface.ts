import { BlueprintResponse } from './blueprint-response.interface';
import { Request } from '../../tests/interfaces';

export interface BlueprintOutput {
  payload: unknown;
  response: BlueprintResponse;
  request: Request;
}
