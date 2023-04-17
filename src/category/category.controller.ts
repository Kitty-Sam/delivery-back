import {Body, Controller, Get, Post} from '@nestjs/common';
import {CategoryService} from "./category.service";
import {CategoryModule} from "./category.module";



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
        return this.categoryService.filterFoodByCategory({ categoryId });
    }
}
