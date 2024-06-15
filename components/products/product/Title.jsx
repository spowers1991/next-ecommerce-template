import React from 'react';
import Link from 'next/link';
import Heading from "@/utils/Heading"
import getProductUrl from '@/lib/contexts/product/helpers/getProductUrl';

const Title = (props) => {
    return (   
        <Link href={getProductUrl(props.product)}>
            <Heading size="h3" className="text-[#555] font-bold">
                {props?.product?.title}
            </Heading>
        </Link>
    )
}

export default Title;