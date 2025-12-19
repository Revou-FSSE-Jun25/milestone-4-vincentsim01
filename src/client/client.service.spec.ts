import { Test, TestingModule } from '@nestjs/testing';
import { ClientService } from './client.service';
import { ClientRepository } from './client.repository';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';

describe('ClientService', () => {
  let clientService: ClientService;
  let clientRepo: jest.Mocked<ClientRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientService,
        {
          provide: ClientRepository,
          useValue: {
            findAll: jest.fn(),
            findOne: jest.fn(),
            findByEmail: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
            createClient: jest.fn(),
          },
        },
        {
          provide: PrismaService,
          useValue: {}, // not used directly in service
        },
      ],
    }).compile();

    clientService = module.get<ClientService>(ClientService);
    clientRepo = module.get(ClientRepository);
  });

  describe('getAllClients', () => {
    it('should return all clients', async () => {
      const clients = [{ id: 1, name: 'Vincent' }];
      clientRepo.findAll.mockResolvedValue(clients);

      expect(await clientService.getAllClients()).toBe(clients);
    });
  });

  describe('getClientById', () => {
    it('should return client if found', async () => {
      const client = { id: 1, name: 'Vincent' };
      clientRepo.findOne.mockResolvedValue(client);

      expect(await clientService.getClientById(1)).toBe(client);
    });

    it('should throw NotFoundException if client not found', async () => {
      clientRepo.findOne.mockResolvedValue(null);

      await expect(clientService.getClientById(1)).rejects.toThrow(NotFoundException);
    });
  });

  describe('findByEmail', () => {
    it('should return client if found', async () => {
      const client = { id: 1, email: 'test@mail.com' };
      clientRepo.findByEmail.mockResolvedValue(client);

      expect(await clientService.findByEmail('test@mail.com')).toBe(client);
    });

    it('should throw NotFoundException if client not found', async () => {
      clientRepo.findByEmail.mockResolvedValue(null);

      await expect(clientService.findByEmail('notfound@mail.com')).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update client', async () => {
      const updateData = { name: 'Updated' };
      const updatedClient = { id: 1, ...updateData };

      clientRepo.update.mockResolvedValue(updatedClient);

      expect(await clientService.update(1, updateData)).toBe(updatedClient);
    });
  });

  describe('delete', () => {
    it('should delete client', async () => {
      clientRepo.delete.mockResolvedValue({ id: 1 });

      expect(await clientService.delete(1)).toEqual({ id: 1 });
    });
  });

  describe('createClient', () => {
    it('should create a new client', async () => {
      const createData = {
        name: 'NewClient',
        email: 'new@mail.com',
        password: '123',
        balance: 100,
        role: 'USER' as const,
      };

      const createdClient = { id: 1, ...createData };

      clientRepo.createClient.mockResolvedValue(createdClient);

      expect(await clientService.createClient(createData)).toBe(createdClient);
    });
  });
});
