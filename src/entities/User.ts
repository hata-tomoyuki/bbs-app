import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import type { Post } from './Post';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('varchar')
  userName!: string;

  @Column({ type: 'varchar', unique: true })
  email!: string;

  @Column('varchar')
  password!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany('post', (post: Post) => post.user)
  posts!: Post[];
}
