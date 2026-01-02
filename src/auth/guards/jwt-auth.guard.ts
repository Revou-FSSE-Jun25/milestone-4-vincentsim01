import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, client, info) {
    console.log('JwtAuthGuard handleRequest: ', { err, client, info });

    return client; // must return the client for Nest to attach to req.client
  }
}