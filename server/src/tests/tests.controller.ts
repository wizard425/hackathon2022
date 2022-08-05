import { Controller, Post, Get, Body, Logger } from '@nestjs/common';

import { TestsService } from './tests.service';
import { TestCreateDto, TestDto } from './dtos';

@Controller('/tests')
export class TestsController {
  private readonly logger = new Logger(TestsController.name);
  constructor(private readonly testsService: TestsService) {}

  @Post('/')
  public create(@Body() body: TestCreateDto): Promise<void> {
    this.logger.log(body);
    return this.testsService.create(body);
  }

  @Get('/')
  public index(): Promise<TestDto[]> {
    this.logger.log('index');
    return this.testsService.index();
  }
}
