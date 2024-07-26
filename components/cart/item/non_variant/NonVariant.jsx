import React from 'react';
import { useCart } from '@/lib/contexts/cart/CartContext';
import Details from '../Details';
import QuantityPrice from '@/components/cart/helpers/QuantityPrice';
import QuantitySelector from '@/components/cart/selectors/QuantitySelector';
import RemoveFromCartButton from '@/components/cart/actions/RemoveFromCartButton';

const Single = ({ type, product }) => {
  const { updateItem, removeFromCart } = useCart();

  return (
    <div key={product?.id} className="flex flex-col border-b pb-8">
      <div className="flex justify-between items-center flex-col lg:flex-row gap-y-6">
        <div className="flex flex-col w-full lg:w-1/2 mr-auto">
          <Details
            title={product?.title}
          />
          <QuantityPrice
            quantity={product?.quantity}
            price={product?.price}
          />
        </div>
        <div className="flex flex-row gap-3">
          <QuantitySelector
              className={'w-full lg:w-1/2 lg:ml-auto ml-auto'}
              quantity={product?.quantity}
              handleQuantityChange={(event) => {
                const newQuantity = parseInt(event.target.value, 10);
                const selectedVariantId = type === 'single' ? null : product?.id;
                updateItem(product, newQuantity, selectedVariantId);
              }}
            />
          <RemoveFromCartButton removeFromCart={() => removeFromCart(product)} />
        </div>
      </div>
    </div>
  );
};

export default Single;
