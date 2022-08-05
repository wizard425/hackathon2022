import { Schema, Model } from 'mongoose';
import { BlueprintTimeout } from '../interfaces';
import { TESTS_MODEL_NAME } from '../../tests/constants';

export function createTimeoutSchema(): Schema<BlueprintTimeout, Model<BlueprintTimeout>, BlueprintTimeout> {
  return new Schema({
    timeout: {
      type: Schema.Types.Number,
      required: true,
    },
    request: {
      type: Schema.Types.ObjectId,
      ref: TESTS_MODEL_NAME,
      required: true,
    },
    payload: {
      type: Schema.Types.Mixed,
      required: true,
    },
  });
}
