import React, { useState, useEffect } from 'react';
import { useCart } from '@/lib/contexts/cart/CartContext'; 

const CheckoutButton = ({ product, className }) => {

const { cart } = useCart();

 return (
    <button
        className="z-20 h-full flex w-full xl:w-fit md:max-w-[300px] gap-x-3 bg-green-500 text-white py-3 px-4 cursor-pointer items-center  duration-150 uppercase font-[500] text-xs !tracking-normal leading-[1]"
    >
        Proceed to Checkout
        <img className="ml-auto" src="/images/svgs/proceedToCheckoutIcon.svg"  />
    </button>
  );
};

export default CheckoutButton;
