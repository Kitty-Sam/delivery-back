import {Body, Controller, Post} from '@nestjs/common';
import {PaymentService} from "./payment.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreatePaymentIntentDto} from "./dto/create-payment-intent.dto";

@ApiTags('Payments')
@Controller('')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {}


    @ApiOperation({ summary: 'Create payment intent' })
    @ApiResponse({ status: 200, description: 'Return payment intent'})
    @Post('/payment')
    async createPaymentIntent(@Body()  paymentDto: CreatePaymentIntentDto
    ) {
     return  this.paymentService.createPaymentIntent(
         paymentDto
        );


    }
}
