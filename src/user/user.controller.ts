import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { User, Order} from "@prisma/client";
import {UserService} from "./user.service";


import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";




@ApiTags('Users')
@Controller('')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly orderService: UserService,
    ) {}


    @ApiOperation({ summary: 'Get all Orders' })
    @ApiResponse({ status: 200, description: 'Return array of all Users'})
    @Get('/orders')
    async getOrders()
        : Promise<Order[]> {
        return this.orderService.orders();
    }

    @ApiOperation({ summary: 'Create order' })
    @ApiResponse({ status: 200, description: 'Return Changed User with new order'})
    @Post('/user/order')
    async createOrder(
        @Body() {total,  order, userName, userAddress, userPhone,paymentMethod, comment}
    ): Promise<User> {
        return this.userService.createOrder({
            total,
            order,
            userName,
            userAddress,
            userPhone,
            paymentMethod,
            comment});
    }


    @ApiOperation({ summary: 'Remove order' })
    @ApiResponse({ status: 200, description: 'Return Changed User without order'})
    @Delete(`/user/order/:id`)
    async removeOrderById(
        @Param('id') id: string
    ): Promise<User> {
        return this.userService.removeOrder({id: Number(id)});
    }

}
