import Image from "next/image";
import Link from "next/link";

import { IProduct } from "@/types";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={`/products/${product.slug}`}>
          <div className="block relative h-48 rounded overflow-hidden">
            <Image
              src={product.images[0].image.secure_url}
              alt={product.title}
              width={500}
              height={500}
              sizes="(min-width: 1360px) 286px, (min-width: 1040px) calc(20vw + 18px), (min-width: 780px) calc(50vw - 36px), (min-width: 560px) 500px, calc(90vw + 14px)"
            />
            L
          </div>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              {product.category?.name}
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {product.title}
            </h2>
            <p className="mt-1">
              &#8377;{" "}
              {product.discountedPrice
                ? product.discountedPrice
                : product.originalPrice}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
