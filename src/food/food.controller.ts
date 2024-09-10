import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {FoodService} from "./food.service";
import {Food as FoodModel, User as UserModel} from "@prisma/client";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateFoodDto} from "./dto/create-food.dto";


@ApiTags('Foods')
@Controller('')
export class FoodController {
    constructor(
        private readonly foodService: FoodService,
    ) {}


    @ApiOperation({ summary: 'Get all Foods' })
    @ApiResponse({ status: 200, description: 'Return array of all Foods'})
    @Get('/foods')
    async getAllFoods()
        : Promise<FoodModel[]> {
        return this.foodService.foods();
    }


    @ApiOperation({ summary: 'Create new food position' })
    @ApiResponse({ status: 200, description: 'Return new Food position'})
    @Post('/food')
    async createFood(
        @Body() foodDto: CreateFoodDto,
    ): Promise<FoodModel> {
        return this.foodService.createFood(foodDto);
    }


    @ApiOperation({ summary: 'Filter foods by title' })
    @ApiResponse({ status: 200, description: 'Return array of filtered foods'})
    @Post('/filter')
    async filterFoodByName(
        @Body()  {foodName}
    ): Promise<FoodModel[]> {
        return this.foodService.filterFoodByName({ foodName });
    }



    @ApiOperation({ summary: 'Remove food position' })
    @ApiResponse({ status: 200, description: 'Return removed food position'})
    @Delete('food/:id')
    async deleteFoodById(@Param('id') id: string)
        : Promise<FoodModel> {
        return this.foodService.deleteFood({id: Number(id)});
    }

}
