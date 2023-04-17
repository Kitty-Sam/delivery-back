import {Module} from '@nestjs/common';
import {UserModule} from './user/user.module';
import {PrismaService} from "./prisma.service";
import { FoodModule } from './food/food.module';
import { AuthModule } from './auth/auth.module';
import { CourierModule } from './courier/courier.module';
import { CategoryModule } from './category/category.module';


@Module({
  imports: [UserModule, FoodModule, AuthModule, CourierModule, CategoryModule],
  providers: [PrismaService],
})
export class AppModule {}
