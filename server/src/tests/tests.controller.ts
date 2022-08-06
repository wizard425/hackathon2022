import { Controller, Post, Get, Body, Param, Logger, HttpCode, HttpStatus } from '@nestjs/common';

import { TestsService } from './tests.service';
import { TestCreateDto, TestDto, RequestDto } from './dtos';

@Controller('/tests')
export class TestsController {
  private readonly logger = new Logger(TestsController.name);
  constructor(private readonly testsService: TestsService) {}

  @Post('/')
  @HttpCode(HttpStatus.NO_CONTENT)
  public create(@Body() body: TestCreateDto): Promise<void> {
    const requests = body.requests.map((request) => ({ ...request, creationTime: new Date() }));
    const test = { name: body.name, requests };
    this.logger.log(test);
    return this.testsService.create(test);
  }

  @Get('/')
  @HttpCode(HttpStatus.OK)
  public async index(): Promise<TestDto[]> {
    this.logger.log('index');
    const res = await this.testsService.index();
    return res;
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  public async get(@Param('id') id: string): Promise<TestDto> {
    this.logger.log('index');
    const res = await this.testsService.getById(id);
    return res;
  }

  @Get('/requests/:id')
  @HttpCode(HttpStatus.OK)
  public async getRequest(@Param('id') id: string): Promise<RequestDto> {
    this.logger.log('index');
    const res = await this.testsService.getRequestById(id);
    return res;
  }
}
