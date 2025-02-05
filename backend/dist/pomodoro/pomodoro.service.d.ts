import { PrismaService } from '@/prisma.service';
import { PomodoroRoundDto, PomodoroSessionDto } from './pomodoro.dto';
export declare class PomodoroService {
    private prisma;
    constructor(prisma: PrismaService);
    getTodaySession(userId: string): Promise<({
        rounds: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            isCompleted: boolean | null;
            totalSeconds: number;
            pomodoroSessionId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isCompleted: boolean | null;
        userId: string;
    }) | null>;
    create(userId: string): Promise<{
        rounds: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            isCompleted: boolean | null;
            totalSeconds: number;
            pomodoroSessionId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isCompleted: boolean | null;
        userId: string;
    }>;
    update(dto: Partial<PomodoroSessionDto>, pomodoroId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isCompleted: boolean | null;
        userId: string;
    }>;
    updateRound(dto: Partial<PomodoroRoundDto>, roundId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isCompleted: boolean | null;
        totalSeconds: number;
        pomodoroSessionId: string;
    }>;
    deleteSession(sessionId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isCompleted: boolean | null;
        userId: string;
    }>;
}
