import { AccountRepository } from './account.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountService {
    constructor(private readonly accountRepo: AccountRepository, private readonly prisma: PrismaService){}


    getAllAccounts(){
        return this.accountRepo.findAll();
    }

    DeleteAccount(accountid: number){
        return this.accountRepo.delete(accountid);
    }


    getOneAccount(accountid: number){
        return this.accountRepo.findOne(accountid);
    }

    UpdateAccount(accountid: number, data: {
            // id:number,
            // email?: string,
            // name?: string,
            nationality?: string,
            type?: string,
            age?: number,
            phone?: number,
            address?: string

        }){
        return this.accountRepo.update(accountid, data);
    }


    CreateAccount(data: {

            nationality: string,
            type: string,
            age: number,
            phone: number,
            address: string,
            userId: number

        }){
        return this.accountRepo.createAccount(data);
    }


    

}