import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CourierService} from "./courier.service";
import {Courier as CourierModule} from "@prisma/client";


@Controller('')
export class CourierController {
    constructor(
        private readonly courierService: CourierService,
    ) {}


    @Get('/couriers')
    async getAllCouriers()
        : Promise<CourierModule[]> {
        return this.courierService.couriers();
    }

    @Post('/courier')
    async createCourier(
        @Body() CreateCourierDto,
    ): Promise<CourierModule> {
        return this.courierService.createCourier(CreateCourierDto);
    }

    @Get('courier/:id')
    async getUserById(@Param('id') id: string)
        : Promise<CourierModule> {
        return this.courierService.getCourierById({id: Number(id)});
    }


}
