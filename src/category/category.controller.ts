import {Body, Controller, Get, Post} from '@nestjs/common';
import {CategoryService} from "./category.service";
import {CategoryModule} from "./category.module";
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

}
