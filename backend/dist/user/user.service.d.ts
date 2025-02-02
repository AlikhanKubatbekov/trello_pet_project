import { AuthDto } from '@/auth/dto/auth.dto';
import { PrismaService } from '@/prisma.service';
import { UserDto } from './user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: AuthDto): Promise<{
        email: string;
        password: string;
        workInterval: number | null;
        breakInterval: number | null;
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        intervalsCount: number | null;
    }>;
    getById(id: string): import(".prisma/client").Prisma.Prisma__UserClient<({
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
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    getByEmail(email: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        email: string;
        password: string;
        workInterval: number | null;
        breakInterval: number | null;
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        intervalsCount: number | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    getProfile(id: string): Promise<{
        user: {
            tasks: {
                name: string;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                priority: import(".prisma/client").$Enums.Priority | null;
                isCompleted: boolean | null;
                userId: string;
            }[];
            email: string;
            workInterval: number | null;
            breakInterval: number | null;
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            intervalsCount: number | null;
        } | {};
        statistics: {
            label: string;
            value: number | undefined;
        }[];
    }>;
    update(id: string, dto: UserDto): Promise<{
        email: string;
        name: string | null;
    }>;
    remove(id: number): string;
}
