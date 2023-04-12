import {Module} from '@nestjs/common';
import {UserModule} from './user/user.module';
import {PrismaService} from "./prisma.service";
import { FoodModule } from './food/food.module';
import { AuthModule } from './auth/auth.module';
import { CourierModule } from './courier/courier.module';


@Module({
  imports: [UserModule, FoodModule, AuthModule, CourierModule],
  providers: [PrismaService],
})
export class AppModule {}
