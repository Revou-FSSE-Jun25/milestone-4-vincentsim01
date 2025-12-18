import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
// import { AdminService } from './admin/admin.service';
// import { AdminController } from './admin/admin.controller';
// import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { TransactionService } from './transaction/transaction.service';
// import { ControllerService } from './controller/controller.service';
import { TransactionController } from './transaction/transaction.controller';
import { TransactionModule } from './transaction/transaction.module';
import { PrismaModule } from './prisma/prisma.module';
import { AccountService } from './account/account.service';
import { AccountController } from './account/account.controller';
import { AccountModule } from './account/account.module';

@Module({
  imports: [ClientModule,  AuthModule, TransactionModule, PrismaModule, AccountModule],
  controllers: [AppController,  TransactionController, AccountController],
  providers: [AppService, TransactionService, AccountService],
})
export class AppModule {}
