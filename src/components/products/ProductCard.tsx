import Image from 'next/image';

import { IProduct } from '@/types';

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            src={product.images[0].image.secure_url}
            alt={product.title}
            width={500}
            height={500}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {product.category?.name}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {product.title}
          </h2>
          <p className="mt-1">
            $
            {product.discountedPrice
              ? product.discountedPrice
              : product.originalPrice}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
