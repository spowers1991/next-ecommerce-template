import React from 'react';
import NonVariant from '@/components/cart/item/non_variant/NonVariant';

const SingleLayout = ({ product }) => (
  <NonVariant
    type="single"
    product={product}
  />
);

export default SingleLayout;
