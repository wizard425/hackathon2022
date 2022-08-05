import { Controller, Get, Param } from '@nestjs/common';

import { BlueprintTimeout } from './interfaces';
import { BlueprintsService } from './blueprints.service';
import { BlueprintStatusCodeReponseDto, BlueprintTimeoutResponseDto } from './dtos';
import { Error } from 'mongoose';

@Controller('/blueprints')
export class BlueprintsController {
  constructor(private readonly blueprintsService: BlueprintsService) {}

  @Get('/timeout/:id')
  public indexTimeout(@Param('id') id: string): Promise<BlueprintTimeoutResponseDto> {
    throw new Error('Test');
  }
}
