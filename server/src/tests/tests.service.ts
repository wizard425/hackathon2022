import { Injectable } from '@nestjs/common';

import type { Test } from './interfaces';

@Injectable()
export class TestsService {
  public async create(test: Test): Promise<void> {}
}
