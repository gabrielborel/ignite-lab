import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const $PORT = 3333;
  app
    .listen($PORT)
    .then(() =>
      console.log(`[Purchases] HTTP Server is running on port ${$PORT}!`),
    );
}

bootstrap();
