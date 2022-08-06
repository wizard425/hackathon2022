import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  public getMongodbConnection(): string {
    return 'mongodb://localhost/hackathon';
  }
}
