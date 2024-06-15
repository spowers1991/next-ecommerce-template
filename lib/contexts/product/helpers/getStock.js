const getStock = (product, selectedVariant) => {
    return selectedVariant?.node?.stock?.quantity > 0 || product?.stock?.quantity > 0;
}

export default getStock