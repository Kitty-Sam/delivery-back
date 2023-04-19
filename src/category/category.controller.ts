import {Body, Controller, Get, Post} from '@nestjs/common';
import {CategoryService} from "./category.service";
import {CategoryModule} from "./category.module";
import {User as UserModel} from "@prisma/client";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";


@ApiTags('Categories')
@Controller('')
export class CategoryController {
    constructor(
        private readonly categoryService: CategoryService,
    ) {}

    @ApiOperation({ summary: 'Get all categories' })
    @ApiResponse({ status: 200, description: 'Return array of categories'})
    @Get('/categories')
    async getAllCategories()
        : Promise<CategoryModule[]> {
        return this.categoryService.categories();
    }

    @ApiOperation({ summary: 'Filter foods by category title' })
    @ApiResponse({ status: 200, description: 'Return array of filtered foods'})
    @Post('/categories/filter')
    async filterFoodByCategory(
        @Body()   {categoryId}
    ): Promise<CategoryModule[]> {
        return this.categoryService.filterFoodByCategory({ categoryId: Number(categoryId) });
    }

    @ApiOperation({ summary: 'Filter favorite foods for proper user by category title' })
    @ApiResponse({ status: 200, description: 'Return array of filtered favorite foods for proper user'})
    @Post('categories/favorite/filter')
    async filterFavoriteFoodByCategory(
        @Body() {userId, categoryId}
    ): Promise<UserModel> {
        return this.categoryService.filterFavoriteFoodByCategory({ userId: Number(userId), categoryId: Number(categoryId) });
    }
}
