import { RequestCreate } from './request-create.interface';

export interface TestCreate {
  name: string;
  requests: RequestCreate[];
}
