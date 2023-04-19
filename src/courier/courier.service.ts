import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {Courier} from "@prisma/client";
import {CreateCourierDto} from "./dto/create-courier.dto";



@Injectable()
export class CourierService {
    constructor(private prisma: PrismaService) {}

    async couriers(): Promise<Courier[]> {
        return this.prisma.courier.findMany();
    }

    async createCourier(courierDto: CreateCourierDto): Promise<Courier> {
        return this.prisma.courier.create({
            data: courierDto
        });
    }


    async getCourierById({id}: {id: number}
    ): Promise<Courier | null> {
        return this.prisma.courier.findUnique({
            where: {
                id
            },

        });
    }
}
