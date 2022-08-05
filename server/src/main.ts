import { NestFactory } from '@nestjs/core';
import { INestApplication, ShutdownSignal } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);

  app
    .setGlobalPrefix('/api')
    .enableShutdownHooks([ShutdownSignal.SIGTERM, ShutdownSignal.SIGQUIT, ShutdownSignal.SIGINT]);

  await app.listen(8080);

  return app;
}
bootstrap();
