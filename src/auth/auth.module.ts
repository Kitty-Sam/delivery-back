import {forwardRef, Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {PrismaService} from "../prisma.service";
import {UserModule} from "../user/user.module";

@Module({
  imports: [
    forwardRef(() => UserModule),
  ],
  exports: [
    AuthService,
  ],
  providers: [PrismaService, AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
