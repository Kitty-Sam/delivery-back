import {Body, Controller, Get, Post} from '@nestjs/common';
import {FoodService} from "./food.service";
import {Food as FoodModel} from "@prisma/client";
import {User as UserModel} from "@prisma/client";


@Controller('')
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

    @Post('/filter')
    async filterFoodByName(
        @Body()  @Body() {foodName}
    ): Promise<FoodModel[]> {
        return this.foodService.filterFoodByName({ foodName });
    }

    @Post('favorite/filter')
    async filterFavoriteFoodByName(
        @Body()  @Body() {userId, foodName}
    ): Promise<UserModel> {
        return this.foodService.filterFavoriteFoodByName({userId: Number(userId), foodName });
    }

}
