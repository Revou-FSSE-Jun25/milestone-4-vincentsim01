import { IsBoolean, IsString, IsOptional, IsEmail, IsNotEmpty, IsNumber, MinLength, Matches } from 'class-validator';

export class UpdateRevoBankDto {
@IsOptional()
@IsEmail()
email?: string;


@IsOptional()
@MinLength(8)
@Matches(/[A-Z]/, { message: 'password must contain uppercase letter' })
@Matches(/[0-9]/, { message: 'password must contain number' })
password?: string;


@IsOptional()
@IsString()
name?: string;


@IsNumber()
@IsOptional()
phone?: number;

@IsNumber()
@IsOptional()
age?: number;

@IsString()
@IsOptional()
address?: string;

@IsString()
@IsOptional()
nationality?: string;


@IsOptional()
@IsString()
role?: 'ADMIN' | 'USER';


@IsString()
@IsOptional()
refreshToken?: string;
}