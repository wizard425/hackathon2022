import { Controller, Get, Post, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';

import { BlueprintsService } from './blueprints.service';
import {
  BlueprintTimeoutDto,
  BlueprintStatusCodeDto,
  RunReponseDto,
  BlueprintTimeoutCreateDto,
  BlueprintStatusCodeCreateDto,
} from './dtos';

@Controller('/blueprints')
export class BlueprintsController {
  constructor(private readonly blueprintsService: BlueprintsService) {}

  @Post('/timeout')
  @HttpCode(HttpStatus.NO_CONTENT)
  public createTimeout(@Body() body: BlueprintTimeoutCreateDto): Promise<void> {
    return this.blueprintsService.createBlueprintTimeout(body);
  }

  @Post('/status-code')
  @HttpCode(HttpStatus.NO_CONTENT)
  public createStatusCode(@Body() body: BlueprintStatusCodeCreateDto): Promise<void> {
    return this.blueprintsService.createBlueprintStatusCode(body);
  }

  @Get('/timeout/:id')
  @HttpCode(HttpStatus.OK)
  public indexTimeout(@Param('id') id: string): Promise<BlueprintTimeoutDto[]> {
    return this.blueprintsService.getBlueprintsTimeoutByRequestId(id);
  }

  @Get('/status-code/:id')
  @HttpCode(HttpStatus.OK)
  public indexStatusCode(@Param('id') id: string): Promise<BlueprintStatusCodeDto[]> {
    return this.blueprintsService.getBlueprintsStatusCodeByRequestId(id);
  }

  @Post('/status-code/:id/run')
  @HttpCode(HttpStatus.OK)
  public async runStatusCodeTest(@Param('id') id: string): Promise<RunReponseDto> {
    return { success: await this.blueprintsService.runBlueprintsStatusCode(id), elapsed: undefined };
  }

  @Post('/timeout/:id/run')
  @HttpCode(HttpStatus.OK)
  public async runTimeoutTest(@Param('id') id: string): Promise<RunReponseDto> {
    const res = await this.blueprintsService.runBlueprintsTimeout(id);
    return { success: res != null, elapsed: res };
  }
}
