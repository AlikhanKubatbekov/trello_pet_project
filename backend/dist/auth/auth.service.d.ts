import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthService {
    private jwt;
    private userService;
    constructor(jwt: JwtService, userService: UserService);
    login(dto: AuthDto): Promise<AuthDto>;
}
