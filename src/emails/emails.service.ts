// emails.service.ts
import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './create-email.dto';

@Injectable()
export class EmailsService {
  create(createEmailDto: CreateEmailDto) {
    // For now, just return the data or a success message
    return {
      message: 'Email received',
      data: createEmailDto,
    };
  }
}
