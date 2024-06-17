import React from 'react';
import Variant from '@/components/cart/item/variant/Variant';

const VariantLayout = ({ product }) => (
  <div className='flex flex-col gap-y-8'>
    {product.variants.map((variant) => (
      variant.node.quantity > 0 &&
        <Variant
            key={variant.node.id}
            type="variant"
            product={product}
            variant={variant}
        />
    ))}
  </div>
);

export default VariantLayout;
