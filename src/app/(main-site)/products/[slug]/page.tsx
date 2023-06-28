import { getProductByIdFn } from '@/api/authApi';
import GetProduct from '@/components/products/GetProduct';
import { IProduct } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { notFound } from 'next/navigation';
import React from 'react';

interface IProps {
  params: {
    slug: string;
  };
}

const ProductPage = ({ params }: IProps) => {
  console.log(params.slug);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="px-5 py-24">
        <GetProduct slug={params.slug} />
      </div>
    </section>
  );
};

export default ProductPage;
