'use client';

import { useQuery } from '@tanstack/react-query';

import {
  IGetProductById,
  getAllProductsFn,
  getProductByIdFn,
} from '@/api/productApi';
import { IProductResponse } from '@/types';

// const getAllProducts = async (): Promise<IProductResponse[]> => {
//   const res = await getAllProductsFn();

//   return res;
// };

// const getProductDetailsById = async (
//   slug: IGetProductById
// ): Promise<IProductResponse> => {
//   const res = await getProductByIdFn(slug);

//   return res;
// };

// export const useProducts = () => {
//   return useQuery<IProductResponse[], Error>(['products'], () =>
//     getAllProducts()
//   );
// };

// export const useProduct = (slug: IGetProductById) => {
//   return useQuery<IProductResponse, Error>(['productbyid', slug], () =>
//     getProductDetailsById(slug)
//   );
// };
