import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) { }

  public async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.userRepository.create(createUserDto);

      return { user: user.id }
    } catch (error) {
      console.log(error);
    }
  }

  public async view(userId: string) {
    try {
      const user = await this.userRepository.findUserById(userId);

      return user
    } catch (error) {
      console.log(error);
    }
  }

  public async update(userId: string, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userRepository.update(userId, updateUserDto);

      return { user }
    } catch (error) {
      console.log(error);
    }
  }

  public async updateImage(userId: string, imageUrl: string) {
    try {
      const update = await this.userRepository.uploadImage(userId, imageUrl);

      return { user: update }
    } catch (error) {
      console.log(error);
    }
  }

  public async sendCode(email: string) {
    try {
      await this.userRepository.sendCode(email);

      return { message: 'E-mail Sended' }
    } catch (error) {
      console.log(error);
    }
  }

  public async resetPass(code: string, newPass: string) {
    try {
      const reset = await this.userRepository.updatePass(code, newPass);

      return { user: reset }
    } catch (error) {
      console.log(error);
    }
  }
}
