import { ClientService } from './client.service';
import { Controller , Get, Param, Post, Body, UseGuards, Patch, Delete} from '@nestjs/common';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UpdateRevoBankDto } from './dto/update-revobank.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { OwnershipGuard } from 'src/auth/guards/ownership.guard';
// import { Roles } from '../auth/guards/roles.guard';
import { Role } from 'src/auth/decorators/roles.decorator';


@Controller('clients')
// @UseGuards(JwtAuthGuard)

export class ClientController {
    constructor(private readonly clientService:ClientService){}

    @UseGuards(JwtAuthGuard, RolesGuard, OwnershipGuard)
    @Roles(Role.ADMIN)
    @Get()
    getAllClients(){
        return this.clientService.getAllClients();
    }

    @UseGuards(JwtAuthGuard, RolesGuard, OwnershipGuard)
    @Roles(Role.ADMIN)
    @Get(':id')
    getClient(@Param('id') id:string){
        return this.clientService.getClientById(Number(id));
    }
    @UseGuards(JwtAuthGuard, RolesGuard, OwnershipGuard)
    @Roles(Role.ADMIN)
    @Patch(':id')
    updateClient(@Param('id') id:string, @Body() data: UpdateRevoBankDto){
        return this.clientService.update(Number(id), data);
    }
    @UseGuards(JwtAuthGuard, RolesGuard, OwnershipGuard)
    @Roles(Role.ADMIN)
    @Delete(':id')
    deleteClient(@Param('id') id:string){
        return this.clientService.delete(Number(id));
    }
    @UseGuards(JwtAuthGuard)
    @Post()
    createClient(
        @Body() body:{
            id:number,
            name:string,
            email:string,
            password:string,
            balance:number,
            role: 'ADMIN' | 'USER',
        },
    ){
        return this.clientService.createClient(body);
    }

}