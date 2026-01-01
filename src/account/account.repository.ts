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

  async createAccount(data: { type: string; interest: number; balance: number; clientId: number}) {

return this.prisma.account.create({
    data: {
      type: data.type,
      interest: data.interest,
      balance: data.balance,
      client: { connect: { id: data.clientId } }, // link to existing user
    },
    include: {
      client: true, // include the user data (name & email) in response
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
      client: {
        email: email, // filter by related client's email
      },
    },
    include: {
      client: true, // include the client data if you want
    },
  });
}
}