import React from 'react';
import { useProduct } from '@/lib/contexts/product/ProductContext';
import FeaturedImage from "@/components/products/product/FeaturedImage";
import Heading from "@/utils/Heading";
import Description from "@/components/products/product/Description";
import Price from "@/components/products/product/Price";
import AddToCartForm from '@/components/cart/actions/AddToCartForm';

function Product() {
  const { product, selectedVariant } = useProduct();

  return (
    <div className="container m-auto md:mt-16">
      <div className="flex flex-col w-full gap-6 px-0 md:px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 w-full">
            <FeaturedImage images={product?.images} width={600} height={600} className="w-full" />
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-y-8 p-4 md:p-8 md:bg-[#fff]">
            <Heading size="h1" className="!mb-0">
              {product.title}
            </Heading>
            <Price value={selectedVariant?.node?.price ? selectedVariant?.node?.price : product?.price}/> 
            <Description content={product?.description} />
            <div className="flex flex-col xl:flex-row gap-y-3 gap-x-3">
              <AddToCartForm product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>   
  );
}

export default Product;
