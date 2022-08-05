import { Controller, Get, Param } from '@nestjs/common';

import { BlueprintsService } from './blueprints.service';
import { BlueprintTimeoutDto, BlueprintStatusCodeDto } from './dtos';

@Controller('/blueprints')
export class BlueprintsController {
  constructor(private readonly blueprintsService: BlueprintsService) {}

  @Get('/timeout/:id')
  public indexTimeout(@Param('id') id: string): Promise<BlueprintTimeoutDto[]> {
    return this.blueprintsService.getBlueprintsTimeoutByRequestId(id);
  }

  @Get('/status-code/:id')
  public indexStatusCode(@Param('id') id: string): Promise<BlueprintStatusCodeDto[]> {
    return this.blueprintsService.getBlueprintsStatusCodeByRequestId(id);
  }
}
