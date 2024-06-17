import React from 'react';
import { useCart } from '@/lib/contexts/cart/CartContext';
import Details from '../Details';
import QuantityPrice from '@/components/cart/helpers/QuantityPrice';
import QuantitySelector from '@/components/cart/selectors/QuantitySelector';

const Single = ({ type, product }) => {
  const { updateItem } = useCart();

  return (
    <div key={product?.id} className="flex flex-col border-b pb-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <Details
            title={product?.title}
          />
          <QuantityPrice
            quantity={product?.quantity}
            price={product?.price}
          />
        </div>
        <QuantitySelector
          quantity={product?.quantity}
          handleQuantityChange={(event) => {
            const newQuantity = parseInt(event.target.value, 10);
            const selectedproductId = type === 'single' ? null : product?.id;
            updateItem(product, newQuantity, selectedproductId);
          }}
        />
      </div>
    </div>
  );
};

export default Single;
