import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BLUEPRINT_TIMEOUT_MODEL_NAME, BLUEPRINT_STATUSCODE_MODEL_NAME } from './constants';
import type { BlueprintStatusCode, BlueprintTimeout } from './interfaces';

@Injectable()
export class BlueprintsService {
  constructor(
    @InjectModel(BLUEPRINT_TIMEOUT_MODEL_NAME) private readonly timeoutModel: Model<BlueprintTimeout>,
    @InjectModel(BLUEPRINT_STATUSCODE_MODEL_NAME) private readonly statusCodeModel: Model<BlueprintStatusCode>,
  ) {}

  public async createTimeout(timeout: BlueprintTimeout): Promise<void> {}
}
