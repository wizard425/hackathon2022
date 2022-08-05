import { Types } from 'mongoose';

export interface StatusCode {
  statusCode: number;
  request: Types.ObjectId;
}
