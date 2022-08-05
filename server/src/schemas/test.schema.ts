import { Schema, Model } from 'mongoose';
import { Test } from '../tests/interfaces';
import { createRestEndpointSchema } from './request.schema';

export function createTestSchema(): Schema<Test, Model<Test>, Test> {
  return new Schema({
    name: {
      type: Schema.Types.String,
      required: true,
    },
    requests: {
      type: [createRestEndpointSchema()],
    },
  });
}
