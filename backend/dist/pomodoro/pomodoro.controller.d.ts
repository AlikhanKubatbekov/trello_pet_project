import { PomodoroRoundDto, PomodoroSessionDto } from './pomodoro.dto';
import { PomodoroService } from './pomodoro.service';
export declare class PomodoroController {
    private readonly pomodoroService;
    constructor(pomodoroService: PomodoroService);
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
    updateRound(id: string, dto: PomodoroRoundDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isCompleted: boolean | null;
        totalSeconds: number;
        pomodoroSessionId: string;
    }>;
    update(dto: PomodoroSessionDto, userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isCompleted: boolean | null;
        userId: string;
    }>;
    deleteSession(id: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isCompleted: boolean | null;
        userId: string;
    }>;
}
