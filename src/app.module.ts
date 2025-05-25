import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { BidsModule } from './bids/bids.module';
import { EmailsModule } from './emails/emails.module';
import { ContractsModule } from './contracts/contracts.module';
import { ClassificationModule } from './classification/classification.module';
import { Bid } from './bids/bid.entity';
import { Email } from './emails/email.entity';
import { Contract } from './contracts/contract.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Bid, Email, Contract],
      synchronize: true,
    }),
    BidsModule,
    EmailsModule,
    ContractsModule,
    ClassificationModule,
  ],
})
export class AppModule {}
