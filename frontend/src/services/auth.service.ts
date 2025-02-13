import { axiosClassic } from '@/api/interceptors';
import { IAuthForm, IAuthResponse } from '@/types/auth.types';
import { isAxiosError } from 'axios';
import { toast } from 'sonner';

import { removeFromStorage, saveTokenStorage } from './auth-token.service';

export const authService = {
  async main(type: 'login' | 'register', data: IAuthForm) {
    try {
      const response = await axiosClassic.post<IAuthResponse>(`/auth/${type}`, data);

      if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

      return response;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        const { message, statusCode } = error.response.data;

        const errorMessage = Array.isArray(message) ? message.join(', ') : message;

        toast.error(`Error ${statusCode}: ${errorMessage}`);
      }
    }
  },

  async getNewTokens() {
    const response = await axiosClassic.post<IAuthResponse>('/auth/login/access-token');

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

    return response;
  },

  async logout() {
    const response = await axiosClassic.post<boolean>('/auth/logout');

    if (response.data) removeFromStorage();

    return response;
  },
};
