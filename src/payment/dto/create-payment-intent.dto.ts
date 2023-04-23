import {IsNotEmpty, IsNumber, IsString} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreatePaymentIntentDto {
    @ApiProperty({ example: '50', description: 'Min value - 0.5$' })
    @IsNotEmpty()
    @IsNumber()
    readonly amount: number;

    @ApiProperty({ example: 'usd', description: 'Preferred value' })
    @IsNotEmpty()
    @IsString()
    readonly currency: string;

    @ApiProperty({ example: ['Card'], description: "Payment methods" })
    readonly paymentMethodType: string[];




}
