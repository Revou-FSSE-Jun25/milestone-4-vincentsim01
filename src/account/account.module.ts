import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { AccountRepository } from './account.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],           // ⬅️ supaya PrismaService tersedia
  providers: [
    AccountService,
    AccountRepository,               // ⬅️ WAJIB
  ],
  controllers: [AccountController],
})
export class AccountModule {}