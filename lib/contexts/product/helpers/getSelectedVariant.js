const getSelectedVariant = (product, selectedVariantId) => {
    
    let selectedVariant
    
    if(selectedVariantId && product.variants) {
        const variantIndex = product.variants.findIndex(variant => variant.node.id === selectedVariantId);
        selectedVariant = product.variants[variantIndex]
    } else {
        selectedVariant = product
    }       

return selectedVariant

}

export default getSelectedVariant;
