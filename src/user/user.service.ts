import {Injectable} from '@nestjs/common';
import {Food, User} from '@prisma/client';
import {PrismaService} from "../prisma.service";




@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}


    async getUserById({id}: {id: number}
    ): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: {
                id
            },
            include: {
                favorites: true,
                orders: {
                    include: {
                        courier: true
                    }
                },
            }
        });
    }

    async getUserByEmail({email}: {email: string}
    ): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: {
                email
            },
            include: {
                favorites: true
            }
        });
    }


    async users(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    async createUser(CreateUserDto): Promise<User> {
        return this.prisma.user.create({
            data: CreateUserDto
        });
    }

    async updateUser(params: {
        where: {id: number};
        data: {avatar: string},
    }): Promise<User> {
        const { where, data } = params;
        return this.prisma.user.update({
            data,
            where,
        });
    }

    async deleteUser({id}: {id: number}): Promise<User> {
        return this.prisma.user.delete({
            where: {
                id
            },
        });
    }

    async addToFavoriteFood(params: {
        userId: number;
        foodId: number,
    }): Promise<User> {
        const { userId, foodId } = params;
        return this.prisma.user.update({
            where: {
                id: userId
            },
            data: {
                favorites: {
                    connect: {
                        id: foodId
                    },
                },
            },
        });
    }

    async removeFromFavoriteFood(params: {
        userId: number;
        foodId: number,
    }): Promise<User> {
        const { userId, foodId } = params;
        return this.prisma.user.update({
            where: {
                id: userId
            },
            data: {
                favorites: {
                    disconnect: {
                        id: foodId
                    },
                },
            },
        });
    }


    async getFavoriteFoods (params: {
        userId: number;
    }): Promise<User> {
        const { userId } = params;
        return this.prisma.user.findUnique({
            where: {
                id: userId
            },
           include: {
                favorites: true
           }
        });
    }

    async createOrder(params: {
        order: {count: number, order: Food}[],
        userId: number;
        courierId: number;
        total: number
    }): Promise<any> {
        const { userId, order, courierId, total } = params;
        return this.prisma.order.create({
            data: {
                total: total,
                courier: {
                    connect: {
                        id: courierId
                    }
                },
                user: {
                   connect: {
                       id: userId
                   }
                },
                foods: {
                    connect: order.length
                            ? order.map((el) => ({ id: el.order.id }))
                            : [],
                },
            },
        });
    }
}
