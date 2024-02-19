import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pw: string) {
    const user = await this.usersService.findByEmail(email);
    const compare = await bcrypt.compare(pw, user.password);
    if (!compare) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const { password, ...result } = user;
    const access_token = await this.jwtService.signAsync(result);
    return {
      access_token,
      data: result,
    };
  }

  async authGuard(token: string) {
    const user = await this.jwtService.verifyAsync(token);
    return user;
  }
}
