import {Injectable} from '@nestjs/common';
import {Food, User} from "@prisma/client";
import {PrismaService} from "../prisma.service";
import {CreateFoodDto} from "./dto/create-food.dto";


@Injectable()
export class FoodService {
    constructor(private prisma: PrismaService) {}
    async foods(): Promise<Food[]> {
        return this.prisma.food.findMany();
    }

    async createFood(foodDto: CreateFoodDto): Promise<Food> {
        return this.prisma.food.create({
            data: foodDto
        });
    }


    async deleteFood(params: {
        id: number,
    }): Promise<Food> {
        return this.prisma.food.delete({
            where: {
                id: params.id
            },
        });
    }


    async filterFoodByName(params: {
        foodName: string,
    }): Promise<Food[]> {
        const { foodName } = params;
        return this.prisma.food.findMany({
            where: {
                name: {
                    contains: foodName,
                    mode: 'insensitive'
                }
            }
        });
    }

    async filterFavoriteFoodByName(params: {
        userId: number,
        foodName: string,
    }): Promise<User> {
        const {foodName, userId} = params;
        return this.prisma.user.findUnique({
            where: {
                id: userId,
            },
            include: {
                favorites: {
                    where: {
                        name: {
                            contains: foodName,
                            mode: 'insensitive'
                        }
                    }
                }
            },

        })

    }}


