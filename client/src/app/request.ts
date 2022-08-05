export interface Requests {
  url: string;
  creationTime: Date;
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  headers: { [key: string]: string };
  payload: object;
  response: object;
  statusCode: number;
}
