import {IsEmail, IsNotEmpty, IsString, MinLength} from "class-validator";

export class RegisterDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    readonly password: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    readonly name: string;

}


export class LoginDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    readonly password: string;

}

