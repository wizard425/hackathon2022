import { RequestDto } from '../../tests/dtos';

export interface BlueprintTimeoutResponseDto {
  timeout: number;
  request: RequestDto;
}
