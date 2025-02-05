import { Priority } from 'prisma/generated/client';
export declare class TaskDto {
    name: string;
    isCompleted?: boolean;
    createdAt?: string;
    priority?: Priority;
}
