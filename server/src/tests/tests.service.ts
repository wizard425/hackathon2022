import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import type { Test } from './interfaces';
import { TESTS_MODEL_NAME, REQEUSTS_MODEL_NAME } from './constants';

@Injectable()
export class TestsService {
  constructor(
    @InjectModel(TESTS_MODEL_NAME) private readonly testsModel: Model<Test>,
    @InjectModel(REQEUSTS_MODEL_NAME) private readonly requestsModel: Model<Test>,
  ) {}

  public async create(test: Test): Promise<void> {
    const requests = await this.requestsModel.insertMany(test.requests);
    const requestIds = requests.map((request) => request._id);
    await this.testsModel.create({ name: test.name, requests: requestIds });
  }

  public async index(): Promise<Test[]> {
    return this.testsModel.find({}).populate('requests').exec();
  }

  public async getById(id: string): Promise<Test> {
    return this.testsModel.findById(id).populate('requests').exec();
  }
}
