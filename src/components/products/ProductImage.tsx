"use client";

import { useRef } from "react";
import Image from "next/image";

import { IProduct } from "@/types";

const ProductImage = ({ product }: { product: IProduct }) => {
  const imageRef = useRef<HTMLImageElement>(null);

  const updateImage = () => {
    const image = imageRef.current;

    console.log(product?.images);

    if (image) image.src = product?.images[1]?.image?.secure_url;

    // if (image !== null) {
    //   image.src;
    // }
  };

  return (
    <div className="block relative h-48 rounded overflow-hidden">
      <Image
        src={product.images[0].image.secure_url}
        alt={product.title}
        ref={imageRef}
        width={500}
        height={500}
        sizes="(min-width: 1360px) 286px, (min-width: 1040px) calc(20vw + 18px), (min-width: 780px) calc(50vw - 36px), (min-width: 560px) 500px, calc(90vw + 14px)"
        onMouseEnter={() => updateImage()}
      />
      L
    </div>
  );
};

export default ProductImage;
