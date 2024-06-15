import React from 'react';
import { useCart } from '@/lib/contexts/cart/CartContext';
import Details from './Details';
import QuantityPrice from '@/components/cart/helpers/QuantityPrice';
import QuantitySelector from '@/components/cart/selectors/QuantitySelector';

const Variant = ({ type, variant, product }) => {
  const { updateItem } = useCart();

  return (
    <div key={variant?.id} className="flex flex-col border-b pb-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <Details
            title={variant?.node?.title ? variant?.node?.title : product?.title }
            colour={variant?.node?.selectedOptions && variant?.node?.selectedOptions[1].value}
          />
          <QuantityPrice
            quantity={variant?.node?.quantity ? variant?.node?.quantity : product?.quantity}
            price={variant?.node?.price ? variant?.node?.price : product?.price}
          />
        </div>
        <QuantitySelector
          quantity={variant?.node?.quantity ? variant?.node?.quantity : product?.quantity}
          handleQuantityChange={(event) => {
            const newQuantity = parseInt(event.target.value, 10);
            const selectedVariantId = type === 'single' ? null : variant.node?.id;
            updateItem(product, newQuantity, selectedVariantId);
          }}
        />
      </div>
    </div>
  );
};

export default Variant;
