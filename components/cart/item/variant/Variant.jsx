import React from 'react';
import { useCart } from '@/lib/contexts/cart/CartContext';
import Details from '../Details';
import QuantityPrice from '@/components/cart/helpers/QuantityPrice';
import QuantitySelector from '@/components/cart/selectors/QuantitySelector';
import RemoveFromCartButton from '@/components/cart/actions/RemoveFromCartButton';

const Variant = ({ type, variant, product }) => {
  const { updateItem } = useCart();

  return (
    <div key={variant.node?.id} className="flex flex-col border-b pb-8">
      <div className="flex justify-between items-center flex-col lg:flex-row gap-y-6">
        <div className="flex flex-col w-full lg:w-1/2 mr-auto">
          <Details
            title={variant?.node?.title}
            colour={variant?.node?.selectedOptions && variant?.node?.selectedOptions[1].value}
          />
          <QuantityPrice
            quantity={variant?.node?.quantity}
            price={variant?.node?.price}
          />
        </div>
        <div className="flex flex-row gap-3">
          <QuantitySelector
            className={'w-full lg:w-1/2 max-w-[200px] lg:ml-auto ml-auto'}
            quantity={variant?.node?.quantity}
            handleQuantityChange={(event) => {
              const newQuantity = parseInt(event.target.value, 10);
              const selectedVariantId = type === 'single' ? null : variant.node?.id;
              updateItem(product, newQuantity, selectedVariantId);
            }}
          />
          <RemoveFromCartButton product={product} selectedVariantId={variant.node?.id} />
        </div>
      </div>
    </div>
  );
};

export default Variant;
