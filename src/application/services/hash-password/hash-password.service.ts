import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class HashPasswordService {
  public async hashPassord(pass: string) {
    const hash = await bcrypt.hash(pass, 6);

    return hash
  }

  public async comparePasswords(pass: string, hashPass: string) {
    const validate = await bcrypt.compare(pass, hashPass);

    return validate
  }
}
