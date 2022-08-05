import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { firstValueFrom } from 'rxjs';

import {
  BLUEPRINT_TIMEOUT_MODEL_NAME,
  BLUEPRINT_STATUSCODE_MODEL_NAME,
  BLUEPRINT_OUTPUT_MODEL_NAME,
} from './constants';
import type {
  BlueprintStatusCode,
  BlueprintTimeout,
  BlueprintTimeoutCreate,
  BlueprintStatusCodeCreate,
  BlueprintOutputCreate,
  BlueprintOutput,
} from './interfaces';

@Injectable()
export class BlueprintsService {
  constructor(
    @InjectModel(BLUEPRINT_TIMEOUT_MODEL_NAME) private readonly timeoutModel: Model<BlueprintTimeout>,
    @InjectModel(BLUEPRINT_STATUSCODE_MODEL_NAME) private readonly statusCodeModel: Model<BlueprintStatusCode>,
    @InjectModel(BLUEPRINT_OUTPUT_MODEL_NAME) private readonly outptuCodeModel: Model<BlueprintOutput>,
    private readonly httpService: HttpService,
  ) {}

  public async getBlueprintsTimeoutByRequestId(id: string): Promise<BlueprintTimeout[]> {
    return this.timeoutModel.find({ request: id }).populate('request').exec();
  }

  public async getBlueprintsStatusCodeByRequestId(id: string): Promise<BlueprintStatusCode[]> {
    return this.statusCodeModel.find({ request: id }).populate('request').exec();
  }

  public async getBlueprintsOutputByRequestId(id: string): Promise<BlueprintOutput[]> {
    return this.outptuCodeModel.find({ request: id }).populate('request').exec();
  }

  public getBlueprintsStatusCodeById(id: string): Promise<BlueprintStatusCode> {
    return this.statusCodeModel.findById(id).populate('request').exec();
  }

  public getBlueprintsTimeoutById(id: string): Promise<BlueprintTimeout> {
    return this.timeoutModel.findById(id).populate('request').exec();
  }

  public getBlueprintsOutputById(id: string): Promise<BlueprintOutput> {
    return this.outptuCodeModel.findById(id).populate('request').exec();
  }

  public async createBlueprintTimeout(body: BlueprintTimeoutCreate): Promise<void> {
    await this.timeoutModel.create(body);
  }

  public async createBlueprintStatusCode(body: BlueprintStatusCodeCreate): Promise<void> {
    await this.statusCodeModel.create(body);
  }

  public async createBlueprintOutput(body: BlueprintOutputCreate): Promise<void> {
    await this.outptuCodeModel.create(body);
  }

  public async runBlueprintsStatusCode(id: string): Promise<boolean> {
    const test = await this.getBlueprintsStatusCodeById(id);
    const res = await firstValueFrom(
      this.httpService.request({
        method: test.request.method,
        url: test.request.url,
        data: test.payload,
      }),
    );
    return res.status === test.statusCode;
  }

  public async runBlueprintsTimeout(id: string): Promise<boolean> {
    const test = await this.getBlueprintsTimeoutById(id);
    try {
      await Promise.race([
        firstValueFrom(
          this.httpService.request({
            method: test.request.method,
            url: test.request.url,
            data: test.payload,
          }),
        ),
        new Promise(function (_resolve, reject) {
          setTimeout(function () {
            reject();
          }, test.timeout);
        }),
      ]);
      return true;
    } catch (err) {
      return false;
    }
  }

  public async runBlueprintsOutput(id: string): Promise<boolean> {
    const test = await this.getBlueprintsOutputById(id);
    const res = await firstValueFrom(
      this.httpService.request({
        method: test.request.method,
        url: test.request.url,
        data: test.payload,
      }),
    );

    let stack = Object.entries(res.data);
    while (stack.length > 0) {
      const [key, value] = stack.pop();
      const testValue = test.payload[key];
      if (testValue === undefined) return false; /* TODO */
      if (testValue === null) continue;
      switch (typeof testValue) {
        case 'string':
          {
            if (testValue == value) continue;
          }
          break;
        case 'object': {
          stack.push(...Object.entries(value).map(([k, v]) => [`${key}.${k}`, v] as [string, unknown]));
          continue;
        }
      }
      return false;
    }
    return true;
  }
}
