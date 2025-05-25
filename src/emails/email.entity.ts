import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Bid } from '../bids/bid.entity';

@Entity()
export class Email {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject: string;

  @Column()
  body: string;

  @Column()
  sender: string;

  @ManyToOne(() => Bid, bid => bid.emails)
  bid: Bid;
}
