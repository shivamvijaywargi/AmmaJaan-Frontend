'use client';

import { useProducts } from '@/helpers/use-product';
import React from 'react';

const GetProducts = () => {
  const { isLoading, error, data } = useProducts();

  console.log(data);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h2>{error.message}</h2>;

  return <div>GetProducts</div>;
};

export default GetProducts;
