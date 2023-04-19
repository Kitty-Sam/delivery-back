import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CourierService} from "./courier.service";
import {Courier as CourierModule} from "@prisma/client";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateCourierDto} from "./dto/create-courier.dto";

@ApiTags('Couriers')
@Controller('')
export class CourierController {
    constructor(
        private readonly courierService: CourierService,
    ) {}

    @ApiOperation({ summary: 'Get all couriers' })
    @ApiResponse({ status: 200, description: 'Return array of couriers'})
    @Get('/couriers')
    async getAllCouriers()
        : Promise<CourierModule[]> {
        return this.courierService.couriers();
    }

    @ApiOperation({ summary: 'Create new courier' })
    @ApiResponse({ status: 200, description: 'Return new courier'})
    @Post('/courier')
    async createCourier(
        @Body() courierDto: CreateCourierDto,
    ): Promise<CourierModule> {
        return this.courierService.createCourier(courierDto);
    }

    @ApiOperation({ summary: 'Get courier by id' })
    @ApiResponse({ status: 200, description: 'Return proper courier'})
    @Get('courier/:id')
    async getUserById(@Param('id') id: string)
        : Promise<CourierModule> {
        return this.courierService.getCourierById({id: Number(id)});
    }


}
