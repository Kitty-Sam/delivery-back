import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {Category, Food, User} from "@prisma/client";

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) {
    }

    async categories(): Promise<Category[]> {
        return this.prisma.category.findMany();
    }

    async filterFoodByCategory(params: {
        categoryId: number,
    }): Promise<Food[]> {
        const { categoryId } = params;
        return this.prisma.food.findMany({
            where: {
                categoryId,
            },
        });
    }

    async filterFavoriteFoodByCategory(params: {
        userId: number,
        categoryId: number,
    }): Promise<User> {
        const { userId, categoryId } = params;
        return this.prisma.user.findUnique({
            where: {
                id: userId
            },
            include: {
                favorites: {
                    where: {
                       categoryId
                    }
                }
            },
        });
    }



}
