import { Module} from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {UserService} from "./user.service";

import {UserController} from "./user.controller";

@Module({
  exports: [
    UserService,
  ],
  controllers: [UserController],
  providers: [UserService, PrismaService]
})
export class UserModule {}
