import React from 'react';
import { useProduct } from '@/lib/contexts/product/ProductContext';
import getStock from '@/lib/contexts/product/helpers/getStock';

const AddToCartButton = (props) => {
    const { product, selectedVariant } = useProduct();

    const inStock = getStock(product, selectedVariant)

    return (   
        <button 
            disabled={!inStock}
            type="submit" 
            className={`w-1/2 ${inStock ? 'cursor-pointer' : 'cursor-default'} flex items-center gap-x-3 bg-[#777] text-white duration-150 pb-[9px] pt-[12px] px-5 uppercase font-[500] text-xs !tracking-normal leading-[1] ${
            props.addedToCart ? 'pointer-events-none bg-green-500' : '' 
            }`}
        >
            {inStock ? (
                <>
                    {props.addedToCart ? `${props.quantity} X - Added to Cart` : 'Add to Cart'}
                    <img 
                        className="ml-auto" 
                        src={props.addedToCart ? "/images/svgs/addedToCartIcon.svg" : "/images/svgs/addToCartIcon.svg"} 
                    />
                </>
            ) : (
                <>
                    {'Out of stock'}
                    <img 
                        className="ml-auto" 
                        src={"/images/svgs/outOfStock.svg"} 
                    />
                </>
            )}
        </button>
    );
}

export default AddToCartButton;
