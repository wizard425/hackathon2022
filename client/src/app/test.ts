import { Requests } from './request';

export interface Test {
  _id: String;
  name: String;
  requests: Requests[];
}
