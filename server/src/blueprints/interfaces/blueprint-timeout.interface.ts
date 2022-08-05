import { Types } from 'mongoose';

export interface BlueprintTimeout {
  timeout: number;
  request: Types.ObjectId;
}
