import {IsEmail, IsNotEmpty, IsString, MinLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class RegisterDto {
    @ApiProperty({ example: 'example@gmail.com', description: 'Email. Should be unique' })
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly email: string;

    @ApiProperty({ example: 'strong password', description: 'Password. Min length 4 symbols' })
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    readonly password: string;

    @ApiProperty({ example: 'example', description: 'User name' })
    @IsNotEmpty()
    @IsString()
    readonly name: string;

}


export class LoginDto {
    @ApiProperty({ example: 'example@gmail.com', description: 'Email. Should be unique' })
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly email: string;

    @ApiProperty({ example: 'strong password', description: 'Password. Min length 4 symbols' })
    @MinLength(4)
    @IsNotEmpty()
    @IsString()
    readonly password: string;

}

