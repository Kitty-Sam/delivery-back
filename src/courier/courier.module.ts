import { Module } from '@nestjs/common';
import { CourierService } from './courier.service';
import { CourierController } from './courier.controller';
import {PrismaService} from "../prisma.service";

@Module({
  providers: [CourierService, PrismaService],
  controllers: [CourierController]
})
export class CourierModule {}
