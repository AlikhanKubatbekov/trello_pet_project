import { axiosWithAuth } from '@/api/interceptors';
import { IPomodoroSessionResponse, TPomodoroRoundState, TPomodoroSessionState } from '@/types/pomodoro.types';

class PomodoroService {
  private BASE_URL = '/user/timer';

  async getTodaySession() {
    const response = await axiosWithAuth.get<IPomodoroSessionResponse>(`${this.BASE_URL}/today`);
    return response;
  }

  async createSession() {
    const response = await axiosWithAuth.post<IPomodoroSessionResponse>(this.BASE_URL);
    return response;
  }

  async updateSession(id: string, data: TPomodoroSessionState) {
    const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data);
    return response;
  }

  async deleteSession(id: string) {
    const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`);
    return response;
  }

  async updateRound(id: string, data: TPomodoroRoundState) {
    const response = await axiosWithAuth.put(`${this.BASE_URL}/round/${id}`, data);
    return response;
  }
}

export const pomodoroService = new PomodoroService();
