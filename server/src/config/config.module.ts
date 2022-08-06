import { Module, DynamicModule } from '@nestjs/common';

import { ConfigService } from './config.service';

@Module({})
export class ConfigModule {
  public static forRoot(configService: ConfigService): DynamicModule {
    return {
      global: true,
      module: ConfigService,
      providers: [{ provide: ConfigService, useValue: configService }],
      exports: [ConfigService],
    };
  }
}
