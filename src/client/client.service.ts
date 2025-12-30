// import { BatchPayload } from './../../node_modules/.prisma/client/index.d';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ClientRepository } from './client.repository';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateRevoBankDto } from './dto/update-revobank.dto';

@Injectable()
export class ClientService {
    constructor(private readonly clientRepo: ClientRepository, private readonly prisma: PrismaService){}

    getAllClients(){
        return this.clientRepo.findAll();
    }

    getClientById(id:number){
        const client =  this.clientRepo.findOne(id);
        if(!client) throw new NotFoundException('client not found');
        return client;
    }

    findByEmail(email:string){
        const client =  this.clientRepo.findByEmail(email);
        if(!client) throw new NotFoundException('client not found');
        return client;
    }

    update(id: number, data: UpdateRevoBankDto) {
    return this.clientRepo.update(id, data);
    //   where: { id },
    //   data,
    };

    delete(id: number) {
    return this.clientRepo.delete(id);
    //   where: { id },
    //   data,
    };
  

    createClient(
        data:{
            // id:number,
            name: string,
            email: string,
            password: string,
            balance: number,
            role: 'ADMIN' | 'USER',

        }
    ){
        return this.clientRepo.createClient(data);
    }
}