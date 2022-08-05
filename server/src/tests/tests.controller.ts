import { Controller, Post, Body } from '@nestjs/common';

import { TestsService } from './tests.service';
import { TestDto } from './dots';

@Controller('/tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @Post('/')
  public create(@Body() body: TestDto): Promise<void> {
    return this.testsService.create(body);
  }
}
