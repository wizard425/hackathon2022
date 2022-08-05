import { Module } from '@nestjs/common';

import { BlueprintsController } from './blueprints.controller';
import { BlueprintsService } from './blueprints.service';

@Module({
  providers: [BlueprintsService],
  controllers: [BlueprintsController],
})
export class BlueprintsModule {}
