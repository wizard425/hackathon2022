import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { StatusModule } from './status';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestsModule } from './tests';
import { BlueprintsModule } from './blueprints';
import { ConfigService, ConfigModule } from './config';

const CONFIG_SERVICE = new ConfigService();

const MODULES = [TestsModule, BlueprintsModule, StatusModule];

@Module({
  imports: [
    ConfigModule.forRoot(CONFIG_SERVICE),
    ...MODULES,
    MongooseModule.forRoot(CONFIG_SERVICE.getMongodbConnection()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
