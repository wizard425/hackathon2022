import { IsInt, IsString, IsDefined } from 'class-validator';

export class BlueprintTimeoutCreateDto {
  @IsInt()
  timeout: number;
  @IsString()
  request: string;
  @IsDefined()
  payload: unknown;
}
