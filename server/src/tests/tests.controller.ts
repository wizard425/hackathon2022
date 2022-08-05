import { Controller, Post, Get, Body, Param, Logger } from '@nestjs/common';

import { TestsService } from './tests.service';
import { TestCreateDto, TestDto } from './dtos';

@Controller('/tests')
export class TestsController {
  private readonly logger = new Logger(TestsController.name);
  constructor(private readonly testsService: TestsService) {}

  @Post('/')
  public create(@Body() body: TestCreateDto): Promise<void> {
    const requests = body.requests.map((request) => ({ ...request, creationTime: new Date() }));
    const test = { name: body.name, requests };
    this.logger.log(test);
    return this.testsService.create(test);
  }

  @Get('/')
  public async index(): Promise<TestDto[]> {
    this.logger.log('index');
    const res = await this.testsService.index();
    return res;
  }

  @Get('/:id')
  public async get(@Param('id') id: string): Promise<TestDto> {
    this.logger.log('index');
    const res = await this.testsService.getById(id);
    return res;
  }
}
