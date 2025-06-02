import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(
    @Body('username') username: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const user = await this.usersService.create(username, email, password);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: userPasswordToRemove, ...result } = user;
    return result;
  }
}
