import {Injectable} from '@nestjs/common';
import {Food, Order} from '@prisma/client';
import {PrismaService} from "../prisma.service";




@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async orders(): Promise<Order[]> {
        return this.prisma.order.findMany();
    }

    async createOrder(params: {
        order: {count: number, order: Food}[],
        userName: string,
        userAddress: string,
        userPhone:string,
        paymentMethod: string,
        comment: string
        total: number
    }): Promise<any> {
        const {  order, userAddress, userPhone, userName, comment, paymentMethod, total } = params;
        return this.prisma.order.create({
            data: {
                userName,
                userAddress,
                userPhone,
                comment,
                paymentMethod,
                total,
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
