import { IsBoolean, IsString, IsEmail, IsNotEmpty, IsOptional, IsNumber, MinLength, Matches } from 'class-validator';

export class CreateRevobankDto {
@IsNotEmpty() 
@IsEmail()
email: string;

@MinLength(8)
@IsNotEmpty()
@Matches(/[A-Z]/, { message: 'password must contain uppercase letter' })
@Matches(/[0-9]/, { message: 'password must contain number' })
password: string;


@IsString()
@IsNotEmpty()
name: string;



@IsNumber()
@IsNotEmpty()
phone: number;

@IsNumber()
@IsNotEmpty()
age: number;

@IsString()
@IsNotEmpty()
address: string;

@IsString()
@IsNotEmpty()
nationality: string;

@IsString()
role: 'ADMIN' | 'USER';


@IsString()
@IsOptional()
refreshToken?: string;

}