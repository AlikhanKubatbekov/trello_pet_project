import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): void;
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
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
