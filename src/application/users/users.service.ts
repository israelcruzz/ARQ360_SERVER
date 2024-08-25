import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UserNotFound } from "./exceptions/user-not-found.exception"

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) { }

  public async create(createUserDto: CreateUserDto) {
    const user = await this.prismaService.users.create({ data: createUserDto })

    return user.id
  }

  public async findOne(userId: string) {
    const user = await this.prismaService.users.findUnique({
      where: {
        id: userId
      }
    })

    if (!user) {
      throw new UserNotFound()
    }

    return user
  }

  public async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  public async updateImage(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  public async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
