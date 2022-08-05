import { RequestDto } from '../../tests/dtos';

export class BlueprintStatusCodeDto {
  statusCode: number;
  request: RequestDto;
  payload: unknown;
}
