import {forwardRef, Module} from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {UserService} from "./user.service";

import {UserController} from "./user.controller";
import {AuthModule} from "../auth/auth.module";

@Module({
  imports: [
    forwardRef(() => AuthModule),
  ],
  exports: [
    UserService,
  ],
  controllers: [UserController],
  providers: [UserService, PrismaService]
})
export class UserModule {}
