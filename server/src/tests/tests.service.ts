import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import type { Test, Request } from './interfaces';
import { TESTS_MODEL_NAME, REQEUSTS_MODEL_NAME } from './constants';
import { StatusService } from '../status';

@Injectable()
export class TestsService {
  constructor(
    @InjectModel(TESTS_MODEL_NAME) private readonly testsModel: Model<Test>,
    @InjectModel(REQEUSTS_MODEL_NAME) private readonly requestsModel: Model<Test>,
    private readonly statusService: StatusService,
  ) {
    this.statusService.onRunningChange.subscribe(async (value) => {
      if (value === false) await this.writeTestBuffer();
    });
  }

  private test: Test | undefined;

  public async create(test: Test): Promise<void> {
    if (this.test == null) {
      this.test = test;
      return;
    }
    if (this.statusService.read() === true) {
      this.test?.requests.push(...test.requests);
    }
  }

  public async index(): Promise<Test[]> {
    return this.testsModel.find({}).populate('requests').exec();
  }

  public async getById(id: string): Promise<Test> {
    return this.testsModel.findById(id).populate('requests').exec();
  }

  public async writeTestBuffer(): Promise<void> {
    const requests = await this.requestsModel.insertMany(this.test.requests);
    const requestIds = requests.map((request) => request._id);
    await this.testsModel.create({ name: this.test.name, requests: requestIds });
    this.test = undefined;
  }
}
