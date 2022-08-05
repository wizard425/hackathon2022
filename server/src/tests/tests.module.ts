import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TESTS_MODEL_NAME } from './constants';
import { TestsController } from './tests.controller';
import { TestsService } from './tests.service';
import { createTestSchema } from './schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: TESTS_MODEL_NAME, schema: createTestSchema() }])],
  controllers: [TestsController],
  providers: [TestsService],
})
export class TestsModule {}
