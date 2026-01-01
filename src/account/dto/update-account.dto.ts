import { IsBoolean, IsString, IsEmail, IsNotEmpty, IsOptional, IsNumber, MinLength, Matches } from 'class-validator';

export class UpdateAccountDto {
// @IsEmail()
// @IsOptional()
// email?: string;

// @IsString()
// @IsOptional()
// name?:string;

@IsString()
@IsOptional()
type?:string;

@IsNumber()
@IsOptional()
interest?:number;


@IsOptional()
@IsNumber()
balance?: number;

}