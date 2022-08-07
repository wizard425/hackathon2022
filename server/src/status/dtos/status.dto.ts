import { IsBoolean } from 'class-validator';

export class StatusDto {
  @IsBoolean()
  status: boolean;
}
