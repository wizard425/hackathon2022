import { Schema, Model } from 'mongoose';
import { BlueprintOutput } from '../interfaces';
import { REQEUSTS_MODEL_NAME } from '../../tests/constants';

export function createOutputSchema(): Schema<BlueprintOutput, Model<BlueprintOutput>, BlueprintOutput> {
  return new Schema(
    {
      response: {
        type: Schema.Types.Mixed,
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
    },
    { minimize: false },
  );
}
