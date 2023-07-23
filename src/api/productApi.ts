import { IProductResponse, IProductsResponse } from '@/types';
import axiosInstance from './axiosInstance';

export interface IGetProductById {
  slug: string;
}

export const getAllProductsFn = async () => {
  const response = await axiosInstance.get<IProductsResponse>('/products');

  return response;
};

export const getProductByIdFn = async (productId: IGetProductById) => {
  const response = await axiosInstance.get<IProductResponse>(
    `/products/${productId}`
  );
  return response.data;
};
