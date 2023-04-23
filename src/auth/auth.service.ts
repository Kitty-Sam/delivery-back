import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import {UserService} from "../user/user.service";
import {LoginDto, RegisterDto} from "./dto/auth.dto";

@Injectable()
export class AuthService {
    constructor(private userService: UserService){}


    async login(userDto: LoginDto) {
        const user = await this.validateUser(userDto)
        return user
    }

    async registration(userDto: RegisterDto) {
        const candidate = await this.userService.getUserByEmail({email: userDto.email});
        if (candidate) {
            throw new HttpException('This email already exists', HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.userService.createUser({...userDto, password: hashPassword})
        return user
    }



    private async validateUser(userDto: LoginDto) {
        const user = await this.userService.getUserByEmail({email: userDto.email});
        const passwordEquals = await bcrypt.compare(userDto.password, (user.password));
        if (user && passwordEquals) {
            return user;
        }
        throw new UnauthorizedException({message: 'Incorrect password or email'})
    }

}
