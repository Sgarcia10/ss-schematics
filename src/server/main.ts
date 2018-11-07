import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { join } from 'path';
import { MainModule } from 'main.module';

const CLIENT_PATH = '../client';
async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  app.use('/', express.static(join(__dirname, CLIENT_PATH)));
  await app.listen(3000);
}
bootstrap();
