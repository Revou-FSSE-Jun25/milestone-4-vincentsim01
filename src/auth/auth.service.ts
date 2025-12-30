import { Injectable, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientService } from '../client/client.service';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private clientService: ClientService,
    private jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.clientService.findByEmail(email);

    if (!user) throw new UnauthorizedException('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid password');

    return user;
  }

  async login(user: {
    email: string;
    id: number | string;
    role: string | null;
  }) {
    const payload = {
      email: user.email,
      sub: user.id,
      role: user.role,
    };

    console.log('payload BEFORE signing:', payload);

    const access_token = this.jwtService.sign(payload, { expiresIn: '2h' });
    const refresh_token = this.jwtService.sign(payload, { expiresIn: '7d' });

    const hashedRt = await bcrypt.hash(refresh_token, 10);

    const existing = await this.clientService.findByEmail(user.email);
    if (!existing) return null;

    await this.clientService.update(existing.id, { refreshToken: hashedRt });

    return {
      access_token,
      refresh_token,
    };
  }


  async userLogin(email: string, password: string) {
    const payload = await this.validateUser(email, password);
    console.log({ payload });
    if (!payload) return null;

    console.log({ payload });

    return this.login({
      email,
      id: payload.id,
      role: payload.role ?? null,
    });
  } 

    async refreshTokens(userId: number, token: string) {
    const user = await this.clientService.getClientById(userId);
    if (!user || !user.refreshToken) throw new ForbiddenException('No no no!');

    const rTmatches = await bcrypt.compare(token, user.refreshToken);
    if (!rTmatches) throw new ForbiddenException('No refresh refresh club');

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role ?? null,
    };

    const newAccessToken = this.jwtService.sign(payload);
    const newRefreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    const hashedRt = await bcrypt.hash(newRefreshToken, 10);

    await this.clientService.update(user.id, { refreshToken: hashedRt });

    return {
      access_token: newAccessToken,
      refresh_token: newRefreshToken,
    };
  }

}