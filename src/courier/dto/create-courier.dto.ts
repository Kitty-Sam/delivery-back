import { IsNotEmpty, IsString, MinLength} from 'class-validator';

export class CreateCourierDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    readonly surname: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    readonly phone: string;


    @IsString()
    readonly avatar?: string;

}
