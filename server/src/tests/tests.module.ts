import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TESTS_MODEL_NAME, REQEUSTS_MODEL_NAME } from './constants';
import { TestsController } from './tests.controller';
import { TestsService } from './tests.service';
import { createTestSchema, createRequestSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TESTS_MODEL_NAME, schema: createTestSchema() }]),
    MongooseModule.forFeature([{ name: REQEUSTS_MODEL_NAME, schema: createRequestSchema() }]),
  ],
  controllers: [TestsController],
  providers: [TestsService],
})
export class TestsModule {}
