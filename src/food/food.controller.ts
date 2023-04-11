import {Body, Controller, Get, Post} from '@nestjs/common';
import {FoodService} from "./food.service";
import {Food as FoodModel} from "@prisma/client";


@Controller('food')
export class FoodController {
    constructor(
        private readonly foodService: FoodService,
    ) {}


    @Get('/foods')
    async getAllFoods()
        : Promise<FoodModel[]> {
        return this.foodService.foods();
    }


    @Post('/food')
    async createFood(
        @Body() CreateFoodDto,
    ): Promise<FoodModel> {
        return this.foodService.createFood(CreateFoodDto);
    }
}
