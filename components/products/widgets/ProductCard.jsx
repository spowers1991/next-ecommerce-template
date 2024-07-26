import React from 'react';
import { useProduct } from '@/lib/contexts/product/ProductContext';
import FeaturedThumbnail from '@/components/products/product/FeaturedThumbnail';
import Title from '@/components/products/product/Title';
import AddToCartForm from '@/components/cart/actions/AddToCartForm';
import Price from '@/components/products/product/Price';

function ProductCard() {
  const { product, selectedVariant } = useProduct();

  return (
    <div className='bg-white flex flex-col xl:flex-nowrap gap-4 border p-4'>
      <FeaturedThumbnail product={product} width={300} height={300} />   
      <div className='flex w-full'>
        <Title product={product} />
        <div className="flex gap-3 items-top text-[#555] ml-auto text-xl font-bold">
          <Price value={selectedVariant?.node?.price ? selectedVariant?.node?.price : product?.price} />
        </div>
      </div>
      <div className="mt-auto">
        <AddToCartForm product={product} />   
      </div>
    </div>
  );
}

export default ProductCard;
