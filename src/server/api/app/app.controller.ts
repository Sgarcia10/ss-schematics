import { Get, Controller, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { Logger } from '../../utils/logger.service';

@Controller('api/test')
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('Logger') private readonly logger: Logger
  ) {}

  @Get()
  root(): string {
    this.logger.info('Hola');
    return this.appService.root();
  }
}
