import React, { useState, useEffect } from 'react';
import { useCart } from '@/lib/contexts/cart/CartContext';
import { useProduct } from '@/lib/contexts/product/ProductContext';
import VariationSelector from '@/components/cart/selectors/VariationSelector';
import QuantitySelector from '@/components/cart/selectors/QuantitySelector';
import AddToCartButton from '@/components/cart/actions/AddToCartButton';

const AddToCartForm = ({ className }) => {
  const { product, selectedVariantId, setSelectedVariantId, getProductVariant } = useProduct();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleQuantityChange = (event) => {
    setQuantity(Number(event?.target?.value));
    getProductVariant(selectedVariantId);
  };

  const handleAddToCart = (event) => {
    event.preventDefault();
    addToCart(product, quantity, selectedVariantId);
    setAddedToCart(true);
  };

  useEffect(() => {
    let timer;
    if (addedToCart) {
      timer = setTimeout(() => {
        setAddedToCart(false);
      }, 2500);
    }
    return () => clearTimeout(timer);
  }, [addedToCart]);

  const handleVariantChange = (variantId) => {
    setSelectedVariantId(variantId);
    getProductVariant(variantId);
  };

  return (
    <form onSubmit={handleAddToCart} className={`flex flex-col items-center gap-x-3 w-full ${className}`}>
      <div className='flex gap-x-3 mr-auto py-4'>
        <VariationSelector onVariantChange={handleVariantChange} />
      </div>
      <div className={`flex flex-row items-stretch gap-x-3 w-full ${className}`}>
        <QuantitySelector quantity={quantity} handleQuantityChange={handleQuantityChange} width={"large"} />
        <AddToCartButton quantity={quantity} addedToCart={addedToCart} />
      </div>
    </form>
  );
};

export default AddToCartForm;
