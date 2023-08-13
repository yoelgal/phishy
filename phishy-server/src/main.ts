import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'], // Choose the log levels you want
  });
  const port = 3000;
  await app.listen(port);
  logger.log(`Server started on http://localhost:${port}`);
}
bootstrap();
