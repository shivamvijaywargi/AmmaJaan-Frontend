import { IProductResponse } from '@/types';
import axiosInstance from './axiosInstance';

export interface IGetProductById {
  slug: string;
}

export const getAllProductsFn = async () => {
  const response = await axiosInstance.get<IProductResponse[]>('/products');

  return response.data;
};

export const getProductByIdFn = async (productId: IGetProductById) => {
  const response = await axiosInstance.get<IProductResponse>(
    `/products/${productId}`
  );
  return response.data;
};
