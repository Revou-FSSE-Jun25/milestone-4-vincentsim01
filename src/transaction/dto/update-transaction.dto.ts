import { IsBoolean, IsString, IsOptional, IsEmail, IsNotEmpty, IsNumber, MinLength, Matches } from 'class-validator';

export class UpdateTransactionDto {
@IsString()
@IsOptional()
type: 'deposit' | 'withdraw' | 'transfer';


@IsNumber()
@IsOptional()
amount: number;

@IsString()
@IsOptional()
description?: string;

@IsNumber()
@IsOptional()
clientId: number;
}