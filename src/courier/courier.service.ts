import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {Courier} from "@prisma/client";



@Injectable()
export class CourierService {
    constructor(private prisma: PrismaService) {}

    async couriers(): Promise<Courier[]> {
        return this.prisma.courier.findMany();
    }

    async createCourier(CreateCourierDto): Promise<Courier> {
        return this.prisma.courier.create({
            data: CreateCourierDto
        });
    }
}
