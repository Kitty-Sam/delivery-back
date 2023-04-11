import {Injectable} from '@nestjs/common';
import {User} from '@prisma/client';
import {PrismaService} from "../prisma.service";


@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}


    async getUserById({id}: {id: number}
    ): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: {
                id
            }
        });
    }

    async getUserByEmail({email}: {email: string}
    ): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: {
                email
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
}
