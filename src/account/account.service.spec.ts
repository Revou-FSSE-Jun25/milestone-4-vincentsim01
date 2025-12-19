import { Test, TestingModule } from '@nestjs/testing';
import { AccountService } from './account.service';
import { AccountRepository } from './account.repository';
import { PrismaService } from '../prisma/prisma.service';

describe('AccountService', () => {
  let accountService: AccountService;
  let accountRepo: jest.Mocked<AccountRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AccountService,
        {
          provide: AccountRepository,
          useValue: {
            findAll: jest.fn(),
            delete: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            createAccount: jest.fn(),
          },
        },
        {
          provide: PrismaService,
          useValue: {},
        },
      ],
    }).compile();

    accountService = module.get<AccountService>(AccountService);
    accountRepo = module.get(AccountRepository);
  });

  describe('getAllAccounts', () => {
    it('should return all accounts', async () => {
      const accounts = [{ id: 1 }];
      accountRepo.findAll.mockResolvedValue(accounts);

      expect(await accountService.getAllAccounts()).toBe(accounts);
    });
  });

  describe('DeleteAccount', () => {
    it('should delete an account', async () => {
      const deleted = { id: 1 };
      accountRepo.delete.mockResolvedValue(deleted);

      expect(await accountService.DeleteAccount(1)).toBe(deleted);
    });
  });

  describe('getOneAccount', () => {
    it('should return a single account', async () => {
      const account = { id: 1 };
      accountRepo.findOne.mockResolvedValue(account);

      expect(await accountService.getOneAccount(1)).toBe(account);
    });
  });

  describe('UpdateAccount', () => {
    it('should update the account', async () => {
      const updateData = { nationality: 'SG' };
      const updated = { id: 1, ...updateData };

      accountRepo.update.mockResolvedValue(updated);

      expect(await accountService.UpdateAccount(1, updateData)).toBe(updated);
    });
  });

  describe('CreateAccount', () => {
    it('should create the account', async () => {
      const createData = {
        nationality: 'SG',
        type: 'Savings',
        age: 18,
        phone: 12345678,
        address: 'Street',
        userId: 1,
      };

      const created = { id: 1, ...createData };

      accountRepo.createAccount.mockResolvedValue(created);

      expect(await accountService.CreateAccount(createData)).toBe(created);
    });
  });
});
