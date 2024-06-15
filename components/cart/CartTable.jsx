import React from 'react';
import { useCart } from '@/lib/contexts/cart/CartContext'; 
import Heading from '@/utils/Heading'
import CheckoutButton from '@/components/cart/actions/CheckoutButton'
import ClearCartButton from '@/components/cart/actions/ClearCartButton';
import CartItem from '@/components/cart/CartItem';

const CartTable = () => {
  
  const { cart, clearCart } = useCart();

  return (
    <div className="flex flex-col gap-8 overflow-hidden container mx-auto text-left pt-8 sm:border sm:p-8 sm:bg-[#fdfefe]">
      
      <div className='flex flex-col gap-3'>

        <Heading size="h1" className="!text-3xl font-bold !mb-0">
          Shopping Cart 
        </Heading>

        <div className="fixed sm:relative left-0 bottom-0 w-full" >
          <CheckoutButton cart={cart}/>
        </div>

      </div>
      {cart.length === 0 ? (
        <p className="text-gray-600">
          Your cart is empty.
        </p>
      ) : (
        // Create a grid item for each of the cart items in the cart
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {cart.map((product, index) => (
            <CartItem key={index} index={index} product={product} />
          ))}
        </div>
      )}

      <div className="flex gap-x-3 items-center ml-auto ">

        <ClearCartButton clearCart={clearCart} />

        <CheckoutButton cart={cart} />

      </div>

    </div>
  );
};

export default CartTable;
