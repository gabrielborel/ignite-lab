import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const $PORT = 3332;
  await app
    .listen($PORT)
    .then(() => console.log(`[Gateway] app is running on port ${$PORT}`));
}
bootstrap();
