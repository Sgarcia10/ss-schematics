import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): {} {
    return { title: 'Hello World!' };
  }
}
