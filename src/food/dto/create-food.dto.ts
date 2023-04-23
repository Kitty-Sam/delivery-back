import { IsNotEmpty, IsString} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateFoodDto {
    @ApiProperty({ example: 'Spider', description: 'Food name' })
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiProperty({ example: 'Spicy and crispy', description: 'Food description' })
    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: '11.5', description: 'Food price' })
    readonly price: string;


    @ApiProperty({ example: 'The most incredible option for dinner', description: 'Food about' })
    @IsNotEmpty()
    @IsString()
    readonly about: string;

    @ApiProperty({ example: 'http:/', description: 'Food image  link' })
    @IsString()
    readonly image?: string;

}
