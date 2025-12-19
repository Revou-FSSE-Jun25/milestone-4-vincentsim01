import { Test, TestingModule } from '@nestjs/testing';
import { TransactionService } from './transaction.service';
import { TransactionRepository } from './transaction.repository';
import { PrismaService } from '../prisma/prisma.service';

describe('TransactionService', () => {
  let transactionService: TransactionService;
  let transactionRepo: jest.Mocked<TransactionRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransactionService,
        {
          provide: TransactionRepository,
          useValue: {
            findAllTransaction: jest.fn(),
            findOneTransaction: jest.fn(),
            createTransactionDeposit: jest.fn(),
            createTransactionWithdraw: jest.fn(),
            createTransactionTransfer: jest.fn(),
          },
        },
        {
          provide: PrismaService,
          useValue: {},
        },
      ],
    }).compile();

    transactionService = module.get<TransactionService>(TransactionService);
    transactionRepo = module.get(TransactionRepository);
  });

  describe('getAllTransactions', () => {
    it('should return all transactions', async () => {
      const transactions = [{ id: 1, amount: 100 }];
      transactionRepo.findAllTransaction.mockResolvedValue(transactions);

      expect(await transactionService.getAllTransactions()).toBe(transactions);
    });
  });

  describe('getOneTransactions', () => {
    it('should return a transaction by id', async () => {
      const transaction = { id: 1, amount: 100 };
      transactionRepo.findOneTransaction.mockResolvedValue(transaction);

      expect(await transactionService.getOneTransactions(1)).toBe(transaction);
    });
  });

  describe('createDepositTransactions', () => {
    it('should create deposit transaction', async () => {
      const data = { type: 'deposit', amount: 100, description: 'Top up', userId: 1 };
      const createdTransaction = { id: 1, ...data };
      
      transactionRepo.createTransactionDeposit.mockResolvedValue(createdTransaction);

      expect(await transactionService.createDepositTransactions(data)).toBe(createdTransaction);
    });
  });

  describe('createWithdrawTransactions', () => {
    it('should create withdraw transaction', async () => {
      const data = { type: 'withdraw', amount: 50, description: 'ATM withdraw', userId: 1 };
      const createdTransaction = { id: 1, ...data };
      
      transactionRepo.createTransactionWithdraw.mockResolvedValue(createdTransaction);

      expect(await transactionService.createWithdrawTransactions(data)).toBe(createdTransaction);
    });
  });

  describe('createTransferTransactions', () => {
    it('should create transfer transaction', async () => {
      const data = { type: 'transfer', amount: 75, description: 'Send money', userId: 1 };
      const createdTransaction = { id: 1, ...data };
      
      transactionRepo.createTransactionTransfer.mockResolvedValue(createdTransaction);

      expect(await transactionService.createTransferTransactions(data)).toBe(createdTransaction);
    });
  });
});
