import { loginUserPayload } from '@/components/auth/Login';
import { registerUserPayload } from '@/components/auth/Register';
import { IAuthResponse, IProductResponse } from '@/types';
import axiosInstance from './axiosInstance';

export const loginUserFn = async (user: loginUserPayload) => {
  const response = await axiosInstance.post<IAuthResponse>('/', user);
  return response.data;
};

export const registerUserFn = async (user: registerUserPayload) => {
  const response = await axiosInstance.post<IAuthResponse>('/new', user);
  return response.data;
};

export const logoutUserFn = async () => {
  const response = await axiosInstance.post<IAuthResponse>('/logout');
  return response.data;
};
