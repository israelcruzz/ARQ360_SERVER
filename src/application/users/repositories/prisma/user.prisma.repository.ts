import { UserRepository } from "../user.repository";
import { CreateUserDto } from "../../dto/create-user.dto";
import { PrismaService } from "src/application/prisma/prisma.service";
import { UserNotFound } from "../../exceptions/user-not-found.exception";
import { UpdateUserDto } from "../../dto/update-user.dto";
import { MailService } from "src/application/mail/mail.service";
import { generateCode } from "src/application/utils/generate-code";
import dayjs from "dayjs";
import { UserWithSameEmail } from "../../exceptions/user-with-same-email.exception";
import { PassCodeError } from "../../exceptions/pass-code-error.exception";

export class UserPrismaRepository implements UserRepository {
  constructor(private readonly prismaService: PrismaService, private readonly mailService: MailService) { }

  public async create(data: CreateUserDto) {
    try {
      const userWithSameEmail = await this.prismaService.users.findUnique({
        where: {
          email: data.email
        }
      })

      if (userWithSameEmail) {
        throw new UserWithSameEmail()
      }

      const user = await this.prismaService.users.create({
        data: data
      })

      return user;
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

      const updateData = data;

      await this.prismaService.users.update({
        where: {
          id: user.id
        },
        data: {
          updated_at: new Date(),
          ...updateData
        }
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
      const user = await this.prismaService.users.findUnique({
        where: {
          email
        }
      })

      if (!user) {
        throw new UserNotFound();
      }

      const code = generateCode();

      await this.prismaService.users.update({
        where: {
          id: user.id
        },
        data: {
          password_code: code,
          password_code_expires: dayjs().add(1, 'hour').toDate(),
          updated_at: new Date(),
        }
      })

      const messageTemplate = `
      <div style="font-size: 16;">
        <h2>Password Reset Request</h2>
        <p>Hello <span style="font-weight: bold;">${user.name},</span></p>
        <p>To reset your password, please copy code</p>
        <span>Your code: <span style="font-weight: bold; font-size: 18;">${code}</span> </span>
        <p>If you did not request this change, please ignore this email.</p>

        <div style="display: flex; gap: 24px">
          <img src="" width="24px" height alt="company logo" />
          <span style="font-weight: bold; font-size: 12;">ARQ360</span>
        </div>
      </div>
      `

      await this.mailService.sendMail({
        to: user.email,
        subject: "Reset Your Password",
        template: messageTemplate
      })
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

      if (!user) {
        throw new PassCodeError();
      }

      const verifyCode = await this.validateCode(code);

      if (!verifyCode) {
        throw new PassCodeError();
      }

      await this.prismaService.users.update({
        where: {
          id: user.id
        },
        data: {
          password: newPass,
          updated_at: new Date(),
          password_code: null,
          password_code_expires: null
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  public async validateCode(code: string) {
    try {
      const user = await this.prismaService.users.findFirst({
        where: {
          password_code: code
        }
      })

      if (!user) {
        throw new PassCodeError();
      }

      const validateCode = dayjs(user.password_code_expires).isBefore(dayjs());

      return validateCode;
    } catch (error) {
      console.log(error);
    }
  }
}