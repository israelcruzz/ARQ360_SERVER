import { Users } from '@prisma/client';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

export interface UserRepository {
    create: (data: CreateUserDto) => Promise<Users>;
    findUserById: (userId: string) => Promise<Users>;
    upload: (userId: string, data: UpdateUserDto) => Promise<void>;
    uploadImage: (userId: string, imageUrl: string) => Promise<void>;
    uploadPass: (code: string, newPass: string) => Promise<void>;
    sendCode: (email: string) => Promise<void>;
    validateCode: (code: string) => Promise<boolean>;
}