import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { HttpMethods } from './interfaces';
import type { Test } from './interfaces';
import { TESTS_MODEL_NAME } from './constants';

@Injectable()
export class TestsService {
  constructor(/*@InjectModel(TESTS_MODEL_NAME) private readonly model: Model<Test>*/) {}

  public async create(test: Test): Promise<void> {
    //await this.model.create(test);
  }

  public async index(): Promise<Test[]> {
    let ret: Test[] = [];
    for (let i = 0; i <= 10; i++) {
      ret.push({
        name: `test${i}`,
        requests: [
          {
            headers: { auth: 'test' },
            method: i % 2 === 0 ? HttpMethods.GET : HttpMethods.POST,
            payload: {
              test: 'test',
            },
            response: {
              test: 'test',
            },
            statusCode: i % 2 === 0 ? 200 : 500,
            url: `https://testurl/test${i}`,
            creationTime: new Date(),
          },
        ],
      });
    }
    return ret;
  }
}
