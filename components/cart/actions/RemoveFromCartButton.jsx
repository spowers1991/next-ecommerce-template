import React from 'react';
import { useCart } from '@/lib/contexts/cart/CartContext';

const RemoveFromCartButton = (props) => {
    const { removeFromCart } = useCart();

    return (   
        <button
            className={`${props.className} w-[65px] flex items-center gap-x-3 bg-red-500 border-2 border-red-500`}
            onClick={() => removeFromCart(props.product, props.selectedVariantId)}
        >
            <img className="m-auto" src="/images/svgs/removeFromCartIcon.svg" />
        </button>
    )
}

export default RemoveFromCartButton;