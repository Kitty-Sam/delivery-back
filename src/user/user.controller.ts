import {Body, Controller, Delete, Get, Param, Put} from '@nestjs/common';
import {User as UserModel} from "@prisma/client";
import {UserService} from "./user.service";

import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";


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

    @ApiOperation({ summary: 'Get User By Id' })
    @ApiResponse({ status: 200, description: 'Return User'})
    @Get('user/:id')
    async getUserById(@Param('id') id: string)
        : Promise<UserModel> {
        return this.userService.getUserById({id: Number(id)});
    }

    @ApiOperation({ summary: 'Remove User By Id' })
    @ApiResponse({ status: 200, description: 'Return Deleted User'})
    @Delete('user/:id')
    async removeUserById(@Param('id') id: string)
        : Promise<UserModel> {
        return this.userService.deleteUser({id: Number(id)});
    }

    @ApiOperation({ summary: 'Change User Avatar' })
    @ApiResponse({ status: 200, description: 'Return Changed User'})
    @Put('user/:id')
    async updateUserAvatarById(@Param('id') id: string, @Body() UpdateUserAvatarDto, )
        : Promise<UserModel> {
        return this.userService.updateUser({ where: {id: Number(id)}, data: UpdateUserAvatarDto});
    }
}
