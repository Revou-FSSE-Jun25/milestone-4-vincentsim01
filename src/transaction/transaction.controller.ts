import {TransactionService} from './transaction.service';
import { Controller , Get, Param, Post, Body, UseGuards, Patch, Delete} from '@nestjs/common';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CreateTransactionDto } from './dto/create-transaction-revobank.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { OwnershipGuard } from 'src/auth/guards/ownership.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/decorators/roles.decorator';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Controller('transaction')
@UseGuards(JwtAuthGuard)
export class TransactionController {
    constructor(private readonly TransactionServiceService:TransactionService){}
    
    @UseGuards(RolesGuard, OwnershipGuard)
    @Roles(Role.ADMIN)
    @Get()
    getAllTransactions(){
        return this.TransactionServiceService.getAllTransactions();
    }



    @Get(':id')
    getOneTransactions(@Param('id') id:string){
        return this.TransactionServiceService.getOneTransactions(Number(id));
    }

    @UseGuards(RolesGuard)
    @Roles(Role.ADMIN)
    @Delete(':id')
    DeleteOneTransactions(@Param('id') id:string){
        return this.TransactionServiceService.DeleteOneTransactions(Number(id));
    }


    @Patch(':id')
    UpdateTransaction(
        @Param('id') id:string,
        @Body() body: UpdateTransactionDto
    ){
        return this.TransactionServiceService.UpdateTransaction(Number(id), body);
    }

    @Post('deposit')
    createDepositTransactions(
        @Body() body:{
            // id:number,
            type: string,
            amount: number,
            description: string,
            clientId: number
        },
    ){
        return this.TransactionServiceService.createDepositTransactions(body);
    }

    @Post('withdraw')
    createWithdrawTransactions(
        @Body() body:{
            // id:number,
            type: string,
            amount: number,
            description: string,
            clientId: number
        },
    ){
        return this.TransactionServiceService.createWithdrawTransactions(body);
    }

    @Post('transfer')
    createTransferTransactions(
        @Body() body:{
            // id:number,
            type: string,
            amount: number,
            description: string,
            clientId: number
        },
    ){
        return this.TransactionServiceService.createTransferTransactions(body);
    }
}