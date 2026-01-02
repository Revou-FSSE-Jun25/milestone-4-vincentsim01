import { Injectable,  UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, client, info) {
    console.log('JwtAuthGuard handleRequest: ', { err, client, info });

    if (err || !client) {
      throw err || new UnauthorizedException('Invalid or missing token');
    }

    return client; // must return the client for Nest to attach to req.client
  }
}