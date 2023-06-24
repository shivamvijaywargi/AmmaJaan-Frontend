import { loginUserPayload } from '@/components/auth/Login';
import { registerUserPayload } from '@/components/auth/Register';
import { IAuthResponse } from '@/types';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1';

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authApi.defaults.headers.common['Content-Type'] = 'application/json';

export const loginUserFn = async (user: loginUserPayload) => {
  const response = await authApi.post<IAuthResponse>('/auth', user);
  return response.data;
};

export const registerUserFn = async (user: registerUserPayload) => {
  const response = await authApi.post<IAuthResponse>('/auth/new', user);
  return response.data;
};

export const logoutUserFn = async () => {
  const response = await authApi.post<IAuthResponse>('/auth/logout');
  return response.data;
};

export const refreshAccessTokenFn = async () => {
  const response = await authApi.post<IAuthResponse>('/auth/refresh');
  return response.data;
};

authApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const errMessage = error.response.data.message as string;
    if (
      error.response.status === 401 &&
      (errMessage.includes('You are not authorized, please login') ||
        errMessage.includes('Unauthorized, please login')) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      await refreshAccessTokenFn();
      return authApi(originalRequest);
    }
    return Promise.reject(error);
  }
);
