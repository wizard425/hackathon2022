import type { RequestCreate } from './request-create.interface';

export interface Request extends RequestCreate {
  creationTime: Date;
}
