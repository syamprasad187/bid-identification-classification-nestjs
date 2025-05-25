import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from 'typeorm';
import { Email } from '../emails/email.entity';
import { Contract } from '../contracts/contract.entity';

@Entity()
export class Bid {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  projectName: string;

  @Column()
  contractorName: string;

  @Column()
  bidType: string;

  @Column()
  value: number;

  @OneToMany(() => Email, email => email.bid)
  emails: Email[];

  @OneToOne(() => Contract, contract => contract.bid)
  contract: Contract;
}
