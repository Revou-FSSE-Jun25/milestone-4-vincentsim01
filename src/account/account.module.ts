import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { AccountRepository } from './account.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
          imports: [PrismaModule],  
          controllers: [AccountController],
          providers: [AccountService, AccountRepository],
          exports: [AccountService, AccountRepository]
})
export class AccountModule {}
