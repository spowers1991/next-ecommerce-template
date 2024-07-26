import React from 'react';
import Title from '@/components/products/product/Title';
import SalePrice from '@/components/products/product/SalePrice';
import NonVariantLayout from '@/components/cart/item/non_variant/NonVariantLayout';
import VariantLayout from '@/components/cart/item/variant/VariantLayout';

const CartItem = ({ product, index }) => {

  return (
    <div key={index} className="flex flex-col bg-white sm:border border-gray-200 gap-3 sm:gap-0">
      <div className="flex items-center products-center w-full p-6 border-b">
        <Title product={product} />
        <SalePrice />
      </div>
      <div className="flex flex-col w-full gap-y-8 p-6">
        {product.variants && product.variants.length > 0 ? (
          <VariantLayout
            product={product}
          />
        ) : (
          <div className="flex justify-between items-center">
            <NonVariantLayout
              product={product}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;
