import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Bid } from '../bids/bid.entity';

@Entity()
export class Contract {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @OneToOne(() => Bid, bid => bid.contract)
  @JoinColumn()
  bid: Bid;
}
