import { BlueprintResponse } from '../interfaces';

export interface BlueprintOutputCreate {
  payload: unknown;
  response: BlueprintResponse;
  request: string;
}
