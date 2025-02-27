import { UserService } from '@/user/user.service';
import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private userService;
    constructor(configService: ConfigService, userService: UserService);
    validate({ id }: {
        id: string;
    }): Promise<({
        tasks: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            priority: import(".prisma/client").$Enums.Priority | null;
            isCompleted: boolean | null;
            userId: string;
        }[];
    } & {
        email: string;
        password: string;
        workInterval: number | null;
        breakInterval: number | null;
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        intervalsCount: number | null;
    }) | null>;
}
export {};
