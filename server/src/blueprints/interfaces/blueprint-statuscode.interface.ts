import { Types } from 'mongoose';

export interface BlueprintStatusCode {
  statusCode: number;
  request: Types.ObjectId;
}
