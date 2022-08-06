import { Schema, Model } from 'mongoose';
import { BlueprintStatusCode } from '../interfaces';
import { REQEUSTS_MODEL_NAME } from '../../tests/constants';

export function createStatusSchema(): Schema<BlueprintStatusCode, Model<BlueprintStatusCode>, BlueprintStatusCode> {
  return new Schema({
    statusCode: {
      type: Schema.Types.Number,
      required: true,
    },
    request: {
      type: Schema.Types.ObjectId,
      ref: REQEUSTS_MODEL_NAME,
      required: true,
    },
    payload: {
      type: Schema.Types.Mixed,
      required: true,
    },
  });
}
