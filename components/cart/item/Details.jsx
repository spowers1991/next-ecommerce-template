import React from 'react';

const Details = (props) => {
    return (   
        <div className="flex flex-col gap-1 items-top text-[#555] mr-auto text-xl font-bold"> 
            <div  className='relative text-[#555] text-base font-bold pr-6'>
                {props.title} 
                {props.colour &&
                    <span className="ml-3 mt-1 top-0 bottom-0 right-0"
                        style={{
                        position: 'absolute',
                        width: '1rem',
                        height: '1rem',
                        backgroundColor: props.colour.toLowerCase()
                        }}> 
                    </span>
                }
                {props.size &&
                    <div>
                        {props.size}
                    </div>
                }
            </div>
        </div>
    )
}

export default Details;