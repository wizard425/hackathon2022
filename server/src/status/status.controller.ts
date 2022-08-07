import { Controller, Post, Get, Body } from '@nestjs/common';

import { StatusDto } from './dtos';
import { StatusService } from './status.service';

@Controller('/status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Post('/')
  public set(@Body() body: StatusDto): void {
    return this.statusService.write(body);
  }

  @Get('/')
  public get(): StatusDto {
    return { status: this.statusService.read() };
  }
}
