import { Requests } from './request';

export interface Test {
  _id: string;
  name: string;
  requests: Requests[];
}
