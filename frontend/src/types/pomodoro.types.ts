import { IBase } from './root.types';

export interface IPomodoroRoundResponse extends IBase {
  isCompleted?: boolean;
  totalSeconds: number;
}

export interface IPomodoroSessionResponse extends IBase {
  isCompleted?: boolean;
  rounds?: IPomodoroRoundResponse[];
}

export type TPomodoroSessionState = Partial<Omit<IPomodoroSessionResponse, 'id' | 'createdAt' | 'updatedAt'>>;

export type TPomodoroRoundState = Partial<Omit<IPomodoroRoundResponse, 'id' | 'createdAt' | 'updatedAt'>>;
