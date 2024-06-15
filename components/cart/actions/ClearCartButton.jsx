import React from 'react';

const ClearCartButton = (props) => {
    return (   
        <button
          className="flex w-1/2 sm:w-fit gap-x-3 bg-red-500 text-white py-2 px-4 ml-auto cursor-pointer items-center  duration-150 pb-[9px] pt-[12px]  uppercase font-[500] text-xs !tracking-normal leading-[1]"
          onClick={props.clearCart}
        >
          Clear Cart
          <img src="/images/svgs/removeFromCartIcon.svg"  />
        </button>
    )
}

export default ClearCartButton;