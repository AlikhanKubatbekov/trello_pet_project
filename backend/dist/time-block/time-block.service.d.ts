import { PrismaService } from '@/prisma.service';
import { TimeBlockDto } from './dto/time-block.dto';
export declare class TimeBlockService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        color: string | null;
        duration: number;
        order: number;
    }[]>;
    create(dto: TimeBlockDto, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        color: string | null;
        duration: number;
        order: number;
    }>;
    update(dto: Partial<TimeBlockDto>, timeBlockId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        color: string | null;
        duration: number;
        order: number;
    }>;
    delete(timeBlockId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        color: string | null;
        duration: number;
        order: number;
    }>;
    updateOrder(ids: string[]): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        name: string;
        color: string | null;
        duration: number;
        order: number;
    }[]>;
}
