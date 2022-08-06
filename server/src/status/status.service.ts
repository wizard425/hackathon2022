import { Injectable, Logger } from '@nestjs/common';
import { Subject } from 'rxjs';

import { Status } from './interfaces';

@Injectable()
export class StatusService {
  private readonly logger = new Logger(StatusService.name);
  private running: boolean;
  public onRunningChange: Subject<boolean> = new Subject();

  public write(status: Status): void {
    this.logger.log(`status: ${status.status}`);
    if (this.running === status.status) return;
    this.running = status.status;
    this.onRunningChange.next(this.running);
  }

  public read(): boolean {
    return this.running;
  }
}
