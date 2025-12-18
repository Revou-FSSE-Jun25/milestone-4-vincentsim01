import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info) {
    console.log('JwtAuthGuard handleRequest: ', { err, user, info });

    return user; // must return the user for Nest to attach to req.user
  }
}