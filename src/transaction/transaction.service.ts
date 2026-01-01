import { Injectable, NotFoundException } from '@nestjs/common';
import { TransactionRepository } from './transaction.repository';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction-revobank.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionService {
    constructor(private readonly transactionRepo: TransactionRepository, private readonly prisma: PrismaService){}

    getAllTransactions(){
        return this.transactionRepo.findAllTransaction();
    }

    DeleteOneTransactions(id:number){
        return this.transactionRepo.deleteTransaction(id);
    }


    getOneTransactions(id: number){
        return this.transactionRepo.findOneTransaction(id);
    }

    UpdateTransaction(id: number, data: UpdateTransactionDto) {
        return this.transactionRepo.update(id, data);
    }

    createDepositTransactions( data:{
            // id:number,
            type: string,
            amount: number,
            description: string,
            clientId: number

        }){
        return this.transactionRepo.createTransactionDeposit(data);
    }


    createWithdrawTransactions( data:{
            // id:number,
            type: string,
            amount: number,
            description: string,
            clientId: number

        }){
        return this.transactionRepo.createTransactionWithdraw(data);
    }

    createTransferTransactions( data:{
            // id:number,
            type: string,
            amount: number,
            description: string,
            clientId: number

        }){
        return this.transactionRepo.createTransactionTransfer(data);
    }
}