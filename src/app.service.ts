import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(process.env.PORT);
    return 'Docker test and next changessssssdocssss';
  }
}
