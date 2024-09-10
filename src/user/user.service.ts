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
                },
            }
        });
    }

    // async getUserByEmail({email}: {email: string}
    // ): Promise<User | null> {
    //     return this.prisma.user.findUnique({
    //         where: {
    //             email
    //         },
    //         include: {
    //             favorites: true
    //         }
    //     });
    // }


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
        userName: string,
        userAddress: string,
        userPhone:string,
        paymentMethod: string,
        comment: string
    }): Promise<any> {
        const { userId, order, userAddress, userPhone, userName, comment, paymentMethod } = params;
        return this.prisma.order.create({
            data: {
                user: {
                   connect: {
                       id: userId
                   }
                },
                userName,
                userAddress,
                userPhone,
                comment,
                paymentMethod,
                foods: {
                    connect: order.length
                            ? order.map((el) => ({ id: el.order.id }))
                            : [],
                },
            },
        });
    }


    async removeOrder(params: {
        id: number
    }): Promise<any> {
        const {id} = params;
        return this.prisma.order.delete({
            where: {
                id
            },
        });


}}
