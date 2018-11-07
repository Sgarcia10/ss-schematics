import { Module, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import * as healthcheck from 'express-healthcheck';
import * as morgan from 'morgan';
import * as compression from 'compression';
import * as helmet from 'helmet';
import { SharedModule } from 'shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [AppController],
  providers: [AppService]
})
export class ApiModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(
        morgan(
          'ss-schematics [:date[clf]] ":method :url" :status :res[content-length] - :response-time ms'
        )
      )
      .with('MainModule')
      .forRoutes({
        path: '*',
        method: RequestMethod.ALL
      })
      .apply(compression(), helmet())
      .forRoutes({
        path: '*',
        method: RequestMethod.ALL
      })
      .apply(
        healthcheck({
          healthy: function() {
            return {
              status: 'UP',
              env: process.env.ENV
            };
          }
        })
      )
      .forRoutes({ path: '/health', method: RequestMethod.GET });
  }
}
