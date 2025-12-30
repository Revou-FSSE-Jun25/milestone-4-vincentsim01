import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ClientModule } from './client/client.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { TransactionModule } from './transaction/transaction.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    ClientModule,
    AuthModule,
    PrismaModule,
    TransactionModule,
    AccountModule,
  ],
  controllers: [AppController],  // hanya AppController
  providers: [AppService],       // hanya AppService
})
export class AppModule {}