import { NestFactory } from '@nestjs/core';
import { INestApplication, ShutdownSignal, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app
    .setGlobalPrefix('/api')
    .useGlobalPipes(new ValidationPipe())
    .enableShutdownHooks([ShutdownSignal.SIGTERM, ShutdownSignal.SIGQUIT, ShutdownSignal.SIGINT]);

  await app.listen(8080);

  return app;
}
bootstrap();
