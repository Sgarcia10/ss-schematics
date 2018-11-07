import { Module } from '@nestjs/common';
import { LoggerProvider } from '../utils/logger.service';

@Module({
  imports: [],
  providers: [LoggerProvider],
  exports: [LoggerProvider]
})
export class SharedModule {}
