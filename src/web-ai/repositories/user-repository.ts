import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../models/user.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User) private userRepositiory: Repository<User>,
  ) {}

  async createUser(user: CreateUserDto) {
    const newUser = this.userRepositiory.create(user);
    return await this.userRepositiory.save(newUser);
  }
  async getUserById(userId: string) {
    return await this.userRepositiory.findOne({
      where: { userId },
    });
  }
}