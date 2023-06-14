import { Injectable } from '@nestjs/common';
import { UserService } from './../user/user.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) { }

    async validateUser(email: string, password: string) {
        const user = await this.userService.findByEmail(email);
        console.log(user);


         if (user) {
             const isPasswordValid =  await bcrypt.compare(password, user.password)
         }
    }
}
