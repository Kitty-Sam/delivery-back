import {Module} from '@nestjs/common';
import {UserModule} from './user/user.module';
import {PrismaService} from "./prisma.service";
import { FoodModule } from './food/food.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [UserModule, FoodModule, AuthModule],
  providers: [PrismaService],
})
export class AppModule {}
