import { loginUserPayload } from '@/components/auth/Login';
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
  return response;
};

// export const registerUserFn = async (user: registerUserPayload) => {
//   const response = await authApi.post<IAuthResponse>('/auth/new', user);
//   return response;
// };
