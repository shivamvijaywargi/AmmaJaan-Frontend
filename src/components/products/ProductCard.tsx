import Image from "next/image";
import Link from "next/link";

import { IProduct } from "@/types";
import ProductImage from "./ProductImage";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={`/products/${product.slug}`}>
          <ProductImage product={product} />
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
