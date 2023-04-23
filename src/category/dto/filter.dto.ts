import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber} from "class-validator";

export class FilterDto {
    @ApiProperty({ example: 1, description: 'Category Id' })
    @IsNotEmpty()
    @IsNumber()
    readonly categoryId: number;

}
