import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// import {AuthController} from '../auth/auth.controller';
// import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import {CreateAccountDto} from './dto/create-account.dto';
import {UpdateAccountDto} from './dto/update-account.dto';

@Injectable()
export class AccountRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createAccount(data: { nationality: string; type: string; age: number; phone: number; address: string; userId: number}) {

return this.prisma.account.create({
    data: {
      nationality: data.nationality,
      type: data.type,
      age: data.age,
      phone: data.phone,
      address: data.address,
      user: { connect: { id: data.userId } }, // link to existing user
    },
    include: {
      user: true, // include the user data (name & email) in response
    },
  });
  }

  findAll() {
    return this.prisma.account.findMany({
    });
  }

  findOne(accountid: number) {
    return this.prisma.account.findUnique({
      where: { accountid },
    });
  }

  update(accountid: number, account: UpdateAccountDto) {
    return this.prisma.account.update({
      where: { accountid: accountid },
      data: account,
    });
  }

  delete(accountid: number) {
    return this.prisma.account.delete({
      where: { accountid },
    });
  }


findByEmail(email: string) {
  return this.prisma.account.findFirst({
    where: {
      user: {
        email: email, // filter by related user's email
      },
    },
    include: {
      user: true, // include the user data if you want
    },
  });
}
}