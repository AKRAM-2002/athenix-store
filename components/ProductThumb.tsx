// components/ProductThumb.tsx
import React from "react";
import Image from "next/image";
import { ProductType } from "@/sanity.types";
import { imageUrl } from "@/lib/imageUrl";
import Link from "next/link";

interface ProductThumbProps {
  product: ProductType;
}

export default function ProductThumb({ product }: ProductThumbProps) {
   const isOutOfStock = product.stock != null && product.stock <= 0;

   
    return (
    <Link
    href={`/products/${product.slug?.current}`}
    className={`group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow
        ${isOutOfStock ? 'opacity-50' : ''}
        `}
    >
      {/* Product Image */}
      <div className="aspect-square relative overflow-hidden rounded-t-lg">
        {product.images.length > 0 && (
            <Image
            src={imageUrl(product.images[0]).url()}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          )}
          {isOutOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-500 text-white text-sm font-medium">
              Out of Stock
            </div>
          )}
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="text-lg font-semibold truncate">{product.name}</h3>

        {/* Product Description */}
        <div className="mt-1 text-sm text-gray-500 h-12 line-clamp-2">
          {product.description}
        </div>

        {/* Price and Add to Cart Button */}
        <div className="mt-2 flex items-center justify-between">
          {/* Product Price */}
          <span className="text-lg font-bold">
            ${product.price.toFixed(2)}
          </span>

          {/* Add to Cart Button */}
          <button
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            onClick={() => {
              // Add to cart logic here
              console.log("Added to cart:", product.name);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}