import type { HttpMethods } from './http-methods.enum';
export interface RequestCreate {
  url: string;
  method: HttpMethods;
  headers: { [key: string]: string };
  payload: unknown;
  response: unknown;
  statusCode: number;
}
