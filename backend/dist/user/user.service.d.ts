import { PrismaService } from '../prisma.service';
import { AuthDto } from '../auth/dto/auth.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: AuthDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        name: string | null;
        password: string;
        workInterval: number | null;
        breakInterval: number | null;
        intervalsCount: number | null;
    }>;
    findAll(): string;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__UserClient<({
        tasks: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            priority: import(".prisma/client").$Enums.Priority | null;
            isCompleted: boolean | null;
            userId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        name: string | null;
        password: string;
        workInterval: number | null;
        breakInterval: number | null;
        intervalsCount: number | null;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    getByEmail(email: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        name: string | null;
        password: string;
        workInterval: number | null;
        breakInterval: number | null;
        intervalsCount: number | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateUserDto: AuthDto): string;
    remove(id: number): string;
}
