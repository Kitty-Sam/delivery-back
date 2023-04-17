import {Body, Controller, Get, Post} from '@nestjs/common';
import {CategoryService} from "./category.service";
import {CategoryModule} from "./category.module";
import {User as UserModel} from "@prisma/client";



@Controller('')
export class CategoryController {
    constructor(
        private readonly categoryService: CategoryService,
    ) {}

    @Get('/categories')
    async getAllCategories()
        : Promise<CategoryModule[]> {
        return this.categoryService.categories();
    }

    @Post('/categories/filter')
    async filterFoodByCategory(
        @Body()  @Body() {categoryId}
    ): Promise<CategoryModule[]> {
        return this.categoryService.filterFoodByCategory({ categoryId: Number(categoryId) });
    }

    @Post('categories/favorite/filter')
    async filterFavoriteFoodByCategory(
        @Body()  @Body() {userId, categoryId}
    ): Promise<UserModel> {
        return this.categoryService.filterFavoriteFoodByCategory({ userId: Number(userId), categoryId: Number(categoryId) });
    }
}
