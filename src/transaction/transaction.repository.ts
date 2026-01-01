import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class TransactionRepository {
      constructor(private readonly prisma: PrismaService) {}


    findAllTransaction() {
        return this.prisma.transaction.findMany({
        //   include: { todos: true },
        });
    }

      findOneTransaction(transactionid: number) {
        return this.prisma.transaction.findUnique({
        where: { transactionid: transactionid },
        //   include: { todos: true },
        });
  }

  async deleteTransaction(transactionid: number) {
    return this.prisma.transaction.delete({
      where: { transactionid: transactionid },
    });
  }


       async createTransactionDeposit(data: { type: string; amount: number; description: string; clientId: number; }) {
     
         return this.prisma.transaction.create({
           data: {
             type: "deposit",
             amount: data.amount,
             description: data.description,
             clientId: data.clientId,
           },
         });
       }

        async createTransactionWithdraw(data: { type: string; amount: number; description: string; clientId: number; }) {
     
         return this.prisma.transaction.create({
           data: {
             type: "withdraw",
             amount: data.amount,
             description: data.description,
             clientId: data.clientId,
           },
         });
       }


        async createTransactionTransfer(data: { type: string; amount: number; description: string; clientId: number; }) {
     
         return this.prisma.transaction.create({
           data: {
             type: "transfer",
             amount: data.amount,
             description: data.description,
             clientId: data.clientId,
           },
         });
       }
}