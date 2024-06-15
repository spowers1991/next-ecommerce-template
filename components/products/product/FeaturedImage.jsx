import React from 'react';
import Image from 'next/image';

const FeaturedImage = ({ images, width, height }) => {

    const imageUrl = images[0].node.originalSrc;
    const isPlaceholder = imageUrl.includes('.co');

    if (isPlaceholder) {
        return (
            <img
                src={imageUrl}
                alt={images[0].node.altText}
                width={width}
                height={height}
                className="w-full object-cover !max-h-[800px] ml-auto"
            />
        );
    } else {
        return (
            <Image
                src={imageUrl}
                alt={images[0].node.altText}
                width={width}
                height={height}
                className="w-full object-cover !max-h-[800px] ml-auto"
                priority={true}
            />
        );
    }
};

export default FeaturedImage;
