import { Schema, Model } from 'mongoose';
import { HttpMethods, Request } from '../interfaces';

export function createRestEndpointSchema(): Schema<Request, Model<Request>, Request> {
  return new Schema({
    url: {
      type: Schema.Types.String,
      required: true,
    },
    method: {
      type: String,
      enum: HttpMethods,
      required: true,
    },
    headers: {
      type: Schema.Types.Mixed,
      required: true,
    },
    payload: {
      type: Schema.Types.Mixed,
      required: true,
    },
    response: {
      type: Schema.Types.Mixed,
      required: true,
    },
    statusCode: {
      type: Schema.Types.Number,
      required: true,
    },
  });
}
