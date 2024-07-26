import React from 'react';

const QuantitySelector = ({ quantity, handleQuantityChange, className }) => {
  return (
    <input
      type="number"
      className={`${className} bg-[#f3f9f6] w-1/2 border-gray-200 border-2 py-3 px-1 text-[#999] text-xl font-bold text-center focus-visible:outline-none focus-visible:border-gray-500`}
      value={quantity}
      onChange={handleQuantityChange}
      min="1"
    />
  );
}

export default QuantitySelector;
