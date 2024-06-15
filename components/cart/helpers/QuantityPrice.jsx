import React from 'react';

const QuantityPrice = (props) => {
    return (   
        <div className="flex flex-col gap-1 items-top text-[#555] mr-auto text-lg font-bold"> 
            <div>
                £{ props.quantity * props.price }
            </div>
            <div className='text-xs underline text-[#aaa]'>
                {`( ${props.quantity} X ${props.price} )`}
            </div>
        </div>
    )
}

export default QuantityPrice;