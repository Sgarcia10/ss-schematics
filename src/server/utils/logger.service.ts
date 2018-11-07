import { createLogger, Logger as logger, format, transports } from 'winston';
import { FactoryProvider } from '@nestjs/common/interfaces';

export type Logger = logger;

const myFormat = format.printf(info => {
  return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

export const LoggerProvider: FactoryProvider = {
  provide: 'Logger',
  useFactory: () => {
    return createLogger({
      format: format.combine(
        format.label({ appname: 'ss-schematics' }),
        format.timestamp(),
        format.prettyPrint()
      ),
      transports: [new transports.Console()]
    });
  }
};
