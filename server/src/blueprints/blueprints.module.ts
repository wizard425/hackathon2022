import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';

import {
  BLUEPRINT_STATUSCODE_MODEL_NAME,
  BLUEPRINT_TIMEOUT_MODEL_NAME,
  BLUEPRINT_OUTPUT_MODEL_NAME,
} from './constants';
import { BlueprintsController } from './blueprints.controller';
import { BlueprintsService } from './blueprints.service';
import { createStatusSchema, createTimeoutSchema, createOutputSchema } from './schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: BLUEPRINT_TIMEOUT_MODEL_NAME, schema: createTimeoutSchema() }]),
    MongooseModule.forFeature([{ name: BLUEPRINT_STATUSCODE_MODEL_NAME, schema: createStatusSchema() }]),
    MongooseModule.forFeature([{ name: BLUEPRINT_OUTPUT_MODEL_NAME, schema: createOutputSchema() }]),
    HttpModule,
  ],
  providers: [BlueprintsService],
  controllers: [BlueprintsController],
})
export class BlueprintsModule {}
