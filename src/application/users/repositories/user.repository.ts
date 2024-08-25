import { Users } from '@prisma/client';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

export interface UserRepository {
    create: (data: CreateUserDto) => Promise<Users>;
    findUserById: (userId: string) => Promise<Users>;
    update: (userId: string, data: UpdateUserDto) => Promise<string>;
    uploadImage: (userId: string, imageUrl: string) => Promise<void>;
    updatePass: (code: string, newPass: string) => Promise<string>;
    sendCode: (email: string) => Promise<void>;
    validateCode: (code: string) => Promise<boolean>;
}