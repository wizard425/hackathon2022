import { Controller, Get } from '@nestjs/common';

import { BlueprintTimeout } from './interfaces';
import { BlueprintsService } from './blueprints.service';

@Controller('/blueprints')
export class BlueprintsController {
  constructor(private readonly blueprintsService: BlueprintsService) {}

  @Get('/timeout')
  public indexTimeout(): Promise<> {}
}
