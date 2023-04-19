import { IsNotEmpty, IsString} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateCourierDto {
    @ApiProperty({ example: 'example', description: 'Courier name' })
    @IsNotEmpty()
    @IsString()
    readonly name: string;


    @ApiProperty({ example: 'example', description: 'Courier surname' })
    @IsNotEmpty()
    @IsString()
    readonly surname: string;

    @ApiProperty({ example: '+375 33 333 33 33', description: 'Courier phone number' })
    @IsNotEmpty()
    @IsString()
    readonly phone: string;

    @ApiProperty({ example: 'http://', description: 'Courier avatar. Can be empty' })
    @IsString()
    readonly avatar?: string;

}
