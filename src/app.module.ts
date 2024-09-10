import {Module} from '@nestjs/common';
import {UserModule} from './user/user.module';
import {PrismaService} from "./prisma.service";
import { FoodModule } from './food/food.module';
import { CategoryModule } from './category/category.module';
import { PaymentModule } from './payment/payment.module';



@Module({
  imports: [UserModule, FoodModule, CategoryModule, PaymentModule],
  providers: [PrismaService],
})
export class AppModule {}
