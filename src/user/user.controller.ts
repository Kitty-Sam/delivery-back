import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { User as UserModel} from "@prisma/client";
import {UserService} from "./user.service";

import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {UpdateUserAvatarDto} from "./dto/update-user-avatar.dto";



@ApiTags('Users')
@Controller('')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}


    @ApiOperation({ summary: 'Get all Users' })
    @ApiResponse({ status: 200, description: 'Return array of all Users'})
    @Get('/users')
    async getUsers()
    : Promise<UserModel[]> {
        return this.userService.users();
    }

    @ApiOperation({ summary: 'Get User by id' })
    @ApiResponse({ status: 200, description: 'Return User by id'})
    @Get('user/:id')
    async getUserById(@Param('id') id: string)
        : Promise<UserModel> {
        return this.userService.getUserById({id: Number(id)});
    }

    @ApiOperation({ summary: 'Remove User by id' })
    @ApiResponse({ status: 200, description: 'Return Deleted User'})
    @Delete('user/:id')
    async removeUserById(@Param('id') id: string)
        : Promise<UserModel> {
        return this.userService.deleteUser({id: Number(id)});
    }

    @ApiOperation({ summary: 'Change User avatar' })
    @ApiResponse({ status: 200, description: 'Return changed User'})
    @Put('user/:id')
    async updateUserAvatarById(@Param('id') id: string, @Body() updateAvatar: UpdateUserAvatarDto, )
        : Promise<UserModel> {
        return this.userService.updateUser({ where: {id: Number(id)}, data: updateAvatar});
    }

    @ApiOperation({ summary: 'Add to favorite food' })
    @ApiResponse({ status: 200, description: 'Return Changed User with array of favorite foods'})
    @Post('favorite/food')
    async addToFavoriteFood( @Body() {userId, foodId}, )
        : Promise<UserModel> {
        return this.userService.addToFavoriteFood({ userId: Number(userId), foodId:  Number(foodId)});
    }

    @ApiOperation({ summary: 'Remove from favorite food' })
    @ApiResponse({ status: 200, description: 'Return Changed User with array of favorite foods'})
    @Post('unfavorite/food')
    async removeFromFavoriteFood( @Body() {userId, foodId}, )
        : Promise<UserModel> {
        return this.userService.removeFromFavoriteFood({ userId: Number(userId), foodId:  Number(foodId)});
    }


    @ApiOperation({ summary: 'Get favorite foods' })
    @ApiResponse({ status: 200, description: 'Return Changed User'})
    @Post('favorite/foods')
    async getFavoriteFood( @Body() {userId}, )
        : Promise<UserModel> {
        return this.userService.getFavoriteFoods({ userId: Number(userId)})
    }


    @ApiOperation({ summary: 'Create order' })
    @ApiResponse({ status: 200, description: 'Return Changed User with new order'})
    @Post('/user/order')
    async createOrder(
        @Body() {userId,  order, courierId, total, address}
    ): Promise<UserModel> {
        return this.userService.createOrder({userId,  order, courierId, total, address});
    }


    @ApiOperation({ summary: 'Remove order' })
    @ApiResponse({ status: 200, description: 'Return Changed User without order'})
    @Delete(`/user/order/:id`)
    async removeOrderById(
        @Param('id') id: string
    ): Promise<UserModel> {
        return this.userService.removeOrder({id: Number(id)});
    }

}
