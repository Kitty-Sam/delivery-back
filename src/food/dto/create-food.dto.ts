import { IsNotEmpty, IsString, MinLength} from 'class-validator';

export class CreateFoodDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    readonly description: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    readonly price: string;


    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    readonly about: string;


    @IsString()
    readonly image?: string;

}
