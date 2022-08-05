import { Schema, Model, Types } from 'mongoose';

import { Test } from '../interfaces';
import { REQEUSTS_MODEL_NAME } from '../constants';

export function createTestSchema(): Schema<Test, Model<Test>, Test> {
  return new Schema({
    name: {
      type: Schema.Types.String,
      required: true,
    },
    requests: {
      type: [{ ref: REQEUSTS_MODEL_NAME, type: Types.ObjectId }],
      required: true,
    },
  });
}
