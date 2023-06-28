'use client';

import { IGetProductById, getProductByIdFn } from '@/api/authApi';
import { IProductResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';

const getProductDetailsById = async (
  slug: IGetProductById
): Promise<IProductResponse> => {
  const res = await getProductByIdFn(slug);
  return res;
};

export const useProduct = (slug: IGetProductById) => {
  return useQuery<IProductResponse, Error>(['productbyid', slug], () =>
    getProductDetailsById(slug)
  );
};
