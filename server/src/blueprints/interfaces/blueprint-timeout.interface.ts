import { Request } from '../../tests/interfaces';

export interface BlueprintTimeout {
  timeout: number;
  request: Request;
  payload: unknown;
}
