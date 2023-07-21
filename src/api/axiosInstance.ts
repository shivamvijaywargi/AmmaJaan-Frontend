import axios, { AxiosError } from 'axios';

import { IAuthResponse } from '@/types';

const BASE_URL = 'http://localhost:5000/api/v1';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

export const refreshAccessTokenFn = async () => {
  const response = await axiosInstance.post<IAuthResponse>('/refresh');
  return response.data;
};

axiosInstance.interceptors.response.use(
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
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export { AxiosError };

export default axiosInstance;
