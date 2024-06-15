import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import getProductUrl from '@/lib/contexts/product/helpers/getProductUrl';

const FeaturedThumbnail = ({ product, width, height }) => {
    const imageUrl = product.images[0].node.originalSrc;
    const isPlaceholder = imageUrl.includes('.co');

    if (isPlaceholder) {
        return (
            <Link href={getProductUrl(product)}>
                <img
                    src={imageUrl}
                    alt={product.images[0].node.altText}
                    width={width}
                    height={height}
                    className="w-full object-cover !max-h-[800px] ml-auto"
                />
            </Link>
        );
    } else {
        return (
            <Link href={getProductUrl(product)}>
                <Image
                    src={imageUrl}
                    alt={product.images[0].node.altText}
                    width={width}
                    height={height}
                    className="w-full object-cover !max-h-[800px] ml-auto"
                    priority={true}
                />
            </Link>
        );
    }
};

export default FeaturedThumbnail;
