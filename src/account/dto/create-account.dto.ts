import { IsBoolean, IsString, IsEmail, IsNotEmpty, IsOptional, IsNumber, MinLength, Matches } from 'class-validator';

export class CreateAccountDto {
// @IsEmail()
// @IsNotEmpty()
// email: string;

// @IsString()
// @IsNotEmpty()
// name:string;

@IsString()
@IsNotEmpty()
type:string;


@IsNumber()
age?:number;


@IsString()
nationality?: string;



@IsNumber()
phone?: number;



@IsString()
address?: string;

}