import { Module } from '@nestjs/common';
import { ApiModule } from 'api/api.module';
import { SharedModule } from 'shared/shared.module';

@Module({
  imports: [SharedModule, ApiModule]
})
export class MainModule {}
