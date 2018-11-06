import { NestFactory } from '@nestjs/core';
import { AppModule } from './api/app.module';
import * as express from 'express';
import { join } from 'path';

const CLIENT_PATH = '../client';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/', express.static(join(__dirname, CLIENT_PATH)));
  await app.listen(3000);
}
bootstrap();
