import type { HttpMethods } from './http-methods.enum';

export interface Request {
  url: string;
  method: HttpMethods;
  headers: { [key: string]: string };
  payload: string;
  response: string;
  statusCode: number;
}
