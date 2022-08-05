export interface Requests {
  url: String;
  creationTime: Date;
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  headers: { [key: string]: String };
  payload: object;
  response: object;
  statusCode: number;
}
