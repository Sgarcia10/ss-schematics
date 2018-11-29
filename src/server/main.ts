import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { join } from 'path';
import { MainModule } from 'main.module';
import * as compression from 'compression';
import * as helmet from 'helmet';

const CLIENT_PATH = '../client';
async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  app
    .use(compression(), helmet())
    .use(['/build/', '/'], express.static(join(__dirname, CLIENT_PATH)));
  await app.listen(5000);
}
bootstrap();
