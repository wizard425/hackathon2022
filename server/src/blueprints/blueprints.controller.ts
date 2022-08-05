import { Controller, Get, Post, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';

import { BlueprintsService } from './blueprints.service';
import {
  BlueprintTimeoutDto,
  BlueprintStatusCodeDto,
  RunReponseDto,
  BlueprintTimeoutCreateDto,
  BlueprintStatusCodeCreateDto,
  BlueprintOutputCreateDto,
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

  @Post('/output')
  @HttpCode(HttpStatus.NO_CONTENT)
  public createOutput(@Body() body: BlueprintOutputCreateDto): Promise<void> {
    return this.blueprintsService.createBlueprintOutput(body);
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
    return { success: await this.blueprintsService.runBlueprintsStatusCode(id) };
  }

  @Post('/timeout/:id/run')
  @HttpCode(HttpStatus.OK)
  public async runTimeoutTest(@Param('id') id: string): Promise<RunReponseDto> {
    return { success: await this.blueprintsService.runBlueprintsTimeout(id) };
  }
}
