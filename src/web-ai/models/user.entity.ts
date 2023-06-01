import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity({ name: 'users' })
export class User {
  @PrimaryColumn({ name: 'user_id', type: 'varchar' })
  readonly userId: string;

  @Column()
  readonly username: string;

  @Exclude()
  @Column()
  password: string;

  @Column()
  readonly nombre: string;

  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }
  constructor(
    userId: string,
    username: string,
    password: string,
    nombre: string,
  ) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.nombre = nombre;
  }
}