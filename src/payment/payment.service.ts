import {Injectable} from '@nestjs/common';
import Stripe from "stripe";
import {CreatePaymentIntentDto} from "./dto/create-payment-intent.dto";
import * as process from "process";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2022-11-15" });



@Injectable()
export class PaymentService {

    constructor() {}

    async createPaymentIntent(paymentDto: CreatePaymentIntentDto) {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: paymentDto.amount,
            currency: paymentDto.currency,
            payment_method_types: paymentDto.paymentMethodType
        });



        return paymentIntent;
    }


}
