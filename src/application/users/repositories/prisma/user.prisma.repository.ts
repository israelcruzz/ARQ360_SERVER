import { UserRepository } from "../user.repository";
import { CreateUserDto } from "../../dto/create-user.dto";
import { PrismaService } from "src/application/prisma/prisma.service";
import { UserNotFound } from "../../exceptions/user-not-found.exception";
import { UpdateUserDto } from "../../dto/update-user.dto";

export class UserPrismaRepository implements UserRepository {
  constructor(private readonly prismaService: PrismaService) { }

  public async create(data: CreateUserDto) {
    try {
      const user = await this.prismaService.users.create({
        data: data
      })

      return user
    } catch (error) {
      console.log(error);
    }
  }

  public async findUserById(userId: string) {
    try {
      const user = await this.prismaService.users.findUnique({
        where: {
          id: userId
        }
      })

      if (!user) {
        throw new UserNotFound()
      }

      return user;
    } catch (error) {
      console.log(error);
    }
  }

  public async upload(userId: string, data: UpdateUserDto) {
    try {
      const user = await this.findUserById(userId);

      if (!user) {
        throw new UserNotFound()
      }

      await this.prismaService.users.update({
        where: {
          id: user.id
        },
        data
      })
    } catch (error) {
      console.log(error);
    }
  }

  public async uploadImage(userId: string, imageUrl: string) {
    try {
      const user = await this.findUserById(userId);

      if (!user) {
        throw new UserNotFound()
      }

      await this.prismaService.users.update({
        where: {
          id: user.id
        },
        data: {
          image: imageUrl,
          updated_at: new Date()
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  public async sendCode(email: string) {
    try {
      console.log(email);
      
    } catch (error) {
      console.log(error);
    }
  }

  public async uploadPass(code: string, newPass: string) {
    try {
      const user = await this.prismaService.users.findFirst({
        where: {
          password_code: code
        }
      })

      
    } catch (error) {
      console.log(error);
    }
  }

  public async validateCode(code: string) {
    try {
      return true
    } catch (error) {
      console.log(error);
    }
  }
}