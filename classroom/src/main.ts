import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'classroom',
        brokers: ['localhost:29092'],
      },
    },
  });

  app.startAllMicroservices().then(() => {
    console.log('[Classroom] Microservice running!');
  });

  const $PORT = 3334;

  app.listen($PORT).then(() => {
    console.log(`[Classroom] HTTP server running on port ${$PORT}!`);
  });
}

bootstrap();
