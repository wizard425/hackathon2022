import { Types } from 'mongoose';

export interface Timeout {
  timeout: number;
  request: Types.ObjectId;
}
