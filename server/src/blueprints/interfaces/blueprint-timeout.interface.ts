import { Types } from 'mongoose';

export interface BlueprintTimeout {
  timeout: number;
  requests: Types.ObjectId;
}
