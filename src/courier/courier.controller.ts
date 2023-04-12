import {Body, Controller, Get, Post} from '@nestjs/common';
import {CourierService} from "./courier.service";
import {Courier as CourierModule} from "@prisma/client";


@Controller('courier')
export class CourierController {
    constructor(
        private readonly courierService: CourierService,
    ) {}


    @Get('/couriers')
    async getAllFoods()
        : Promise<CourierModule[]> {
        return this.courierService.couriers();
    }

    @Post('/courier')
    async createCourier(
        @Body() CreateCourierDto,
    ): Promise<CourierModule> {
        return this.courierService.createCourier(CreateCourierDto);
    }

}
