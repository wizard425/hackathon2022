import { IsInt, IsString, IsDefined, Min, Max } from 'class-validator';

export class BlueprintStatusCodeCreateDto {
  @IsInt()
  @Min(100)
  @Max(599)
  statusCode: number;
  @IsString()
  request: string;
  @IsDefined()
  payload: unknown;
}
