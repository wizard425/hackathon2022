export interface Requests {
  _id: string,
  url: string;
  creationTime: Date;
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  headers: { [key: string]: String };
  payload: object;
  response: object;
  statusCode: number;
}
