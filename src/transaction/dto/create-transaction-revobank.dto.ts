import { IsBoolean, IsString, IsOptional, IsEmail, IsNotEmpty, IsNumber, MinLength, Matches } from 'class-validator';

export class CreateTransactionDto {
@IsString()
@IsNotEmpty()
type: 'deposit' | 'withdraw' | 'transfer';


@IsNumber()
@IsNotEmpty()
amount: number;

@IsString()
description?: string;

@IsNumber()
@IsNotEmpty()
userId: number;
}