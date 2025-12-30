import { Controller, Post, Body, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post('login')
  // async login(@Body() body: LoginDto) {
  //   const user = await this.authService.validateUser(body.email, body.password);
  //   return this.authService.login(user);
  // }

  // // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }


  @Post('login')
  loginUser(@Body() data: { email: string; password: string }) {
    return this.authService.userLogin(data.email, data.password);
  }



  @Post('refresh')
  async refresh(@Req() req, @Body() user) {
    return this.authService.refreshTokens(user.id, user.token);
  }
}