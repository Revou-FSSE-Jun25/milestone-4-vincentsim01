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
@IsNotEmpty()
name?: string;


@IsOptional()
@IsNumber()
balance?: number;


@IsOptional()
@IsString()
role?: 'ADMIN' | 'USER';


  @IsString()
  @IsOptional()
  refreshToken: string;
}