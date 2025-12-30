import { IsBoolean, IsString, IsEmail, IsNotEmpty, IsOptional, IsNumber, MinLength, Matches } from 'class-validator';

export class CreateTodosDto {
@IsEmail()
email: string;

@MinLength(8)
@Matches(/[A-Z]/, { message: 'password must contain uppercase letter' })
@Matches(/[0-9]/, { message: 'password must contain number' })
password: string;


@IsString()
@IsNotEmpty()
name: string;


@IsOptional()
@IsNumber()
balance?: number;


@IsOptional()
@IsString()
role?: 'ADMIN' | 'USER';


  @IsString()
  @IsOptional()
  refreshToken?: string;

}