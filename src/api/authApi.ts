import { loginUserPayload } from '@/components/auth/Login';
import { registerUserPayload } from '@/components/auth/Register';
import { IAuthResponse } from '@/types';
import axiosInstance from './axiosInstance';

export const loginUserFn = async (user: loginUserPayload) => {
  const response = await axiosInstance.post<IAuthResponse>('/auth', user);
  return response.data;
};

export const registerUserFn = async (user: registerUserPayload) => {
  const response = await axiosInstance.post<IAuthResponse>('/auth/new', user);
  return response.data;
};

export const logoutUserFn = async () => {
  const response = await axiosInstance.post<IAuthResponse>('/auth/logout');
  return response.data;
};
