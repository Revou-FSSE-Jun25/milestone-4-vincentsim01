import { Injectable,  UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info, context) {
    if (!user) throw new UnauthorizedException();

    const request = context.switchToHttp().getRequest();
    request.client = user;

    return user;
  }
}