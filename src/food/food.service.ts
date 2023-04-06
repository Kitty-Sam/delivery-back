import {Injectable} from '@nestjs/common';
import {Food, User} from "@prisma/client";
import {PrismaService} from "../prisma.service";

@Injectable()
export class FoodService {
    constructor(private prisma: PrismaService) {}
    async foods(): Promise<Food[]> {
        return this.prisma.food.findMany();
    }

    async createFood(CreateFoodDto): Promise<Food> {
        return this.prisma.food.create({
            data: CreateFoodDto
        });
    }

    async deleteFood({id}: {id: number}): Promise<Food> {
        return this.prisma.food.delete({
            where: {
                id
            },
        });
    }

}