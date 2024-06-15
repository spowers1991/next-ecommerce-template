import React from 'react';

const ItemPrice = (props) => {
    return (   
        <span className='font-bold text-xl'>
            £{props.value}
        </span>
    )
}

export default ItemPrice;