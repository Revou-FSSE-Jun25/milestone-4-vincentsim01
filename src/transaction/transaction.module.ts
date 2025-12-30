import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { TransactionRepository } from './transaction.repository';

@Module({


      imports: [PrismaModule],  
      controllers: [TransactionController],
      providers: [TransactionService, TransactionRepository],
      exports: [TransactionService, TransactionRepository]
})
export class TransactionModule {}