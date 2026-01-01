import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// import {AuthController} from '../auth/auth.controller';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import {UpdateRevoBankDto} from './dto/update-revobank.dto';

@Injectable()
export class ClientRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createClient(data: { name: string; email: string; password: string; phone: number; age: number; address: string; nationality: string; role?: 'ADMIN' | 'USER' }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // await this.authController.loginUser({email: data.email, password: data.password});

    return this.prisma.client.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        age: data.age,
        phone: data.phone,
        address: data.address,
        nationality: data.nationality,
        role: data.role,
      },
    });
  }

  findAll() {
    return this.prisma.client.findMany({
    //   include: { todos: true },
    });
  }

  findOne(id: number) {
    return this.prisma.client.findUnique({
      where: { id },
    //   include: { todos: true },
    });
  }

  update(id: number, data: UpdateRevoBankDto) {
    return this.prisma.client.update({
      where: { id },
      data,
    });
  }

  delete(id: number) {
    return this.prisma.client.delete({
      where: { id },
    });
  }


  findByEmail(email: string) {
    return this.prisma.client.findUnique({
      where: { email },
    });
  }
}