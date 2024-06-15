import React from 'react';

const RemoveFromCartButton = (props) => {
    return (   
        <div className="flex w-full p-4 mt-auto">
            <button
                className="flex gap-x-3 ml-auto bg-red-500 py-2 px-3"
                onClick={() => props.removeFromCart(props.index)}
            >
                <img src="/images/svgs/removeFromCartIcon.svg" />
            </button>
        </div>
    )
}

export default RemoveFromCartButton;