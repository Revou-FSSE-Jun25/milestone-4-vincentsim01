import { AccountService } from './account.service';
import { Controller , Get, Param, Post, Body, UseGuards, Patch, Delete} from '@nestjs/common';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UpdateAccountDto } from './dto/update-account.dto';
import {CreateAccountDto} from './dto/create-account.dto';
import { OwnershipGuard } from 'src/auth/guards/ownership.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/decorators/roles.decorator';

@Controller('accounts')
// @UseGuards(JwtAuthGuard)

export class AccountController {
    constructor(private readonly accountService:AccountService){}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    @Get()
    getAllAccounts(){
        return this.accountService.getAllAccounts();
    }
    @UseGuards(JwtAuthGuard, OwnershipGuard, RolesGuard)
    @Roles(Role.ADMIN)
    @Get(':id')
    getAccount(@Param('id') id:string){
        return this.accountService.getOneAccount(Number(id));
    }

    @UseGuards(JwtAuthGuard, RolesGuard, OwnershipGuard)
    @Roles(Role.ADMIN)
    @Patch(':id')
    updateAccount(@Param('id') id:string, @Body() data: UpdateAccountDto){
        return this.accountService.UpdateAccount(Number(id), data);
    }

    @UseGuards(JwtAuthGuard, RolesGuard, OwnershipGuard)
    @Roles(Role.ADMIN)
    @Delete(':id')
    deleteAccount(@Param('id') id:string){
        return this.accountService.DeleteAccount(Number(id));
    }

    @UseGuards(JwtAuthGuard, RolesGuard, OwnershipGuard)
    @Roles(Role.ADMIN)
    @Get(':id')
    getClient(@Param('id') id:string){
        return this.accountService.getOneAccount(Number(id));
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createAccount(
        @Body() body:{
            type: string,
            interest: number,
            balance: number,
            clientId: number
        },
    ){
        return this.accountService.CreateAccount(body);
    }

}