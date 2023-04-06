import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {LoginDto, RegisterDto} from "./dto/auth.dto";


@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @Post('/login')
    login(@Body() userDto: LoginDto) {
        return this.authService.login(userDto)
    }

    @Post('/register')
    registration(@Body() userDto: RegisterDto) {
        return this.authService.registration(userDto)
    }
}
